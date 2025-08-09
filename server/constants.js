// Define pricing plans
export const PRICING_PLANS = {
    'personal': {
      name: 'Personal Plan',
      price: 0.01,
      stripe_price_id: process.env.STRIPE_PERSONAL_PRICE_ID,
      features: [
        '10 messages/month',
        'Basic customization',
        'Email support'
      ]
    },
    'test': {
      name: 'Test Plan',
      price: 1,
      stripe_price_id: process.env.STRIPE_TEST_PRICE_ID,
      features: [
        '100 messages/month',
        'Basic customization',
        'Email support',
        'Standard FAQ templates'
      ]
    },
    'free': {
      name: 'Free Plan',
      price: 0,
      stripe_price_id: null,
      features: [
        '500 messages/month',
        'Basic customization',
        'Email support',
        'Standard FAQ templates'
      ]
    },
    'starter': {
      name: 'Starter Plan',
      price: 29,
      stripe_price_id: process.env.STRIPE_STARTER_PRICE_ID,
      features: [
        '5,000 messages/month',
        'Advanced customization',
        'Priority support',
        'Analytics dashboard',
        'Custom FAQ import'
      ]
    },
    'pro': {
      name: 'Pro Plan',
      price: 59,
      stripe_price_id: process.env.STRIPE_PRO_PRICE_ID,
      features: [
        'Unlimited messages',
        'White-label options',
        '24/7 phone support',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ]
    }
  };