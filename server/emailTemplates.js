// ─── Shared helpers ──────────────────────────────────────────────────────────

const LOGO_URL = 'https://res.cloudinary.com/ds8yzpran/image/upload/v1754916422/logo_m5wdkj.png';
const SUPPORT_EMAIL = 'mailto:support@qurius.app';

/** Wraps arbitrary row content in the full outer-table shell that guarantees
 *  a #111827 background across every major email client on mobile & desktop. */
function emailShell(title, rows) {
  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" bgcolor="#111827" style="background-color:#111827;">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${title}</title>
</head>
<body bgcolor="#111827" style="margin:0;padding:0;background-color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">

  <!-- Full-width outer table — bgcolor on <td> is the most reliable way to
       paint the background on Gmail/Apple Mail/Outlook mobile -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#111827" style="background-color:#111827;">
    <tr>
      <td align="center" bgcolor="#111827" style="background-color:#111827;padding:40px 20px;">

        <!-- Inner 600px content table -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
${rows}
          <!-- Bottom padding -->
          <tr><td bgcolor="#111827" style="background-color:#111827;height:40px;"></td></tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Standard header row with logo + subtitle */
function headerRow(subtitle) {
  return `          <!-- Header -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;padding-bottom:30px;border-bottom:1px solid #374151;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:12px;">
                    <img src="${LOGO_URL}" alt="Qurius AI Logo" width="48" height="48" style="display:block;border-radius:8px;">
                  </td>
                  <td style="vertical-align:middle;">
                    <h1 style="color:#3B82F6;font-size:28px;font-weight:700;margin:0 0 4px 0;letter-spacing:-0.5px;">Qurius AI</h1>
                    <p style="color:#9CA3AF;font-size:14px;margin:0;font-weight:400;">${subtitle}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td bgcolor="#111827" style="background-color:#111827;height:40px;"></td></tr>`;
}

/** Standard support + footer rows */
function supportAndFooter(footerNote) {
  return `          <!-- Support -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;text-align:center;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">Need Help?</h3>
              <p style="color:#9CA3AF;font-size:14px;line-height:1.6;margin:0 0 16px 0;">Our support team is here to help.</p>
              <a href="${SUPPORT_EMAIL}" style="color:#3B82F6;text-decoration:none;font-size:14px;font-weight:500;">Contact Support →</a>
            </td>
          </tr>
          <tr><td bgcolor="#111827" style="background-color:#111827;height:32px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;padding-top:32px;border-top:1px solid #374151;text-align:center;">
              <p style="color:#6B7280;font-size:12px;margin:0 0 8px 0;">${footerNote}</p>
              <p style="color:#6B7280;font-size:12px;margin:0;">
                <a href="https://qurius.app" style="color:#3B82F6;text-decoration:none;">Visit our website</a>
              </p>
            </td>
          </tr>`;
}

/** Spacer row */
const spacer = `          <tr><td bgcolor="#111827" style="background-color:#111827;height:32px;"></td></tr>`;

// ─── Templates ───────────────────────────────────────────────────────────────

export function WelcomeEmailTemplate({ companyName, planName, adminLink }) {
  const rows = `
${headerRow('Welcome to your AI-powered customer service platform')}
          <!-- Main card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 16px 0;letter-spacing:-0.3px;">Welcome, ${companyName}</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
                Your <strong style="color:#F9FAFB;">${planName}</strong> plan is now active. You're ready to transform your customer service with AI-powered support that answers questions instantly, 24/7.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:24px;border-radius:8px;border-left:3px solid #3B82F6;">
                    <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">What's included:</h3>
                    <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                      <li style="margin-bottom:8px;">Instant AI responses to customer questions</li>
                      <li style="margin-bottom:8px;">24/7 automated customer support</li>
                      <li style="margin-bottom:8px;">Intelligent learning from your content</li>
                      <li style="margin-bottom:8px;">Seamless website integration</li>
                      <li>Multi-language support capabilities</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${spacer}
          <!-- Password setup notice -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;border-left:3px solid #F59E0B;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">Password Setup Required</h3>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.6;margin:0;">
                You will receive a separate email from Supabase to set your password. After creating your password, you can sign in to your account.
              </p>
            </td>
          </tr>
${spacer}
          <!-- CTA button -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;text-align:center;">
              <a href="${adminLink}" style="background-color:#3B82F6;color:#FFFFFF;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block;">
                Access Admin Dashboard
              </a>
            </td>
          </tr>
${spacer}
          <!-- Next steps -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Next Steps</h3>
              <ol style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                <li style="margin-bottom:8px;">Check your email for the password reset link from Supabase</li>
                <li style="margin-bottom:8px;">Create your password using the link</li>
                <li style="margin-bottom:8px;">Sign in to your admin dashboard</li>
                <li style="margin-bottom:8px;">Import your FAQs to train your AI assistant</li>
                <li style="margin-bottom:8px;">Copy the integration code to your website</li>
                <li>Start providing instant customer support</li>
              </ol>
            </td>
          </tr>
${spacer}
${supportAndFooter(`© ${new Date().getFullYear()} Qurius AI. All rights reserved.`)}
`;
  return emailShell('Welcome to Qurius AI', rows);
}


export function NotificationEmailTemplate({ subject, message, actionText, actionLink }) {
  const rows = `
${headerRow('Notification')}
          <!-- Content card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 16px 0;letter-spacing:-0.3px;">${subject}</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 24px 0;">${message}</p>
              ${actionLink ? `
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-top:8px;">
                    <a href="${actionLink}" style="background-color:#3B82F6;color:#FFFFFF;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block;">
                      ${actionText || 'Take Action'}
                    </a>
                  </td>
                </tr>
              </table>` : ''}
            </td>
          </tr>
${spacer}
          <!-- Footer -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;padding-top:32px;border-top:1px solid #374151;text-align:center;">
              <p style="color:#6B7280;font-size:12px;margin:0;">© ${new Date().getFullYear()} Qurius AI. All rights reserved.</p>
            </td>
          </tr>
`;
  return emailShell(subject, rows);
}


export function SupportEmailTemplate({ issue, description, priority = 'normal' }) {
  const priorityConfig = {
    low:    { color: '#10B981', label: 'Low' },
    normal: { color: '#3B82F6', label: 'Normal' },
    high:   { color: '#EF4444', label: 'High' },
  };
  const config = priorityConfig[priority] || priorityConfig.normal;

  const rows = `
${headerRow('Support Request')}
          <!-- Content card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${config.color}22" style="background-color:${config.color}22;padding:12px 16px;border-radius:6px;border-left:3px solid ${config.color};">
                    <span style="color:${config.color};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Priority: ${config.label}</span>
                  </td>
                </tr>
              </table>
              <h2 style="color:#F9FAFB;font-size:20px;font-weight:600;margin:24px 0 16px 0;">${issue}</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0;">${description}</p>
            </td>
          </tr>
${spacer}
          <!-- Footer -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;padding-top:32px;border-top:1px solid #374151;text-align:center;">
              <p style="color:#6B7280;font-size:12px;margin:0;">We'll get back to you as soon as possible.</p>
            </td>
          </tr>
`;
  return emailShell('Support Request - Qurius AI', rows);
}


export function MessageLimitReachedEmailTemplate({ companyName, planName, adminLink }) {
  const rows = `
${headerRow('Account Notification')}
          <!-- Main card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;border-left:3px solid #EF4444;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 16px 0;letter-spacing:-0.3px;">Message Limit Reached</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
                Hello ${companyName}, your <strong style="color:#F9FAFB;">${planName}</strong> plan has reached its monthly message limit. Your AI assistant will resume service when your quota resets next month, or you can upgrade to continue serving customers immediately.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;">
                    <h3 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 12px 0;text-transform:uppercase;letter-spacing:0.5px;">Current Plan Limits</h3>
                    <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                      <li style="margin-bottom:6px;"><strong style="color:#F9FAFB;">Free:</strong> 500 messages/month</li>
                      <li style="margin-bottom:6px;"><strong style="color:#F9FAFB;">Starter:</strong> 10,000 messages/month</li>
                      <li style="margin-bottom:6px;"><strong style="color:#F9FAFB;">Growth:</strong> 50,000 messages/month</li>
                      <li><strong style="color:#F9FAFB;">Pro:</strong> Unlimited messages</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${spacer}
          <!-- CTA buttons -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;text-align:center;">
              <a href="${adminLink}" style="background-color:#3B82F6;color:#FFFFFF;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;display:inline-block;margin:0 6px 8px 6px;">Upgrade Plan</a>
              <a href="${adminLink}" style="background-color:#374151;color:#F9FAFB;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;display:inline-block;margin:0 6px 8px 6px;">View Dashboard</a>
            </td>
          </tr>
${spacer}
          <!-- Solutions -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Solutions</h3>
              <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Upgrade your plan</strong> to get more messages per month</li>
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Wait for reset</strong> – your quota resets on the first day of next month</li>
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Contact support</strong> to find the right plan for your needs</li>
                <li><strong style="color:#F9FAFB;">Review usage</strong> in your dashboard to optimize message consumption</li>
              </ul>
            </td>
          </tr>
${spacer}
          <!-- Plan comparison -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 20px 0;text-align:center;">Upgrade Options</h3>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="48%" bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;border:1px solid #374151;vertical-align:top;">
                    <h4 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 8px 0;">Starter</h4>
                    <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px 0;">10,000 messages/month</p>
                    <p style="color:#3B82F6;font-size:16px;font-weight:600;margin:0;">$29/month</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;border:1px solid #374151;vertical-align:top;">
                    <h4 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 8px 0;">Growth</h4>
                    <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px 0;">50,000 messages/month</p>
                    <p style="color:#3B82F6;font-size:16px;font-weight:600;margin:0;">$59/month</p>
                  </td>
                </tr>
                <tr><td colspan="3" style="height:12px;"></td></tr>
                <tr>
                  <td colspan="3" bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;border:1px solid #3B82F6;">
                    <h4 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 8px 0;">Pro</h4>
                    <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px 0;">Unlimited messages</p>
                    <p style="color:#3B82F6;font-size:16px;font-weight:600;margin:0;">$99/month</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${spacer}
${supportAndFooter('Your quota will automatically reset on the first day of next month.')}
`;
  return emailShell('Message Limit Reached - Qurius AI', rows);
}


export function FAQGenerationCompleteEmailTemplate({ companyName, adminLink, faqCount, crawlType }) {
  const rows = `
${headerRow('AI Processing Complete')}
          <!-- Main card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;border-left:3px solid #10B981;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 16px 0;letter-spacing:-0.3px;">FAQ Generation Complete</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
                Hello ${companyName}, your AI has successfully analyzed your ${crawlType} and generated <strong style="color:#F9FAFB;">${faqCount} intelligent FAQs</strong> ready for your review.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;">
                    <h3 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 12px 0;text-transform:uppercase;letter-spacing:0.5px;">Next Steps</h3>
                    <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                      <li style="margin-bottom:8px;">Review each AI-generated question and answer</li>
                      <li style="margin-bottom:8px;">Edit questions or answers to match your brand voice</li>
                      <li style="margin-bottom:8px;">Approve or reject FAQs for your knowledge base</li>
                      <li>Save approved FAQs to activate them in your AI assistant</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${spacer}
          <!-- CTA button -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;text-align:center;">
              <a href="${adminLink}" style="background-color:#3B82F6;color:#FFFFFF;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block;">
                Review Generated FAQs
              </a>
            </td>
          </tr>
${spacer}
          <!-- Benefits -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Benefits</h3>
              <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Save time</strong> – No need to manually create FAQs</li>
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Better coverage</strong> – AI identifies questions you might have missed</li>
                <li style="margin-bottom:8px;"><strong style="color:#F9FAFB;">Improved accuracy</strong> – Based on your actual content</li>
                <li><strong style="color:#F9FAFB;">Faster setup</strong> – Get your AI assistant ready in minutes</li>
              </ul>
            </td>
          </tr>
${spacer}
${supportAndFooter(`© ${new Date().getFullYear()} Qurius AI. All rights reserved.`)}
`;
  return emailShell('AI FAQ Generation Complete - Qurius AI', rows);
}


export function PasswordResetEmailTemplate({ resetLink }) {
  const rows = `
${headerRow('Password Reset Request')}
          <!-- Main card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;border-left:3px solid #3B82F6;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 16px 0;letter-spacing:-0.3px;">Reset Your Password</h2>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 24px 0;">
                Hello! We received a request to reset your password for your Qurius AI admin account.
                If you didn't make this request, you can safely ignore this email.
              </p>
              <p style="color:#D1D5DB;font-size:16px;line-height:1.6;margin:0 0 32px 0;">
                To reset your password, click the button below. This link will expire in 24 hours for security.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom:32px;">
                    <a href="${resetLink}" style="background-color:#3B82F6;color:#FFFFFF;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;border:1px solid #374151;">
                    <p style="color:#9CA3AF;font-size:14px;line-height:1.5;margin:0 0 12px 0;text-align:center;">
                      If the button doesn't work, copy and paste this link into your browser:
                    </p>
                    <p style="color:#3B82F6;font-size:13px;line-height:1.5;margin:0;text-align:center;word-break:break-all;font-family:monospace;">
                      ${resetLink}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${spacer}
          <!-- Security notice -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;border-left:3px solid #F59E0B;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">Security Information</h3>
              <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                <li style="margin-bottom:8px;">This link expires in 24 hours</li>
                <li style="margin-bottom:8px;">Only use this link if you requested a password reset</li>
                <li>If you didn't request this, your account remains secure</li>
              </ul>
            </td>
          </tr>
${spacer}
${supportAndFooter(`© ${new Date().getFullYear()} Qurius AI. All rights reserved. This email was sent because a password reset was requested for your account.`)}
`;
  return emailShell('Reset Your Password - Qurius AI', rows);
}


export function AdminCompanyNotificationEmailTemplate({ companyName, companyEmail, planName, location, industry, website, description, createdAt }) {
  const getPlanInfo = (plan) => {
    switch (plan) {
      case 'Free':    return { limit: '500 messages/month',    revenue: '$0',  features: 'Basic AI assistance' };
      case 'Starter': return { limit: '10,000 messages/month', revenue: '$29', features: 'Advanced analytics, priority support' };
      case 'Growth':  return { limit: '50,000 messages/month', revenue: '$59', features: 'Analytics, multi-language, priority support' };
      case 'Pro':     return { limit: 'Unlimited',             revenue: '$99', features: 'All features, lead generation, premium support' };
      default:        return { limit: 'N/A', revenue: '$0', features: 'N/A' };
    }
  };
  const planInfo = getPlanInfo(planName);

  const rows = `
${headerRow('New Company Registration')}
          <!-- Main card -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:32px;border-radius:12px;border:1px solid #374151;border-left:3px solid #10B981;">
              <h2 style="color:#F9FAFB;font-size:24px;font-weight:600;margin:0 0 24px 0;letter-spacing:-0.3px;">New Company Joined</h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:24px;border-radius:8px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="color:#D1D5DB;font-size:14px;line-height:1.8;">
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;width:35%;">Company Name:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${companyName}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Email:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${companyEmail}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Plan:</td>
                        <td style="padding:8px 0;">
                          <span style="background-color:#3B82F6;color:#FFFFFF;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;">${planName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Website:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${website || 'Not provided'}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Industry:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${industry || 'Not provided'}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Location:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${location || 'Not provided'}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-weight:600;color:#9CA3AF;">Created:</td>
                        <td style="padding:8px 0;color:#F9FAFB;">${createdAt}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              ${description ? `
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">
                <tr>
                  <td bgcolor="#111827" style="background-color:#111827;padding:20px;border-radius:8px;">
                    <h3 style="color:#F9FAFB;font-size:14px;font-weight:600;margin:0 0 12px 0;text-transform:uppercase;letter-spacing:0.5px;">Description</h3>
                    <p style="color:#D1D5DB;font-size:14px;line-height:1.6;margin:0;">${description}</p>
                  </td>
                </tr>
              </table>` : ''}
            </td>
          </tr>
${spacer}
          <!-- Plan info -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;text-align:center;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Plan Information</h3>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0 0 8px 0;"><strong style="color:#F9FAFB;">Message Limit:</strong> ${planInfo.limit}</p>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0 0 8px 0;"><strong style="color:#F9FAFB;">Features:</strong> ${planInfo.features}</p>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;"><strong style="color:#F9FAFB;">Monthly Revenue:</strong> <span style="color:#3B82F6;font-weight:600;">${planInfo.revenue}</span></p>
            </td>
          </tr>
${spacer}
          <!-- Next steps -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Next Steps</h3>
              <ul style="color:#D1D5DB;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
                <li style="margin-bottom:8px;">Welcome email has been sent to the company</li>
                <li style="margin-bottom:8px;">Password reset link has been sent via Supabase</li>
                <li style="margin-bottom:8px;">Monitor onboarding progress in admin dashboard</li>
                <li>Check for any support requests from this company</li>
              </ul>
            </td>
          </tr>
${spacer}
          <!-- Footer -->
          <tr>
            <td bgcolor="#111827" style="background-color:#111827;padding-top:32px;border-top:1px solid #374151;text-align:center;">
              <p style="color:#6B7280;font-size:12px;margin:0 0 8px 0;">This is an automated notification from Qurius AI</p>
              <p style="color:#6B7280;font-size:12px;margin:0;">${new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'long' })}</p>
            </td>
          </tr>
`;
  return emailShell('New Company Joined - Qurius AI', rows);
}

// ─── Lead Captured Notification Email ────────────────────────────────────────
export function LeadCapturedEmailTemplate({ companyName, userEmail, userName, userPhone, aiResponse, conversationContext, createdAt }) {
  const spacer = `          <tr><td bgcolor="#111827" style="background-color:#111827;height:24px;"></td></tr>`;

  const rows = `
          ${headerRow('New Lead Captured')}

          <!-- Hero -->
          <tr>
            <td bgcolor="#064E3B" style="background-color:#064E3B;padding:32px;border-radius:12px;">
              <h2 style="color:#F9FAFB;font-size:22px;font-weight:700;margin:0 0 8px 0;">🎯 A visitor shared their contact info</h2>
              <p style="color:#6EE7B7;font-size:15px;margin:0;">Someone using your <strong>${companyName}</strong> Assistant is interested — here are their details.</p>
            </td>
          </tr>
${spacer}

          <!-- Contact Details -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Contact Details</h3>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${userName ? `
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;padding-bottom:12px;width:130px;vertical-align:top;">Name</td>
                  <td style="color:#F9FAFB;font-size:14px;padding-bottom:12px;">${userName}</td>
                </tr>` : ''}
                ${userEmail ? `
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;padding-bottom:12px;vertical-align:top;">Email</td>
                  <td style="color:#F9FAFB;font-size:14px;padding-bottom:12px;">
                    <a href="mailto:${userEmail}" style="color:#3B82F6;text-decoration:none;">${userEmail}</a>
                  </td>
                </tr>` : ''}
                ${userPhone ? `
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;padding-bottom:12px;vertical-align:top;">Phone</td>
                  <td style="color:#F9FAFB;font-size:14px;padding-bottom:12px;">${userPhone}</td>
                </tr>` : ''}
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;vertical-align:top;">Captured at</td>
                  <td style="color:#F9FAFB;font-size:14px;">${createdAt}</td>
                </tr>
              </table>
            </td>
          </tr>

          ${aiResponse ? `
${spacer}
          <!-- AI Response that triggered lead -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">What the AI said before they converted</h3>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${aiResponse}</p>
            </td>
          </tr>` : ''}

          ${conversationContext ? `
${spacer}
          <!-- Conversation Context -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">Conversation context</h3>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${conversationContext}</p>
            </td>
          </tr>` : ''}

${spacer}

          <!-- CTA -->
          <tr>
            <td style="text-align:center;padding:8px 0;">
              ${userEmail
                ? `<a href="mailto:${userEmail}" style="display:inline-block;background-color:#10B981;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:8px;">Follow up with ${userEmail}</a>`
                : userPhone
                  ? `<p style="color:#D1D5DB;font-size:14px;margin:0;">📞 Give them a call at <strong style="color:#F9FAFB;">${userPhone}</strong></p>`
                  : `<p style="color:#9CA3AF;font-size:14px;margin:0;">No contact info — check your Qurius AI dashboard for details.</p>`
              }
            </td>
          </tr>
${spacer}

          ${supportAndFooter(`© 2026 Qurius AI · This notification was sent because a visitor using ${companyName}'s AI Assistant shared their contact information.`)}
`;
  return emailShell(`New Lead — ${companyName}`, rows);
}

// ─── Support Request Notification Email ───────────────────────────────────────
export function SupportRequestEmailTemplate({ companyName, userEmail, userName, conversationContext, createdAt }) {
  const spacer = `          <tr><td bgcolor="#111827" style="background-color:#111827;height:24px;"></td></tr>`;

  const rows = `
          ${headerRow('New Support Request')}

          <!-- Hero -->
          <tr>
            <td bgcolor="#1E3A5F" style="background-color:#1E3A5F;padding:32px;border-radius:12px;">
              <h2 style="color:#F9FAFB;font-size:22px;font-weight:700;margin:0 0 8px 0;">🙋 Someone wants to talk to a person</h2>
              <p style="color:#93C5FD;font-size:15px;margin:0;">A visitor using your <strong>${companyName}</strong> Assistant has requested human support.</p>
            </td>
          </tr>
${spacer}

          <!-- Contact Details -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 16px 0;">Contact Details</h3>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${userName ? `
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;padding-bottom:12px;width:130px;vertical-align:top;">Name</td>
                  <td style="color:#F9FAFB;font-size:14px;padding-bottom:12px;">${userName}</td>
                </tr>` : ''}
                ${userEmail ? `
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;padding-bottom:12px;vertical-align:top;">Email</td>
                  <td style="color:#F9FAFB;font-size:14px;padding-bottom:12px;">
                    <a href="mailto:${userEmail}" style="color:#3B82F6;text-decoration:none;">${userEmail}</a>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="color:#9CA3AF;font-size:14px;vertical-align:top;">Requested at</td>
                  <td style="color:#F9FAFB;font-size:14px;">${createdAt}</td>
                </tr>
              </table>
            </td>
          </tr>

          ${conversationContext ? `
${spacer}
          <!-- Conversation Context -->
          <tr>
            <td bgcolor="#1F2937" style="background-color:#1F2937;padding:24px;border-radius:12px;border:1px solid #374151;">
              <h3 style="color:#F9FAFB;font-size:16px;font-weight:600;margin:0 0 12px 0;">What they were asking about</h3>
              <p style="color:#D1D5DB;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${conversationContext}</p>
            </td>
          </tr>` : ''}

${spacer}

          <!-- CTA -->
          <tr>
            <td style="text-align:center;padding:8px 0;">
              ${userEmail
                ? `<a href="mailto:${userEmail}" style="display:inline-block;background-color:#3B82F6;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:8px;">Reply to ${userEmail}</a>`
                : `<p style="color:#9CA3AF;font-size:14px;margin:0;">No email provided — check your Qurius AI dashboard for details.</p>`
              }
            </td>
          </tr>
${spacer}

          ${supportAndFooter(`© 2026 Qurius AI · This notification was sent because a visitor using ${companyName}'s AI Assistant requested human support.`)}
`;
  return emailShell(`New Support Request — ${companyName}`, rows);
}
