import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-system">
      <div className="container">
        
        {/* THE CREATIVE TYPOGRAPHY */}
        <div className="footer-headline">
           <h2>Manoj Gowda G.</h2>
        </div>
        
        <div className="footer-grid">
           
           {/* BRANDING */}
           <div className="footer-brand">
              <div className="brand-logo">Mg. //</div>
              <p className="brand-desc">
                 Architecting scalable data systems, advanced AI engines, and enterprise front-end applications. Built precisely for high performance.
              </p>
           </div>

           {/* QUICK LINKS */}
           <div className="footer-links">
              <span className="footer-label">SYSTEM INDEX</span>
              <nav className="footer-nav">
                 <a href="#about">About Architecture</a>
                 <a href="#skills">Strategic Core</a>
                 <a href="#projects">Project Archive</a>
                 <a href="#experience">Internship Log</a>
              </nav>
           </div>

           {/* NETWORK */}
           <div className="footer-network">
              <span className="footer-label">EXTERNAL NETWORK</span>
              <div className="footer-social">
                 <a href="https://linkedin.com/in/manoj-gowda-g-a994882a3" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /> LinkedIn Protocol</a>
                 <a href="https://github.com/ManojGowdaG15" target="_blank" rel="noopener noreferrer"><Github size={20} /> GitHub Repository</a>
                 <a href="mailto:manoj15gowda@gmail.com"><Mail size={20} /> Encrypted Mail</a>
              </div>
           </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
           <div className="sys-status">
              <span className="status-dot"></span> ALL SYSTEMS OPERATIONAL
           </div>
           <div className="copyright">
              © {new Date().getFullYear()} Manoj Gowda G. // Crafted with absolute precision.
           </div>
           <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to Top">
              <ArrowUp size={20} />
           </button>
        </div>

      </div>
    </footer>
  );
}
