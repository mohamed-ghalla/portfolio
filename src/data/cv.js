// CV content. Kept plain and keyword-rich so Applicant Tracking Systems (ATS)
// can parse it: standard section names, simple bullets, no tables or icons.
export const summary =
  'Senior Full-Stack Developer and AI-driven software engineer with 10+ years of experience across software development, Linux system administration and DevOps. Expert in AI tools and AI agents (Claude Code, Cursor, GitHub Copilot, ChatGPT, MCP), which I use daily to speed up delivery. Built and run an enterprise ERP (HR, attendance, leave, vehicles, evaluations) serving 420+ employees, and a cross-platform Flutter sports app with real-time chat. Strong in React, Next.js, Node.js, Strapi, Flutter, PostgreSQL, MongoDB, Docker and Linux.';

export const coreSkills = [
  { name: 'AI Tools & AI Agents', items: 'AI Agents, Agentic Workflows, Claude Code, Cursor, GitHub Copilot, ChatGPT, Gemini, Model Context Protocol (MCP), Prompt Engineering, LLM API Integration (Claude API, OpenAI API), RAG, AI-assisted Code Review and Testing' },
  { name: 'Frontend', items: 'React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Material UI, Ant Design, Bootstrap, Formik, i18n, RTL' },
  { name: 'Mobile', items: 'Flutter, Dart, BLoC, Firebase Cloud Messaging, Android, iOS' },
  { name: 'Backend', items: 'Node.js, Express.js, Strapi (Headless CMS), REST API Design, Socket.IO, Python, Django, JWT Authentication' },
  { name: 'Databases', items: 'PostgreSQL, MongoDB, MySQL, SQLite, AWS S3' },
  { name: 'DevOps & Infrastructure', items: 'Linux (Ubuntu, AlmaLinux), Docker, Nginx, Apache, PM2, CI/CD, Jenkins, Git, Windows Server, VMware, Xen, Nagios, Shell Scripting' },
  { name: 'Practices', items: 'Agile / Scrum, System Design, Requirements Analysis, Process Digitization, Technical Documentation' },
];

export const experience = [
  {
    title: 'Software Developer / System Administrator',
    company: 'Allied Arabian Maintenance & Trade Co. Ltd. (AAMCO)',
    location: 'Jubail, Saudi Arabia',
    period: 'Mar 2025 – Present',
    bullets: [
      'Designed, built and deployed a full ERP HR platform on my own (React, Strapi, Node.js, PostgreSQL) that serves 420+ employees.',
      'Replaced paper processes with digital workflows for vacations, excuses, attendance, vehicle requests and annual evaluations, with multi-level approvals and delegation.',
      'Built automated attendance analysis that flags late arrivals, early leaves and missing punches, plus Excel reports for HR and finance (ID and passport expiry, leave balances).',
      'Implemented role-based access control with admin-configurable route permissions, scheduled jobs (node-cron) and bulk Excel import/export.',
      'Used AI coding agents (Claude Code, Cursor, GitHub Copilot) for feature planning, refactoring, test writing and code review, shortening delivery cycles.',
      'Administer company storage servers and Windows Server environments, and lead infrastructure upgrades.',
    ],
  },
  {
    title: 'Mobile & Backend Developer',
    company: 'CatchaCoach (ITCust UG, Germany)',
    location: 'Remote',
    period: 'Jan 2023 – Present',
    bullets: [
      'Develop the CatchaCoach cross-platform mobile app in Flutter (BLoC) for Android and iOS, localised in English, German and French.',
      'Build and maintain the Strapi / PostgreSQL REST API and a Node.js, Express and Socket.IO real-time chat service with MongoDB and AWS S3 media storage.',
      'Delivered location-based coach, sport-partner and group matching with privacy consent, Firebase push notifications and Mixpanel analytics.',
      'Built the bilingual Next.js marketing website with Strapi CMS, and the corporate website for ITCust UG (itcust.com / itcust.de).',
      'Manage dev, test and production environments, release builds and PM2 / Nginx deployments, using AI agents to automate repetitive engineering tasks.',
    ],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Jan 2017 – Jan 2023',
    bullets: [
      'Delivered custom web applications for clients using Python, Django, JavaScript, React, Bootstrap and SQL databases.',
      'Built content platforms on Strapi and PostgreSQL, including a bilingual Arabic/English Islamic portal and a healthcare recruitment job board.',
      'Improved site performance and responsiveness by auditing and optimising front-end and back-end code.',
    ],
  },
  {
    title: 'Linux System Administrator',
    company: 'Softxpert',
    location: 'Alexandria, Egypt',
    period: 'Jan 2014 – Jan 2015',
    bullets: [
      'Managed and monitored Linux servers in staging and production using Nagios.',
      'Configured and tuned Nginx and Apache web servers, mail systems and DNS servers.',
      'Ran application deployments through CI/CD pipelines and virtualization platforms.',
    ],
  },
  {
    title: 'Linux System Engineer',
    company: 'Zewail City of Science and Technology',
    location: 'Cairo, Egypt',
    period: 'Jan 2012 – Jan 2014',
    bullets: [
      'Maintained enterprise Linux infrastructure and resolved complex system issues.',
      'Kept systems secure and available, and deployed updates to high-traffic production environments.',
    ],
  },
];

export const cvProjects = [
  { name: 'AAMCO ERP: HR & Operations Platform', stack: 'React, Strapi, Node.js, PostgreSQL', text: 'Leave, attendance, vehicle and evaluation workflows for 420+ employees.' },
  { name: 'CatchaCoach Mobile App', stack: 'Flutter, Strapi, Node.js, Socket.IO, MongoDB, Firebase', text: 'Coach, partner and group matching with real-time chat, in three languages.' },
  { name: 'Hires Healthcare Staffing Portal', stack: 'React, Strapi, PostgreSQL', text: 'Job board and application system for medical recruitment in Saudi Arabia.' },
];

export const education = [
  { degree: 'Bachelor of Engineering, Computer Engineering and Control Systems', school: 'Mansoura University', location: 'Mansoura, Egypt', year: '2008' },
  { degree: 'Professional Diploma in Software Engineering (Unix Track)', school: 'Information Technology Institute (ITI)', location: 'Alexandria, Egypt', year: '2009' },
];

export const certifications = ['Linux System Administration', 'Full-Stack Web Development', 'Docker & Containerization', 'CI/CD with Jenkins'];

export const languages = ['Arabic: Native', 'English: Intermediate (B1)'];
