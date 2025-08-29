// Test script to verify section information retrieval
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function testSectionRetrieval() {
  try {
    console.log('🧪 Testing section information retrieval...');
    
    // Get a sample company ID (you can replace this with an actual company ID)
    const companiesResponse = await axios.get(
      `${supabaseUrl}/rest/v1/companies?select=id,name&limit=1`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!companiesResponse.data || companiesResponse.data.length === 0) {
      console.log('❌ No companies found to test with');
      return;
    }

    const companyId = companiesResponse.data[0].id;
    const companyName = companiesResponse.data[0].name;
    
    console.log(`🏢 Testing with company: ${companyName} (${companyId})`);

    // Create a sample query embedding (you can replace this with actual embedding)
    const sampleEmbedding = new Array(768).fill(0.1);

    // Test the find_relevant_content_chunks function
    const response = await axios.post(
      `${supabaseUrl}/rest/v1/rpc/find_relevant_content_chunks`,
      {
        p_company_id: companyId,
        p_query_embedding: sampleEmbedding,
        p_top_k: 5,
        p_priority: null
      },
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Function call successful');
    console.log(`📊 Retrieved ${response.data?.length || 0} content chunks`);

    if (response.data && response.data.length > 0) {
      console.log('\n📋 Detailed result analysis:');
      
      response.data.forEach((chunk, index) => {
        console.log(`\n--- Chunk ${index + 1} ---`);
        console.log({
          chunk_id: chunk.chunk_id,
          content_length: chunk.content?.length || 0,
          similarity: chunk.similarity,
          content_type: chunk.content_type,
          priority: chunk.priority,
          source_url: chunk.source_url,
          section_id: chunk.section_id,
          section_class: chunk.section_class,
          section_selector: chunk.section_selector,
          section_text: chunk.section_text,
          anchor_link: chunk.anchor_link
        });

        // Test anchor link generation logic
        if (chunk.section_id) {
          const expectedAnchorLink = `#${chunk.section_id}`;
          const anchorLinkCorrect = chunk.anchor_link === expectedAnchorLink;
          console.log(`🔗 Anchor link test: ${anchorLinkCorrect ? '✅' : '❌'}`);
          console.log(`  - Expected: ${expectedAnchorLink}`);
          console.log(`  - Actual: ${chunk.anchor_link}`);
          
          if (!anchorLinkCorrect) {
            console.log(`  - Issue: Anchor link not generated correctly for section_id: ${chunk.section_id}`);
          }
        } else {
          console.log(`🔗 Anchor link test: ⚠️ No section_id found`);
        }
      });

      // Summary statistics
      const chunksWithSectionId = response.data.filter(c => c.section_id).length;
      const chunksWithAnchorLink = response.data.filter(c => c.anchor_link).length;
      const chunksWithSectionText = response.data.filter(c => c.section_text).length;
      
      console.log('\n📊 Summary Statistics:');
      console.log(`  - Chunks with section_id: ${chunksWithSectionId}`);
      console.log(`  - Chunks with anchor_link: ${chunksWithAnchorLink}`);
      console.log(`  - Chunks with section_text: ${chunksWithSectionText}`);
      console.log(`  - Anchor link generation rate: ${chunksWithSectionId > 0 ? Math.round((chunksWithAnchorLink / chunksWithSectionId) * 100) : 0}%`);

      // Check for potential scrolling functionality
      const scrollableLinks = response.data.filter(c => c.anchor_link && c.source_url);
      console.log(`  - Potentially scrollable links: ${scrollableLinks.length}`);
      
      if (scrollableLinks.length > 0) {
        console.log('\n🎯 Scrollable Link Examples:');
        scrollableLinks.slice(0, 3).forEach((link, index) => {
          const fullUrl = `${link.source_url}${link.anchor_link}`;
          console.log(`  ${index + 1}. ${fullUrl}`);
          console.log(`     Section: ${link.section_text || link.section_id}`);
        });
      }
    } else {
      console.log('⚠️ No content chunks found for this company');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    
    if (error.response?.data?.code === '42804') {
      console.error('🔧 This error suggests the function signature has changed but the database function hasn\'t been updated yet.');
      console.error('💡 Run the updated queries.sql to update the database function.');
    }
  }
}

// Run the test
testSectionRetrieval(); 