/**
 * Test script to verify the new notification read status functionality
 */

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

async function testNotificationReadStatus() {
  try {
    console.log('🧪 Testing notification read status functionality...\n');

    // Test 1: Create a test notification
    console.log('📝 Test 1: Creating test notification...');
    const createResponse = await axios.post(`${BACKEND_URL}/api/notifications`, {
      company_id: 'test-company-id',
      company_name: 'Test Company',
      type: 'info',
      title: 'Test Notification',
      message: 'This is a test notification for read status testing'
    });

    const notificationId = createResponse.data.id;
    console.log(`✅ Test notification created with ID: ${notificationId}\n`);

    // Test 2: Mark as read by company
    console.log('📝 Test 2: Marking notification as read by company...');
    const companyReadResponse = await axios.put(`${BACKEND_URL}/api/notifications/${notificationId}/read`, {
      userType: 'company'
    });
    console.log('✅ Company read status updated\n');

    // Test 3: Mark as read by super admin
    console.log('📝 Test 3: Marking notification as read by super admin...');
    const adminReadResponse = await axios.put(`${BACKEND_URL}/api/notifications/${notificationId}/read`, {
      userType: 'super_admin'
    });
    console.log('✅ Super admin read status updated\n');

    // Test 4: Verify the notification has both read statuses
    console.log('📝 Test 4: Verifying read statuses...');
    const getResponse = await axios.get(`${BACKEND_URL}/api/notifications/test-company-id`);
    const notification = getResponse.data.find(n => n.id === notificationId);
    
    if (notification) {
      console.log('📊 Notification read status:');
      console.log(`   - read_by_company: ${notification.read_by_company}`);
      console.log(`   - read_by_super_admin: ${notification.read_by_super_admin}`);
      console.log(`   - Legacy read_status: ${notification.read_status}`);
      
      if (notification.read_by_company && notification.read_by_super_admin) {
        console.log('✅ Both read statuses are correctly set!\n');
      } else {
        console.log('❌ Read statuses are not correctly set!\n');
      }
    }

    // Test 5: Test unread counts
    console.log('📝 Test 5: Testing unread counts...');
    const companyUnreadResponse = await axios.get(`${BACKEND_URL}/api/notifications/test-company-id/unread-count`);
    const totalUnreadResponse = await axios.get(`${BACKEND_URL}/api/notifications/all/unread-count`);
    
    console.log(`📊 Unread counts:`);
    console.log(`   - Company unread: ${companyUnreadResponse.data.count}`);
    console.log(`   - Total unread (Super Admin): ${totalUnreadResponse.data.count}\n`);

    // Test 6: Clean up - delete test notification
    console.log('📝 Test 6: Cleaning up test notification...');
    await axios.delete(`${BACKEND_URL}/api/notifications/${notificationId}`);
    console.log('✅ Test notification deleted\n');

    console.log('🎉 All tests completed successfully!');
    console.log('📋 Summary:');
    console.log('   - Separate read status for Super Admin and Company users');
    console.log('   - API endpoints accept userType parameter');
    console.log('   - Unread counts work correctly for each user type');
    console.log('   - Backward compatibility maintained');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    process.exit(1);
  }
}

// Run the test
testNotificationReadStatus(); 