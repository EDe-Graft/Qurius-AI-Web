# Super Admin User Setup

This guide explains how to create and manage super admin users for the Qurius AI system.

## 🔧 Prerequisites

1. **Environment Variables**: Ensure your `.env` file contains:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

2. **Dependencies**: Install required packages:
   ```bash
   npm install @supabase/supabase-js dotenv
   ```

## 🚀 Usage

### Create New Super Admin User

```bash
node create-admin-user.js create
```

This will:
- Create a new user with email: `edgquansah@gmail.com`
- Set password: `SuperAdmin123!`
- Set role: `super_admin`
- Set `is_super_admin: true`
- Update user metadata and app metadata

### Update Existing User to Super Admin

```bash
node create-admin-user.js update <email>
```

Example:
```bash
node create-admin-user.js update edgquansah@gmail.com
```

This will:
- Find the existing user by email
- Update their role to `super_admin`
- Set `is_super_admin: true`
- Update all metadata

### Setup Database Functions

```bash
node create-admin-user.js setup
```

This creates the necessary database functions (usually not needed as they're already in queries.sql).

## 📋 What the Script Does

### For New Users:
1. **Creates User**: Uses Supabase Auth Admin API
2. **Sets Metadata**: 
   - `user_metadata.role: 'super_admin'`
   - `app_metadata.role: 'super_admin'`
   - `email_verified: true`
3. **Updates Database**: Sets `is_super_admin: true` in auth.users table
4. **Confirms Email**: Sets `email_confirm: true`

### For Existing Users:
1. **Finds User**: Searches by email
2. **Updates Metadata**: Same as new users
3. **Updates Database**: Sets `is_super_admin: true`

## 🔍 Expected User Data Structure

After running the script, your user should have:

```json
{
  "id": "user-uuid",
  "email": "edgquansah@gmail.com",
  "role": "authenticated",
  "is_super_admin": true,
  "user_metadata": {
    "role": "super_admin",
    "email_verified": true
  },
  "app_metadata": {
    "provider": "email",
    "providers": ["email"],
    "role": "super_admin"
  }
}
```

## 🛡️ Security Notes

1. **Service Role Key**: This script uses the service role key which has full admin access
2. **Password**: Change the default password in the script before running
3. **Environment**: Only run this in development or secure environments
4. **Access Control**: Super admins have full system access

## 🔧 Customization

### Change Default User Details

Edit the script to modify:
```javascript
const userEmail = 'your-email@example.com'
const userPassword = 'YourSecurePassword123!'
```

### Add Additional Metadata

Modify the user_metadata object:
```javascript
user_metadata: {
  role: 'super_admin',
  email_verified: true,
  // Add custom fields here
  custom_field: 'value'
}
```

## 🚨 Troubleshooting

### Common Issues:

1. **Missing Environment Variables**
   ```
   ❌ Missing Supabase environment variables
   ```
   Solution: Check your `.env` file

2. **Permission Denied**
   ```
   ❌ Error creating user: Permission denied
   ```
   Solution: Verify your service role key has admin permissions

3. **User Already Exists**
   ```
   ❌ Error creating user: User already registered
   ```
   Solution: Use the `update` command instead

4. **Database Function Error**
   ```
   ⚠️ Note: Could not update is_super_admin field directly
   ```
   Solution: Run the SQL functions manually in Supabase dashboard

### Manual Database Update

If the script can't update the `is_super_admin` field, run this SQL in Supabase:

```sql
UPDATE auth.users 
SET is_super_admin = true 
WHERE email = 'edgquansah@gmail.com';
```

## 🎯 Verification

After running the script, verify the user by:

1. **Check Supabase Dashboard**: Go to Authentication > Users
2. **Test Login**: Try logging in with the created credentials
3. **Access Admin**: Navigate to `/admin` and verify super admin access

## 📞 Support

If you encounter issues:
1. Check the console output for specific error messages
2. Verify your Supabase configuration
3. Ensure you have the correct permissions
4. Check the Supabase logs for additional details 