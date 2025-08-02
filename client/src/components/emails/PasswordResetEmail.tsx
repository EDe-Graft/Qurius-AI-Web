interface PasswordResetEmailProps {
  confirmationURL: string
  companyName?: string
}

export function PasswordResetEmail({ confirmationURL, companyName = 'Qurius AI' }: PasswordResetEmailProps) {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#7c3aed',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#7c3aed"/>
          </svg>
        </div>
        <h1 style={{
          color: '#ffffff',
          fontSize: '24px',
          fontWeight: '700',
          margin: '0',
          letterSpacing: '-0.025em'
        }}>
          Reset Your Password
        </h1>
        <p style={{
          color: '#e9d5ff',
          fontSize: '16px',
          margin: '8px 0 0',
          fontWeight: '500'
        }}>
          {companyName} Admin Panel
        </p>
      </div>

      {/* Content */}
      <div style={{
        padding: '32px 24px',
        backgroundColor: '#ffffff'
      }}>
        <p style={{
          color: '#374151',
          fontSize: '16px',
          lineHeight: '1.6',
          margin: '0 0 24px'
        }}>
          Hello! We received a request to reset your password for your {companyName} admin account. 
          If you didn't make this request, you can safely ignore this email.
        </p>

        <p style={{
          color: '#374151',
          fontSize: '16px',
          lineHeight: '1.6',
          margin: '0 0 32px'
        }}>
          To reset your password, click the button below. This link will expire in 24 hours for security.
        </p>

        {/* CTA Button */}
        <div style={{
          textAlign: 'center',
          margin: '32px 0'
        }}>
          <a href={confirmationURL} style={{
            backgroundColor: '#7c3aed',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            display: 'inline-block',
            boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3)',
            transition: 'all 0.2s ease'
          }}>
            Reset Password
          </a>
        </div>

        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: '1.5',
          margin: '24px 0 0',
          textAlign: 'center'
        }}>
          If the button doesn't work, copy and paste this link into your browser:
        </p>
        
        <p style={{
          color: '#7c3aed',
          fontSize: '14px',
          lineHeight: '1.5',
          margin: '8px 0 0',
          textAlign: 'center',
          wordBreak: 'break-all',
          fontFamily: 'monospace',
          backgroundColor: '#f3f4f6',
          padding: '12px',
          borderRadius: '6px'
        }}>
          {confirmationURL}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '24px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: '0 0 8px'
          }}>
            Need help? Contact our support team
          </p>
          <a href="mailto:support@qurius.ai" style={{
            color: '#7c3aed',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            support@qurius.ai
          </a>
        </div>

        <div style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '16px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#9ca3af',
            fontSize: '12px',
            margin: '0',
            lineHeight: '1.4'
          }}>
            This email was sent to you because someone requested a password reset for your {companyName} admin account. 
            If you didn't request this, please ignore this email.
          </p>
        </div>
      </div>
    </div>
  )
}

// For use in email services that need HTML string
export function getPasswordResetEmailHTML(confirmationURL: string, companyName?: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password - ${companyName || 'Qurius AI'}</title>
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        
        <!-- Header -->
        <div style="background-color: #7c3aed; padding: 32px 24px; text-align: center;">
          <div style="width: 48px; height: 48px; background-color: #ffffff; border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#7c3aed"/>
            </svg>
          </div>
          <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.025em;">
            Reset Your Password
          </h1>
          <p style="color: #e9d5ff; font-size: 16px; margin: 8px 0 0; font-weight: 500;">
            ${companyName || 'Qurius AI'} Admin Panel
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 32px 24px; background-color: #ffffff;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
            Hello! We received a request to reset your password for your ${companyName || 'Qurius AI'} admin account. 
            If you didn't make this request, you can safely ignore this email.
          </p>

          <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 32px;">
            To reset your password, click the button below. This link will expire in 24 hours for security.
          </p>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 32px 0;">
            <a href="${confirmationURL}" style="background-color: #7c3aed; color: #ffffff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.3);">
              Reset Password
            </a>
          </div>

          <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 24px 0 0; text-align: center;">
            If the button doesn't work, copy and paste this link into your browser:
          </p>
          
          <p style="color: #7c3aed; font-size: 14px; line-height: 1.5; margin: 8px 0 0; text-align: center; word-break: break-all; font-family: monospace; background-color: #f3f4f6; padding: 12px; border-radius: 6px;">
            ${confirmationURL}
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 24px; border-top: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 16px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px;">
              Need help? Contact our support team
            </p>
            <a href="mailto:support@qurius.ai" style="color: #7c3aed; text-decoration: none; font-size: 14px; font-weight: 500;">
              support@qurius.ai
            </a>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.4;">
              This email was sent to you because someone requested a password reset for your ${companyName || 'Qurius AI'} admin account. 
              If you didn't request this, please ignore this email.
            </p>
          </div>
        </div>

      </div>
    </body>
    </html>
  `
} 