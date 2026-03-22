import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  
  // Custom Magnetic Cursor Logic
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Moving the dot instantly
      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };
    
    const animate = () => {
      // Lerp for smooth cursor lag
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);
    
    // Hover Effects
    const handleLinkHover = (e) => {
      if (cursor) cursor.classList.add('hover');
    };
    
    const handleLinkLeave = (e) => {
      if (cursor) cursor.classList.remove('hover');
    };
    
    const links = document.querySelectorAll('a, button, .clickable');
    links.forEach(l => {
      l.addEventListener('mouseenter', handleLinkHover);
      l.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  
  return (
    <div className="portfolio-app">
      {/* Premium Cursor & Texture Overlay */}
      <div className="grain-overlay"></div>
      <div ref={cursorRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
