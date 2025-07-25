import 'dotenv/config';
import { supabase } from '../src/lib/supabase';
import companyDetails from '../companyDetails.json' assert { type: 'json' };

interface CompanyDetail {
  name: string;
  domain: string;
  location: string;
  theme: string;
  description: string;
  industry: string;
  website: string;
  contact_email: string;
  logo_url: string;
  enrollment_date: string;
  status: 'active' | 'inactive';
}

async function importCompanyDetails(updateExisting: boolean = false) {
  console.log(`🏢 Importing ${companyDetails.length} company details...`);
  console.log(`Mode: ${updateExisting ? 'Update existing' : 'Add new only'}\n`);

  let added = 0;
  let updated = 0;
  let skipped = 0;

  for (const company of companyDetails as CompanyDetail[]) {
    try {
      // Check if company exists
      const { data: existingCompany } = await supabase
        .from('companies')
        .select('id, name, theme')
        .eq('name', company.name)
        .single();

      if (existingCompany) {
        if (updateExisting) {
          // Update existing company
          const { error: updateError } = await supabase
            .from('companies')
            .update({
              domain: company.domain,
              location: company.location,
              theme: company.theme,
              description: company.description,
              industry: company.industry,
              website: company.website,
              contact_email: company.contact_email,
              logo_url: company.logo_url,
              enrollment_date: company.enrollment_date,
              status: company.status,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingCompany.id);

          if (updateError) {
            console.error(`❌ Failed to update ${company.name}:`, updateError.message);
          } else {
            console.log(`🔄 Updated: ${company.name} (${company.theme})`);
            updated++;
          }
        } else {
          console.log(`⏭️  Skipped existing: ${company.name}`);
          skipped++;
        }
      } else {
        // Add new company
        const { data: newCompany, error: insertError } = await supabase
          .from('companies')
          .insert({
            name: company.name,
            domain: company.domain,
            location: company.location,
            theme: company.theme,
            description: company.description,
            industry: company.industry,
            website: company.website,
            contact_email: company.contact_email,
            logo_url: company.logo_url,
            enrollment_date: company.enrollment_date,
            status: company.status
          })
          .select('id, name, theme')
          .single();

        if (insertError) {
          console.error(`❌ Failed to add ${company.name}:`, insertError.message);
        } else {
          console.log(`✅ Added: ${company.name} (${company.theme})`);
          added++;
        }
      }
    } catch (error) {
      console.error(`❌ Error processing ${company.name}:`, error);
    }
  }

  console.log(`\n📊 Import Summary:`);
  console.log(`   Added: ${added}`);
  console.log(`   Updated: ${updated}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${companyDetails.length}`);
}

// Helper function to list all companies in database
async function listCompanies() {
  console.log('📋 Current companies in database:');
  
  const { data: companies, error } = await supabase
    .from('companies')
    .select('name, theme, domain, status')
    .order('name');

  if (error) {
    console.error('❌ Failed to fetch companies:', error.message);
    return;
  }

  if (!companies || companies.length === 0) {
    console.log('   No companies found');
    return;
  }

  companies.forEach(company => {
    console.log(`   ${company.name} - ${company.theme || 'No theme'} (${company.domain || 'No domain'}) - ${company.status}`);
  });
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'add':
      await importCompanyDetails(false);
      break;
    case 'update':
      await importCompanyDetails(true);
      break;
    case 'list':
      await listCompanies();
      break;
    default:
      console.log('Usage:');
      console.log('  npx tsx scripts/importCompanyDetails.ts add    - Add new companies only');
      console.log('  npx tsx scripts/importCompanyDetails.ts update  - Update existing companies');
      console.log('  npx tsx scripts/importCompanyDetails.ts list    - List all companies');
      break;
  }
}

main().catch(console.error); 