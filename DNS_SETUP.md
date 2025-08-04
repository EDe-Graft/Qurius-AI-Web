# DNS Setup for Email Receiving with Resend

## Cloudflare DNS Configuration

Add these records to your `qurius.app` domain in Cloudflare:

### 1. MX Record (Mail Exchange)
```
Type: MX
Name: @
Content: mx.resend.com
Priority: 10
TTL: Auto
```

### 2. SPF Record (Email Authentication)
```
Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all
TTL: Auto
```

### 3. DKIM Record (Optional - for better deliverability)
```
Type: TXT
Name: resend._domainkey
Content: [Get this from Resend dashboard after domain verification]
TTL: Auto
```

## Steps to Add in Cloudflare:

1. **Login to Cloudflare**
2. **Select your domain** (`qurius.app`)
3. **Go to DNS settings**
4. **Click "Add record"** for each record above
5. **Save changes**

## Verification:
- DNS changes can take 5-15 minutes to propagate
- Check with: `nslookup -type=mx qurius.app`
- Should show: `mx.resend.com`

## Next Steps:
After DNS is configured, proceed to Resend dashboard setup. 