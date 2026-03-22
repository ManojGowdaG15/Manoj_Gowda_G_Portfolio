import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, Code2, Server, Database, Globe, BrainCircuit, Wallet, Activity, ShieldCheck, Zap } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'EdTech AI Search G',
    category: 'AI / RAG / Django',
    image: '/assets/project_edtech.png',
    desc: 'An IBM-vetted (IBM India) advanced AI learning companion. Revolutionizing student interaction with educational content through automated knowledge extraction using Retrieval-Augmented Generation (RAG). Features a dynamic roadmap generator and intelligent flashcard suite.',
    tags: ['Django', 'RAG (LLM)', 'Intelligent Search', 'Flashcard Gen'],
    github: 'https://github.com/ManojGowdaG15/EdTech_AI_Search_G'
  },
  {
    id: '02',
    title: 'MemorixAI',
    category: 'AI / Knowledge Matrix',
    image: '/assets/project_memorix.png',
    desc: 'Deep-tier "Second Brain" system for consolidating fragmented research. Utilizing LangChain and Pinecone VectorDB for sub-second semantic retrieval across diverse file formats with cited AI grounding.',
    tags: ['Flask', 'Pinecone (VectorDB)', 'LangChain', 'Groq'],
    github: 'https://github.com/ManojGowdaG15/MemorixAI'
  },
  {
    id: '03',
    title: 'StreamHub Ecosystem',
    category: 'FinTech / React 18',
    image: '/assets/project_streamhub.png',
    desc: 'Premium Netflix-inspired streaming and membership dashboard. Engineered with a scalable React 18 architecture and integrated Stripe payment pipelines for end-to-end digital enterprise management.',
    tags: ['React 18', 'Node.js', 'Stripe API', 'Tailwind'],
    github: 'https://github.com/ManojGowdaG15/subscription-management-main'
  },
  {
    id: '04',
    title: 'QueryGPT',
    category: 'AI / FastAPI Engine',
    image: '/assets/project_querygpt.png',
    desc: 'High-performance AI data analysis engine. Leveraging FastAPI and OpenAI API for natural language querying of complex datasets, featuring asynchronous database operations and JWT security protocols.',
    tags: ['FastAPI', 'JWT Auth', 'OpenAI API', 'Motor'],
    github: 'https://github.com/ManojGowdaG15/Querygpt'
  },
  {
    id: '05',
    title: 'Expense Management',
    category: 'MERN / Corp Ops',
    image: '/assets/project_expense.png',
    desc: 'Secure corporate financial ecosystem aimed at digitalizing expense tracking. Implemented role-based dashboards (Employee/Manager) with receipt tracking and automated reimbursement audit trails.',
    tags: ['MERN Stack', 'Role-Based Auth', 'Approval Workflows'],
    github: 'https://github.com/ManojGowdaG15/expense-management-system'
  },
  {
    id: '06',
    title: 'Leave Management',
    category: 'MERN / HR Solutions',
    image: '/assets/project_leave.png',
    desc: 'Scalable HR digitalization platform for institutional leave tracking. Features automated balance updates, multi-tier approval logic, and real-time status transparency for large organizational units.',
    tags: ['MongoDB', 'Express', 'Policy Engine', 'RESTful'],
    github: 'https://github.com/ManojGowdaG15/leave-management-system'
  },
  {
    id: '07',
    title: 'Smart Campus Control',
    category: 'Django / EduTech Admin',
    image: '/assets/project_campus.png',
    desc: 'Scalable administrative engine for modern universities. Managing entire academic loops including grade management, department tracking, and real-time attendance dashboards via Django Admin Core.',
    tags: ['Django (Python)', 'Academic Logic', 'Centralized DB'],
    github: 'https://github.com/ManojGowdaG15/Smart-Campus-Academic-Control-Center'
  },
  {
    id: '08',
    title: 'Medical Booking System',
    category: 'Web / PHP Operations',
    image: '/assets/project_medical.png',
    desc: 'Organized healthcare consultation portal. Features secure appointment scheduling with separate modules for patients, doctors, and hospital administrators for seamless medical management.',
    tags: ['PHP', 'MySQL (XAMPP)', 'Scheduling Logic'],
    github: 'https://github.com/ManojGowdaG15/Doctor-Appointment-Management-System-PHP-'
  }
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="projects-galleria" id="projects" ref={ref}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="projects-header reveal">
           <span className="section-label">THE PROJECT GALLERIA / 03</span>
           <h2 className="section-title">
             Verified <span className="text-gradient">Engineering Archive</span>.
           </h2>
        </div>

        {/* GALLERIA STACK */}
        <div className="galleria-stack">
           {projects.map((project, index) => (
             <div key={project.id} className={`galleria-card reveal delay-${index + 1}`}>
                <div className="card-media-box">
                   <div className="card-badge">{project.category}</div>
                   <img src={project.image} alt={project.title} className="card-img" />
                   <div className="card-overlay">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                         <Github size={20} /> SOURCE REPOSITORY
                      </a>
                   </div>
                </div>
                
                <div className="card-info-box">
                   <div className="card-head">
                      <span className="card-id">{project.id} // VERIFIED CORE PROJECT</span>
                      <h3 className="card-title">{project.title}</h3>
                   </div>
                   <p className="card-desc">{project.desc}</p>
                   <div className="card-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag-item">{tag}</span>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
