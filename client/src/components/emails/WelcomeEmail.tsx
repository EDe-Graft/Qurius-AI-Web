interface WelcomeEmailProps {
  companyName: string
  planName: string
  resetLink: string
  adminLink: string
}

export function WelcomeEmail({ companyName, planName, resetLink, adminLink }: WelcomeEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#3B82F6', fontSize: '28px', marginBottom: '10px' }}>
          🎉 Welcome to Qurius AI!
        </h1>
        <p style={{ color: '#6B7280', fontSize: '16px' }}>
          Your AI-powered customer service revolution starts now
        </p>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ color: '#1F2937', fontSize: '22px', marginBottom: '20px' }}>
          Congratulations, {companyName}! 🚀
        </h2>
        
        <p style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          You've just joined the future of customer service. Qurius AI is designed to transform how your business interacts with customers, providing instant, intelligent responses that will delight your users and boost your customer satisfaction scores.
        </p>

        <div style={{ backgroundColor: '#DBEAFE', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#1E40AF', fontSize: '18px', marginBottom: '15px' }}>
            ✨ What makes Qurius AI incredible:
          </h3>
          <ul style={{ color: '#1E40AF', fontSize: '14px', lineHeight: '1.8' }}>
            <li><strong>Instant Responses:</strong> Your customers get answers in seconds, not hours</li>
            <li><strong>24/7 Availability:</strong> Never miss a customer inquiry again</li>
            <li><strong>Intelligent Learning:</strong> Gets smarter with every interaction</li>
            <li><strong>Seamless Integration:</strong> Works perfectly with your existing website</li>
            <li><strong>Multi-language Support:</strong> Serve customers worldwide</li>
          </ul>
        </div>

        <p style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          Your <strong>{planName}</strong> plan is now active and ready to revolutionize your customer service experience. You're about to see a dramatic improvement in customer satisfaction and response times.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <a 
            href={resetLink}
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            🔐 Set Your Password
          </a>
        </div>
        
        <div>
          <a 
            href={adminLink}
            style={{
              backgroundColor: '#10B981',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            📊 Access Admin Dashboard
          </a>
        </div>
      </div>

      {/* Next Steps */}
      <div style={{ backgroundColor: '#FEF3C7', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h3 style={{ color: '#92400E', fontSize: '18px', marginBottom: '15px' }}>
          🎯 Your Next Steps:
        </h3>
        <ol style={{ color: '#92400E', fontSize: '14px', lineHeight: '1.8' }}>
          <li><strong>Set your password</strong> using the link above</li>
          <li><strong>Access your admin dashboard</strong> to customize your widget</li>
          <li><strong>Import your FAQs</strong> to train your AI assistant</li>
          <li><strong>Copy the integration code</strong> to your website</li>
          <li><strong>Watch your customer satisfaction soar!</strong> 📈</li>
        </ol>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #E5E7EB' }}>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '10px' }}>
          Ready to transform your customer service? Let's make it happen! 🚀
        </p>
        <p style={{ color: '#9CA3AF', fontSize: '12px' }}>
          If you have any questions, our support team is here to help you succeed.
        </p>
      </div>
    </div>
  )
} 