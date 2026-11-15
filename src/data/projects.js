// Portfolio projects. Screenshots live in public/projects/<slug>/ and were
// captured from the locally running apps (personal data in the ERP is blurred).
const shots = (slug, items) => items.map(([file, caption]) => ({ src: `/projects/${slug}/${file}.webp`, caption }));

export const categories = [
  { id: 'all', label: 'All work' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
];

export const projects = [
  {
    slug: 'aamco-erp',
    title: 'AAMCO ERP: HR & Operations Platform',
    client: 'Allied Arabian Maintenance & Trade Co. (AAMCO)',
    role: 'Sole developer: architecture, backend, frontend, deployment',
    year: '2025 – present',
    category: 'enterprise',
    device: 'desktop',
    tagline: 'Paper-free HR for a 420+ employee industrial company in Jubail.',
    summary:
      'An in-house ERP that moved AAMCO from paper forms and spreadsheets to digital workflows: employee records, leaves, excuses, attendance, vehicles, evaluations and management reporting, all with role-based approvals.',
    problem:
      'Leaves, excuses and attendance were tracked on paper and in Excel. Approvals moved by hand between departments, leave balances were calculated manually, and management had no live view of the workforce.',
    solution:
      'I designed and built the full system alone: a Strapi + PostgreSQL backend with custom controllers, scheduled jobs and Excel import/export, and a React dashboard with multi-level approval chains, configurable path permissions, role delegation, dark mode and in-app notifications.',
    features: [
      'Employee self-service: vacation, other leave and excuse requests with live balance checks',
      'Multi-level approvals (manager → department head → HR) with delegation while away',
      'Attendance import with automatic detection of late arrivals, early leaves and missing punches',
      'Vehicle request and approval workflow with trip tracking',
      'Annual employee evaluations with team reports and Excel export',
      'One-click Excel reports: ID expiry, passport expiry, vacation balances, approver structure',
      'Admin-defined role and route permissions without code changes',
    ],
    outcomes: [
      'Serves 420+ employees across Saudi and international staff',
      'Replaced paper leave and attendance forms with tracked digital workflows',
      'Gave management a live dashboard of headcount, pending requests and people on leave',
    ],
    stack: ['React', 'Material UI', 'Ant Design', 'Strapi', 'Node.js', 'PostgreSQL', 'node-cron', 'Puppeteer', 'XLSX', 'Recharts', 'Formik / Yup'],
    cover: '/projects/aamco-erp/admin-dashboard.webp',
    screenshots: shots('aamco-erp', [
      ['admin-dashboard', 'Company dashboard with workforce KPIs'],
      ['employee-dashboard', 'Employee self-service dashboard'],
      ['employees', 'Employee management with import, export and column picker'],
      ['vacations', 'Vacation management with balances and approval status'],
      ['pending-approvals', 'Manager queue of pending leave requests'],
      ['leave-request', 'Leave request form with balance calculation'],
      ['attendance-reports', 'Attendance issue detection and finance actions'],
      ['vehicle-requests', 'Vehicle request management'],
      ['evaluations', 'Company-wide employee evaluations'],
      ['reports', 'Excel report centre'],
      ['permissions', 'Role-based route permissions'],
      ['login', 'Secure sign-in'],
    ]),
    links: [],
    note: 'Internal system. Employee names, IDs and photos are blurred in these screenshots.',
  },
  {
    slug: 'catchacoach-app',
    title: 'CatchaCoach: Sports & Coaching Mobile App',
    client: 'CatchaCoach (ITCust UG, Germany)',
    role: 'Mobile & backend developer',
    year: '2023 – present',
    category: 'mobile',
    device: 'phone',
    tagline: 'Find a coach, a sport partner or a group, and train together.',
    summary:
      'A cross-platform Flutter app that connects athletes with coaches, sport partners and local groups. It includes real-time chat, push notifications, location-based matching and coaching programs, in English, German and French.',
    problem:
      'Amateur athletes struggle to find the right coach or training partner nearby, and coaches lack one simple tool to reach clients, share programs and stay in contact.',
    solution:
      'I build and maintain the Flutter app (BLoC architecture), the Strapi API and the Node.js real-time chat service. Matching uses sport, distance and gender preferences with explicit privacy consent, and chat runs over Socket.IO with media stored on S3.',
    features: [
      'Find a coach by invite code, email or username, filtered by sport, coaching type and language',
      'Sport-partner matching by sport and distance, with a privacy opt-in',
      'Location-based groups: discover nearby groups or create your own',
      'Real-time 1:1 and group messaging (Socket.IO, MongoDB, AWS S3 media)',
      'Coaching programs, partner requests and Firebase push notifications',
      'Fully localised in English, German and French',
    ],
    outcomes: [
      'Released on Android and iOS from a single Flutter codebase',
      'Separate dev, test and production environments with tagged release builds',
      'Real-time chat runs as a dedicated Node.js service',
    ],
    stack: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Strapi', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'PostgreSQL', 'AWS S3', 'Mixpanel'],
    cover: '/projects/catchacoach-app/home.webp',
    screenshots: shots('catchacoach-app', [
      ['welcome', 'Welcome screen'],
      ['home', 'Home feed with health articles'],
      ['catch-a-coach', 'Find a coach by code, email or username'],
      ['find-partner', 'Sport-partner matching with privacy consent'],
      ['groups-nearby', 'Discover groups near you'],
      ['messages', 'Messaging'],
      ['more', 'Settings, programs and partner requests'],
      ['login', 'Sign in'],
    ]),
    links: [{ label: 'catchacoach.com', href: 'https://catchacoach.com' }],
  },
  {
    slug: 'hires-healthcare',
    title: 'Hires Healthcare: Medical Staffing Portal',
    client: 'Hires Healthcare, Saudi Arabia',
    role: 'Full-stack developer',
    category: 'web',
    device: 'desktop',
    tagline: 'Recruiting doctors and nurses for Saudi hospitals.',
    summary:
      'A recruitment portal for a healthcare staffing company. Candidates browse and filter job openings and apply online. Hospitals request staffing proposals, and the team manages content and applications from an admin area.',
    problem:
      'The agency handled vacancies and applications through email and spreadsheets, so candidates had no way to search open positions.',
    solution:
      'A React front end on a Strapi + PostgreSQL CMS, with a filterable job board, application and proposal forms, rich-text job descriptions and email notifications through Nodemailer.',
    features: [
      'Job board filtered by title, status, contract type, category and city',
      'Online applications and hospital proposal requests',
      'Rich-text job pages managed from the CMS',
      'Admin dashboards with charts',
      'Email notifications on new applications',
    ],
    outcomes: ['Vacancies are published and updated by staff without developer help'],
    stack: ['React', 'Material UI', 'React Bootstrap', 'Formik / Yup', 'Strapi', 'PostgreSQL', 'Nodemailer'],
    cover: '/projects/hires-healthcare/home.webp',
    screenshots: shots('hires-healthcare', [
      ['home', 'Landing page'],
      ['jobs', 'Filterable job board'],
      ['about', 'About page'],
      ['contact', 'Contact form'],
    ]),
    links: [],
  },
  {
    slug: 'catchacoach-web',
    title: 'CatchaCoach Website & CMS',
    client: 'CatchaCoach (ITCust UG, Germany)',
    role: 'Full-stack developer',
    category: 'web',
    device: 'desktop',
    tagline: 'Bilingual marketing site with a self-hosted headless CMS.',
    summary:
      'The public marketing website for CatchaCoach: services, pricing, blog, FAQ and contact. Built with Next.js and two Strapi CMS instances so the English and German content are edited separately.',
    problem: 'The marketing team needed to publish pages and blog posts in two languages without depending on developers.',
    solution:
      'A Next.js front end that renders CMS content, with separate English and German deployments, cookie consent and SEO-friendly routing.',
    features: ['Services, pricing, FAQ, about and contact pages', 'Blog driven by the CMS', 'English and German sites from one codebase', 'Cookie consent and SEO-friendly URLs'],
    outcomes: ['Content editors publish in both languages on their own'],
    stack: ['Next.js', 'React', 'Strapi', 'SQLite / PostgreSQL', 'PM2'],
    cover: '/projects/catchacoach-web/home.webp',
    screenshots: shots('catchacoach-web', [
      ['home', 'Home page'],
      ['services', 'Services'],
      ['pricing', 'Pricing'],
      ['faq', 'FAQ'],
      ['about', 'About us'],
      ['contact', 'Contact'],
    ]),
    links: [{ label: 'catchacoach.com', href: 'https://catchacoach.com' }],
  },
  {
    slug: 'sharafi',
    title: 'Sheikh Abdulkarim Sharafi: Islamic Portal',
    client: 'Sheikh Abdulkarim Ali Sharafi',
    role: 'Full-stack developer',
    category: 'web',
    device: 'desktop',
    tagline: 'Arabic-first content portal for sermons, articles and lectures.',
    summary:
      'A bilingual (Arabic RTL / English) Islamic portal with text, audio and video sermons, articles, a biography and a family tree, all managed through a headless CMS.',
    problem: 'Years of sermons and articles were spread across channels, with no searchable home in Arabic.',
    solution:
      'A React + Vite front end with full RTL support, Hijri dates and prayer times, backed by Strapi and PostgreSQL and served through Nginx.',
    features: ['Text, audio and video sermon libraries with search and categories', 'Articles section with cards and filters', 'Arabic RTL and English versions', 'Hijri calendar and prayer times', 'SEO meta tags per page'],
    outcomes: ['Non-technical editors publish new content through the CMS'],
    stack: ['React', 'Vite', 'Framer Motion', 'Strapi', 'PostgreSQL', 'Nginx'],
    cover: '/projects/sharafi/home.webp',
    screenshots: shots('sharafi', [
      ['home', 'Home page'],
      ['biography', 'Biography'],
      ['articles', 'Articles library'],
    ]),
    links: [{ label: 'abdulkarim-sharafi.com', href: 'https://www.abdulkarim-sharafi.com' }],
  },
  {
    slug: 'itcust',
    title: 'ITCust UG: Bilingual Corporate Website',
    client: 'ITCust UG, Darmstadt, Germany',
    role: 'Frontend developer',
    category: 'web',
    device: 'desktop',
    tagline: 'Corporate site for a German software company, in English and German.',
    summary:
      'A fast React website for a software development company, deployed as two localised sites (itcust.com and itcust.de) with a project showcase and a contact form that sends mail through the company’s own mail server.',
    problem: 'The company needed a modern bilingual presence that ranks in both markets.',
    solution: 'A lightweight React app with separate English and German builds, a portfolio section and an SMTP-backed contact form.',
    features: ['English and German domains', 'Project showcase', 'Contact form through the company mail server', 'Responsive, lightweight build'],
    outcomes: ['Two live domains served from one codebase'],
    stack: ['React', 'React Router', 'CSS3', 'SMTP'],
    cover: '/projects/itcust/home-en.webp',
    screenshots: shots('itcust', [
      ['home-en', 'Home page (English)'],
      ['home-de', 'Home page (German)'],
      ['projects', 'Projects'],
      ['contact', 'Contact form'],
    ]),
    links: [
      { label: 'itcust.com', href: 'https://itcust.com' },
      { label: 'itcust.de', href: 'https://itcust.de' },
    ],
  },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
