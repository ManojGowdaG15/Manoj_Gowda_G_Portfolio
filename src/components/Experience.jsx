import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase, Calendar, ChevronRight, Code2, Award } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Project Engineer Intern (AI/RAG)",
    company: "Guruvidhya IT Services Pvt Ltd",
    location: "Bengaluru, India",
    date: "SEP 2025 – NOV 2025",
    type: "Industry Mentorship (IBM)",
    summary: "Led team to complete the 'EdTech AI Search - Smart Learning Assistant' under direct mentorship from IBM India Enterprise Architects.",
    impacts: [
      "Successfully developed the EdTech AI Search project representing intense RAG AI framework engineering.",
      "Navigated significant architectural challenges to achieve robust semantic AI query capabilities.",
      "Collaborated effectively within an advanced multi-student engineering unit."
    ],
    toolkit: ["AI / RAG", "Python / Django", "Project Management"],
    certificate: "/assets/exp_guruvidhya.png"
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "UTL Technologies Ltd",
    location: "Bengaluru, India",
    date: "MAR 2024 – MAY 2024",
    type: "On-Site Engagement",
    summary: "Engaged in an intensive corporate internship focused on enterprise-level web architecture and responsive interface design.",
    impacts: [
      "Assisted in developing and maintaining web applications using foundational HTML, CSS, and JavaScript logic patterns.",
      "Collaborated with senior development team to design and deploy responsive user interfaces directly for live client projects.",
      "Enhanced advanced debugging and root-cause problem-solving skills through direct, hands-on production code environments."
    ],
    toolkit: ["JavaScript ES6", "CSS3 Architecture", "Responsive Wireframing"],
    certificate: "/assets/exp_utl.png"
  }
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="experience-timeline" id="experience" ref={ref}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="exp-header reveal">
           <span className="section-label">CORPORATE EXPERIENCE / 05</span>
           <h2 className="section-title">
             Professional <span className="text-gradient">Internship Log</span>.
           </h2>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div className="timeline-container">
           {/* Timeline Line */}
           <div className="timeline-spine"></div>

           {experiences.map((exp, index) => (
             <div key={exp.id} className={`timeline-node reveal delay-${index + 1}`}>
                
                {/* Glowing Orb */}
                <div className="node-orb">
                   <div className="orb-core"></div>
                </div>

                {/* Node Content */}
                <div className="node-content">
                   
                   <div className="node-badge">VERIFIED INDUSTRY ENGAGEMENT</div>
                   
                   <div className="node-head">
                      <h3 className="node-title">{exp.role}</h3>
                      <div className="node-company">
                         <Briefcase size={16} className="node-icon" />
                         {exp.company} <span className="text-muted">— {exp.location}</span>
                      </div>
                      <div className="node-meta-group">
                         <span className="node-meta"><Calendar size={14} className="node-icon" /> {exp.date}</span>
                         <span className="node-pill">{exp.type}</span>
                      </div>
                   </div>

                   <div className="node-body-split">
                     {/* Left: Text Content */}
                     <div className="node-txt-col">
                        <div className="node-impact">
                           <h4 className="impact-header">// EXECUTIVE SUMMARY</h4>
                           <p className="impact-desc">{exp.summary}</p>
                           <ul className="impact-list">
                              {exp.impacts.map((impact, i) => (
                                <li key={i}>
                                   <ChevronRight size={16} className="list-arrow" />
                                   <span>{impact}</span>
                                </li>
                              ))}
                           </ul>
                        </div>
                        <div className="node-stack">
                           <Code2 size={16} className="stack-icon" />
                           <span className="stack-label">INTERNSHIP TOOLKIT:</span>
                           {exp.toolkit.map(tool => (
                             <span key={tool} className="stack-tag">{tool}</span>
                           ))}
                        </div>
                     </div>

                     {/* Right: Certificate Image */}
                     <div className="node-img-col">
                        <div className="cert-box">
                           <div className="cert-topbar">
                              <Award size={14} className="cert-topbar-icon" /> Official Letter
                           </div>
                           <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                              <img src={exp.certificate} alt={`${exp.company} Certificate`} className="cert-image-display" />
                           </a>
                        </div>
                     </div>
                   </div>

                </div>
             </div>
           ))}

        </div>

      </div>
    </section>
  );
}
