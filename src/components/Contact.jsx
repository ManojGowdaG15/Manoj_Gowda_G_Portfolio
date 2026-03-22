import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Linkedin, Github, TerminalSquare, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact-terminal" id="contact" ref={ref}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="contact-header reveal">
           <span className="section-label">COMMUNICATIONS HUB / 06</span>
           <h2 className="section-title">
             Initialize <span className="text-gradient">Connection</span>.
           </h2>
        </div>

        {/* CENTERED CONTACT CARD */}
        <div className="contact-card reveal delay-1">
           
           <div className="card-top">
              <div className="panel-badge">
                 <TerminalSquare size={16} /> SECURE CHANNEL DIRECTORY
              </div>
              <h3 className="panel-title">Let's Engineer the Future.</h3>
              <p className="panel-desc">
                 Currently open for software engineering roles, full-stack architectural projects, and AI system integrations. For all professional inquiries and collaborations, please reach out directly via my encrypted email channel below.
              </p>
           </div>

           <div className="card-middle">
              <a href="mailto:manoj15gowda@gmail.com" className="primary-mail-btn">
                 <div className="mail-icon-wrapper">
                    <Mail size={24} />
                 </div>
                 <div className="mail-txt">
                    <span className="mail-label">DIRECT INBOX</span>
                    <span className="mail-address">manoj15gowda@gmail.com</span>
                 </div>
                 <ArrowRight size={24} className="mail-arrow" />
              </a>
           </div>

           <div className="card-bottom">
              
              <div className="secondary-links">
                 <a href="tel:+919353441852" className="sec-link">
                    <Phone size={18} className="sec-icon" />
                    <span>+91 9353441852</span>
                 </a>
                 <div className="sec-link cursor-default">
                    <MapPin size={18} className="sec-icon" />
                    <span>Bengaluru, Karnataka, India</span>
                 </div>
              </div>

              {/* SOCIAL MATRIX */}
              <div className="social-matrix">
                 <span className="matrix-label">EXTERNAL NETWORKS //</span>
                 <div className="social-icons">
                    <a href="https://linkedin.com/in/manoj-gowda-g-a994882a3" target="_blank" rel="noopener noreferrer" className="social-btn">
                       <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/ManojGowdaG15" target="_blank" rel="noopener noreferrer" className="social-btn">
                       <Github size={20} />
                    </a>
                 </div>
              </div>

           </div>

        </div>

      </div>
    </section>
  );
}
