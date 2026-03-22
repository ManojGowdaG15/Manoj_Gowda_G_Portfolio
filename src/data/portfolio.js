export const personalInfo = {
  name: 'Manoj Gowda G',
  title: 'Software Developer',
  subtitle: 'MCA Student',
  email: 'manoj15gowda@gmail.com',
  phone: '+91 9353441852',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/manoj-gowda-g-a994882a3',
  github: 'https://github.com/ManojGowdaG15',
  bio: 'I build intelligent, human-centered web applications. Currently pursuing MCA at Dr. Ambedkar Institute of Technology, I combine strong fundamentals in software engineering with a passion for AI-powered solutions and clean, modern design.',
};

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. Ambedkar Institute of Technology',
    location: 'Bengaluru',
    period: 'Dec 2024 – Aug 2026',
    grade: 'CGPA: 9.43',
    type: 'university',
    image: '/assets/dr_ait.png',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Pinnacle Institute of Management and Science',
    location: 'Bengaluru',
    period: 'Aug 2021 – May 2024',
    grade: 'CGPA: 9.01',
    type: 'university',
    logo: '/assets/pinnacle_logo.png',
    isBanner: true,
  },
  {
    degree: 'PUC Commerce',
    institution: 'Mahesh PU College',
    location: 'Nagarbhavi, Bengaluru',
    period: '2019 – 2021',
    grade: '91.67%',
    type: 'school',
    logo: '/assets/mahesh_logo.png',
    isBanner: true,
  },
  {
    degree: 'SSLC',
    institution: "St. John's High School",
    location: 'Bengaluru',
    period: '2019',
    grade: '78.9%',
    type: 'school',
    logo: '/assets/st_johns_logo.png',
    isBanner: true,
  },
];

export const experience = [
  {
    role: 'AI Project Intern (RAG & NLP)',
    company: 'Guruvidhya IT Services Pvt Ltd',
    location: 'Bengaluru',
    period: 'Sep 2025 – Nov 2025',
    highlights: [
      'Developed "EdTech AI Search", a smart learning assistant using Retrieval-Augmented Generation (RAG)',
      'Engineered intelligent search algorithms to synthesize and retrieve educational content for students',
      'Guided by Ms. Shobha Rani B R (Dr. AIT) and mentored by Enterprise Architect Muniyandi and Mekala V Reddy (IBM)',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'UTL Technologies Ltd',
    location: 'Bengaluru',
    period: 'Mar 2024 – May 2024',
    highlights: [
      'Built and maintained responsive web applications using HTML, CSS, and JavaScript',
      'Designed user-centric, responsive UI layouts for diverse client projects',
      'Strengthened debugging and problem-solving capabilities in production environments',
    ],
  },
];

export const skills = {
  languages: [
    { name: 'Python', level: 92 },
    { name: 'Java', level: 88 },
    { name: 'JavaScript', level: 94 },
    { name: 'PHP', level: 82 },
  ],
  web: [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Django', level: 88 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express', level: 85 },
  ],
  ai_ml: [
    { name: 'RAG Architecture', level: 90 },
    { name: 'Pinecone / VectorDB', level: 85 },
    { name: 'LangChain', level: 88 },
    { name: 'Groq / Llama-3', level: 85 },
    { name: 'NLP', level: 82 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Vite & Webpack', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'Cloud/AWS', level: 75 },
  ],
  soft: ['Problem-solving', 'Team Collaboration', 'Quick Learner', 'System Architect'],
};

export const projects = [
  {
    id: 1,
    title: 'EdTech AI Search',
    subtitle: 'RAG AI Assistant',
    description:
      'An AI-powered learning assistant leveraging Retrieval-Augmented Generation (RAG) to synthesize educational content from complex vector databases.',
    tech: ['Python', 'LangChain', 'OpenAI', 'VectorDB'],
    type: 'AI / RAG',
    image: '/assets/edtech.png',
    github: 'https://github.com/ManojGowdaG15',
    featured: true,
  },
  {
    id: 2,
    title: 'StreamHub',
    subtitle: 'Cinematic Subscription Platform',
    description:
      'A premium, cinematic full-stack platform for managing digital memberships with a high-performance visual design system inspired by Netflix.',
    tech: ['Node.js', 'React', 'MongoDB', 'Vite'],
    type: 'Full-Stack / UI',
    image: '/assets/smart_campus.png',
    github: 'https://github.com/ManojGowdaG15',
    featured: true,
  },
  {
    id: 3,
    title: 'MemorixAI',
    subtitle: 'Smart Memory Tool',
    description:
      'A sophisticated educational tool leveraging Flask, Pinecone, and Groq-hosted LLMs to provide students with a seamless AI-powered learning experience.',
    tech: ['Python', 'Groq', 'Pinecone', 'LangChain'],
    type: 'AI / Education',
    github: 'https://github.com/ManojGowdaG15',
    featured: true,
  },
  {
    id: 4,
    title: 'Leave Management',
    subtitle: 'Enterprise MERN Suite',
    description:
      'A full-featured application for managing enterprise leave requests, featuring role-based access, approval workflows, and team hierarchy management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    type: 'Full-Stack',
    github: 'https://github.com/ManojGowdaG15',
    featured: false,
  },
  {
    id: 5,
    title: 'Smart Campus',
    subtitle: 'Academic Control Center',
    description:
      'A scalable administrative management system that digitalizes core campus operations, records, enrollments, and performance tracking.',
    tech: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    type: 'Web System',
    github: 'https://github.com/ManojGowdaG15',
    featured: false,
  },
  {
    id: 6,
    title: 'QueryGPT',
    subtitle: 'OpenAI Processing Engine',
    description:
      'An AI-powered interface that integrates with OpenAI API to handle and process natural language queries efficiently for educational synthesis.',
    tech: ['JavaScript', 'OpenAI API', 'React'],
    type: 'AI Tooling',
    github: 'https://github.com/ManojGowdaG15',
    featured: false,
  },
  {
    id: 7,
    title: 'Doctor Appointment',
    subtitle: 'Healthcare Platform',
    description:
      'Online platform for medical appointments with dedicated modules for patient booking, doctor scheduling, and administrative oversight.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    type: 'Web System',
    github: 'https://github.com/ManojGowdaG15',
    featured: false,
  },
  {
    id: 8,
    title: 'Expense Tracker',
    subtitle: 'Financial Workflow',
    description:
      'Modern, responsive web application for managing employee expense claims with role-based dashboards for submission and approval.',
    tech: ['React', 'Node.js', 'Express'],
    type: 'Management',
    github: 'https://github.com/ManojGowdaG15',
    featured: false,
  },
];

export const certifications = [
  {
    title: 'Model Context Protocol: Advanced',
    issuer: 'Anthropic',
    date: 'Mar 21, 2026',
    badge: 'Official Token Authored',
    type: 'ai',
    color: '#D97757',
    image: '/assets/cert_mcp.png',
  },
  {
    title: 'AI Skills Passport',
    issuer: 'EY & Microsoft',
    date: 'Dec 2026',
    badge: 'Microsoft Elevate',
    type: 'ey',
    color: '#FFE600',
    image: '/assets/cert_ey_microsoft.png',
  },
  {
    title: 'AI Skills Passport (Microsoft)',
    issuer: 'Microsoft Elevate',
    date: 'Mar 17, 2026',
    badge: 'Credly Verified',
    type: 'microsoft',
    color: '#00A4EF',
    image: '/assets/cert_microsoft_ai.png',
  },
  {
    title: 'AI Fluency: Framework',
    issuer: 'Anthropic / UCC / HEA',
    date: '2025/2026',
    badge: 'Framework & Foundations',
    type: 'ai',
    color: '#D97757',
    image: '/assets/cert_anthropic_ai.png',
  },
  {
    title: 'App Developer Web Mobile',
    issuer: 'NASSCOM / NCVET',
    date: 'Aug 20, 2024',
    badge: 'Grade A | NSQF Level 5',
    type: 'mobile',
    color: '#00E5A0',
    image: '/assets/cert_nasscom.png',
  },
];

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
