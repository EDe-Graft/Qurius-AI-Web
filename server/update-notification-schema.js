/**
 * Migration script to add separate read status fields for Super Admin and Company users
 * Run this script to update existing notification tables
 */

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase configuration');
  process.exit(1);
}

async function updateNotificationSchema() {
  try {
    console.log('🔄 Starting notification schema update...');

    // Add new columns to notifications table
    const alterTableQueries = [
      // Add read_by_super_admin column
      `ALTER TABLE public.notifications 
       ADD COLUMN IF NOT EXISTS read_by_super_admin BOOLEAN DEFAULT FALSE;`,
      
      // Add read_by_company column  
      `ALTER TABLE public.notifications 
       ADD COLUMN IF NOT EXISTS read_by_company BOOLEAN DEFAULT FALSE;`,
      
      // Update existing records to set read_by_company = read_status for backward compatibility
      `UPDATE public.notifications 
       SET read_by_company = read_status 
       WHERE read_by_company IS NULL;`,
      
      // Update existing records to set read_by_super_admin = FALSE (since Super Admin hasn't read them yet)
      `UPDATE public.notifications 
       SET read_by_super_admin = FALSE 
       WHERE read_by_super_admin IS NULL;`
    ];

    for (const query of alterTableQueries) {
      console.log(`📝 Executing: ${query.substring(0, 50)}...`);
      
      const response = await axios.post(
        `${supabaseUrl}/rest/v1/rpc/exec_sql`,
        { query },
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log('✅ Query executed successfully');
    }

    // Create indexes for the new columns
    const indexQueries = [
      `CREATE INDEX IF NOT EXISTS idx_notifications_read_by_super_admin 
       ON public.notifications(read_by_super_admin);`,
      
      `CREATE INDEX IF NOT EXISTS idx_notifications_read_by_company 
       ON public.notifications(read_by_company);`,
      
      `CREATE INDEX IF NOT EXISTS idx_notifications_company_read_by_company 
       ON public.notifications(company_id, read_by_company);`,
      
      `CREATE INDEX IF NOT EXISTS idx_notifications_read_by_super_admin_status 
       ON public.notifications(read_by_super_admin);`
    ];

    for (const query of indexQueries) {
      console.log(`📝 Creating index: ${query.substring(0, 50)}...`);
      
      const response = await axios.post(
        `${supabaseUrl}/rest/v1/rpc/exec_sql`,
        { query },
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log('✅ Index created successfully');
    }

    console.log('🎉 Notification schema update completed successfully!');
    console.log('📋 Summary of changes:');
    console.log('   - Added read_by_super_admin column');
    console.log('   - Added read_by_company column');
    console.log('   - Created indexes for performance');
    console.log('   - Migrated existing data for backward compatibility');

  } catch (error) {
    console.error('❌ Error updating notification schema:', error.response?.data || error.message);
    process.exit(1);
  }
}

// Run the migration
updateNotificationSchema(); 