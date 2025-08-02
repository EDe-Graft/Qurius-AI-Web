import { type Testimonial } from "./interfaces";


// FAQ Templates by Industry
export const FAQ_TEMPLATES = {
  'ecommerce': [
    { question: "What are your shipping options?", answer: "We offer standard shipping (3-5 days), express shipping (1-2 days), and overnight delivery. Free shipping on orders over $50." },
    { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Contact customer service to initiate a return." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to most countries. International shipping rates and delivery times vary by location." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All payments are processed securely." },
    { question: "How can I track my order?", answer: "You can track your order using the tracking number sent to your email, or log into your account to view order status." },
    { question: "Do you offer discounts or promotions?", answer: "Yes, we regularly offer discounts and promotions. Sign up for our newsletter to receive exclusive offers and early access to sales." },
    { question: "What if my item arrives damaged?", answer: "If your item arrives damaged, please contact us within 48 hours with photos. We'll arrange a replacement or refund immediately." }
  ],
  'healthcare': [
    { question: "How do I schedule an appointment?", answer: "You can schedule appointments through our patient portal, by calling our office, or using our mobile app. Telemedicine appointments are also available." },
    { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance plans. Please contact our billing department to verify your specific coverage." },
    { question: "What are your office hours?", answer: "Our clinic is open Monday-Friday 8am-6pm, Saturday 9am-3pm. Urgent care is available 24/7." },
    { question: "How do I access my medical records?", answer: "You can access your medical records through our secure patient portal. Contact our medical records department for assistance." },
    { question: "What services do you offer?", answer: "We offer comprehensive healthcare services including primary care, specialist consultations, telemedicine, and preventive care." },
    { question: "Do you offer telemedicine?", answer: "Yes, we offer telemedicine appointments for many services. Call our office or use our patient portal to schedule a virtual visit." },
    { question: "What should I bring to my first appointment?", answer: "Please bring your ID, insurance card, list of current medications, and any relevant medical records or test results." }
  ],
  'education': [
    { question: "How do I apply for admission?", answer: "You can apply for admission by filling out the online application form on our Admissions page. Required documents and deadlines are listed there." },
    { question: "What is the tuition fee?", answer: "Tuition fees are available on our Tuition & Fees page. Financial aid and scholarships are also available for eligible students." },
    { question: "What programs do you offer?", answer: "We offer undergraduate, graduate, and certificate programs across various disciplines. Visit our Programs page for complete details." },
    { question: "How can I contact the admissions office?", answer: "You can contact the admissions office by phone at (555) 123-4567 or by email at admissions@school.edu." },
    { question: "Do you offer online courses?", answer: "Yes, we offer a variety of online courses and hybrid programs. Check our Distance Learning page for available options." },
    { question: "What are the admission requirements?", answer: "Admission requirements include a completed application, transcripts, letters of recommendation, and standardized test scores. International students may need additional documentation." },
    { question: "Do you offer financial aid?", answer: "Yes, we offer various financial aid options including scholarships, grants, and student loans. Contact our financial aid office for more information." }
  ],
  'legal': [
    { question: "How do I schedule a consultation?", answer: "You can schedule a consultation by calling our office or filling out the contact form on our website. We offer both in-person and virtual consultations." },
    { question: "What are your consultation fees?", answer: "Initial consultations are typically $200-300. We offer flexible payment plans and accept most major credit cards." },
    { question: "What areas of law do you practice?", answer: "We specialize in family law, criminal defense, personal injury, business law, and estate planning. Contact us to discuss your specific legal needs." },
    { question: "Do you offer payment plans?", answer: "Yes, we offer flexible payment plans for many of our services. We can discuss payment options during your consultation." },
    { question: "What should I bring to my first meeting?", answer: "Please bring any relevant documents, court papers, contracts, or correspondence related to your case. We'll provide a complete list during scheduling." },
    { question: "Do you handle emergency cases?", answer: "Yes, we handle emergency legal matters and are available 24/7 for urgent situations. Call our emergency line for immediate assistance." },
    { question: "What is your success rate?", answer: "Our success rate varies by practice area. We're committed to achieving the best possible outcome for each client and will discuss your specific case during consultation." }
  ],
  'real-estate': [
    { question: "How do I schedule a property viewing?", answer: "You can schedule a property viewing by calling our office, using our online booking system, or contacting your assigned agent directly." },
    { question: "What are your commission rates?", answer: "Our commission rates are competitive and vary based on property type and value. We'll discuss specific rates during our initial meeting." },
    { question: "Do you handle both buying and selling?", answer: "Yes, we provide comprehensive real estate services including buying, selling, renting, and property management." },
    { question: "What areas do you serve?", answer: "We serve the entire metropolitan area and surrounding suburbs. Contact us to confirm coverage for your specific location." },
    { question: "How do you determine property values?", answer: "We use comprehensive market analysis including recent sales, property condition, location factors, and current market trends to determine accurate property values." },
    { question: "Do you offer virtual tours?", answer: "Yes, we offer virtual tours and 3D walkthroughs for many properties. Contact us to arrange a virtual viewing." },
    { question: "What financing options do you recommend?", answer: "We work with multiple lenders and can recommend financing options based on your specific situation and property type." }
  ],
  'restaurant': [
    { question: "What are your hours of operation?", answer: "We're open Monday-Thursday 11am-10pm, Friday-Saturday 11am-11pm, and Sunday 12pm-9pm. Hours may vary on holidays." },
    { question: "Do you take reservations?", answer: "Yes, we accept reservations for parties of 6 or more. You can book online through our website or call us directly." },
    { question: "Do you offer delivery?", answer: "Yes, we offer delivery through our own service and partner with major delivery platforms. Delivery areas and minimum orders apply." },
    { question: "What dietary restrictions do you accommodate?", answer: "We offer vegetarian, vegan, gluten-free, and dairy-free options. Please inform your server of any allergies or dietary restrictions." },
    { question: "Do you have a kids menu?", answer: "Yes, we have a kids menu with smaller portions and child-friendly options. Kids under 12 eat free on Tuesdays." },
    { question: "Can you accommodate large groups?", answer: "Yes, we can accommodate large groups and private events. Please call us at least 24 hours in advance for groups of 10 or more." },
    { question: "What's your dress code?", answer: "We have a casual dress code. Smart casual attire is recommended for dinner service." }
  ],
  'automotive': [
    { question: "What services do you offer?", answer: "We offer comprehensive automotive services including oil changes, tire rotation, brake service, engine diagnostics, and full vehicle maintenance." },
    { question: "Do you offer warranties?", answer: "Yes, we offer warranties on parts and labor. Warranty terms vary by service type and parts used." },
    { question: "How do I schedule an appointment?", answer: "You can schedule an appointment online through our website, by calling our service department, or using our mobile app." },
    { question: "Do you work on all vehicle brands?", answer: "Yes, we work on all major vehicle brands including domestic and import vehicles. Our technicians are certified for multiple manufacturers." },
    { question: "What are your service hours?", answer: "Our service department is open Monday-Friday 7am-6pm and Saturday 8am-4pm. We're closed on Sundays." },
    { question: "Do you offer loaner vehicles?", answer: "Yes, we offer loaner vehicles for qualifying service appointments. Availability is limited, so please request in advance." },
    { question: "How long do most repairs take?", answer: "Repair times vary by service type. Simple services like oil changes take 30-60 minutes, while major repairs may take several hours or days." }
  ],
  'technology': [
    { question: "What services do you offer?", answer: "We offer IT consulting, software development, cloud solutions, cybersecurity, network management, and technical support for businesses of all sizes." },
    { question: "Do you provide 24/7 support?", answer: "Yes, we offer 24/7 technical support for our managed services clients. Emergency support is available for critical issues." },
    { question: "What technologies do you specialize in?", answer: "We specialize in cloud platforms (AWS, Azure, GCP), enterprise software, mobile development, AI/ML solutions, and legacy system modernization." },
    { question: "How do you handle data security?", answer: "We implement industry-standard security protocols including encryption, multi-factor authentication, regular backups, and compliance with data protection regulations." },
    { question: "Do you offer remote support?", answer: "Yes, we provide remote technical support and can resolve most issues without on-site visits. We use secure remote access tools." },
    { question: "What is your response time?", answer: "Our standard response time is 2-4 hours for non-critical issues. Critical issues are addressed within 1 hour, and emergency issues within 30 minutes." },
    { question: "Do you provide training?", answer: "Yes, we offer comprehensive training programs for new systems and software. Training can be conducted on-site or remotely." }
  ],
  'fitness': [
    { question: "What are your membership options?", answer: "We offer monthly, quarterly, and annual memberships. We also have day passes and class packages available." },
    { question: "What classes do you offer?", answer: "We offer a variety of classes including yoga, pilates, strength training, cardio, HIIT, and specialty classes. Check our class schedule for current offerings." },
    { question: "Do you offer personal training?", answer: "Yes, we offer personal training sessions with certified trainers. Packages are available for different fitness levels and goals." },
    { question: "What are your hours?", answer: "We're open Monday-Friday 5am-11pm, Saturday-Sunday 6am-10pm. Holiday hours may vary." },
    { question: "Do you have childcare?", answer: "Yes, we offer childcare services during peak hours. Children must be registered and there is a small fee per visit." },
    { question: "What equipment do you have?", answer: "We have a full range of cardio equipment, strength training machines, free weights, and functional training areas." },
    { question: "Do you offer nutrition consulting?", answer: "Yes, we have certified nutritionists available for consultations. Services include meal planning, dietary analysis, and wellness coaching." }
  ],
  'beauty': [
    { question: "How do I book an appointment?", answer: "You can book appointments online through our website, by calling our salon, or using our mobile app. We recommend booking 1-2 weeks in advance." },
    { question: "What services do you offer?", answer: "We offer haircuts, styling, coloring, highlights, treatments, manicures, pedicures, facials, waxing, and bridal services." },
    { question: "Do you use cruelty-free products?", answer: "Yes, we use cruelty-free and eco-friendly products whenever possible. We can accommodate specific product preferences." },
    { question: "What are your prices?", answer: "Our prices vary by service and stylist experience level. You can view our complete price list on our website or call for specific pricing." },
    { question: "Do you offer bridal services?", answer: "Yes, we offer comprehensive bridal services including hair, makeup, and nail services. We recommend booking bridal appointments 2-3 months in advance." },
    { question: "What is your cancellation policy?", answer: "We require 24-hour notice for cancellations. Late cancellations may incur a fee equal to 50% of the service cost." },
    { question: "Do you offer gift certificates?", answer: "Yes, we offer gift certificates in any amount. They can be purchased online or in-person and never expire." }
  ],
  'consulting': [
    { question: "What consulting services do you offer?", answer: "We offer business strategy, process optimization, digital transformation, change management, and specialized industry consulting services." },
    { question: "How do you structure your projects?", answer: "Our projects typically follow a phased approach: discovery, analysis, strategy development, implementation, and ongoing support. Timeline varies by project scope." },
    { question: "What industries do you specialize in?", answer: "We have deep expertise in healthcare, finance, manufacturing, retail, and technology sectors. We also serve non-profit and government organizations." },
    { question: "Do you offer ongoing support?", answer: "Yes, we offer ongoing support and maintenance packages to ensure successful implementation and continued optimization." },
    { question: "What is your typical project timeline?", answer: "Project timelines vary from 4 weeks for simple assessments to 6-12 months for complex transformations. We provide detailed timelines during proposal." },
    { question: "Do you work with small businesses?", answer: "Yes, we work with businesses of all sizes. We offer scalable solutions and flexible engagement models to meet different needs and budgets." },
    { question: "What is your success rate?", answer: "We have a 95% client satisfaction rate and 90% of our clients see measurable improvements within 6 months of implementation." }
  ]
} as const;



export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "Qurius AI transformed our customer support. The widget is incredibly easy to integrate and our response times have improved by 80%. Our customers love the instant, accurate answers!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateCorp",
    content: "The multi-language support is a game-changer for our global business. We've seen a 60% increase in customer satisfaction since implementing Qurius AI. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Customer Success Manager",
    company: "GrowthStart",
    content: "Setting up our FAQ system was incredibly smooth. The AI understands our business context perfectly and provides accurate, helpful responses. Our support team can focus on complex issues now.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "DataSync Inc",
    content: "The analytics dashboard gives us incredible insights into customer interactions. We've optimized our support processes based on the data, leading to better customer experiences.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Product Manager",
    company: "CloudScale",
    content: "The white-label options and custom integrations allowed us to seamlessly integrate Qurius AI into our existing platform. Our customers can't tell it's a third-party solution!",
    rating: 5,
    avatar: "https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1946"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Director",
    company: "GlobalTech",
    content: "From implementation to going live took less than a week. The support team was incredibly helpful throughout the process. Qurius AI has become an essential part of our customer experience.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
]

export type IndustryType = keyof typeof FAQ_TEMPLATES;

// Industry display names for UI
export const INDUSTRY_DISPLAY_NAMES: Record<IndustryType, string> = {
  'ecommerce': 'E-commerce',
  'healthcare': 'Healthcare',
  'education': 'Education',
  'legal': 'Legal',
  'real-estate': 'Real Estate',
  'restaurant': 'Restaurant',
  'automotive': 'Automotive',
  'technology': 'Technology',
  'fitness': 'Fitness',
  'beauty': 'Beauty',
  'consulting': 'Consulting'
}; 