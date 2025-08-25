import { type Language } from '@/context/LanguageContext'

export interface TranslationKeys {
  // Common UI
  common?: {
    loading: string
    error: string
    success: string
    cancel: string
    save: string
    delete: string
    edit: string
    view: string
    close: string
    next: string
    previous: string
    submit: string
    copy: string
    copied: string
    getStarted: string
    step: string
  }
  
  // Contact Page
  contact?: {
    title: string
    subtitle: string
    sendMessage: string
    fullName: string
    emailAddress: string
    company: string
    subject: string
    message: string
    namePlaceholder: string
    emailPlaceholder: string
    companyPlaceholder: string
    messagePlaceholder: string
    selectSubject: string
    salesInquiry: string
    technicalSupport: string
    partnership: string
    careers: string
    other: string
    sending: string
    getInTouch: string
    emailUs: string
    callUs: string
    visitUs: string
    emailDescription: string
    callDescription: string
    address: string
    responseTimes: string
    salesInquiries: string
    within2Hours: string
    within4Hours: string
    generalQuestions: string
    within24Hours: string
    partnershipRequests: string
    within48Hours: string
    successMessage: string
    tryAI: string
    tryAIDescription: string
    experienceAI: string
    experienceAIDescription: string
    readyToStart: string
    readyToStartDescription: string
    startFreeTrial: string
    viewDemo: string
  }
  
  // About Page
  about?: {
    title: string
    subtitle: string
    mission: string
    missionDescription1: string
    missionDescription2: string
    vision: string
    visionDescription: string
    values: string
    valuesDescription: string
    customerCentric: string
    customerCentricDescription: string
    innovation: string
    innovationDescription: string
    transparency: string
    transparencyDescription: string
    meetFounder: string
    meetFounderDescription: string
    founderName: string
    founderTitle: string
    backgroundExperience: string
    backgroundDescription: string
    passionsInterests: string
    passionsDescription: string
    quriusVision: string
    quriusVisionDescription: string
    skillAI: string
    skillFullStack: string
    skillReact: string
    skillSaaS: string
    skillDataScience: string
    ourTeam: string
    ourTeamDescription: string
    growingTeam: string
    growingTeamDescription: string
    joinTeam: string
    experienceAI: string
    experienceAIDescription: string
    tryItNow: string
    tryItNowDescription: string
    readyToStart: string
    readyToStartDescription: string
    getStartedFree: string
    contactUs: string
  }
  
  // Navigation
  navigation?: {
    home: string
    demo: string
    admin: string
    login: string
    logout: string
  }
  
  // Plans
  plans?: {
    free: string
    starter: string
    pro: string
    perMonth: string
    unlimitedMessages: string
    whiteLabelOptions: string
    phoneSupport: string
    advancedAnalytics: string
    apiAccess: string
    customIntegrations: string
    basicCustomization: string
    emailSupport: string
    standardFaqTemplates: string
    prioritySupport: string
    analyticsDashboard: string
    customFaqImport: string
    // New Pro features
    multiLanguageSupport: string
    autoLanguageDetection: string
    translatedFaqTemplates: string
    languageSpecificCustomization: string
    multiLanguageAnalytics: string
    customLanguageSupport: string
    customWebCrawling: string
  }
  
  // Chat Widget
  chat?: {
    welcome: string
    welcomeWithCompany: string
    typeMessage: string
    send: string
    minimize: string
    expand: string
    typing: string
    online: string
    offline: string
  }
  
  // Onboarding
  onboarding?: {
    welcome: string
    companyInfo: string
    customization: string
    payment: string
    integration: string
    complete: string
    companyName: string
    industry: string
    website: string
    email: string
    location: string
    description: string
    chooseTheme: string
    primaryColor: string
    backgroundColor: string
    textColor: string
    preview: string
    choosePlan: string
    integrationCode: string
    instructions: string
    testWidget: string
    completeSetup: string
  }

  // Landing Page
  landing?: {
    heroTitle: string
    heroSubtitle: string
    viewDemo: string
    featuresTitle: string
    featuresSubtitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    pricingTitle: string
    pricingSubtitle: string
    contactSales: string
    ctaTitle: string
    ctaSubtitle: string
    startFreeTrial: string
    emailPlaceholder: string
    getUpdates: string
    footerDescription: string
    footerProduct: string
    footerCompany: string
    footerSupport: string
    features: string
    pricing: string
    installation: string
    about: string
    blog: string
    careers: string
    helpCenter: string
    contact: string
    status: string
    allRightsReserved: string
  }

  // Demo Page
  demo?: {
    title: string
    companyWebsiteTitle: string
    companyWebsiteDescription: string
    keyFeaturesTitle: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    feature5: string
    feature6: string
    tryChatTitle: string
    tryChatDescription: string
    learnMoreButton: string
    getStartedButton: string
    viewAdminButton: string
  }
}

// English translations (base)
const en: TranslationKeys = {
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    copy: 'Copy',
    copied: 'Copied!',
    getStarted: 'Get Started',
    step: 'Step'
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team. We\'re here to help you succeed with AI-powered customer support.',
    sendMessage: 'Send us a message',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    company: 'Company',
    subject: 'Subject',
    message: 'Message',
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@company.com',
    companyPlaceholder: 'Your Company',
    messagePlaceholder: 'Tell us how we can help you...',
    selectSubject: 'Select a subject',
    salesInquiry: 'Sales Inquiry',
    technicalSupport: 'Technical Support',
    partnership: 'Partnership',
    careers: 'Careers',
    other: 'Other',
    sending: 'Sending...',
    getInTouch: 'Get in touch',
    emailUs: 'Email Us',
    callUs: 'Call Us',
    visitUs: 'Visit Us',
    emailDescription: 'For general inquiries and support',
    callDescription: 'Monday to Friday, 9AM to 6PM EST',
    address: '123 AI Innovation Drive, Tech Valley, CA 94043, United States',
    responseTimes: 'Response Times',
    salesInquiries: 'Sales inquiries',
    within2Hours: 'Within 2 hours',
    within4Hours: 'Within 4 hours',
    generalQuestions: 'General questions',
    within24Hours: 'Within 24 hours',
    partnershipRequests: 'Partnership requests',
    within48Hours: 'Within 48 hours',
    successMessage: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    tryAI: 'Try Our AI Assistant',
    tryAIDescription: 'Have questions? Chat with our AI assistant to see Qurius AI in action! Click the chat icon in the bottom right to experience our product firsthand.',
    experienceAI: 'Experience the Power of AI',
    experienceAIDescription: 'This chatbot is powered by the same technology we provide to our customers. Ask about our features, pricing, or any questions you have about Qurius AI!',
    readyToStart: 'Ready to Get Started?',
    readyToStartDescription: 'Join thousands of businesses using Qurius AI to enhance their customer support.',
    startFreeTrial: 'Start Free Trial',
    viewDemo: 'View Demo'
  },
  about: {
    title: 'About Qurius AI',
    subtitle: 'Empowering businesses with intelligent customer support through cutting-edge AI technology',
    mission: 'Our Mission',
    missionDescription1: 'At Qurius AI, we believe that every customer interaction should be meaningful, efficient, and satisfying. Our mission is to revolutionize customer support by providing businesses with intelligent AI-powered chatbots that understand context, speak multiple languages, and deliver personalized experiences.',
    missionDescription2: 'We\'re committed to making advanced AI technology accessible to businesses of all sizes, helping them scale their customer support while maintaining the human touch that customers value.',
    vision: 'Our Vision',
    visionDescription: 'To become the leading platform for AI-powered customer support, enabling businesses worldwide to provide exceptional customer experiences through intelligent automation.',
    values: 'Our Values',
    valuesDescription: 'The principles that guide everything we do',
    customerCentric: 'Customer-Centric',
    customerCentricDescription: 'Every decision we make is guided by what\'s best for our customers and their end users. We listen, learn, and continuously improve based on feedback.',
    innovation: 'Innovation',
    innovationDescription: 'We embrace cutting-edge technology and creative solutions to solve complex problems and stay ahead of the curve in AI development.',
    transparency: 'Transparency',
    transparencyDescription: 'We believe in open communication, honest pricing, and clear explanations of how our AI technology works to build trust with our customers.',
    meetFounder: 'Meet the Founder',
    meetFounderDescription: 'The visionary behind Qurius AI, passionate about revolutionizing customer support through intelligent technology.',
    founderName: 'De-Graft',
    founderTitle: 'Founder & Developer, Qurius AI',
    backgroundExperience: 'Background & Experience',
    backgroundDescription: 'De-Graft is a Computer Science student at William Paterson University with a GPA of 4.0, with a vested interest in AI, data mining, and full-stack development. He worked as a Software Engineer at AyaPrep Limited, where he developed a RESTful API for a mobile app, increasing user engagement by 30% and reducing latency by 40%.',
    passionsInterests: 'Passions & Interests',
    passionsDescription: 'De-Graft is passionate about leveraging AI and machine learning to solve real-world problems. He loves building scalable applications that make a difference, from ShareSphere\'s campus sharing platform to enterprise-grade SaaS solutions.',
    quriusVision: 'The Qurius AI Vision',
    quriusVisionDescription: '"Qurius AI was born from my experience building customer-facing applications and understanding the challenges small to medium-sized businesses face with support. I envisioned an intelligent chat widget that could provide instant, personalized responses while maintaining the human touch. The platform combines my expertise in React, TypeScript, and AI to deliver a solution that reduces customer setup time by 80% and provides real-time analytics for actionable insights. I\'m committed to making advanced AI technology accessible to businesses of all sizes, helping them scale their customer support while maintaining the human touch that customers value." - De-Graft',
    skillAI: 'AI/ML',
    skillFullStack: 'Full-Stack Development',
    skillReact: 'React/TypeScript',
    skillSaaS: 'SaaS Architecture',
    skillDataScience: 'Data Science',
    ourTeam: 'Our Team',
    ourTeamDescription: 'We\'re a passionate team of AI researchers, engineers, and customer success specialists dedicated to building the future of customer support.',
    growingTeam: 'Growing Team',
    growingTeamDescription: 'Our diverse team brings together expertise from machine learning, natural language processing, software engineering, and customer experience design.',
    joinTeam: 'Join Our Team',
    experienceAI: 'Experience Our AI in Action',
    experienceAIDescription: 'Want to see what we\'re all about? Try our AI assistant right here on this page! Click the chat icon to ask questions about our company, technology, or anything else.',
    tryItNow: 'Try It Now',
    tryItNowDescription: 'This chatbot uses the same AI technology we provide to our customers. Ask about our features, pricing, team, or company values!',
    readyToStart: 'Ready to Get Started?',
    readyToStartDescription: 'Join thousands of businesses that trust Qurius AI to deliver exceptional customer experiences.',
    getStartedFree: 'Get Started Free',
    contactUs: 'Contact Us'
  },
  navigation: {
    home: 'Home',
    demo: 'Demo',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout'
  },
  plans: {
    free: 'Free',
    starter: 'Starter',
    pro: 'Pro',
    perMonth: 'per month',
    unlimitedMessages: 'Unlimited messages',
    whiteLabelOptions: 'White-label options',
    phoneSupport: '24/7 phone support',
    advancedAnalytics: 'Advanced analytics',
    apiAccess: 'API access',
    customIntegrations: 'Custom integrations',
    basicCustomization: 'Basic customization',
    emailSupport: 'Email support',
    standardFaqTemplates: 'Standard FAQ templates',
    prioritySupport: 'Priority support',
    analyticsDashboard: 'Analytics dashboard',
    customFaqImport: 'Custom FAQ import',
    // New Pro features
    multiLanguageSupport: '🌍 Multi-language support (10+ languages)',
    autoLanguageDetection: '🌐 Auto-language detection',
    translatedFaqTemplates: '📝 Translated FAQ templates',
    languageSpecificCustomization: '🎨 Language-specific customization',
    multiLanguageAnalytics: '📊 Multi-language analytics',
    customLanguageSupport: '🔧 Custom language support',
    customWebCrawling: '🕸️ Custom web crawling'
  },
  chat: {
    welcome: 'How can I help you today?',
    welcomeWithCompany: 'Hello! I\'m your {companyName} assistant. How can I help you today?',
    typeMessage: 'Type your message...',
    send: 'Send',
    minimize: 'Minimize',
    expand: 'Expand',
    typing: 'Typing...',
    online: 'Online',
    offline: 'Offline'
  },
  onboarding: {
    welcome: 'Welcome to Qurius AI',
    companyInfo: 'Company Information',
    customization: 'Widget Customization',
    payment: 'Payment Setup',
    integration: 'Integration',
    complete: 'Complete Setup',
    companyName: 'Company Name',
    industry: 'Industry',
    website: 'Website URL',
    email: 'Contact Email',
    location: 'Location',
    description: 'Description',
    chooseTheme: 'Choose a Theme',
    primaryColor: 'Primary Color',
    backgroundColor: 'Background Color',
    textColor: 'Text Color',
    preview: 'Preview',
    choosePlan: 'Choose Your Billing Plan',
    integrationCode: 'Integration Code',
    instructions: 'Instructions',
    testWidget: 'Test Widget',
    completeSetup: 'Complete Setup'
  },
  landing: {
    heroTitle: 'Your 24/7 AI-Powered Web Assistant & Customer Intelligence Platform',
    heroSubtitle: 'Transform your website into an intelligent, personalized experience with advanced analytics, multi-language support, and automated knowledge management that works around the clock.',
    viewDemo: 'View Demo',
    featuresTitle: 'Why Choose Qurius AI?',
    featuresSubtitle: 'Powerful features designed to enhance your customer support experience',
    feature1Title: 'Intelligent Knowledge Management',
    feature1Description: 'AI-powered semantic search, automatic FAQ generation, and intelligent content crawling that learns and adapts to your business needs.',
    feature2Title: 'Advanced Analytics & Insights',
    feature2Description: 'Comprehensive business intelligence with real-time analytics, customer behavior tracking, and actionable insights to optimize your customer experience.',
    feature3Title: '24/7 Personalized Assistance',
    feature3Description: 'Multi-language support with automatic language detection, personalized responses, and seamless AI fallback for every customer interaction.',
    pricingTitle: 'Simple, Transparent Pricing',
    pricingSubtitle: 'Choose the plan that fits your business needs',
    contactSales: 'Contact Sales',
    ctaTitle: 'Ready to Transform Your Customer Experience?',
    ctaSubtitle: 'Join thousands of businesses already using Qurius AI to provide intelligent, personalized support and gain valuable customer insights.',
    startFreeTrial: 'Start Free Trial',
    emailPlaceholder: 'Enter your email',
    getUpdates: 'Get Updates',
    footerDescription: 'Transform your website with intelligent AI-powered customer intelligence and analytics.',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerSupport: 'Support',
    features: 'Features',
    pricing: 'Pricing',
    installation: 'Installation',
    about: 'About',
    blog: 'Blog',
    careers: 'Careers',
    helpCenter: 'Help Center',
    contact: 'Contact',
    status: 'Status',
    allRightsReserved: 'All rights reserved.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Company Website Content',
    companyWebsiteDescription: 'This is a demonstration of how the chat interface would appear when embedded in a professional company website (PurpleSoft Inc). The chat widget is positioned in the bottom-right corner and can be minimized when not in use.',
    keyFeaturesTitle: 'Key features include:',
    feature1: 'Modern, professional design that matches company branding',
    feature2: 'Light and dark theme support with smooth transitions',
    feature3: 'Responsive design that works on all devices',
    feature4: 'ChatGPT-style message layout with user messages on the right',
    feature5: 'Typing indicators and smooth animations',
    feature6: 'Minimizable interface to reduce screen clutter',
    tryChatTitle: 'Try the Chat Interface',
    tryChatDescription: 'Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and dark themes, minimize the chat, and experience the smooth, professional interface.',
    learnMoreButton: 'Learn More',
    getStartedButton: 'Get Started',
    viewAdminButton: 'View Admin Dashboard'
  }
}

// Spanish translations
const es: TranslationKeys = {
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    view: 'Ver',
    close: 'Cerrar',
    next: 'Siguiente',
    previous: 'Anterior',
    submit: 'Enviar',
    copy: 'Copiar',
    copied: '¡Copiado!',
    getStarted: 'Comenzar',
    step: 'Paso'
  },
  contact: {
    title: 'Contáctanos',
    subtitle: 'Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte a tener éxito con el soporte al cliente impulsado por IA.',
    sendMessage: 'Envíanos un mensaje',
    fullName: 'Nombre completo',
    emailAddress: 'Dirección de correo electrónico',
    company: 'Empresa',
    subject: 'Asunto',
    message: 'Mensaje',
    namePlaceholder: 'Juan Pérez',
    emailPlaceholder: 'juan@empresa.com',
    companyPlaceholder: 'Tu Empresa',
    messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
    selectSubject: 'Selecciona un asunto',
    salesInquiry: 'Consulta de ventas',
    technicalSupport: 'Soporte técnico',
    partnership: 'Asociación',
    careers: 'Carreras',
    other: 'Otro',
    sending: 'Enviando...',
    getInTouch: 'Ponte en contacto',
    emailUs: 'Envíanos un email',
    callUs: 'Llámanos',
    visitUs: 'Visítanos',
    emailDescription: 'Para consultas generales y soporte',
    callDescription: 'Lunes a viernes, 9AM a 6PM EST',
    address: '123 AI Innovation Drive<br />Tech Valley, CA 94043<br />Estados Unidos',
    responseTimes: 'Tiempos de respuesta',
    salesInquiries: 'Consultas de ventas',
    within2Hours: 'Dentro de 2 horas',
    within4Hours: 'Dentro de 4 horas',
    generalQuestions: 'Preguntas generales',
    within24Hours: 'Dentro de 24 horas',
    partnershipRequests: 'Solicitudes de asociación',
    within48Hours: 'Dentro de 48 horas',
    successMessage: '¡Gracias por tu mensaje! Te responderemos dentro de 24 horas.',
    tryAI: 'Prueba nuestro asistente de IA',
    tryAIDescription: '¿Tienes preguntas? ¡Chatea con nuestro asistente de IA para ver Qurius AI en acción! Haz clic en el ícono de chat en la esquina inferior derecha para experimentar nuestro producto de primera mano.',
    experienceAI: 'Experimenta el poder de la IA',
    experienceAIDescription: 'Este chatbot funciona con la misma tecnología que proporcionamos a nuestros clientes. ¡Pregunta sobre nuestras características, precios o cualquier pregunta que tengas sobre Qurius AI!',
    readyToStart: '¿Listo para comenzar?',
    readyToStartDescription: 'Únete a miles de empresas que usan Qurius AI para mejorar su soporte al cliente.',
    startFreeTrial: 'Comenzar prueba gratuita',
    viewDemo: 'Ver demo'
  },
  about: {
    title: 'Acerca de Qurius AI',
    subtitle: 'Potenciando empresas con soporte al cliente inteligente a través de tecnología de IA de vanguardia',
    mission: 'Nuestra Misión',
    missionDescription1: 'En Qurius AI, creemos que cada interacción con el cliente debe ser significativa, eficiente y satisfactoria. Nuestra misión es revolucionar el soporte al cliente proporcionando a las empresas chatbots inteligentes impulsados por IA que entienden el contexto, hablan múltiples idiomas y ofrecen experiencias personalizadas.',
    missionDescription2: 'Estamos comprometidos a hacer que la tecnología de IA avanzada sea accesible para empresas de todos los tamaños, ayudándolas a escalar su soporte al cliente mientras mantienen el toque humano que los clientes valoran.',
    vision: 'Nuestra Visión',
    visionDescription: 'Convertirnos en la plataforma líder para el soporte al cliente impulsado por IA, permitiendo que las empresas de todo el mundo proporcionen experiencias excepcionales al cliente a través de la automatización inteligente.',
    values: 'Nuestros Valores',
    valuesDescription: 'Los principios que guían todo lo que hacemos',
    customerCentric: 'Centrado en el Cliente',
    customerCentricDescription: 'Cada decisión que tomamos está guiada por lo que es mejor para nuestros clientes y sus usuarios finales. Escuchamos, aprendemos y mejoramos continuamente basándonos en la retroalimentación.',
    innovation: 'Innovación',
    innovationDescription: 'Abrazamos la tecnología de vanguardia y las soluciones creativas para resolver problemas complejos y mantenernos a la vanguardia en el desarrollo de IA.',
    transparency: 'Transparencia',
    transparencyDescription: 'Creemos en la comunicación abierta, precios honestos y explicaciones claras de cómo funciona nuestra tecnología de IA para construir confianza con nuestros clientes.',
    meetFounder: 'Conoce al Fundador',
    meetFounderDescription: 'El visionario detrás de Qurius AI, apasionado por revolucionar el soporte al cliente a través de tecnología inteligente.',
    founderName: 'De-Graft',
    founderTitle: 'Fundador y Desarrollador, Qurius AI',
    backgroundExperience: 'Antecedentes y Experiencia',
    backgroundDescription: 'De-Graft es un estudiante de Ciencias de la Computación en la Universidad William Paterson con un GPA de 4.0, aportando experiencia en IA, minería de datos y desarrollo full-stack. Trabajó como Ingeniero de Software en AyaPrep Limited, donde desarrolló una API RESTful para una aplicación móvil, aumentando el compromiso del usuario en un 30% y reduciendo la latencia en un 40%.',
    passionsInterests: 'Pasiones e Intereses',
    passionsDescription: 'De-Graft está apasionado por aprovechar la IA y el aprendizaje automático para resolver problemas del mundo real. Le encanta construir aplicaciones escalables que marcan la diferencia, desde la plataforma de intercambio del campus ShareSphere hasta soluciones SaaS de nivel empresarial.',
    quriusVision: 'La Visión de Qurius AI',
    quriusVisionDescription: '"Qurius AI nació de mi experiencia construyendo aplicaciones orientadas al cliente y entendiendo los desafíos que enfrentan las pequeñas y medianas empresas con el soporte. Visualicé un widget de chat inteligente que pudiera proporcionar respuestas instantáneas y personalizadas mientras mantenía el toque humano. La plataforma combina mi experiencia en React, TypeScript e IA para entregar una solución que reduce el tiempo de configuración del cliente en un 80% y proporciona análisis en tiempo real para insights accionables. Estoy comprometido a hacer que la tecnología de IA avanzada sea accesible para empresas de todos los tamaños, ayudándolas a escalar su soporte al cliente mientras mantienen el toque humano que los clientes valoran." - De-Graft',
    skillAI: 'IA/ML',
    skillFullStack: 'Desarrollo Full-Stack',
    skillReact: 'React/TypeScript',
    skillSaaS: 'Arquitectura SaaS',
    skillDataScience: 'Ciencia de Datos',
    ourTeam: 'Nuestro Equipo',
    ourTeamDescription: 'Somos un equipo apasionado de investigadores de IA, ingenieros y especialistas en éxito del cliente dedicados a construir el futuro del soporte al cliente.',
    growingTeam: 'Equipo en Crecimiento',
    growingTeamDescription: 'Nuestro diverso equipo reúne experiencia de aprendizaje automático, procesamiento de lenguaje natural, ingeniería de software y diseño de experiencia del cliente.',
    joinTeam: 'Únete a Nuestro Equipo',
    experienceAI: 'Experimenta Nuestra IA en Acción',
    experienceAIDescription: '¿Quieres ver de qué se trata todo esto? ¡Prueba nuestro asistente de IA aquí mismo en esta página! Haz clic en el ícono de chat para hacer preguntas sobre nuestra empresa, tecnología o cualquier otra cosa.',
    tryItNow: 'Pruébalo Ahora',
    tryItNowDescription: 'Este chatbot usa la misma tecnología de IA que proporcionamos a nuestros clientes. ¡Pregunta sobre nuestras características, precios, equipo o valores de la empresa!',
    readyToStart: '¿Listo para comenzar?',
    readyToStartDescription: 'Únete a miles de empresas que confían en Qurius AI para entregar experiencias excepcionales al cliente.',
    getStartedFree: 'Comenzar Gratis',
    contactUs: 'Contáctanos'
  },
  navigation: {
    home: 'Inicio',
    demo: 'Demo',
    admin: 'Admin',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión'
  },
  plans: {
    free: 'Gratis',
    starter: 'Básico',
    pro: 'Pro',
    perMonth: 'por mes',
    unlimitedMessages: 'Mensajes ilimitados',
    whiteLabelOptions: 'Opciones de marca blanca',
    phoneSupport: 'Soporte telefónico 24/7',
    advancedAnalytics: 'Analíticas avanzadas',
    apiAccess: 'Acceso a API',
    customIntegrations: 'Integraciones personalizadas',
    basicCustomization: 'Personalización básica',
    emailSupport: 'Soporte por email',
    standardFaqTemplates: 'Plantillas FAQ estándar',
    prioritySupport: 'Soporte prioritario',
    analyticsDashboard: 'Panel de analíticas',
    customFaqImport: 'Importación FAQ personalizada',
    // New Pro features
    multiLanguageSupport: '🌍 Soporte multiidioma (10+ idiomas)',
    autoLanguageDetection: '🌐 Detección automática de idioma',
    translatedFaqTemplates: '📝 Plantillas FAQ traducidas',
    languageSpecificCustomization: '🎨 Personalización específica por idioma',
    multiLanguageAnalytics: '📊 Analíticas multiidioma',
    customLanguageSupport: '🔧 Soporte de idioma personalizado',
    customWebCrawling: '🕸️ Web crawling personalizado'
  },
  chat: {
    welcome: '¿Cómo puedo ayudarte hoy?',
    welcomeWithCompany: '¡Hola! Soy tu asistente {companyName}. ¿Cómo puedo ayudarte hoy?',
    typeMessage: 'Escribe tu mensaje...',
    send: 'Enviar',
    minimize: 'Minimizar',
    expand: 'Expandir',
    typing: 'Escribiendo...',
    online: 'En línea',
    offline: 'Desconectado'
  },
  onboarding: {
    welcome: 'Bienvenido a Qurius AI',
    companyInfo: 'Información de la empresa',
    customization: 'Personalización del widget',
    payment: 'Configuración de pago',
    integration: 'Integración',
    complete: 'Configuración completa',
    companyName: 'Nombre de la empresa',
    industry: 'Industria',
    website: 'URL del sitio web',
    email: 'Email de contacto',
    location: 'Ubicación',
    description: 'Descripción',
    chooseTheme: 'Elegir un tema',
    primaryColor: 'Color primario',
    backgroundColor: 'Color de fondo',
    textColor: 'Color del texto',
    preview: 'Vista previa',
    choosePlan: 'Elegir plan de facturación',
    integrationCode: 'Código de integración',
    instructions: 'Instrucciones',
    testWidget: 'Probar widget',
    completeSetup: 'Completar configuración'
  },
  landing: {
    heroTitle: 'Tu Asistente Web con IA 24/7 y Plataforma de Inteligencia de Clientes',
    heroSubtitle: 'Transforma tu sitio web en una experiencia inteligente y personalizada con analíticas avanzadas, soporte multiidioma y gestión automatizada de conocimiento que funciona las 24 horas.',
    viewDemo: 'Ver Demo',
    featuresTitle: '¿Por qué elegir Qurius AI?',
    featuresSubtitle: 'Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente',
    feature1Title: 'Gestión Inteligente del Conocimiento',
    feature1Description: 'Búsqueda semántica con IA, generación automática de FAQs y crawling inteligente de contenido que aprende y se adapta a las necesidades de tu negocio.',
    feature2Title: 'Analíticas Avanzadas e Insights',
    feature2Description: 'Inteligencia empresarial integral con analíticas en tiempo real, seguimiento del comportamiento del cliente e insights accionables para optimizar la experiencia del cliente.',
    feature3Title: 'Asistencia Personalizada 24/7',
    feature3Description: 'Soporte multiidioma con detección automática de idioma, respuestas personalizadas y transición fluida a IA para cada interacción del cliente.',
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Elige el plan que se adapte a las necesidades de tu negocio',
    contactSales: 'Contactar Ventas',
    ctaTitle: '¿Listo para Transformar la Experiencia de tus Clientes?',
    ctaSubtitle: 'Únete a miles de empresas que ya usan Qurius AI para proporcionar soporte inteligente y personalizado y obtener valiosos insights de clientes.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    emailPlaceholder: 'Ingresa tu email',
    getUpdates: 'Obtener Actualizaciones',
    footerDescription: 'Transforma tu sitio web con inteligencia de clientes e analíticas impulsadas por IA.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    features: 'Características',
    pricing: 'Precios',
    installation: 'Instalación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  demo: {
    title: 'Demo de Interfaz de Chat Profesional',
    companyWebsiteTitle: 'Contenido del Sitio Web de la Empresa',
    companyWebsiteDescription: 'Esta es una demostración de cómo aparecería la interfaz de chat cuando se integre en un sitio web profesional de una empresa (PurpleSoft Inc). El widget de chat está posicionado en la esquina inferior derecha y se puede minimizar cuando no se usa.',
    keyFeaturesTitle: 'Características principales incluyen:',
    feature1: 'Diseño moderno y profesional que coincide con la marca de la empresa',
    feature2: 'Soporte para temas claros y oscuros con transiciones suaves',
    feature3: 'Diseño responsivo que funciona en todos los dispositivos',
    feature4: 'Diseño de mensajes estilo ChatGPT con mensajes del usuario a la derecha',
    feature5: 'Indicadores de escritura y animaciones suaves',
    feature6: 'Interfaz minimizable para reducir el desorden en pantalla',
    tryChatTitle: 'Prueba la Interfaz de Chat',
    tryChatDescription: 'Haz clic en el botón de chat en la esquina inferior derecha para comenzar una conversación. Puedes alternar entre temas claros y oscuros, minimizar el chat y experimentar la interfaz suave y profesional.',
    learnMoreButton: 'Aprender Más',
    getStartedButton: 'Comenzar',
    viewAdminButton: 'Ver Panel de Administración'
  }
}

// French translations
const fr: TranslationKeys = {
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    view: 'Voir',
    close: 'Fermer',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    copy: 'Copier',
    copied: 'Copié !',
    getStarted: 'Commencer',
    step: 'Étape'
  },
  contact: {
    title: 'Contactez-nous',
    subtitle: 'Contactez notre équipe. Nous sommes là pour vous aider à réussir avec le support client alimenté par l\'IA.',
    sendMessage: 'Envoyez-nous un message',
    fullName: 'Nom complet',
    emailAddress: 'Adresse e-mail',
    company: 'Entreprise',
    subject: 'Sujet',
    message: 'Message',
    namePlaceholder: 'Jean Dupont',
    emailPlaceholder: 'jean@entreprise.com',
    companyPlaceholder: 'Votre Entreprise',
    messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
    selectSubject: 'Sélectionnez un sujet',
    salesInquiry: 'Demande de vente',
    technicalSupport: 'Support technique',
    partnership: 'Partenariat',
    careers: 'Carrières',
    other: 'Autre',
    sending: 'Envoi...',
    getInTouch: 'Contactez-nous',
    emailUs: 'Envoyez-nous un e-mail',
    callUs: 'Appelez-nous',
    visitUs: 'Visitez-nous',
    emailDescription: 'Pour les demandes générales et le support',
    callDescription: 'Lundi à vendredi, 9h à 18h EST',
    address: '123 AI Innovation Drive<br />Tech Valley, CA 94043<br />États-Unis',
    responseTimes: 'Temps de réponse',
    salesInquiries: 'Demandes de vente',
    within2Hours: 'Dans les 2 heures',
    within4Hours: 'Dans les 4 heures',
    generalQuestions: 'Questions générales',
    within24Hours: 'Dans les 24 heures',
    partnershipRequests: 'Demandes de partenariat',
    within48Hours: 'Dans les 48 heures',
    successMessage: 'Merci pour votre message ! Nous vous répondrons dans les 24 heures.',
    tryAI: 'Essayez notre assistant IA',
    tryAIDescription: 'Des questions ? Discutez avec notre assistant IA pour voir Qurius AI en action ! Cliquez sur l\'icône de chat en bas à droite pour expérimenter notre produit de première main.',
    experienceAI: 'Découvrez la puissance de l\'IA',
    experienceAIDescription: 'Ce chatbot fonctionne avec la même technologie que nous fournissons à nos clients. Posez des questions sur nos fonctionnalités, nos prix ou toute question que vous avez sur Qurius AI !',
    readyToStart: 'Prêt à commencer ?',
    readyToStartDescription: 'Rejoignez des milliers d\'entreprises qui utilisent Qurius AI pour améliorer leur support client.',
    startFreeTrial: 'Commencer l\'essai gratuit',
    viewDemo: 'Voir la démo'
  },
  about: {
    title: 'À propos de Qurius AI',
    subtitle: 'Donner aux entreprises les moyens d\'agir avec un support client intelligent grâce à la technologie IA de pointe',
    mission: 'Notre Mission',
    missionDescription1: 'Chez Qurius AI, nous croyons que chaque interaction client doit être significative, efficace et satisfaisante. Notre mission est de révolutionner le support client en fournissant aux entreprises des chatbots intelligents alimentés par l\'IA qui comprennent le contexte, parlent plusieurs langues et offrent des expériences personnalisées.',
    missionDescription2: 'Nous nous engageons à rendre la technologie IA avancée accessible aux entreprises de toutes tailles, en les aidant à faire évoluer leur support client tout en maintenant le toucher humain que les clients apprécient.',
    vision: 'Notre Vision',
    visionDescription: 'Devenir la plateforme leader pour le support client alimenté par l\'IA, permettant aux entreprises du monde entier de fournir des expériences client exceptionnelles grâce à l\'automatisation intelligente.',
    values: 'Nos Valeurs',
    valuesDescription: 'Les principes qui guident tout ce que nous faisons',
    customerCentric: 'Centré sur le Client',
    customerCentricDescription: 'Chaque décision que nous prenons est guidée par ce qui est le mieux pour nos clients et leurs utilisateurs finaux. Nous écoutons, apprenons et améliorons continuellement basé sur les retours.',
    innovation: 'Innovation',
    innovationDescription: 'Nous adoptons la technologie de pointe et les solutions créatives pour résoudre des problèmes complexes et rester en avance sur la courbe dans le développement de l\'IA.',
    transparency: 'Transparence',
    transparencyDescription: 'Nous croyons en la communication ouverte, les prix honnêtes et les explications claires de la façon dont notre technologie IA fonctionne pour construire la confiance avec nos clients.',
    meetFounder: 'Rencontrez le Fondateur',
    meetFounderDescription: 'Le visionnaire derrière Qurius AI, passionné par la révolution du support client grâce à la technologie intelligente.',
    founderName: 'De-Graft',
    founderTitle: 'Fondateur et Développeur, Qurius AI',
    backgroundExperience: 'Formation et Expérience',
    backgroundDescription: 'De-Graft est un étudiant en informatique à l\'Université William Paterson avec un GPA de 3,98, apportant une expertise en IA, exploration de données et développement full-stack. Il a travaillé comme ingénieur logiciel chez AyaPrep Limited, où il a développé une API RESTful pour une application mobile, augmentant l\'engagement des utilisateurs de 30% et réduisant la latence de 40%.',
    passionsInterests: 'Passions et Intérêts',
    passionsDescription: 'De-Graft est passionné par l\'exploitation de l\'IA et de l\'apprentissage automatique pour résoudre des problèmes du monde réel. Il aime construire des applications évolutives qui font une différence, de la plateforme de partage du campus ShareSphere aux solutions SaaS de niveau entreprise.',
    quriusVision: 'La Vision de Qurius AI',
    quriusVisionDescription: '"Qurius AI est né de mon expérience dans la construction d\'applications orientées client et la compréhension des défis auxquels font face les petites et moyennes entreprises avec le support. J\'ai imaginé un widget de chat intelligent qui pourrait fournir des réponses instantanées et personnalisées tout en maintenant le toucher humain. La plateforme combine mon expertise en React, TypeScript et IA pour livrer une solution qui réduit le temps de configuration client de 80% et fournit des analyses en temps réel pour des insights actionnables. Je suis engagé à rendre la technologie IA avancée accessible aux entreprises de toutes tailles, en les aidant à faire évoluer leur support client tout en maintenant le toucher humain que les clients apprécient." - De-Graft',
    skillAI: 'IA/ML',
    skillFullStack: 'Développement Full-Stack',
    skillReact: 'React/TypeScript',
    skillSaaS: 'Architecture SaaS',
    skillDataScience: 'Science des Données',
    ourTeam: 'Notre Équipe',
    ourTeamDescription: 'Nous sommes une équipe passionnée de chercheurs en IA, d\'ingénieurs et de spécialistes du succès client dédiés à construire l\'avenir du support client.',
    growingTeam: 'Équipe en Croissance',
    growingTeamDescription: 'Notre équipe diversifiée rassemble l\'expertise de l\'apprentage automatique, du traitement du langage naturel, de l\'ingénierie logicielle et de la conception d\'expérience client.',
    joinTeam: 'Rejoignez Notre Équipe',
    experienceAI: 'Découvrez Notre IA en Action',
    experienceAIDescription: 'Voulez-vous voir de quoi il s\'agit ? Essayez notre assistant IA ici même sur cette page ! Cliquez sur l\'icône de chat pour poser des questions sur notre entreprise, notre technologie ou autre chose.',
    tryItNow: 'Essayez-le Maintenant',
    tryItNowDescription: 'Ce chatbot utilise la même technologie IA que nous fournissons à nos clients. Posez des questions sur nos fonctionnalités, nos prix, notre équipe ou les valeurs de l\'entreprise !',
    readyToStart: 'Prêt à commencer ?',
    readyToStartDescription: 'Rejoignez des milliers d\'entreprises qui font confiance à Qurius AI pour livrer des expériences client exceptionnelles.',
    getStartedFree: 'Commencer Gratuitement',
    contactUs: 'Contactez-nous'
  },
  navigation: {
    home: 'Accueil',
    demo: 'Démo',
    admin: 'Admin',
    login: 'Connexion',
    logout: 'Déconnexion'
  },
  plans: {
    free: 'Gratuit',
    starter: 'Débutant',
    pro: 'Pro',
    perMonth: 'par mois',
    unlimitedMessages: 'Messages illimités',
    whiteLabelOptions: 'Options de marque blanche',
    phoneSupport: 'Support téléphonique 24/7',
    advancedAnalytics: 'Analyses avancées',
    apiAccess: 'Accès API',
    customIntegrations: 'Intégrations personnalisées',
    basicCustomization: 'Personnalisation de base',
    emailSupport: 'Support par email',
    standardFaqTemplates: 'Modèles FAQ standard',
    prioritySupport: 'Support prioritaire',
    analyticsDashboard: 'Tableau de bord analytique',
    customFaqImport: 'Import FAQ personnalisé',
    // New Pro features
    multiLanguageSupport: '🌍 Support multilingue (10+ langues)',
    autoLanguageDetection: '🌐 Détection automatique de la langue',
    translatedFaqTemplates: '📝 Modèles FAQ traduits',
    languageSpecificCustomization: '🎨 Personnalisation spécifique à la langue',
    multiLanguageAnalytics: '📊 Analyses multilingues',
    customLanguageSupport: '🔧 Support de langue personnalisé',
    customWebCrawling: '🕸️ Web crawling personnalisé'
  },
  chat: {
    welcome: 'Comment puis-je vous aider aujourd\'hui ?',
    welcomeWithCompany: 'Bonjour ! Je suis votre assistant {companyName}. Comment puis-je vous aider aujourd\'hui ?',
    typeMessage: 'Tapez votre message...',
    send: 'Envoyer',
    minimize: 'Réduire',
    expand: 'Développer',
    typing: 'En train d\'écrire...',
    online: 'En ligne',
    offline: 'Hors ligne'
  },
  onboarding: {
    welcome: 'Bienvenue sur Qurius AI',
    companyInfo: 'Informations de l\'entreprise',
    customization: 'Personnalisation du widget',
    payment: 'Configuration du paiement',
    integration: 'Intégration',
    complete: 'Configuration terminée',
    companyName: 'Nom de l\'entreprise',
    industry: 'Industrie',
    website: 'URL du site web',
    email: 'Email de contact',
    location: 'Emplacement',
    description: 'Description',
    chooseTheme: 'Choisir un thème',
    primaryColor: 'Couleur primaire',
    backgroundColor: 'Couleur d\'arrière-plan',
    textColor: 'Couleur du texte',
    preview: 'Aperçu',
    choosePlan: 'Choisir votre plan de facturation',
    integrationCode: 'Code d\'intégration',
    instructions: 'Instructions',
    testWidget: 'Tester le widget',
    completeSetup: 'Terminer la configuration'
  },
  landing: {
    heroTitle: 'Transformez votre site web avec un support de chat IA',
    heroSubtitle: 'Fournissez un support client instantané et intelligent avec notre widget de chat IA avancé.',
    viewDemo: 'Voir la démo',
    featuresTitle: 'Pourquoi choisir Qurius AI?',
    featuresSubtitle: 'Fonctionnalités puissantes conçues pour améliorer votre expérience de support client',
    feature1Title: 'Ultra Rapide',
    feature1Description: 'Obtenez des réponses instantanées avec notre système de chat IA.',
    feature2Title: 'Sécurisé et Fiable',
    feature2Description: 'Sécurité de niveau entreprise avec chiffrement des données et protection de la vie privée.',
    feature3Title: 'Support Multilingue',
    feature3Description: 'Soutenez les clients du monde entier avec détection automatique de la langue.',
    pricingTitle: 'Tarification Simple et Transparente',
    pricingSubtitle: 'Choisissez le plan qui correspond aux besoins de votre entreprise',
    contactSales: 'Contacter les Ventes',
    ctaTitle: 'Prêt à commencer?',
    ctaSubtitle: 'Rejoignez des milliers d\'entreprises qui utilisent déjà Qurius AI.',
    startFreeTrial: 'Commencer l\'essai gratuit',
    emailPlaceholder: 'Entrez votre email',
    getUpdates: 'Obtenir les mises à jour',
    footerDescription: 'Transformez votre site web avec un support de chat IA intelligent.',
    footerProduct: 'Produit',
    footerCompany: 'Entreprise',
    footerSupport: 'Support',
    features: 'Fonctionnalités',
    pricing: 'Tarification',
    installation: 'Installation',
    about: 'À propos',
    blog: 'Blog',
    careers: 'Carrières',
    helpCenter: 'Centre d\'aide',
    contact: 'Contact',
    status: 'Statut',
    allRightsReserved: 'Tous droits réservés.'
  },
  demo: {
    title: 'Démo',
    companyWebsiteTitle: 'Site web de l\'entreprise',
    companyWebsiteDescription: 'Description pour le site web de l\'entreprise (PurpleSoft Inc)',
    keyFeaturesTitle: 'Fonctionnalités clés',
    feature1: 'Fonctionnalité 1',
    feature2: 'Fonctionnalité 2',
    feature3: 'Fonctionnalité 3',
    feature4: 'Fonctionnalité 4',
    feature5: 'Fonctionnalité 5',
    feature6: 'Fonctionnalité 6',
    tryChatTitle: 'Essayer le widget de chat',
    tryChatDescription: 'Description pour essayer le widget de chat',
    learnMoreButton: 'En savoir plus',
    getStartedButton: 'Commencer',
    viewAdminButton: 'Voir l\'administrateur'
  }
}

// German translations
const de: TranslationKeys = {
  common: {
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg',
    cancel: 'Abbrechen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    view: 'Anzeigen',
    close: 'Schließen',
    next: 'Weiter',
    previous: 'Zurück',
    submit: 'Absenden',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    getStarted: 'Loslegen',
    step: 'Schritt'
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Kontaktieren Sie unser Team. Wir sind hier, um Ihnen beim Erfolg mit KI-gestütztem Kundenservice zu helfen.',
    sendMessage: 'Nachricht senden',
    fullName: 'Vollständiger Name',
    emailAddress: 'E-Mail-Adresse',
    company: 'Unternehmen',
    subject: 'Betreff',
    message: 'Nachricht',
    namePlaceholder: 'Max Mustermann',
    emailPlaceholder: 'max@unternehmen.com',
    companyPlaceholder: 'Ihr Unternehmen',
    messagePlaceholder: 'Erzählen Sie uns, wie wir Ihnen helfen können...',
    selectSubject: 'Betreff auswählen',
    salesInquiry: 'Verkaufsanfrage',
    technicalSupport: 'Technischer Support',
    partnership: 'Partnerschaft',
    careers: 'Karriere',
    other: 'Sonstiges',
    sending: 'Wird gesendet...',
    getInTouch: 'Kontakt aufnehmen',
    emailUs: 'E-Mail senden',
    callUs: 'Anrufen',
    visitUs: 'Besuchen',
    emailDescription: 'Für allgemeine Anfragen und Support',
    callDescription: 'Montag bis Freitag, 9-18 Uhr EST',
    address: '123 AI Innovation Drive<br />Tech Valley, CA 94043<br />Vereinigte Staaten',
    responseTimes: 'Antwortzeiten',
    salesInquiries: 'Verkaufsanfragen',
    within2Hours: 'Innerhalb von 2 Stunden',
    within4Hours: 'Innerhalb von 4 Stunden',
    generalQuestions: 'Allgemeine Fragen',
    within24Hours: 'Innerhalb von 24 Stunden',
    partnershipRequests: 'Partnerschaftsanfragen',
    within48Hours: 'Innerhalb von 48 Stunden',
    successMessage: 'Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    tryAI: 'KI-Assistent testen',
    tryAIDescription: 'Fragen? Chatten Sie mit unserem KI-Assistenten, um Qurius AI in Aktion zu sehen!',
    experienceAI: 'Die Kraft der KI erleben',
    experienceAIDescription: 'Dieser Chatbot nutzt die gleiche Technologie, die wir unseren Kunden zur Verfügung stellen.',
    readyToStart: 'Bereit zu starten?',
    readyToStartDescription: 'Schließen Sie sich Tausenden von Unternehmen an, die Qurius AI nutzen.',
    startFreeTrial: 'Kostenlose Testversion starten',
    viewDemo: 'Demo ansehen'
  },
  about: {
    title: 'Über Qurius AI',
    subtitle: 'Unternehmen mit intelligentem Kundenservice durch KI-Technologie stärken',
    mission: 'Unsere Mission',
    missionDescription1: 'Bei Qurius AI glauben wir, dass jede Kundeninteraktion bedeutungsvoll, effizient und zufriedenstellend sein sollte.',
    missionDescription2: 'Wir setzen uns dafür ein, fortschrittliche KI-Technologie für Unternehmen aller Größen zugänglich zu machen.',
    vision: 'Unsere Vision',
    visionDescription: 'Die führende Plattform für KI-gestützten Kundenservice zu werden.',
    values: 'Unsere Werte',
    valuesDescription: 'Die Prinzipien, die alles leiten, was wir tun',
    customerCentric: 'Kundenorientiert',
    customerCentricDescription: 'Jede Entscheidung wird von dem geleitet, was für unsere Kunden am besten ist.',
    innovation: 'Innovation',
    innovationDescription: 'Wir nutzen modernste Technologie und kreative Lösungen.',
    transparency: 'Transparenz',
    transparencyDescription: 'Wir glauben an offene Kommunikation und ehrliche Preise.',
    meetFounder: 'Den Gründer kennenlernen',
    meetFounderDescription: 'Der Visionär hinter Qurius AI.',
    founderName: 'De-Graft',
    founderTitle: 'Gründer & Entwickler, Qurius AI',
    backgroundExperience: 'Hintergrund & Erfahrung',
    backgroundDescription: 'De-Graft ist ein Informatikstudent an der William Paterson University.',
    passionsInterests: 'Leidenschaften & Interessen',
    passionsDescription: 'De-Graft ist leidenschaftlich daran interessiert, KI und maschinelles Lernen zu nutzen.',
    quriusVision: 'Die Qurius AI Vision',
    quriusVisionDescription: 'Qurius AI entstand aus der Erfahrung beim Aufbau kundenorientierter Anwendungen.',
    skillAI: 'KI/ML',
    skillFullStack: 'Full-Stack-Entwicklung',
    skillReact: 'React/TypeScript',
    skillSaaS: 'SaaS-Architektur',
    skillDataScience: 'Datenwissenschaft',
    ourTeam: 'Unser Team',
    ourTeamDescription: 'Wir sind ein leidenschaftliches Team von KI-Forschern und Ingenieuren.',
    growingTeam: 'Wachsendes Team',
    growingTeamDescription: 'Unser vielfältiges Team vereint Expertise aus verschiedenen Bereichen.',
    joinTeam: 'Unserem Team beitreten',
    experienceAI: 'Unsere KI in Aktion erleben',
    experienceAIDescription: 'Möchten Sie sehen, worum es geht? Testen Sie unseren KI-Assistenten!',
    tryItNow: 'Jetzt testen',
    tryItNowDescription: 'Dieser Chatbot nutzt die gleiche KI-Technologie, die wir unseren Kunden zur Verfügung stellen.',
    readyToStart: 'Bereit zu starten?',
    readyToStartDescription: 'Schließen Sie sich Tausenden von Unternehmen an.',
    getStartedFree: 'Kostenlos starten',
    contactUs: 'Kontakt'
  },
  navigation: {
    home: 'Startseite',
    demo: 'Demo',
    admin: 'Admin',
    login: 'Anmelden',
    logout: 'Abmelden'
  },
  plans: {
    free: 'Kostenlos',
    starter: 'Starter',
    pro: 'Pro',
    perMonth: 'pro Monat',
    unlimitedMessages: 'Unbegrenzte Nachrichten',
    whiteLabelOptions: 'White-Label-Optionen',
    phoneSupport: '24/7 Telefonsupport',
    advancedAnalytics: 'Erweiterte Analysen',
    apiAccess: 'API-Zugang',
    customIntegrations: 'Benutzerdefinierte Integrationen',
    basicCustomization: 'Grundlegende Anpassung',
    emailSupport: 'E-Mail-Support',
    standardFaqTemplates: 'Standard-FAQ-Vorlagen',
    prioritySupport: 'Prioritäts-Support',
    analyticsDashboard: 'Analytics-Dashboard',
    customFaqImport: 'Benutzerdefinierter FAQ-Import',
    // New Pro features
    multiLanguageSupport: '🌍 Mehrsprachige Unterstützung (10+ Sprachen)',
    autoLanguageDetection: '🌐 Automatische Spracherkennung',
    translatedFaqTemplates: '📝 Übersetzte FAQ-Vorlagen',
    languageSpecificCustomization: '🎨 Sprachspezifische Anpassung',
    multiLanguageAnalytics: '📊 Mehrsprachige Analysen',
    customLanguageSupport: '🔧 Benutzerdefinierte Sprachunterstützung',
    customWebCrawling: '🕸️ Benutzerdefinierter Web-Crawling'
  },
  chat: {
    welcome: 'Wie kann ich Ihnen heute helfen?',
    welcomeWithCompany: 'Hallo! Ich bin Ihr {companyName} Assistent. Wie kann ich Ihnen heute helfen?',
    typeMessage: 'Nachricht eingeben...',
    send: 'Senden',
    minimize: 'Minimieren',
    expand: 'Erweitern',
    typing: 'Schreibt...',
    online: 'Online',
    offline: 'Offline'
  },
  onboarding: {
    welcome: 'Willkommen bei Qurius AI',
    companyInfo: 'Unternehmensinformationen',
    customization: 'Widget-Anpassung',
    payment: 'Zahlungseinrichtung',
    integration: 'Integration',
    complete: 'Einrichtung abschließen',
    companyName: 'Firmenname',
    industry: 'Branche',
    website: 'Website-URL',
    email: 'Kontakt-E-Mail',
    location: 'Standort',
    description: 'Beschreibung',
    chooseTheme: 'Thema wählen',
    primaryColor: 'Primärfarbe',
    backgroundColor: 'Hintergrundfarbe',
    textColor: 'Textfarbe',
    preview: 'Vorschau',
    choosePlan: 'Abrechnungsplan wählen',
    integrationCode: 'Integrationscode',
    instructions: 'Anweisungen',
    testWidget: 'Widget testen',
    completeSetup: 'Einrichtung abschließen'
  },
  landing: {
    heroTitle: 'Transforma tu sitio web con soporte de chat con IA',
    heroSubtitle: 'Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.',
    viewDemo: 'Ver Demo',
    featuresTitle: '¿Por qué elegir Qurius AI?',
    featuresSubtitle: 'Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente',
    feature1Title: 'Súper Rápido',
    feature1Description: 'Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.',
    feature2Title: 'Seguro y Confiable',
    feature2Description: 'Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.',
    feature3Title: 'Soporte Multiidioma',
    feature3Description: 'Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.',
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Elige el plan que se adapte a las necesidades de tu negocio',
    contactSales: 'Contactar Ventas',
    ctaTitle: '¿Listo para comenzar?',
    ctaSubtitle: 'Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    emailPlaceholder: 'Ingresa tu email',
    getUpdates: 'Obtener Actualizaciones',
    footerDescription: 'Transforma tu sitio web con soporte de chat inteligente con IA.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    features: 'Características',
    pricing: 'Precios',
    installation: 'Instalación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Sitio web de la empresa',
    companyWebsiteDescription: 'Descripción para el sitio web de la empresa (PurpleSoft Inc)',
    keyFeaturesTitle: 'Características clave',
    feature1: 'Característica 1',
    feature2: 'Característica 2',
    feature3: 'Característica 3',
    feature4: 'Característica 4',
    feature5: 'Característica 5',
    feature6: 'Característica 6',
    tryChatTitle: 'Prueba el widget de chat',
    tryChatDescription: 'Descripción para probar el widget de chat',
    learnMoreButton: 'Aprender más',
    getStartedButton: 'Comenzar',
    viewAdminButton: 'Ver Administrador'
  }
}

// Chinese translations
const zh: TranslationKeys = {
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    cancel: '取消',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    view: '查看',
    close: '关闭',
    next: '下一步',
    previous: '上一步',
    submit: '提交',
    copy: '复制',
    copied: '已复制！',
    getStarted: '开始使用',
    step: '步骤'
  },
  contact: {
    title: '联系我们',
    subtitle: '欢迎联系我们，我们期待与您合作',
    sendMessage: '发送消息',
    fullName: '姓名',
    emailAddress: '邮箱',
    company: '公司',
    subject: '主题',
    message: '消息',
    namePlaceholder: '请输入您的姓名',
    emailPlaceholder: '请输入您的邮箱',
    companyPlaceholder: '请输入您的公司名称',
    messagePlaceholder: '请输入您的消息',
    selectSubject: '请选择主题',
    salesInquiry: '销售咨询',
    technicalSupport: '技术支持',
    partnership: '合作伙伴关系',
    careers: '职业机会',
    other: '其他',
    sending: '发送中...',
    getInTouch: '获取联系',
    emailUs: '电子邮件我们',
    callUs: '打电话给我们',
    visitUs: '访问我们',
    emailDescription: '我们期待与您合作，请随时联系我们。',
    callDescription: '我们期待与您合作，请随时联系我们。',
    address: '地址',
    responseTimes: '响应时间',
    salesInquiries: '销售咨询',
    within2Hours: '2小时内',
    within4Hours: '4小时内',
    generalQuestions: '一般问题',
    within24Hours: '24小时内',
    partnershipRequests: '合作伙伴请求',
    within48Hours: '48小时内',
    successMessage: '消息发送成功！',
    tryAI: '尝试AI',
    tryAIDescription: '尝试我们的AI聊天小部件，体验智能客户支持。',
    experienceAI: '体验AI',
    experienceAIDescription: '通过我们的AI聊天小部件获得即时响应。',
    readyToStart: '准备开始了吗？',
    readyToStartDescription: '加入数千家已经在使用Qurius AI改善客户支持的企业。',
    startFreeTrial: '开始免费试用',
    viewDemo: '查看演示'
  },
  about: {
    title: '关于我们',
    subtitle: '了解Qurius AI，我们的使命和愿景',
    mission: '使命',
    missionDescription1: '我们的使命是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    missionDescription2: '我们致力于提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    vision: '愿景',
    visionDescription: '我们的愿景是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    values: '价值观',
    valuesDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    customerCentric: '客户中心',
    customerCentricDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    innovation: '创新',
    innovationDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    transparency: '透明',
    transparencyDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    meetFounder: '认识创始人',
    meetFounderDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    founderName: '创始人',
    founderTitle: '创始人',
    backgroundExperience: '背景经验',
    backgroundDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    passionsInterests: '兴趣和激情',
    passionsDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    quriusVision: 'Qurius AI愿景',
    quriusVisionDescription: '我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    skillAI: 'AI技能',
    skillFullStack: '全栈技能',
    skillReact: 'React技能',
    skillSaaS: 'SaaS技能',
    skillDataScience: '数据科学技能',
    ourTeam: '我们的团队',
    ourTeamDescription: '我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    growingTeam: '我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    growingTeamDescription: '我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
    joinTeam: '加入我们的团队',
    experienceAI: '体验AI',
    experienceAIDescription: '我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。',
     tryItNow: '尝试现在',
     tryItNowDescription: '这个聊天机器人使用与我们提供给客户相同的AI技术。询问我们的功能、定价、团队或公司价值观！',
     readyToStart: '准备开始了吗？',
    readyToStartDescription: '加入数千家已经在使用Qurius AI改善客户支持的企业。',
    getStartedFree: '开始免费试用',
    contactUs: '联系我们'
  },
  navigation: {
    home: '首页',
    demo: '演示',
    admin: '管理',
    login: '登录',
    logout: '登出'
  },
  plans: {
    free: '免费',
    starter: '入门版',
    pro: '专业版',
    perMonth: '每月',
    unlimitedMessages: '无限消息',
    whiteLabelOptions: '白标选项',
    phoneSupport: '24/7电话支持',
    advancedAnalytics: '高级分析',
    apiAccess: 'API访问',
    customIntegrations: '自定义集成',
    basicCustomization: '基础定制',
    emailSupport: '邮件支持',
    standardFaqTemplates: '标准FAQ模板',
    prioritySupport: '优先支持',
    analyticsDashboard: '分析仪表板',
    customFaqImport: '自定义FAQ导入',
    // New Pro features
    multiLanguageSupport: '🌍 多语言支持（10+种语言）',
    autoLanguageDetection: '🌐 自动语言检测',
    translatedFaqTemplates: '📝 翻译FAQ模板',
    languageSpecificCustomization: '🎨 语言特定定制',
    multiLanguageAnalytics: '📊 多语言分析',
    customLanguageSupport: '🔧 自定义语言支持',
    customWebCrawling: '🕸️ 自定义网络爬虫'
  },
  chat: {
    welcome: '今天我能为您做些什么？',
    welcomeWithCompany: '您好！我是您的{companyName}助手。今天我能为您做些什么？',
    typeMessage: '输入您的消息...',
    send: '发送',
    minimize: '最小化',
    expand: '展开',
    typing: '正在输入...',
    online: '在线',
    offline: '离线'
  },
  onboarding: {
    welcome: '欢迎使用Qurius AI',
    companyInfo: '公司信息',
    customization: '小部件定制',
    payment: '支付设置',
    integration: '集成',
    complete: '完成设置',
    companyName: '公司名称',
    industry: '行业',
    website: '网站URL',
    email: '联系邮箱',
    location: '位置',
    description: '描述',
    chooseTheme: '选择主题',
    primaryColor: '主色调',
    backgroundColor: '背景色',
    textColor: '文字颜色',
    preview: '预览',
    choosePlan: '选择计费计划',
    integrationCode: '集成代码',
    instructions: '说明',
    testWidget: '测试小部件',
    completeSetup: '完成设置'
  },
  landing: {
    heroTitle: '用AI聊天支持改造您的网站',
    heroSubtitle: '通过我们先进的AI聊天小部件提供即时、智能的客户支持。',
    viewDemo: '查看演示',
    featuresTitle: '为什么选择Qurius AI？',
    featuresSubtitle: '专为提升客户支持体验而设计的强大功能',
    feature1Title: '闪电般快速',
    feature1Description: '通过我们的AI聊天系统获得即时响应。',
    feature2Title: '安全可靠',
    feature2Description: '企业级安全性，具有数据加密和隐私保护。',
    feature3Title: '多语言支持',
    feature3Description: '通过自动语言检测支持全球客户。',
    pricingTitle: '简单透明的定价',
    pricingSubtitle: '选择适合您业务需求的计划',
    contactSales: '联系销售',
    ctaTitle: '准备开始了吗？',
    ctaSubtitle: '加入数千家已经在使用Qurius AI改善客户支持的企业。',
    startFreeTrial: '开始免费试用',
    emailPlaceholder: '输入您的邮箱',
    getUpdates: '获取更新',
    footerDescription: '用智能AI聊天支持改造您的网站。',
    footerProduct: '产品',
    footerCompany: '公司',
    footerSupport: '支持',
    features: '功能',
    pricing: '定价',
    installation: '安装',
    about: '关于',
    blog: '博客',
    careers: '职业',
    helpCenter: '帮助中心',
    contact: '联系',
    status: '状态',
    allRightsReserved: '版权所有。'
  },
  demo: {
    title: '演示',
    companyWebsiteTitle: '公司网站',
    companyWebsiteDescription: '公司网站描述 (PurpleSoft Inc)',
    keyFeaturesTitle: '关键功能',
    feature1: '功能1',
    feature2: '功能2',
    feature3: '功能3',
    feature4: '功能4',
    feature5: '功能5',
    feature6: '功能6',
    tryChatTitle: '试用聊天小部件',
    tryChatDescription: '试用聊天小部件描述',
    learnMoreButton: '了解更多',
    getStartedButton: '开始',
    viewAdminButton: '查看管理员'
  }
}

// Japanese translations
const ja: TranslationKeys = {
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    cancel: 'キャンセル',
    save: '保存',
    delete: '削除',
    edit: '編集',
    view: '表示',
    close: '閉じる',
    next: '次へ',
    previous: '前へ',
    submit: '送信',
    copy: 'コピー',
    copied: 'コピーしました！',
    getStarted: 'はじめる',
    step: 'ステップ'
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: '私たちのチームにお問い合わせください。AI搭載のカスタマーサポートで成功をお手伝いします。',
    sendMessage: 'メッセージを送信',
    fullName: '氏名',
    emailAddress: 'メールアドレス',
    company: '会社名',
    subject: '件名',
    message: 'メッセージ',
    namePlaceholder: '山田太郎',
    emailPlaceholder: 'yamada@company.com',
    companyPlaceholder: 'あなたの会社',
    messagePlaceholder: 'どのようにお手伝いできるか教えてください...',
    selectSubject: '件名を選択',
    salesInquiry: '営業に関するお問い合わせ',
    technicalSupport: '技術サポート',
    partnership: 'パートナーシップ',
    careers: '採用情報',
    other: 'その他',
    sending: '送信中...',
    getInTouch: 'お問い合わせ',
    emailUs: 'メールでお問い合わせ',
    callUs: 'お電話でお問い合わせ',
    visitUs: 'お越しください',
    emailDescription: '一般的なお問い合わせとサポート',
    callDescription: '月曜日から金曜日、9:00-18:00 EST',
    address: '123 AI Innovation Drive<br />Tech Valley, CA 94043<br />アメリカ合衆国',
    responseTimes: '応答時間',
    salesInquiries: '営業に関するお問い合わせ',
    within2Hours: '2時間以内',
    within4Hours: '4時間以内',
    generalQuestions: '一般的な質問',
    within24Hours: '24時間以内',
    partnershipRequests: 'パートナーシップのリクエスト',
    within48Hours: '48時間以内',
    successMessage: 'メッセージをありがとうございます！24時間以内にご返信いたします。',
    tryAI: 'AIアシスタントを試す',
    tryAIDescription: '質問がありますか？Qurius AIの動作を確認するためにAIアシスタントとチャットしてください！',
    experienceAI: 'AIの力を体験',
    experienceAIDescription: 'このチャットボットは、お客様に提供しているのと同じ技術を使用しています。',
    readyToStart: '始める準備はできましたか？',
    readyToStartDescription: 'Qurius AIを使用してカスタマーサポートを向上させている何千もの企業に参加してください。',
    startFreeTrial: '無料トライアルを開始',
    viewDemo: 'デモを見る'
  },
  about: {
    title: 'Qurius AIについて',
    subtitle: '最先端のAI技術によるインテリジェントなカスタマーサポートで企業を支援',
    mission: '私たちの使命',
    missionDescription1: 'Qurius AIでは、すべての顧客とのやり取りが意味のある、効率的で満足のいくものであるべきだと信じています。',
    missionDescription2: '私たちは、高度なAI技術をあらゆる規模の企業にアクセス可能にし、顧客が重視する人間らしさを保ちながらカスタマーサポートを拡張するお手伝いをします。',
    vision: '私たちのビジョン',
    visionDescription: 'AI搭載のカスタマーサポートのリーディングプラットフォームとなり、世界中の企業がインテリジェントな自動化を通じて卓越した顧客体験を提供できるようにすることです。',
    values: '私たちの価値観',
    valuesDescription: '私たちのすべての行動を導く原則',
    customerCentric: '顧客中心',
    customerCentricDescription: '私たちのすべての決定は、顧客とエンドユーザーにとって最善のものによって導かれます。',
    innovation: '革新',
    innovationDescription: '私たちは最先端の技術と創造的なソリューションを受け入れ、複雑な問題を解決し、AI開発の最前線に立ち続けます。',
    transparency: '透明性',
    transparencyDescription: '私たちはオープンなコミュニケーション、誠実な価格設定、AI技術の仕組みについての明確な説明を信じ、顧客との信頼を構築します。',
    meetFounder: '創業者について',
    meetFounderDescription: 'Qurius AIの背後にいるビジョナリー、インテリジェントな技術を通じてカスタマーサポートを革新することに情熱を注いでいます。',
    founderName: 'De-Graft',
    founderTitle: '創業者兼開発者、Qurius AI',
    backgroundExperience: '経歴と経験',
    backgroundDescription: 'De-Graftはウィリアム・パターソン大学のコンピュータサイエンスの学生で、GPA 4.0を保持し、AI、データマイニング、フルスタック開発の専門知識を持っています。',
    passionsInterests: '情熱と興味',
    passionsDescription: 'De-Graftは、AIと機械学習を活用して現実世界の問題を解決することに情熱を注いでいます。',
    quriusVision: 'Qurius AIのビジョン',
    quriusVisionDescription: 'Qurius AIは、顧客向けアプリケーションの構築経験と、中小企業がサポートで直面する課題についての理解から生まれました。',
    skillAI: 'AI/ML',
    skillFullStack: 'フルスタック開発',
    skillReact: 'React/TypeScript',
    skillSaaS: 'SaaSアーキテクチャ',
    skillDataScience: 'データサイエンス',
    ourTeam: '私たちのチーム',
    ourTeamDescription: '私たちは、カスタマーサポートの未来を構築することに専念するAI研究者、エンジニア、カスタマーサクセスの専門家の情熱的なチームです。',
    growingTeam: '成長するチーム',
    growingTeamDescription: '私たちの多様なチームは、機械学習、自然言語処理、ソフトウェアエンジニアリング、顧客体験設計の専門知識を集めています。',
    joinTeam: 'チームに参加',
    experienceAI: '私たちのAIを体験',
    experienceAIDescription: '私たちについて知りたいですか？このページでAIアシスタントを試してみてください！',
    tryItNow: '今すぐ試す',
    tryItNowDescription: 'このチャットボットは、お客様に提供しているのと同じAI技術を使用しています。',
    readyToStart: '始める準備はできましたか？',
    readyToStartDescription: 'Qurius AIを信頼して卓越した顧客体験を提供している何千もの企業に参加してください。',
    getStartedFree: '無料で始める',
    contactUs: 'お問い合わせ'
  },
  navigation: {
    home: 'ホーム',
    demo: 'デモ',
    admin: '管理',
    login: 'ログイン',
    logout: 'ログアウト'
  },
  plans: {
    free: '無料',
    starter: 'スターター',
    pro: 'プロ',
    perMonth: '月額',
    unlimitedMessages: '無制限メッセージ',
    whiteLabelOptions: 'ホワイトラベルオプション',
    phoneSupport: '24/7 電話サポート',
    advancedAnalytics: '高度な分析',
    apiAccess: 'API アクセス',
    customIntegrations: 'カスタム統合',
    basicCustomization: '基本的なカスタマイズ',
    emailSupport: 'メールサポート',
    standardFaqTemplates: '標準FAQテンプレート',
    prioritySupport: '優先サポート',
    analyticsDashboard: '分析ダッシュボード',
    customFaqImport: 'カスタムFAQインポート',
    // New Pro features
    multiLanguageSupport: '🌍 多言語サポート（10+言語）',
    autoLanguageDetection: '🌐 自動言語検出',
    translatedFaqTemplates: '📝 翻訳済みFAQテンプレート',
    languageSpecificCustomization: '🎨 言語固有のカスタマイズ',
    multiLanguageAnalytics: '📊 多言語分析',
    customLanguageSupport: '🔧 カスタム言語サポート',
    customWebCrawling: '🕸️ カスタムWebクローリング'
  },
  chat: {
    welcome: '今日はどのようにお手伝いできますか？',
    welcomeWithCompany: 'こんにちは！私はあなたの{companyName}アシスタントです。今日はどのようにお手伝いできますか？',
    typeMessage: 'メッセージを入力...',
    send: '送信',
    minimize: '最小化',
    expand: '展開',
    typing: '入力中...',
    online: 'オンライン',
    offline: 'オフライン'
  },
  onboarding: {
    welcome: 'Qurius AIへようこそ',
    companyInfo: '会社情報',
    customization: 'ウィジェットカスタマイズ',
    payment: '支払い設定',
    integration: '統合',
    complete: 'セットアップ完了',
    companyName: '会社名',
    industry: '業界',
    website: 'ウェブサイトURL',
    email: '連絡先メール',
    location: '場所',
    description: '説明',
    chooseTheme: 'テーマを選択',
    primaryColor: 'プライマリカラー',
    backgroundColor: '背景色',
    textColor: 'テキスト色',
    preview: 'プレビュー',
    choosePlan: '請求プランを選択',
    integrationCode: '統合コード',
    instructions: '手順',
    testWidget: 'ウィジェットをテスト',
    completeSetup: 'セットアップ完了'
  },
  landing: {
    heroTitle: 'AIチャットサポートでウェブサイトを変革',
    heroSubtitle: '高度なAIチャットウィジェットで即座でインテリジェントなカスタマーサポートを提供。',
    viewDemo: 'デモを見る',
    featuresTitle: 'Qurius AIを選ぶ理由',
    featuresSubtitle: 'カスタマーサポート体験を向上させるために設計された強力な機能',
    feature1Title: '超高速',
    feature1Description: 'AIチャットシステムで即座のレスポンスを取得。',
    feature2Title: '安全で信頼性',
    feature2Description: 'データ暗号化とプライバシー保護によるエンタープライズレベルのセキュリティ。',
    feature3Title: '多言語サポート',
    feature3Description: '自動言語検出で世界中の顧客をサポート。',
    pricingTitle: 'シンプルで透明な価格設定',
    pricingSubtitle: 'ビジネスニーズに合ったプランを選択',
    contactSales: '営業に連絡',
    ctaTitle: '始める準備はできましたか？',
    ctaSubtitle: 'すでにQurius AIを使用してカスタマーサポートを改善している何千もの企業に参加。',
    startFreeTrial: '無料トライアルを開始',
    emailPlaceholder: 'メールアドレスを入力',
    getUpdates: 'アップデートを取得',
    footerDescription: 'インテリジェントなAIチャットサポートでウェブサイトを変革。',
    footerProduct: '製品',
    footerCompany: '会社',
    footerSupport: 'サポート',
    features: '機能',
    pricing: '価格',
    installation: 'インストール',
    about: '会社概要',
    blog: 'ブログ',
    careers: '採用',
    helpCenter: 'ヘルプセンター',
    contact: 'お問い合わせ',
    status: 'ステータス',
    allRightsReserved: '全著作権所有。'
  },
  demo: {
    title: 'デモ',
    companyWebsiteTitle: '会社ウェブサイト',
    companyWebsiteDescription: '会社ウェブサイトの説明 (PurpleSoft Inc)',
    keyFeaturesTitle: '主要機能',
    feature1: '機能1',
    feature2: '機能2',
    feature3: '機能3',
    feature4: '機能4',
    feature5: '機能5',
    feature6: '機能6',
    tryChatTitle: 'チャットウィジェットを試す',
    tryChatDescription: 'チャットウィジェットを試すための説明',
    learnMoreButton: 'もっと知る',
    getStartedButton: 'はじめる',
    viewAdminButton: '管理者を見る'
  }
}

// Portuguese translations
const pt: TranslationKeys = {
  common: {
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
    cancel: 'Cancelar',
    save: 'Salvar',
    delete: 'Excluir',
    edit: 'Editar',
    view: 'Ver',
    close: 'Fechar',
    next: 'Próximo',
    previous: 'Anterior',
    submit: 'Enviar',
    copy: 'Copiar',
    copied: 'Copiado!',
    getStarted: 'Comenzar',
    step: 'Paso'
  },
  contact: {
    title: 'Contato',
    subtitle: 'Fale conosco',
    sendMessage: 'Enviar mensagem',
    fullName: 'Nome completo',
    emailAddress: 'Endereço de e-mail',
    company: 'Empresa',
    subject: 'Assunto',
    message: 'Mensagem',
    namePlaceholder: 'Nome completo',
    emailPlaceholder: 'Endereço de e-mail',
    companyPlaceholder: 'Empresa',
    messagePlaceholder: 'Mensagem',
    selectSubject: 'Selecione o assunto',
    salesInquiry: 'Inquérito de vendas',
    technicalSupport: 'Suporte técnico',
    partnership: 'Parceiros',
    careers: 'Carreiras',
    other: 'Outro',
    sending: 'Enviando...',
    getInTouch: 'Fale conosco',
    emailUs: 'Email-nos',
    callUs: 'Ligue-nos',
    visitUs: 'Visite-nos',
    emailDescription: 'Nos envie um e-mail',
    callDescription: 'Ligue-nos',
    address: 'Endereço',
    responseTimes: 'Tempos de resposta',
    salesInquiries: 'Inquéritos de vendas',
    within2Hours: 'Dentro de 2 horas',
    within4Hours: 'Dentro de 4 horas',
    generalQuestions: 'Perguntas gerais',
    within24Hours: 'Dentro de 24 horas',
    partnershipRequests: 'Solicitações de parceria',
    within48Hours: 'Dentro de 48 horas',
    successMessage: 'Mensagem enviada com sucesso!',
    tryAI: 'Experimente a IA',
    tryAIDescription: 'Experimente a IA agora mesmo!',
    experienceAI: 'Experiência IA',
    experienceAIDescription: 'Experimente a IA agora mesmo!',
    readyToStart: 'Pronto para começar?',
    readyToStartDescription: 'Junte-se a milhares de empresas que já usam Qurius AI.',
    startFreeTrial: 'Comece grátis',
    viewDemo: 'Ver demo'
  },
  about: {
    title: 'Sobre',
    subtitle: 'Sobre a Qurius AI',
    mission: 'Missão',
    missionDescription1: 'Missão 1',
    missionDescription2: 'Missão 2',
    vision: 'Visão',
    visionDescription: 'Visão 1',
    values: 'Valores',
    valuesDescription: 'Valores 1',
    customerCentric: 'Centrado no cliente',
    customerCentricDescription: 'Centrado no cliente 1',
    innovation: 'Inovação',
    innovationDescription: 'Inovação 1',
    transparency: 'Transparência',
    transparencyDescription: 'Transparência 1',
    meetFounder: 'Conheça o fundador',
    meetFounderDescription: 'Conheça o fundador 1',
    founderName: 'Nome do fundador',
    founderTitle: 'Título do fundador',
    backgroundExperience: 'Experiência de fundo',
    backgroundDescription: 'Experiência de fundo 1',
    passionsInterests: 'Passions and Interests',
    passionsDescription: 'Passions and Interests 1',
    quriusVision: 'Qurius Vision',
    quriusVisionDescription: 'Qurius Vision 1',
    skillAI: 'Habilidades IA',
    skillFullStack: 'Habilidades Full Stack',
    skillReact: 'Habilidades React',
    skillSaaS: 'Habilidades SaaS',
    skillDataScience: 'Habilidades Data Science',
    ourTeam: 'Nosso time',
    ourTeamDescription: 'Nosso time 1',
    growingTeam: 'Crescendo',
    growingTeamDescription: 'Crescendo 1',
    joinTeam: 'Junte-se a nós',
    experienceAI: 'Experiência IA',
    experienceAIDescription: 'Experiência IA 1',
    tryItNow: 'Experimente agora',
    tryItNowDescription: 'Experimente agora 1',
    readyToStart: 'Pronto para começar?',
    readyToStartDescription: 'Pronto para começar 1',
    getStartedFree: 'Comece grátis',
    contactUs: 'Contate-nos'
  },
  navigation: {
    home: 'Início',
    demo: 'Demo',
    admin: 'Admin',
    login: 'Entrar',
    logout: 'Sair'
  },
  plans: {
    free: 'Gratuito',
    starter: 'Iniciante',
    pro: 'Pro',
    perMonth: 'por mês',
    unlimitedMessages: 'Mensagens ilimitadas',
    whiteLabelOptions: 'Opções de marca branca',
    phoneSupport: 'Suporte telefônico 24/7',
    advancedAnalytics: 'Análises avançadas',
    apiAccess: 'Acesso à API',
    customIntegrations: 'Integrações personalizadas',
    basicCustomization: 'Personalização básica',
    emailSupport: 'Suporte por email',
    standardFaqTemplates: 'Modelos FAQ padrão',
    prioritySupport: 'Suporte prioritário',
    analyticsDashboard: 'Painel de análises',
    customFaqImport: 'Importação FAQ personalizada',
    // New Pro features
    multiLanguageSupport: '🌍 Suporte multilíngue (10+ idiomas)',
    autoLanguageDetection: '🌐 Detecção automática de idioma',
    translatedFaqTemplates: '📝 Modelos FAQ traduzidos',
    languageSpecificCustomization: '🎨 Personalização específica por idioma',
    multiLanguageAnalytics: '📊 Análises multilíngues',
    customLanguageSupport: '🔧 Suporte de idioma personalizado',
    customWebCrawling: '🕸️ Web crawling personalizado'
  },
  chat: {
    welcome: 'Olá! Como posso ajudá-lo hoje?',
    welcomeWithCompany: 'Olá! Sou seu assistente {companyName}. Como posso ajudá-lo hoje?',
    typeMessage: 'Digite sua mensagem...',
    send: 'Enviar',
    minimize: 'Minimizar',
    expand: 'Expandir',
    typing: 'Digitando...',
    online: 'Online',
    offline: 'Offline'
  },
  onboarding: {
    welcome: 'Bem-vindo ao Qurius AI',
    companyInfo: 'Informações da empresa',
    customization: 'Personalização do widget',
    payment: 'Configuração de pagamento',
    integration: 'Integração',
    complete: 'Configuração completa',
    companyName: 'Nome da empresa',
    industry: 'Indústria',
    website: 'URL do site',
    email: 'Email de contato',
    location: 'Localização',
    description: 'Descrição',
    chooseTheme: 'Escolher tema',
    primaryColor: 'Cor primária',
    backgroundColor: 'Cor de fundo',
    textColor: 'Cor do texto',
    preview: 'Visualizar',
    choosePlan: 'Escolher plano de cobrança',
    integrationCode: 'Código de integração',
    instructions: 'Instruções',
    testWidget: 'Testar widget',
    completeSetup: 'Completar configuração'
  },
  landing: {
    heroTitle: 'Transforme seu site com suporte de chat com IA',
    heroSubtitle: 'Forneça suporte ao cliente instantâneo e inteligente com nosso widget de chat com IA avançado.',
    viewDemo: 'Ver Demo',
    featuresTitle: 'Por que escolher Qurius AI?',
    featuresSubtitle: 'Recursos poderosos projetados para melhorar sua experiência de suporte ao cliente',
    feature1Title: 'Super Rápido',
    feature1Description: 'Obtenha respostas instantâneas com nosso sistema de chat com IA.',
    feature2Title: 'Seguro e Confiável',
    feature2Description: 'Segurança de nível empresarial com criptografia de dados e proteção de privacidade.',
    feature3Title: 'Suporte Multilíngue',
    feature3Description: 'Suporte clientes em todo o mundo com detecção automática de idioma.',
    pricingTitle: 'Preços Simples e Transparentes',
    pricingSubtitle: 'Escolha o plano que se adapta às necessidades do seu negócio',
    contactSales: 'Contatar Vendas',
    ctaTitle: 'Pronto para começar?',
    ctaSubtitle: 'Junte-se a milhares de empresas que já usam Qurius AI.',
    startFreeTrial: 'Iniciar Teste Gratuito',
    emailPlaceholder: 'Digite seu email',
    getUpdates: 'Obter Atualizações',
    footerDescription: 'Transforme seu site com suporte de chat inteligente com IA.',
    footerProduct: 'Produto',
    footerCompany: 'Empresa',
    footerSupport: 'Suporte',
    features: 'Recursos',
    pricing: 'Preços',
    installation: 'Instalação',
    about: 'Sobre',
    blog: 'Blog',
    careers: 'Carreiras',
    helpCenter: 'Central de Ajuda',
    contact: 'Contato',
    status: 'Status',
    allRightsReserved: 'Todos os direitos reservados.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Site da Empresa',
    companyWebsiteDescription: 'Descrição para o site da empresa (PurpleSoft Inc)',
    keyFeaturesTitle: 'Recursos Principais',
    feature1: 'Recursos 1',
    feature2: 'Recursos 2',
    feature3: 'Recursos 3',
    feature4: 'Recursos 4',
    feature5: 'Recursos 5',
    feature6: 'Recursos 6',
    tryChatTitle: 'Experimentar Widget de Chat',
    tryChatDescription: 'Descrição para experimentar o widget de chat',
    learnMoreButton: 'Saber Mais',
    getStartedButton: 'Começar',
    viewAdminButton: 'Ver Administrador'
  }
}

// Italian translations
const it: TranslationKeys = {
  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    cancel: 'Annulla',
    save: 'Salva',
    delete: 'Elimina',
    edit: 'Modifica',
    view: 'Visualizza',
    close: 'Chiudi',
    next: 'Avanti',
    previous: 'Indietro',
    submit: 'Invia',
    copy: 'Copia',
    copied: 'Copiato!',
    getStarted: 'Inizia',
    step: 'Passo'
  },
  contact: {
    title: 'Contattaci',
    subtitle: 'Hai domande? Contattaci e saremo felici di aiutarti.',
    sendMessage: 'Invia messaggio',
    fullName: 'Nome e cognome',
    emailAddress: 'Email',
    company: 'Azienda',
    subject: 'Oggetto',
    message: 'Messaggio',
    namePlaceholder: 'Inserisci il tuo nome',
    emailPlaceholder: 'Inserisci la tua email',
    companyPlaceholder: 'Inserisci il nome della tua azienda',
    messagePlaceholder: 'Inserisci il tuo messaggio',
    selectSubject: 'Seleziona oggetto',
    salesInquiry: 'Inquiry vendite',
    technicalSupport: 'Supporto tecnico',
    partnership: 'Partnership',
    careers: 'Carriere',
    other: 'Altro',
    sending: 'Invio messaggio...',
    getInTouch: 'Contattaci',
    emailUs: 'Email',
    callUs: 'Chiamaci',
    visitUs: 'Visita il nostro sito',
    emailDescription: 'Invia un\'email a support@qurius.ai',
    callDescription: 'Chiamaci al +1 (202) 555-0123',
    address: '123 Main St, Anytown, USA',
    responseTimes: 'Tempi di risposta',
    salesInquiries: 'Inquiry vendite',
    within2Hours: 'Entro 2 ore',
    within4Hours: 'Entro 4 ore',
    generalQuestions: 'Domande generali',
    within24Hours: 'Entro 24 ore',
    partnershipRequests: 'Richieste di partnership',
    within48Hours: 'Entro 48 ore',
    successMessage: 'Messaggio inviato con successo!',
    tryAI: 'Prova l\'IA',
    tryAIDescription: 'Prova l\'IA e scopri come può aiutarti.',
    experienceAI: 'Esperienza AI',
    experienceAIDescription: 'Prova l\'IA e scopri come può aiutarti.',
    readyToStart: 'Pronto per iniziare?',
    readyToStartDescription: 'Unisciti a migliaia di aziende che hanno già migliorato il supporto al cliente con Qurius AI.',
    startFreeTrial: 'Inizia gratuitamente',
    viewDemo: 'Vedi demo'
  },
  about: {
    title: 'Chi siamo',
    subtitle: 'Scopri Qurius AI, la nostra missione e la nostra visione',
    mission: 'La nostra missione',
    missionDescription1: 'In Qurius AI, crediamo che ogni interazione con i clienti dovrebbe essere significativa, efficiente e soddisfacente.',
    missionDescription2: 'Rendiamo la tecnologia AI avanzata accessibile a tutte le aziende, aiutandole ad espandere il supporto clienti mantenendo l\'umanità che i clienti apprezzano.',
    vision: 'La nostra visione',
    visionDescription: 'Essere la piattaforma leader per il supporto clienti alimentato dall\'AI, permettendo alle aziende di tutto il mondo di fornire esperienze clienti eccezionali attraverso l\'automazione intelligente.',
    values: 'I nostri valori',
    valuesDescription: 'I principi che guidano tutto ciò che facciamo',
    customerCentric: 'Centrato sul cliente',
    customerCentricDescription: 'Tutte le nostre decisioni sono guidate da ciò che è meglio per i nostri clienti e utenti finali.',
    innovation: 'Innovazione',
    innovationDescription: 'Abbracciamo tecnologie all\'avanguardia e soluzioni creative per risolvere problemi complessi e rimanere all\'avanguardia nello sviluppo dell\'AI.',
    transparency: 'Trasparenza',
    transparencyDescription: 'Crediamo nella comunicazione aperta, prezzi onesti e spiegazioni chiare su come funziona la tecnologia AI per costruire fiducia con i nostri clienti.',
    meetFounder: 'Conosci il fondatore',
    meetFounderDescription: 'Il visionario dietro Qurius AI, appassionato di rivoluzionare il supporto clienti attraverso tecnologie intelligenti.',
    founderName: 'De-Graft',
    founderTitle: 'Fondatore e Sviluppatore, Qurius AI',
    backgroundExperience: 'Background ed esperienza',
    backgroundDescription: 'De-Graft è uno studente di informatica presso la William Paterson University con un GPA di 4.0, specializzato in AI, data mining e sviluppo full-stack.',
    passionsInterests: 'Passioni e interessi',
    passionsDescription: 'De-Graft è appassionato di utilizzare l\'AI e il machine learning per risolvere problemi del mondo reale.',
    quriusVision: 'La visione di Qurius AI',
    quriusVisionDescription: 'Qurius AI è nata dall\'esperienza nella costruzione di applicazioni per clienti e dalla comprensione delle sfide che le piccole e medie imprese affrontano nel supporto.',
    skillAI: 'AI/ML',
    skillFullStack: 'Sviluppo Full-Stack',
    skillReact: 'React/TypeScript',
    skillSaaS: 'Architettura SaaS',
    skillDataScience: 'Data Science',
    ourTeam: 'Il nostro team',
    ourTeamDescription: 'Siamo un team appassionato di ricercatori AI, ingegneri e professionisti del customer success dedicati a costruire il futuro del supporto clienti.',
    growingTeam: 'Team in crescita',
    growingTeamDescription: 'Il nostro team diversificato riunisce competenze in machine learning, elaborazione del linguaggio naturale, ingegneria del software e design dell\'esperienza utente.',
    joinTeam: 'Unisciti al team',
    experienceAI: 'Sperimenta la nostra AI',
    experienceAIDescription: 'Vuoi saperne di più su di noi? Prova l\'assistente AI su questa pagina!',
    tryItNow: 'Prova ora',
    tryItNowDescription: 'Questo chatbot utilizza la stessa tecnologia AI che forniamo ai nostri clienti.',
    readyToStart: 'Pronto per iniziare?',
    readyToStartDescription: 'Unisciti a migliaia di aziende che si fidano di Qurius AI per fornire esperienze clienti eccezionali.',
    getStartedFree: 'Inizia gratuitamente',
    contactUs: 'Contattaci'
  },
  navigation: {
    home: 'Home',
    demo: 'Demo',
    admin: 'Admin',
    login: 'Accedi',
    logout: 'Esci'
  },
  plans: {
    free: 'Gratuito',
    starter: 'Base',
    pro: 'Pro',
    perMonth: 'al mese',
    unlimitedMessages: 'Messaggi illimitati',
    whiteLabelOptions: 'Opzioni white-label',
    phoneSupport: 'Supporto telefonico 24/7',
    advancedAnalytics: 'Analisi avanzate',
    apiAccess: 'Accesso API',
    customIntegrations: 'Integrazioni personalizzate',
    basicCustomization: 'Personalizzazione di base',
    emailSupport: 'Supporto email',
    standardFaqTemplates: 'Modelli FAQ standard',
    prioritySupport: 'Supporto prioritario',
    analyticsDashboard: 'Dashboard analitico',
    customFaqImport: 'Import FAQ personalizzato',
    // New Pro features
    multiLanguageSupport: '🌍 Supporto multilingue (10+ lingue)',
    autoLanguageDetection: '🌐 Rilevamento automatico della lingua',
    translatedFaqTemplates: '📝 Modelli FAQ tradotti',
    languageSpecificCustomization: '🎨 Personalizzazione specifica per lingua',
    multiLanguageAnalytics: '📊 Analisi multilingue',
    customLanguageSupport: '🔧 Supporto lingua personalizzato',
    customWebCrawling: '🕸️ Web crawling personalizzato'
  },
  chat: {
    welcome: 'Ciao! Come posso aiutarti oggi?',
    welcomeWithCompany: 'Ciao! Sono il tuo assistente {companyName}. Come posso aiutarti oggi?',
    typeMessage: 'Scrivi il tuo messaggio...',
    send: 'Invia',
    minimize: 'Riduci',
    expand: 'Espandi',
    typing: 'Sta scrivendo...',
    online: 'Online',
    offline: 'Offline'
  },
  onboarding: {
    welcome: 'Benvenuto su Qurius AI',
    companyInfo: 'Informazioni aziendali',
    customization: 'Personalizzazione widget',
    payment: 'Configurazione pagamento',
    integration: 'Integrazione',
    complete: 'Configurazione completa',
    companyName: 'Nome azienda',
    industry: 'Settore',
    website: 'URL sito web',
    email: 'Email di contatto',
    location: 'Posizione',
    description: 'Descrizione',
    chooseTheme: 'Scegli tema',
    primaryColor: 'Colore primario',
    backgroundColor: 'Colore di sfondo',
    textColor: 'Colore testo',
    preview: 'Anteprima',
    choosePlan: 'Scegli piano di fatturazione',
    integrationCode: 'Codice integrazione',
    instructions: 'Istruzioni',
    testWidget: 'Testa widget',
    completeSetup: 'Completa configurazione'
  },
  landing: {
    heroTitle: 'Transforma tu sitio web con soporte de chat con IA',
    heroSubtitle: 'Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.',
    viewDemo: 'Ver Demo',
    featuresTitle: '¿Por qué elegir Qurius AI?',
    featuresSubtitle: 'Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente',
    feature1Title: 'Súper Rápido',
    feature1Description: 'Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.',
    feature2Title: 'Seguro y Confiable',
    feature2Description: 'Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.',
    feature3Title: 'Soporte Multiidioma',
    feature3Description: 'Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.',
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Elige el plan que se adapte a las necesidades de tu negocio',
    contactSales: 'Contactar Ventas',
    ctaTitle: '¿Listo para comenzar?',
    ctaSubtitle: 'Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    emailPlaceholder: 'Ingresa tu email',
    getUpdates: 'Obtener Actualizaciones',
    footerDescription: 'Transforma tu sitio web con soporte de chat inteligente con IA.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    features: 'Características',
    pricing: 'Precios',
    installation: 'Instalación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Sito web dell\'azienda',
    companyWebsiteDescription: 'Descrizione per il sito web dell\'azienda (PurpleSoft Inc)',
    keyFeaturesTitle: 'Funzionalità principali',
    feature1: 'Funzionalità 1',
    feature2: 'Funzionalità 2',
    feature3: 'Funzionalità 3',
    feature4: 'Funzionalità 4',
    feature5: 'Funzionalità 5',
    feature6: 'Funzionalità 6',
    tryChatTitle: 'Prova il widget di chat',
    tryChatDescription: 'Descrizione per provare il widget di chat',
    learnMoreButton: 'Scopri di più',
    getStartedButton: 'Inizia',
    viewAdminButton: 'Vedi amministratore'
  }
}

// Russian translations
const ru: TranslationKeys = {
  common: {
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успех',
    cancel: 'Отмена',
    save: 'Сохранить',
    delete: 'Удалить',
    edit: 'Редактировать',
    view: 'Просмотр',
    close: 'Закрыть',
    next: 'Далее',
    previous: 'Назад',
    submit: 'Отправить',
    copy: 'Копировать',
    copied: 'Скопировано!',
    getStarted: 'Начать',
    step: 'Шаг'
  },
  contact: {
    title: 'Свяжитесь с нами',
    subtitle: 'Мы здесь, чтобы помочь вам!',
    sendMessage: 'Отправить сообщение',
    fullName: 'Имя',
    emailAddress: 'Email',
    company: 'Компания',
    subject: 'Тема',
    message: 'Сообщение',
    namePlaceholder: 'Ваше имя',
    emailPlaceholder: 'Ваш email',
    companyPlaceholder: 'Ваша компания',
    messagePlaceholder: 'Ваше сообщение',
    selectSubject: 'Выберите тему',
    salesInquiry: 'Вопрос о продажах',
    technicalSupport: 'Техническая поддержка',
    partnership: 'Партнерство',
    careers: 'Карьера',
    other: 'Другое',
    sending: 'Отправка...',
    getInTouch: 'Свяжитесь с нами',
    emailUs: 'Напишите нам',
    callUs: 'Позвоните нам',
    visitUs: 'Посетите нас',
    emailDescription: 'Напишите нам по электронной почте',
    callDescription: 'Позвоните нам по телефону',
    address: 'Адрес',
    responseTimes: 'Время ответа',
    salesInquiries: 'Вопросы о продажах',
    within2Hours: 'В течение 2 часов',
    within4Hours: 'В течение 4 часов',
    generalQuestions: 'Общие вопросы',
    within24Hours: 'В течение 24 часов',
    partnershipRequests: 'Партнерские запросы',
    within48Hours: 'В течение 48 часов',
    successMessage: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.',
    tryAI: 'Попробуйте AI',
    tryAIDescription: 'Попробуйте нашу AI-поддержку прямо сейчас!',
    experienceAI: 'Опыт AI',
    experienceAIDescription: 'Наша команда предоставляет передовой виджет чата с AI, который обеспечивает интеллектуальную поддержку клиентов для компаний.',
    readyToStart: 'Готовы начать?',
    readyToStartDescription: 'Присоединяйтесь к тысячам компаний, которые уже используют Qurius AI для улучшения поддержки клиентов.',
    startFreeTrial: 'Начать бесплатно',
    viewDemo: 'Посмотреть демо'
  },
  about: {
    title: 'О нас',
    subtitle: 'Узнайте о Qurius AI, нашей миссии и видении',
    mission: 'Наша миссия',
    missionDescription1: 'В Qurius AI мы верим, что каждое взаимодействие с клиентами должно быть значимым, эффективным и удовлетворительным.',
    missionDescription2: 'Мы делаем передовые технологии ИИ доступными для компаний любого размера, помогая им расширять поддержку клиентов, сохраняя при этом человечность, которую ценят клиенты.',
    vision: 'Наше видение',
    visionDescription: 'Быть ведущей платформой для поддержки клиентов на базе ИИ, позволяя компаниям по всему миру предоставлять исключительный опыт клиентов через интеллектуальную автоматизацию.',
    values: 'Наши ценности',
    valuesDescription: 'Принципы, которые направляют все, что мы делаем',
    customerCentric: 'Ориентация на клиента',
    customerCentricDescription: 'Все наши решения направляются тем, что лучше всего для наших клиентов и конечных пользователей.',
    innovation: 'Инновации',
    innovationDescription: 'Мы принимаем передовые технологии и творческие решения для решения сложных проблем и остаемся на переднем крае разработки ИИ.',
    transparency: 'Прозрачность',
    transparencyDescription: 'Мы верим в открытое общение, честное ценообразование и четкие объяснения того, как работает технология ИИ, чтобы строить доверие с нашими клиентами.',
    meetFounder: 'Познакомьтесь с основателем',
    meetFounderDescription: 'Видение за Qurius AI, страстно увлеченный революционизацией поддержки клиентов через интеллектуальные технологии.',
    founderName: 'De-Graft',
    founderTitle: 'Основатель и Разработчик, Qurius AI',
    backgroundExperience: 'Образование и опыт',
    backgroundDescription: 'De-Graft - студент компьютерных наук в Университете Уильяма Патерсона с GPA 4,0, специализирующийся на ИИ, интеллектуальном анализе данных и полнофункциональной разработке.',
    passionsInterests: 'Страсти и интересы',
    passionsDescription: 'De-Graft страстно увлечен использованием ИИ и машинного обучения для решения реальных проблем мира.',
    quriusVision: 'Видение Qurius AI',
    quriusVisionDescription: 'Qurius AI родился из опыта создания клиентских приложений и понимания проблем, с которыми сталкиваются малые и средние предприятия в поддержке.',
    skillAI: 'ИИ/МО',
    skillFullStack: 'Полнофункциональная разработка',
    skillReact: 'React/TypeScript',
    skillSaaS: 'Архитектура SaaS',
    skillDataScience: 'Наука о данных',
    ourTeam: 'Наша команда',
    ourTeamDescription: 'Мы страстная команда исследователей ИИ, инженеров и специалистов по успеху клиентов, посвященных построению будущего поддержки клиентов.',
    growingTeam: 'Растущая команда',
    growingTeamDescription: 'Наша разнообразная команда объединяет опыт в машинном обучении, обработке естественного языка, разработке программного обеспечения и дизайне пользовательского опыта.',
    joinTeam: 'Присоединяйтесь к команде',
    experienceAI: 'Испытайте наш ИИ',
    experienceAIDescription: 'Хотите узнать больше о нас? Попробуйте ИИ-ассистента на этой странице!',
    tryItNow: 'Попробуйте сейчас',
    tryItNowDescription: 'Этот чат-бот использует ту же технологию ИИ, которую мы предоставляем нашим клиентам.',
    readyToStart: 'Готовы начать?',
    readyToStartDescription: 'Присоединяйтесь к тысячам компаний, которые доверяют Qurius AI для предоставления исключительного опыта клиентов.',
    getStartedFree: 'Начать бесплатно',
    contactUs: 'Свяжитесь с нами'
  },
  navigation: {
    home: 'Главная',
    demo: 'Демо',
    admin: 'Админ',
    login: 'Войти',
    logout: 'Выйти'
  },
  plans: {
    free: 'Бесплатно',
    starter: 'Стартовый',
    pro: 'Про',
    perMonth: 'в месяц',
    unlimitedMessages: 'Неограниченные сообщения',
    whiteLabelOptions: 'Опции белой этикетки',
    phoneSupport: 'Телефонная поддержка 24/7',
    advancedAnalytics: 'Расширенная аналитика',
    apiAccess: 'Доступ к API',
    customIntegrations: 'Пользовательские интеграции',
    basicCustomization: 'Базовая настройка',
    emailSupport: 'Поддержка по email',
    standardFaqTemplates: 'Стандартные шаблоны FAQ',
    prioritySupport: 'Приоритетная поддержка',
    analyticsDashboard: 'Панель аналитики',
    customFaqImport: 'Пользовательский импорт FAQ',
    // New Pro features
    multiLanguageSupport: '🌍 Многоязычная поддержка (10+ языков)',
    autoLanguageDetection: '🌐 Автоматическое определение языка',
    translatedFaqTemplates: '📝 Переведенные шаблоны FAQ',
    languageSpecificCustomization: '🎨 Языковая настройка',
    multiLanguageAnalytics: '📊 Многоязычная аналитика',
    customLanguageSupport: '🔧 Пользовательская языковая поддержка',
    customWebCrawling: '🕸️ Пользовательский веб-скрапинг'
  },
  chat: {
    welcome: 'Привет! Как я могу помочь вам сегодня?',
    welcomeWithCompany: 'Привет! Как я могу помочь вам сегодня, {companyName}?',
    typeMessage: 'Введите ваше сообщение...',
    send: 'Отправить',
    minimize: 'Свернуть',
    expand: 'Развернуть',
    typing: 'Печатает...',
    online: 'Онлайн',
    offline: 'Офлайн'
  },
  onboarding: {
    welcome: 'Добро пожаловать в Qurius AI',
    companyInfo: 'Информация о компании',
    customization: 'Настройка виджета',
    payment: 'Настройка платежа',
    integration: 'Интеграция',
    complete: 'Завершить настройку',
    companyName: 'Название компании',
    industry: 'Отрасль',
    website: 'URL сайта',
    email: 'Контактный email',
    location: 'Местоположение',
    description: 'Описание',
    chooseTheme: 'Выбрать тему',
    primaryColor: 'Основной цвет',
    backgroundColor: 'Цвет фона',
    textColor: 'Цвет текста',
    preview: 'Предварительный просмотр',
    choosePlan: 'Выбрать план оплаты',
    integrationCode: 'Код интеграции',
    instructions: 'Инструкции',
    testWidget: 'Тестировать виджет',
    completeSetup: 'Завершить настройку'
  },
  landing: {
    heroTitle: 'Transforma tu sitio web con soporte de chat con IA',
    heroSubtitle: 'Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.',
    viewDemo: 'Ver Demo',
    featuresTitle: '¿Por qué elegir Qurius AI?',
    featuresSubtitle: 'Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente',
    feature1Title: 'Súper Rápido',
    feature1Description: 'Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.',
    feature2Title: 'Seguro y Confiable',
    feature2Description: 'Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.',
    feature3Title: 'Soporte Multiidioma',
    feature3Description: 'Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.',
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Elige el plan que se adapte a las necesidades de tu negocio',
    contactSales: 'Contactar Ventas',
    ctaTitle: '¿Listo para comenzar?',
    ctaSubtitle: 'Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    emailPlaceholder: 'Ingresa tu email',
    getUpdates: 'Obtener Actualizaciones',
    footerDescription: 'Transforma tu sitio web con soporte de chat inteligente con IA.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    features: 'Características',
    pricing: 'Precios',
    installation: 'Instalación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Сайт компании',
    companyWebsiteDescription: 'Описание для сайта компании (PurpleSoft Inc)',
    keyFeaturesTitle: 'Ключевые функции',
    feature1: 'Функция 1',
    feature2: 'Функция 2',
    feature3: 'Функция 3',
    feature4: 'Функция 4',
    feature5: 'Функция 5',
    feature6: 'Функция 6',
    tryChatTitle: 'Попробуйте виджет чата',
    tryChatDescription: 'Описание для проверки виджета чата',
    learnMoreButton: 'Узнать больше',
    getStartedButton: 'Начать',
    viewAdminButton: 'Просмотреть администратора'
  }
}

// Korean translations
const ko: TranslationKeys = {
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    cancel: '취소',
    save: '저장',
    delete: '삭제',
    edit: '편집',
    view: '보기',
    close: '닫기',
    next: '다음',
    previous: '이전',
    submit: '제출',
    copy: '복사',
    copied: '복사됨!',
    getStarted: '시작하기',
    step: '단계'
  },
  contact: {
    title: '연락처',
    subtitle: '팀에 연락하세요. AI 기반 고객 지원으로 성공을 도와드립니다.',
    sendMessage: '메시지 보내기',
    fullName: '전체 이름',
    emailAddress: '이메일 주소',
    company: '회사',
    subject: '제목',
    message: '메시지',
    namePlaceholder: '홍길동',
    emailPlaceholder: 'hong@company.com',
    companyPlaceholder: '귀하의 회사',
    messagePlaceholder: '어떻게 도움을 드릴 수 있는지 알려주세요...',
    selectSubject: '제목 선택',
    salesInquiry: '영업 문의',
    technicalSupport: '기술 지원',
    partnership: '파트너십',
    careers: '채용',
    other: '기타',
    sending: '전송 중...',
    getInTouch: '연락처',
    emailUs: '이메일 보내기',
    callUs: '전화하기',
    visitUs: '방문하기',
    emailDescription: '일반 문의 및 지원',
    callDescription: '월요일부터 금요일, 오전 9시-오후 6시 EST',
    address: '123 AI Innovation Drive, Tech Valley, CA 94043, United States',
    responseTimes: '응답 시간',
    salesInquiries: '영업 문의',
    within2Hours: '2시간 이내',
    within4Hours: '4시간 이내',
    generalQuestions: '일반 질문',
    within24Hours: '24시간 이내',
    partnershipRequests: '파트너십 요청',
    within48Hours: '48시간 이내',
    successMessage: '메시지를 보내주셔서 감사합니다! 24시간 이내에 답변드리겠습니다.',
    tryAI: 'AI 어시스턴트 시도하기',
    tryAIDescription: '질문이 있으신가요? Qurius AI가 어떻게 작동하는지 확인하려면 AI 어시스턴트와 채팅해보세요!',
    experienceAI: 'AI의 힘을 경험하세요',
    experienceAIDescription: '이 챗봇은 고객에게 제공하는 것과 동일한 기술을 사용합니다.',
    readyToStart: '시작할 준비가 되셨나요?',
    readyToStartDescription: 'Qurius AI를 사용하여 고객 지원을 개선하고 있는 수천 개의 기업에 참여하세요.',
    startFreeTrial: '무료 체험 시작',
    viewDemo: '데모 보기'
  },
  about: {
    title: 'Qurius AI 소개',
    subtitle: '최첨단 AI 기술로 지능형 고객 지원을 통해 기업을 지원',
    mission: '우리의 미션',
    missionDescription1: 'Qurius AI에서는 모든 고객 상호작용이 의미 있고, 효율적이며, 만족스러워야 한다고 믿습니다.',
    missionDescription2: '우리는 고급 AI 기술을 모든 규모의 기업에 접근 가능하게 하여 고객이 소중히 여기는 인간성을 유지하면서 고객 지원을 확장하도록 돕습니다.',
    vision: '우리의 비전',
    visionDescription: 'AI 기반 고객 지원의 선도적인 플랫폼이 되어 전 세계 기업이 지능형 자동화를 통해 탁월한 고객 경험을 제공할 수 있도록 하는 것입니다.',
    values: '우리의 가치',
    valuesDescription: '우리가 하는 모든 일을 이끄는 원칙들',
    customerCentric: '고객 중심',
    customerCentricDescription: '모든 결정은 고객과 최종 사용자에게 최선인 것에 의해 이끌어집니다.',
    innovation: '혁신',
    innovationDescription: '우리는 최첨단 기술과 창의적인 솔루션을 받아들여 복잡한 문제를 해결하고 AI 개발의 최전선에 머물러 있습니다.',
    transparency: '투명성',
    transparencyDescription: '우리는 개방적인 커뮤니케이션, 정직한 가격 책정, AI 기술이 어떻게 작동하는지에 대한 명확한 설명을 믿어 고객과의 신뢰를 구축합니다.',
    meetFounder: '창립자 소개',
    meetFounderDescription: 'Qurius AI 뒤에 있는 비전가, 지능형 기술을 통해 고객 지원을 혁신하는 데 열정을 가진 사람입니다.',
    founderName: 'De-Graft',
    founderTitle: '창립자 및 개발자, Qurius AI',
    backgroundExperience: '배경 및 경험',
    backgroundDescription: 'De-Graft는 William Paterson University의 컴퓨터 과학 학생으로 GPA 4.0 을 유지하며 AI, 데이터 마이닝, 풀스택 개발 전문 지식을 보유하고 있습니다.',
    passionsInterests: '열정과 관심사',
    passionsDescription: 'De-Graft는 AI와 머신러닝을 활용하여 실제 문제를 해결하는 데 열정을 가지고 있습니다.',
    quriusVision: 'Qurius AI의 비전',
    quriusVisionDescription: 'Qurius AI는 고객 애플리케이션 구축 경험과 중소기업이 지원에서 직면하는 과제에 대한 이해에서 탄생했습니다.',
    skillAI: 'AI/ML',
    skillFullStack: '풀스택 개발',
    skillReact: 'React/TypeScript',
    skillSaaS: 'SaaS 아키텍처',
    skillDataScience: '데이터 사이언스',
    ourTeam: '우리 팀',
    ourTeamDescription: '우리는 고객 지원의 미래를 구축하는 데 전념하는 AI 연구원, 엔지니어, 고객 성공 전문가의 열정적인 팀입니다.',
    growingTeam: '성장하는 팀',
    growingTeamDescription: '우리의 다양한 팀은 머신러닝, 자연어 처리, 소프트웨어 엔지니어링, 사용자 경험 설계 전문 지식을 모읍니다.',
    joinTeam: '팀에 참여',
    experienceAI: '우리의 AI를 경험하세요',
    experienceAIDescription: '우리에 대해 더 알고 싶으신가요? 이 페이지에서 AI 어시스턴트를 시도해보세요!',
    tryItNow: '지금 시도하기',
    tryItNowDescription: '이 챗봇은 고객에게 제공하는 것과 동일한 AI 기술을 사용합니다.',
    readyToStart: '시작할 준비가 되셨나요?',
    readyToStartDescription: 'Qurius AI를 신뢰하여 탁월한 고객 경험을 제공하고 있는 수천 개의 기업에 참여하세요.',
    getStartedFree: '무료로 시작하기',
    contactUs: '연락처'
  },
  navigation: {
    home: '홈',
    demo: '데모',
    admin: '관리',
    login: '로그인',
    logout: '로그아웃'
  },
  plans: {
    free: '무료',
    starter: '스타터',
    pro: '프로',
    perMonth: '월',
    unlimitedMessages: '무제한 메시지',
    whiteLabelOptions: '화이트 라벨 옵션',
    phoneSupport: '24/7 전화 지원',
    advancedAnalytics: '고급 분석',
    apiAccess: 'API 액세스',
    customIntegrations: '사용자 정의 통합',
    basicCustomization: '기본 맞춤 설정',
    emailSupport: '메일 지원',
    standardFaqTemplates: '표준 FAQ 템플릿',
    prioritySupport: '우선 지원',
    analyticsDashboard: '분석 대시보드',
    customFaqImport: '사용자 정의 FAQ 가져오기',
    // New Pro features
    multiLanguageSupport: '🌍 다국어 지원 (10+ 언어)',
    autoLanguageDetection: '🌐 자동 언어 감지',
    translatedFaqTemplates: '📝 번역된 FAQ 템플릿',
    languageSpecificCustomization: '🎨 언어별 맞춤 설정',
    multiLanguageAnalytics: '📊 다국어 분석',
    customLanguageSupport: '🔧 사용자 정의 언어 지원',
    customWebCrawling: '🕸️ 사용자 정의 웹 크롤링'
  },
  chat: {
    welcome: '안녕하세요! 오늘 어떻게 도와드릴까요?',
    welcomeWithCompany: '안녕하세요! 오늘 어떻게 도와드릴까요, {companyName}?',
    typeMessage: '메시지를 입력하세요...',
    send: '보내기',
    minimize: '최소화',
    expand: '확장',
    typing: '입력 중...',
    online: '온라인',
    offline: '오프라인'
  },
  onboarding: {
    welcome: 'Qurius AI에 오신 것을 환영합니다',
    companyInfo: '회사 정보',
    customization: '위젯 맞춤 설정',
    payment: '결제 설정',
    integration: '통합',
    complete: '설정 완료',
    companyName: '회사명',
    industry: '산업',
    website: '웹사이트 URL',
    email: '연락처 이메일',
    location: '위치',
    description: '설명',
    chooseTheme: '테마 선택',
    primaryColor: '주요 색상',
    backgroundColor: '배경 색상',
    textColor: '텍스트 색상',
    preview: '미리보기',
    choosePlan: '청구 플랜 선택',
    integrationCode: '통합 코드',
    instructions: '지침',
    testWidget: '위젯 테스트',
    completeSetup: '설정 완료'
  },
  landing: {
    heroTitle: 'Transforma tu sitio web con soporte de chat con IA',
    heroSubtitle: 'Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.',
    viewDemo: 'Ver Demo',
    featuresTitle: '¿Por qué elegir Qurius AI?',
    featuresSubtitle: 'Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente',
    feature1Title: 'Súper Rápido',
    feature1Description: 'Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.',
    feature2Title: 'Seguro y Confiable',
    feature2Description: 'Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.',
    feature3Title: 'Soporte Multiidioma',
    feature3Description: 'Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.',
    pricingTitle: 'Precios Simples y Transparentes',
    pricingSubtitle: 'Elige el plan que se adapte a las necesidades de tu negocio',
    contactSales: 'Contactar Ventas',
    ctaTitle: '¿Listo para comenzar?',
    ctaSubtitle: 'Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.',
    startFreeTrial: 'Comenzar Prueba Gratuita',
    emailPlaceholder: 'Ingresa tu email',
    getUpdates: 'Obtener Actualizaciones',
    footerDescription: 'Transforma tu sitio web con soporte de chat inteligente con IA.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerSupport: 'Soporte',
    features: 'Características',
    pricing: 'Precios',
    installation: 'Instalación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  demo: {
    title: 'Demo',
    companyWebsiteTitle: 'Sitio web de la empresa',
    companyWebsiteDescription: 'Descripción para el sitio web de la empresa (PurpleSoft Inc)',
    keyFeaturesTitle: 'Características clave',
    feature1: 'Característica 1',
    feature2: 'Característica 2',
    feature3: 'Característica 3',
    feature4: 'Característica 4',
    feature5: 'Característica 5',
    feature6: 'Característica 6',
    tryChatTitle: 'Prueba el widget de chat',
    tryChatDescription: 'Descripción para probar el widget de chat',
    learnMoreButton: 'Aprender más',
    getStartedButton: 'Comenzar',
    viewAdminButton: 'Ver Administrador'
  }
}

// Export all translations
export const translations: Record<Language, TranslationKeys> = {
  en,
  es,
  fr,
  de,
  zh,
  ja,
  pt,
  it,
  ru,
  ko
}

// Helper function to get nested translation
export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to English if translation not found
      value = translations.en
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey]
        } else {
          return key // Return the key if no translation found
        }
      }
    }
  }
  
  return typeof value === 'string' ? value : key
}

// Helper for variable interpolation in translation strings
export function interpolate(str: string, vars: Record<string, string | undefined>): string {
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
} 