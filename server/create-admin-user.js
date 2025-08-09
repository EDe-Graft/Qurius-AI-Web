import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_PROJECT_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Please ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your .env file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createSuperAdminUser() {
  try {
    console.log('🚀 Creating Super Admin User...')
    
    // User details - modify these as needed
    const userEmail = process.env.SUPABASE_ADMIN_EMAIL
    const userPassword = process.env.SUPABASE_ADMIN_PASSWORD
    const userData = {
      email: userEmail,
      password: userPassword,
      email_confirm: true,
      user_metadata: {
        role: 'super_admin',
        email_verified: true
      },
      app_metadata: {
        provider: 'email',
        providers: ['email'],
        role: 'super_admin'
      }
    }

    console.log('📧 Email:', userEmail)
    console.log('🔑 Password:', userPassword)
    console.log('👑 Role: super_admin')
    
    // Create the user
    const { data: user, error: createError } = await supabase.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: userData.email_confirm,
      user_metadata: userData.user_metadata,
      app_metadata: userData.app_metadata
    })

    if (createError) {
      console.error('❌ Error creating user:', createError)
      return
    }

    console.log('✅ User created successfully!')
    console.log('🆔 User ID:', user.user.id)
    console.log('📧 Email:', user.user.email)
    console.log('👑 Role:', user.user.app_metadata?.role)
    console.log('📋 User Metadata:', user.user.user_metadata)

    // Update the user to ensure all metadata is set correctly
    const { data: updateData, error: updateError } = await supabase.auth.admin.updateUserById(
      user.user.id,
      {
        user_metadata: {
          role: 'super_admin',
          email_verified: true
        },
        app_metadata: {
          provider: 'email',
          providers: ['email'],
          role: 'super_admin'
        }
      }
    )

    if (updateError) {
      console.error('⚠️ Warning: Error updating user metadata:', updateError)
    } else {
      console.log('✅ User metadata updated successfully!')
    }

    // Also update the is_super_admin field in the auth.users table
    const { error: sqlError } = await supabase.rpc('update_user_super_admin', {
      user_id: user.user.id,
      is_super_admin: true
    })

    if (sqlError) {
      console.log('⚠️ Note: Could not update is_super_admin field directly')
      console.log('This field will be updated on next login or you can update it manually in the database')
    } else {
      console.log('✅ is_super_admin field updated successfully!')
    }

    console.log('\n🎉 Super Admin User Created Successfully!')
    console.log('📝 Login Details:')
    console.log('   Email:', userEmail)
    console.log('   Password:', userPassword)
    console.log('   Role: super_admin')
    console.log('\n🔗 You can now log in to the admin dashboard at:')
    console.log('   http://localhost:5173/admin')
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

// Function to update existing user to super admin
async function updateUserToSuperAdmin(userEmail) {
  try {
    console.log('🔄 Updating existing user to Super Admin...')
    
    // First, get the user by email
    const { data: users, error: listError } = await supabase.auth.admin.listUsers()
    
    if (listError) {
      console.error('❌ Error listing users:', listError)
      return
    }

    const user = users.users.find(u => u.email === userEmail)
    
    if (!user) {
      console.error('❌ User not found:', userEmail)
      return
    }

    console.log('👤 Found user:', user.email)
    console.log('🆔 User ID:', user.id)

    // Update user metadata
    const { data: updateData, error: updateError } = await supabase.auth.admin.updateUserById(
      user.id,
      {
        user_metadata: {
          role: 'super_admin',
          email_verified: true
        },
        app_metadata: {
          provider: 'email',
          providers: ['email'],
          role: 'super_admin'
        }
      }
    )

    if (updateError) {
      console.error('❌ Error updating user:', updateError)
      return
    }

    console.log('✅ User updated to Super Admin successfully!')
    console.log('👑 New Role: super_admin')
    console.log('📋 Updated Metadata:', updateData.user.user_metadata)

    // Update the is_super_admin field
    const { error: sqlError } = await supabase.rpc('update_user_super_admin', {
      user_id: user.id,
      is_super_admin: true
    })

    if (sqlError) {
      console.log('⚠️ Note: Could not update is_super_admin field directly')
      console.log('This field will be updated on next login or you can update it manually in the database')
    } else {
      console.log('✅ is_super_admin field updated successfully!')
    }

    console.log('\n🎉 User successfully promoted to Super Admin!')
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

// Function to create the RPC function if it doesn't exist
async function createUpdateUserFunction() {
  try {
    console.log('🔧 Creating update_user_super_admin function...')
    
    const { error } = await supabase.rpc('create_update_user_function', {})
    
    if (error) {
      console.log('⚠️ Function might already exist or there was an error:', error.message)
    } else {
      console.log('✅ Function created successfully!')
    }
  } catch (error) {
    console.log('⚠️ Could not create function automatically')
    console.log('You may need to create it manually in the Supabase dashboard')
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2)
  const command = args[0]
  const email = args[1]

  console.log('🔧 Qurius AI - Super Admin User Management')
  console.log('==========================================\n')

  if (command === 'create') {
    await createSuperAdminUser()
  } else if (command === 'update' && email) {
    await updateUserToSuperAdmin(email)
  } else if (command === 'setup') {
    await createUpdateUserFunction()
  } else {
    console.log('📖 Usage:')
    console.log('  node create-admin-user.js create')
    console.log('    - Creates a new super admin user')
    console.log('')
    console.log('  node create-admin-user.js update <email>')
    console.log('    - Updates existing user to super admin')
    console.log('')
    console.log('  node create-admin-user.js setup')
    console.log('    - Creates necessary database functions')
    console.log('')
    console.log('🔧 Examples:')
    console.log('  node create-admin-user.js create')
    console.log('  node create-admin-user.js update edgquansah@gmail.com')
    console.log('  node create-admin-user.js setup')
  }
}

// Run the script
main().catch(console.error) 