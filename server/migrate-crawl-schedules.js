/**
 * migrate-crawl-schedules.js
 *
 * One-time migration: provisions crawl schedules for existing companies
 * that are on a growth or pro plan but don't yet have a crawl_schedules record.
 *
 * Plan defaults:
 *   growth → monthly   (1st of every month,      max 25 pages, depth 1)
 *   pro    → biweekly  (1st and 15th of month,   max 50 pages, depth 2)
 *
 * Usage:
 *   node migrate-crawl-schedules.js            # live run
 *   node migrate-crawl-schedules.js --dry-run  # preview only, no DB writes
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// ----------------------------------------
// Plan configuration (mirrors automation-api.js)
// ----------------------------------------
const PLAN_CRAWL_DEFAULTS = {
  growth: { frequency: 'monthly',  max_pages: 25, max_depth: 1 },
  pro:    { frequency: 'biweekly', max_pages: 50, max_depth: 2 }
}

/**
 * Calculate the next fixed anchor crawl date.
 *   biweekly → next upcoming 1st or 15th of the month
 *   monthly  → 1st of the next calendar month
 */
function calculateNextCrawlDate(frequency) {
  const now   = new Date()
  const year  = now.getFullYear()
  const month = now.getMonth()
  const day   = now.getDate()

  switch (frequency) {
    case 'biweekly':
      // Before 15th → anchor on 15th of this month
      // On/after 15th → anchor on 1st of next month
      return day < 15
        ? new Date(year, month, 15, 0, 0, 0).toISOString()
        : new Date(year, month + 1, 1, 0, 0, 0).toISOString()

    case 'monthly':
      // Always the 1st of the next calendar month
      return new Date(year, month + 1, 1, 0, 0, 0).toISOString()

    default:
      return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString()
  }
}

// ----------------------------------------
// Migration runner
// ----------------------------------------
async function migrate(dryRun = false) {
  console.log(`\n🚀 Crawl Schedule Migration — ${dryRun ? '⚠️  DRY RUN (no changes will be written)' : 'LIVE RUN'}`)
  console.log('='.repeat(60))

  // 1. Fetch all companies on crawl-eligible plans
  console.log('\n📋 Fetching companies on growth/pro plans...')
  const { data: companies, error: fetchError } = await supabase
    .from('companies')
    .select('id, name, plan, website')
    .in('plan', ['growth', 'pro'])
    .order('created_at', { ascending: true })

  if (fetchError) {
    console.error('❌ Failed to fetch companies:', fetchError.message)
    process.exit(1)
  }

  console.log(`   Found ${companies.length} eligible companies\n`)

  // 2. Fetch all existing crawl schedule company IDs (one query, not N)
  const { data: existingSchedules, error: schedError } = await supabase
    .from('crawl_schedules')
    .select('company_id')

  if (schedError) {
    console.error('❌ Failed to fetch existing schedules:', schedError.message)
    process.exit(1)
  }

  const alreadyScheduled = new Set(existingSchedules.map(s => s.company_id))

  // 3. Partition companies
  const toCreate  = []
  const skipped   = []
  const noWebsite = []

  for (const company of companies) {
    if (alreadyScheduled.has(company.id)) {
      skipped.push(company)
    } else if (!company.website) {
      noWebsite.push(company)
    } else {
      toCreate.push(company)
    }
  }

  // 4. Print preview
  console.log('📊 Migration preview:')
  console.log(`   ✅ Will create schedules : ${toCreate.length}`)
  console.log(`   ⏭️  Already have schedule : ${skipped.length}`)
  console.log(`   ⚠️  No website URL on file: ${noWebsite.length}`)

  if (skipped.length > 0) {
    console.log('\n   ⏭️  Skipped (schedule already exists):')
    skipped.forEach(c => console.log(`      - ${c.name} (${c.plan})`))
  }

  if (noWebsite.length > 0) {
    console.log('\n   ⚠️  Skipped (no website URL — add one in their admin profile):')
    noWebsite.forEach(c => console.log(`      - ${c.name} (${c.plan})`))
  }

  if (toCreate.length === 0) {
    console.log('\n✅ Nothing to migrate — all eligible companies already have a schedule.')
    return
  }

  console.log('\n   📅 Schedules to be created:')
  toCreate.forEach(c => {
    const config    = PLAN_CRAWL_DEFAULTS[c.plan]
    const nextCrawl = calculateNextCrawlDate(config.frequency)
    console.log(`      - ${c.name}`)
    console.log(`        plan: ${c.plan} → frequency: ${config.frequency}`)
    console.log(`        url : ${c.website}`)
    console.log(`        next: ${new Date(nextCrawl).toDateString()}`)
  })

  if (dryRun) {
    console.log('\n⚠️  Dry run complete — no records were written.')
    console.log('   Re-run without --dry-run to apply.\n')
    return
  }

  // 5. Create schedules
  console.log('\n⚙️  Creating schedules...')

  const results = { created: [], failed: [] }

  for (const company of toCreate) {
    const config    = PLAN_CRAWL_DEFAULTS[company.plan]
    const nextCrawl = calculateNextCrawlDate(config.frequency)

    const { error: insertError } = await supabase
      .from('crawl_schedules')
      .insert({
        company_id:       company.id,
        company_name:     company.name,
        base_url:         company.website,
        frequency:        config.frequency,
        max_pages:        config.max_pages,
        max_depth:        config.max_depth,
        delay_ms:         1000,
        content_change_threshold: 0.1,
        is_active:        true,
        next_crawl:       nextCrawl
      })

    if (insertError) {
      console.error(`   ❌ ${company.name}: ${insertError.message}`)
      results.failed.push({ company, error: insertError.message })
    } else {
      console.log(`   ✅ ${company.name} (${company.plan}) → ${config.frequency}, next: ${new Date(nextCrawl).toDateString()}`)
      results.created.push(company)
    }
  }

  // 6. Summary
  console.log('\n' + '='.repeat(60))
  console.log('📋 Migration summary:')
  console.log(`   ✅ Created  : ${results.created.length}`)
  console.log(`   ❌ Failed   : ${results.failed.length}`)
  console.log(`   ⏭️  Skipped  : ${skipped.length} (already had a schedule)`)
  console.log(`   ⚠️  No URL   : ${noWebsite.length} (add website URLs and re-run)`)

  if (results.failed.length > 0) {
    console.log('\n   Failed companies:')
    results.failed.forEach(({ company, error }) =>
      console.log(`      - ${company.name}: ${error}`)
    )
    process.exit(1)
  }

  console.log('\n✅ Migration complete.\n')
}

// ----------------------------------------
// Entry point
// ----------------------------------------
const isDryRun = process.argv.includes('--dry-run')
migrate(isDryRun).catch(err => {
  console.error('❌ Unexpected error:', err)
  process.exit(1)
})
