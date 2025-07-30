import { type Language } from '@/context/LanguageContext'

export interface TranslationKeys {
  // Common UI
  common: {
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
  
  // Navigation
  navigation: {
    home: string
    demo: string
    admin: string
    login: string
    logout: string
  }
  
  // Plans
  plans: {
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
  }
  
  // Chat Widget
  chat: {
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
  onboarding: {
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
  landing: {
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
    documentation: string
    about: string
    blog: string
    careers: string
    helpCenter: string
    contact: string
    status: string
    allRightsReserved: string
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
    customLanguageSupport: '🔧 Custom language support'
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
    heroTitle: 'Transform Your Website with AI-Powered Chat Support',
    heroSubtitle: 'Provide instant, intelligent customer support with our advanced AI chat widget. Boost engagement and satisfaction with 24/7 automated assistance.',
    viewDemo: 'View Demo',
    featuresTitle: 'Why Choose Qurius AI?',
    featuresSubtitle: 'Powerful features designed to enhance your customer support experience',
    feature1Title: 'Lightning Fast',
    feature1Description: 'Get instant responses with our AI-powered chat system that understands and responds to customer queries in real-time.',
    feature2Title: 'Secure & Reliable',
    feature2Description: 'Enterprise-grade security with data encryption and privacy protection. Your customer data is always safe with us.',
    feature3Title: 'Multi-Language Support',
    feature3Description: 'Support customers worldwide with automatic language detection and translation capabilities.',
    pricingTitle: 'Simple, Transparent Pricing',
    pricingSubtitle: 'Choose the plan that fits your business needs',
    contactSales: 'Contact Sales',
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Join thousands of businesses already using Qurius AI to improve their customer support.',
    startFreeTrial: 'Start Free Trial',
    emailPlaceholder: 'Enter your email',
    getUpdates: 'Get Updates',
    footerDescription: 'Transform your website with intelligent AI chat support.',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerSupport: 'Support',
    features: 'Features',
    pricing: 'Pricing',
    documentation: 'Documentation',
    about: 'About',
    blog: 'Blog',
    careers: 'Careers',
    helpCenter: 'Help Center',
    contact: 'Contact',
    status: 'Status',
    allRightsReserved: 'All rights reserved.'
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
    customLanguageSupport: '🔧 Soporte de idioma personalizado'
  },
  chat: {
    welcome: '¿Cómo puedo ayudarte hoy?',
    welcomeWithCompany: '¡Hola! Soy tu asistente de {companyName}. ¿Cómo puedo ayudarte hoy?',
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
    heroTitle: 'Transforma tu sitio web con soporte de chat con IA',
    heroSubtitle: 'Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado.',
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
    documentation: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
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
    customLanguageSupport: '🔧 Support de langue personnalisé'
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
    documentation: 'Documentation',
    about: 'À propos',
    blog: 'Blog',
    careers: 'Carrières',
    helpCenter: 'Centre d\'aide',
    contact: 'Contact',
    status: 'Statut',
    allRightsReserved: 'Tous droits réservés.'
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
    customLanguageSupport: '🔧 Benutzerdefinierte Sprachunterstützung'
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
    documentation: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
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
    customLanguageSupport: '🔧 自定义语言支持'
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
    documentation: '文档',
    about: '关于',
    blog: '博客',
    careers: '职业',
    helpCenter: '帮助中心',
    contact: '联系',
    status: '状态',
    allRightsReserved: '版权所有。'
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
    phoneSupport: '24/7電話サポート',
    advancedAnalytics: '高度な分析',
    apiAccess: 'APIアクセス',
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
    customLanguageSupport: '🔧 カスタム言語サポート'
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
    documentation: 'ドキュメント',
    about: '会社概要',
    blog: 'ブログ',
    careers: '採用',
    helpCenter: 'ヘルプセンター',
    contact: 'お問い合わせ',
    status: 'ステータス',
    allRightsReserved: '全著作権所有。'
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
    customLanguageSupport: '🔧 Suporte de idioma personalizado'
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
    documentation: 'Documentação',
    about: 'Sobre',
    blog: 'Blog',
    careers: 'Carreiras',
    helpCenter: 'Central de Ajuda',
    contact: 'Contato',
    status: 'Status',
    allRightsReserved: 'Todos os direitos reservados.'
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
    customLanguageSupport: '🔧 Supporto lingua personalizzato'
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
    documentation: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
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
    customLanguageSupport: '🔧 Пользовательская языковая поддержка'
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
    documentation: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
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
    emailSupport: '이메일 지원',
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
    customLanguageSupport: '🔧 사용자 정의 언어 지원'
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
    documentation: 'Documentación',
    about: 'Acerca de',
    blog: 'Blog',
    careers: 'Carreras',
    helpCenter: 'Centro de Ayuda',
    contact: 'Contacto',
    status: 'Estado',
    allRightsReserved: 'Todos los derechos reservados.'
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