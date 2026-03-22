import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, CheckCircle, ExternalLink, Award } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: "AI Skills Passport",
    issuer: "Microsoft Elevate (via Credly)",
    date: "Mar 17, 2026",
    image: "/assets/cert_microsoft_ai.png",
    desc: "Official recognition from Microsoft verifying high-level AI proficiency and technical application capabilities.",
    verified: true
  },
  {
    id: 2,
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    date: "2026",
    image: "/assets/cert_ey_microsoft.png",
    desc: "Comprehensive completion certificate validating AI skill frameworks and enterprise foundation concepts.",
    verified: true
  },
  {
    id: 3,
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "Mar 21, 2026",
    image: "/assets/cert_mcp.png",
    desc: "Advanced certification regarding Anthropic's Model Context Protocol (MCP) and cutting-edge Language Model orchestration.",
    verified: true
  },
  {
    id: 4,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic / UCC / Ringling College",
    date: "2025 / 2026",
    image: "/assets/cert_anthropic_ai.png",
    desc: "Deep-dive fluency in AI operational frameworks, ensuring high standards of ethical and functional AI development.",
    verified: true
  },
  {
    id: 5,
    title: "Application Developer Web Mobile",
    issuer: "IT-ITeS SSC / NASSCOM / NCVET",
    date: "Aug 20, 2024",
    image: "/assets/cert_nasscom.png",
    desc: "Official Indian government (NCVET) certification validating professional competency in full-stack web and mobile applications.",
    verified: true
  }
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section className="cert-registry" id="certifications" ref={ref}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="cert-header reveal">
           <span className="section-label">CREDENTIAL REGISTRY / 04</span>
           <h2 className="section-title">
             Verified <span className="text-gradient">Professional Licenses</span>.
           </h2>
        </div>

        {/* CERTIFICATE GRID */}
        <div className="cert-grid">
           {certifications.map((cert, index) => (
             <div key={cert.id} className={`cert-card reveal delay-${index + 1}`}>
                
                {/* Image Box */}
                <div className="cert-media">
                   <img src={cert.image} alt={cert.title} className="cert-img" />
                   {cert.verified && (
                     <div className="verified-badge">
                        <CheckCircle size={14} /> VERIFIED
                     </div>
                   )}
                </div>

                {/* Content Box */}
                <div className="cert-info">
                   <div className="cert-meta">
                      <span className="cert-date">{cert.date}</span>
                      <Award size={16} className="cert-icon" />
                   </div>
                   <h3 className="cert-title">{cert.title}</h3>
                   <div className="cert-issuer">
                      <Shield size={14} className="issuer-icon" />
                      {cert.issuer}
                   </div>
                   <p className="cert-desc">{cert.desc}</p>
                </div>

             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
