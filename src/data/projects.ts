import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AfrikaHawa Coffee Traceability PWA',
    description: 'Revolutionary Progressive Web Application transforming Africa\'s coffee supply chain through complete transparency and traceability. Enterprise-grade PWA with offline-first architecture and ML-powered insights.',
    longDescription: 'Enterprise-grade Progressive Web Application revolutionizing Africa\'s coffee supply chain. Features sophisticated offline-first architecture, real-time analytics, role-based access control, and ML-powered quality predictions. Enables complete traceability from seedling to cup with background sync and push notifications.',
    image: '/assets/afrikahawa1.png',
    images: ['/assets/afrikahawa1.png', '/assets/afrikahawa2.png'],
    tags: ['Vue 3', 'Vite', 'PWA', 'IndexedDB', 'Service Workers', 'Pinia', 'Chart.js', 'Bootstrap 5', 'Machine Learning'],
    liveUrl: 'https://afrikahawa-pwa.bck.co.ke/',
    githubUrl: 'https://gitlab.com/bck-inno-works/afrikahawa/afrikahawa-mobile-pwa/-/tree/linet-dev?ref_type=heads',
    featured: true,
    highlights: [
      '🌾 Complete coffee traceability from harvest to batch processing',
      '📱 Installable PWA with native app-like experience',
      '🔄 Background sync for offline submissions with automatic retry',
      '🤖 Machine learning quality and yield predictions',
      '📊 Multi-role analytics dashboards with real-time metrics',
      '💰 Integrated payment tracking and management system',
      '📢 Real-time notification system with push notifications',
      '📦 QR code generation for batch tracking and verification',
      '🔒 Secure authentication and role-based access control',
      '⚡ Service worker caching for instant load times'
    ]
  },
  {
    id: 2,
    title: 'Parish Flow Management System',
    description: 'Comprehensive church operations management platform streamlining parish administration through intuitive digital tools. Modern web application handling member management, events, finances, and communication.',
    longDescription: 'Modern web application designed to streamline parish administration with member database management, event coordination, financial tracking, and integrated communication tools.',
    image: '/assets/parishflow.png',
    tags: ['Vue.js', 'JavaScript', 'CSS3', 'RESTful API', 'Responsive Design'],
    githubUrl: 'https://gitlab.com/bck-inno-works/parish-flow/parish-flow-vue-frontend',
    highlights: [
      '👥 Member database with detailed profile management',
      '📅 Event coordination and calendar system with RSVP',
      '💰 Financial tracking, donation management, and reporting',
      '📧 Integrated communication tools for announcements',
      '📊 Administrative dashboard with insights and metrics',
      '🔐 Secure user authentication and authorization'
    ]
  },
  {
    id: 3,
    title: 'iParish CMS Platform',
    description: 'Advanced content management system purpose-built for religious organizations. Provides powerful tools for dynamic content creation, multimedia management, and member engagement.',
    longDescription: 'Advanced CMS platform featuring dynamic content management, sermon library, event calendar, member portal, and comprehensive user role management with TypeScript implementation.',
    image: '/assets/iparish.png',
    tags: ['Vue.js', 'TypeScript', 'CSS3', 'CMS', 'JWT', 'RESTful API'],
    liveUrl: 'https://iparish.bck.co.ke/',
    githubUrl: 'https://gitlab.com/bck-inno-works/iparish-cms/iparish-cms-vue-frontend',
    highlights: [
      '📝 Dynamic content management with WYSIWYG editor',
      '🎤 Sermon library and media management',
      '📅 Event calendar with registration and reminders',
      '👤 Member portal with authentication',
      '🔐 Advanced user role management',
      '📊 Content analytics and engagement tracking'
    ]
  },
  {
    id: 4,
    title: 'Jasco Website',
    description: 'Modern corporate website showcasing professional web development with clean design, smooth interactions, and optimized performance. Features contemporary UI/UX patterns and responsive layouts.',
    longDescription: 'Professional corporate website featuring modern design principles, optimized performance, SEO best practices, and smooth user experience across all devices.',
    image: '/assets/Jacowebsite.png',
    tags: ['Vue.js', 'JavaScript', 'CSS3', 'Responsive Design', 'SEO'],
    liveUrl: 'https://sample.jasco.co.ke/',
    githubUrl: 'https://gitlab.com/bck-inno-works/jasco-website/jasco-website-vue-frontend',
    highlights: [
      '🎨 Modern, professional design with brand consistency',
      '📱 Fully responsive across all devices',
      '⚡ Optimized performance with fast load times',
      '🎯 Clear call-to-actions and user journey',
      '🔄 Smooth page transitions and micro-interactions',
      '📈 SEO optimized for search visibility'
    ]
  },
  {
    id: 5,
    title: 'JennyWealthyHoneyBees Platform',
    description: 'Specialized web application for sustainable beekeeping management and honey production operations. Features comprehensive tracking systems, analytics, and customer management tools.',
    longDescription: 'Modern apiculture management platform built with React and Next.js, featuring hive monitoring, production analytics, inventory tracking, and CRM capabilities with TypeScript implementation.',
    image: '/assets/jennyhoneybees.png',
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    liveUrl: 'https://www.jennywealthhoneybee.com/',
    githubUrl: 'https://github.com/LinetMutuku/jennywealth',
    highlights: [
      '🏺 Hive monitoring and management system',
      '📈 Production analytics and reporting dashboard',
      '📦 Inventory tracking for honey and equipment',
      '👥 Customer relationship management',
      '🌱 Sustainability metrics tracking',
      '💰 Sales and revenue tracking'
    ]
  }
];
