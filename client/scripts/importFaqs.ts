import dotenv from 'dotenv';
dotenv.config();

// scripts/importFaqs.ts
import { FAQService } from '../services/faqService';
import faqs from '../faqs.json' assert { type: 'json' }; // required for JSON imports in ESM

async function importFaqs() {
  console.log(`📦 Importing ${faqs.length} FAQs...`);
  for (const faq of faqs) {
    try {
      console.log(`➡️  Importing: ${faq.question}`);
      await FAQService.addFAQ(faq);
      console.log('✅ Added:', faq.question);
    } catch (e) {
      console.error('❌ Failed to add:', faq.question, e);
    }
  }
  console.log('🎉 Import complete.');
}

// Catch top-level promise errors
importFaqs().catch((err) => {
  console.error('❌ Top-level error:', err);
});
