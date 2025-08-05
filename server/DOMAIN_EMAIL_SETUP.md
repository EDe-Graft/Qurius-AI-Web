# 📧 Email Setup Guide for qurius.app

## **Step 1: Configure DNS Records in Namecheap**

### **1.1 Access Namecheap DNS Settings**
1. Log into [namecheap.com](https://namecheap.com)
2. Go to **Domain List**
3. Click **Manage** next to `qurius.app`
4. Go to **Advanced DNS** tab

### **1.2 Add MX Record**
Add a new **MX Record**:
```
Type: MX Record
Host: @
Value: mx.resend.com
Priority: 10
TTL: Automatic
```

### **1.3 Add SPF Record**
Add a new **TXT Record**:
```
Type: TXT Record
Host: @
Value: v=spf1 include:_spf.resend.com ~all
TTL: Automatic
```

### **1.4 Add CNAME for Email Tracking (Optional)**
Add a new **CNAME Record**:
```
Type: CNAME Record
Host: email
Value: track.resend.com
TTL: Automatic
```

## **Step 2: Verify Domain in Resend**

### **2.1 Add Domain to Resend**
1. Go to [resend.com](https://resend.com)
2. Navigate to **Domains**
3. Click **Add Domain**
4. Enter: `qurius.app`
5. Click **Add Domain**

### **2.2 Wait for Verification**
- Resend will automatically verify your DNS records
- This usually takes 5-15 minutes
- You'll see a green checkmark when verified

## **Step 3: Configure Email Addresses**

### **3.1 Add Email Addresses in Resend**
In your Resend dashboard, add these email addresses:
- `hello@qurius.app` (for sending emails)
- `support@qurius.app` (for receiving support emails)
- `contact@qurius.app` (for general contact)

### **3.2 Set Up Email Forwarding**
Configure forwarding to your Gmail:
- `support@qurius.app` → `edgquansah@gmail.com`
- `contact@qurius.app` → `edgquansah@gmail.com`

## **Step 4: Test Your Setup**

### **4.1 Test Sending**
Your app will now send emails from `hello@qurius.app`

### **4.2 Test Receiving**
Send a test email to `support@qurius.app` to verify forwarding works

## **Step 5: Update Your App (Already Done)**

Your app configuration has been updated to use:
- **From:** `hello@qurius.app`
- **Reply-To:** `support@qurius.app`

## **🎯 Benefits of This Setup**

✅ **Professional branding** - Emails come from your domain
✅ **Centralized support** - All support emails go to one place
✅ **Easy management** - Forward to your Gmail
✅ **Scalable** - Can add more email addresses as needed

## **🔧 Troubleshooting**

### **DNS Not Working?**
- Wait 15-30 minutes for DNS propagation
- Check Namecheap's DNS status
- Verify records in Resend dashboard

### **Emails Not Sending?**
- Check Resend API key in your `.env`
- Verify domain is verified in Resend
- Check email address format

### **Emails Not Receiving?**
- Verify forwarding is set up in Resend
- Check spam folder
- Test with a simple email first

## **📞 Support**

If you need help:
- **Resend Support:** [support.resend.com](https://support.resend.com)
- **Namecheap Support:** Live chat on namecheap.com 