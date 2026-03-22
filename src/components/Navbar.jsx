import { useState, useEffect } from 'react';
import { navItems, personalInfo } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section');
      let current = '#hero';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = `#${section.id}`;
        }
      });
      setActiveSegment(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-stellar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container-pro">
        <a href="#hero" className="nav-logo-pro">
          <span className="logo-dot"></span>
          {personalInfo.name.split(' ')[0]}
        </a>

        <div className="nav-pill-wrap">
          <ul className="nav-pill-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`nav-pill-link ${activeSegment === item.href ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSegment === item.href && (
                    <span className="nav-pill-glow"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a href="#contact" className="nav-cta-mini">
          Connect
        </a>
      </div>
    </nav>
  );
}
