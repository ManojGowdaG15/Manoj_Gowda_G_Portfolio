import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="hero-awwwards" id="hero" ref={ref}>
      <div className="container hero-inner-awwwards">
        <div className="aww-split-col left-col reveal">
          <div className="organic-blob-wrap">
             <div className="blob-border"></div>
             <div className="blob-shape">
                <img src="/assets/manoj_profile.jpg" alt={personalInfo.name} className="blob-image" />
                <div className="blob-inner-glow"></div>
             </div>
          </div>
        </div>

        <div className="aww-split-col right-col">
          <span className="aww-greeting reveal delay-1">Hey, I'm</span>
          <h1 className="aww-name reveal delay-2">
            Manoj <span className="text-gradient">Gowda G.</span>
          </h1>
          <p className="aww-narrative reveal delay-3">
             A technically driven <span className="narrative-bold">Software Engineer & AI Specialist</span>. 
             I build highly scalable web architectures and integrate next-generation artificial intelligence 
             into seamless digital products. My core focus lies at the intersection of robust backend frameworks 
             and cinematic frontend experiences.
          </p>
          
          <div className="aww-actions-row reveal delay-4">
             <a href="#projects" className="aww-btn-primary">
                View My Case Studies
                <span className="btn-arrow"></span>
             </a>
             <div className="aww-stats-mini">
                <span className="stat-num">08+</span>
                <span className="stat-label">Projects Built</span>
             </div>
          </div>
        </div>
      </div>
      
      <div className="aww-scroll-guide">
         <div className="guide-line"></div>
         <span className="guide-text">SCROLL</span>
      </div>
    </section>
  );
}
