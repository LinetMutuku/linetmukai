import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AMFI-K Data Hub',
    description: 'Modern web platform for the Association of Microfinance Institutions of Kenya (AMFI-K) to streamline data collection, reporting, and member management across Kenya\'s microfinance sector.',
    longDescription: 'Centralized platform digitizing AMFI-K\'s entire data collection and member management workflow. Features structured data collection periods with custom surveys, organization registration and approval workflows, subscription lifecycle management, payment tracking and verification, and comprehensive audit logging. Supports both member organizations submitting data and AMFI-K staff managing the platform.',
    image: '/assets/amfi.png',
    tags: ['Vue 3', 'Vuetify 3', 'Pinia', 'Vite'],
    liveUrl: 'https://amfi.bck.co.ke/',
    githubUrl: 'https://gitlab.com/linetmukai9',
    featured: true,
    highlights: [
      '📊 Structured data collection periods with deadlines and progress tracking',
      '📝 Custom survey builder with multiple question types and drag-and-drop ordering',
      '🏢 Organization registration and approval workflow with role-based access',
      '💳 Payment tracking, receipt generation, and subscription management',
      '🔐 OTP-based authentication with JWT tokens and role-based routing',
      '📋 Comprehensive audit logs and compliance tracking',
      '🎫 In-app support ticket management system',
      '📅 Event calendar for industry events and deadlines'
    ]
  },
  {
    id: 2,
    title: 'iParish CMS Platform',
    description: 'Advanced content management system purpose-built for religious organizations. Provides powerful tools for dynamic content creation, multimedia management, and member engagement.',
    longDescription: 'Advanced CMS platform featuring dynamic content management, sermon library, event calendar, member portal, and comprehensive user role management with TypeScript implementation.',
    image: '/assets/iparish.png',
    tags: ['Vue.js', 'Javascript','CSS3', 'CMS', 'JWT', 'RESTful API'],
    liveUrl: 'https://iparish.bck.co.ke/',
    githubUrl: 'https://gitlab.com/linetmukai9',
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
    id: 3,
    title: 'AfrikaHawa Coffee Traceability PWA',
    description: 'Revolutionary Progressive Web Application transforming Africa\'s coffee supply chain through complete transparency and traceability. Enterprise-grade PWA with offline-first architecture and ML-powered insights.',
    longDescription: 'Enterprise-grade Progressive Web Application revolutionizing Africa\'s coffee supply chain. Features sophisticated offline-first architecture, real-time analytics, role-based access control, and ML-powered quality predictions. Enables complete traceability from seedling to cup with background sync and push notifications.',
    image: '/assets/afrikahawa1.png',
    images: ['/assets/afrikahawa1.png', '/assets/afrikahawa2.png'],
    tags: ['Vue 3', 'Vite', 'PWA', 'pinia', 'IndexedDB', 'Service Workers', 'Chart.js', 'Bootstrap 5', 'Machine Learning'],
    liveUrl: 'https://afrikahawa-pwa.bck.co.ke/',
    githubUrl: 'https://gitlab.com/linetmukai9',
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
    id: 4,
    title: 'BCK Technology Website',
    description: 'Corporate website for BCK Technology, a leading provider of cashless payment solutions, telemetry, and loyalty systems. Empowering vending, laundromat, carwash, and more with secure, reliable cashless systems backed by local support across 9 countries.',
    longDescription: 'Modern corporate website for BCK Technology showcasing their cashless payment, telemetry, and loyalty solutions. Features interactive maps powered by Leaflet, dynamic content sections highlighting services across vending, laundromat, carwash, and amusement industries. Built with Vue 3 and Vuetify for a polished, responsive experience with seamless API integration for real-time data.',
    image: '/assets/bcktechnology.png',
    tags: ['Vue 3', 'Vite', 'Vuetify', 'JavaScript', 'Leaflet', 'API Integration'],
    liveUrl: 'https://bcktechnology.com/',
    githubUrl: 'https://gitlab.com/linetmukai9',
    highlights: [
      '💳 Cashless payment solutions for diverse industries',
      '📡 Telemetry and remote monitoring capabilities',
      '🎁 Loyalty program management and rewards system',
      '🗺️ Interactive maps with Leaflet for service coverage visualization',
      '🌍 Local support across 9 countries',
      '🔗 RESTful API integration for real-time data',
      '📱 Fully responsive design across all devices',
      '⚡ Fast performance with Vue 3 and Vite'
    ]
  },
  {
    id: 5,
    title: 'Jasco Website',
    description: 'Modern corporate website showcasing professional web development with clean design, smooth interactions, and optimized performance. Features contemporary UI/UX patterns and responsive layouts.',
    longDescription: 'Professional corporate website featuring modern design principles, optimized performance, SEO best practices, and smooth user experience across all devices.',
    image: '/assets/jascowebsite.png',
    tags: ['Vue.js', 'JavaScript', 'CSS3', 'Responsive Design', 'SEO', 'API Integration'],
    liveUrl: 'https://jascocommunications.com/',
    githubUrl: 'https://gitlab.com/linetmukai9',
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
    id: 6,
    title: 'GA Insurance Report Analytics Dashboard',
    description: 'Real-time call-center analytics dashboard for GA Insurance, surfacing agent productivity and conversation history from the QContact contact-center platform. Board-room-ready reporting with deterministic AI insights and one-click branded PDF/CSV exports.',
    longDescription: 'Pure client-side SPA against a FastAPI proxy that aggregates QContact contact-center data into three deeply-instrumented reports: Agent KPI Productivity, Agent Productivity, and Conversation History. Each report has a KPI strip, charts, sortable/searchable table, and an AI Insights drawer. Features live duration ticking for in-progress conversations, multi-select filters (disposition + contact) sourced from the live API, client-side branded PDF/CSV exports respecting active filters, dynamic column discovery, and a smart normalization layer mapping qcontact array-shaped fields (dispositions[0], departments[0], channel_types[0]) to clean frontend types so the rest of the app stays tidy. Backend is FastAPI with Redis caching, WebSockets for live updates, and JWT auth, all containerized with Docker.',
    image: '/assets/gainsurance.png',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Axios', 'Chart.js', 'jsPDF', 'html2canvas', 'FastAPI', 'Python', 'Redis', 'WebSockets', 'JWT', 'Docker'],
    githubUrl: 'https://gitlab.com/linetmukai9',
    featured: true,
    highlights: [
      '🔴 Live duration ticking for in-progress conversations via tab-aware useNowTick hook',
      '🧠 Deterministic AI Insights drawer — period overview, top performer, peak hour, watch-list flags',
      '🔍 Multi-select filters (disposition + contact) propagating to KPIs, charts, and downloads',
      '📄 Client-side branded PDF exports (navy/gold header, KPI cards, chart screenshots, autoTable detail)',
      '📊 Excel-friendly CSV exports with UTF-8 BOM, metadata block, KPI summary, and data section',
      '🔌 Channel-aware UI — voice/email/chat/SMS/WhatsApp/social icons resolved from channel_types',
      '🪄 Dynamic column discovery — auto-renders extra primitive fields the backend sends',
      '📡 FastAPI backend proxy with Redis caching, WebSockets for live updates, and JWT auth',
      '🐳 Fully containerized backend with Docker for reproducible deployments',
      '⚡ TanStack Query v5 with keepPreviousData for flicker-free refetches and prefetching'
    ]
  },
  {
    id: 7,
    title: 'Jasco HR Leave Portal',
    description: 'HR leave management application for Jasco and BCK employees to request, track, and approve leave online. Streamlines the entire leave workflow from application to approval with role-based dashboards. Currently under active development.',
    longDescription: 'Internal HR leave portal serving Jasco and BCK employees with a structured leave request and approval workflow. Employees can apply for leave, track balances, and view request history; managers and HR get dedicated dashboards for approvals, team calendars, and reporting. Built with Vue.js and Vuetify on the frontend for a polished Material Design experience, backed by a containerized FastAPI service with PostgreSQL for persistence and role-based access control.',
    image: '/assets/leaveapp.png',
    tags: ['Vue.js', 'Vuetify', 'JavaScript', 'Vite', 'Pinia', 'Axios', 'Day.js', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'JWT'],
    liveUrl: 'https://leave-portal.jasco.co.ke/',
    githubUrl: 'https://gitlab.com/linetmukai9',
    highlights: [
      '📝 Leave request workflow — apply, edit, cancel, and view request history',
      '📊 Personal leave balance dashboard with accruals by leave type',
      '✅ Multi-level approval workflow for managers and HR',
      '👥 Role-based dashboards for employees, managers, and HR admins',
      '📅 Team leave calendar to plan around colleagues\' time off',
      '🎨 Material Design UI built with Vuetify components',
      '🔐 JWT authentication with role-based route guards',
      '🐍 FastAPI backend with PostgreSQL and SQLAlchemy ORM',
      '🐳 Docker-containerized backend for consistent dev and production environments',
      '🚧 Active development — used internally by Jasco and BCK staff'
    ]
  },
  {
    id: 8,
    title: 'Parish Flow Management System',
    description: 'Comprehensive church operations management platform streamlining parish administration through intuitive digital tools. Modern web application handling member management, events, finances, and communication.',
    longDescription: 'Modern web application designed to streamline parish administration with member database management, event coordination, financial tracking, and integrated communication tools.',
    image: '/assets/parishflow.png',
    tags: ['Vue.js', 'JavaScript','Pinia', 'CSS3', 'RESTful API', 'Responsive Design'],
    githubUrl: 'https://gitlab.com/linetmukai9',
    highlights: [
      '👥 Member database with detailed profile management',
      '📅 Event coordination and calendar system with RSVP',
      '💰 Financial tracking, donation management, and reporting',
      '📧 Integrated communication tools for announcements',
      '📊 Administrative dashboard with insights and metrics',
      '🔐 Secure user authentication and authorization'
    ]
  }
];
