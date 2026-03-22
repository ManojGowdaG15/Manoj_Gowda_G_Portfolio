import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Terminal, Globe, Database, Box, Server, ShieldCheck, 
  Zap, Layers, Users, Target, MessageSquare, Brain, 
  Code2, Cpu, Activity, HardDrive, Smartphone
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="skills-core" id="skills" ref={ref}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="skills-header reveal">
           <span className="section-label">THE TECHNICAL CORE / 02</span>
           <h2 className="section-title">
             Applied <span className="text-gradient">Logic Systems</span>.
           </h2>
        </div>

        {/* CORE SKILL MODULES - EXACT RESUME CATEGORIES */}
        <div className="skill-core-grid reveal delay-1">
           
           {/* CATEGORY 01: PROGRAMMING LANGUAGES */}
           <div className="core-module programming-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Terminal size={22} className="module-icon" />
                    <span className="module-meta">ID: PROG-CORE</span>
                 </div>
                 <h3 className="module-title">Programming Languages</h3>
                 <p className="module-text">C, Java, Python foundations with advanced Cloud Computing logic.</p>
                 <div className="module-tags">
                    <span className="tag-pill">C</span>
                    <span className="tag-pill">Java</span>
                    <span className="tag-pill">Python</span>
                    <span className="tag-pill">Cloud</span>
                 </div>
              </div>
           </div>

           {/* CATEGORY 02: WEB TECHNOLOGIES */}
           <div className="core-module web-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Globe size={22} className="module-icon" />
                    <span className="module-meta">ID: WEB-ENGINE</span>
                 </div>
                 <h3 className="module-title">Web Technologies</h3>
                 <p className="module-text">High-performance stack: HTML, CSS, JavaScript, and Core PHP.</p>
                 <div className="module-tags">
                    <span className="tag-pill">HTML5</span>
                    <span className="tag-pill">CSS3</span>
                    <span className="tag-pill">JS</span>
                    <span className="tag-pill">PHP</span>
                 </div>
              </div>
           </div>

           {/* CATEGORY 03: DATABASES */}
           <div className="core-module database-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Database size={22} className="module-icon" />
                    <span className="module-meta">ID: DATA-VAULT</span>
                 </div>
                 <h3 className="module-title">Databases & Env</h3>
                 <p className="module-text">MySQL and SQLite design via integrated XAMPP server environments.</p>
                 <div className="module-tags">
                    <span className="tag-pill">MySQL</span>
                    <span className="tag-pill">SQLite</span>
                    <span className="tag-pill">XAMPP</span>
                 </div>
              </div>
           </div>

           {/* CATEGORY 04: FRAMEWORKS & TOOLS */}
           <div className="core-module framework-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Layers size={22} className="module-icon" />
                    <span className="module-meta">ID: DEV-ECOSYSTEM</span>
                 </div>
                 <h3 className="module-title">Frameworks & Tools</h3>
                 <p className="module-text">Backend orchestration with Django and Git/GitHub version control.</p>
                 <div className="module-tags">
                    <span className="tag-pill">Django</span>
                    <span className="tag-pill">Git</span>
                    <span className="tag-pill">GitHub</span>
                 </div>
              </div>
           </div>

        </div>

        {/* 🧠 COGNITIVE MATRIX - RESUME SOFT SKILLS */}
        <div className="cognitive-layer reveal delay-3">
           <h4 className="cognitive-header">// COGNITIVE DOMAIN</h4>
           <div className="cognitive-pills">
              
              <div className="cognitive-pioneer mint-breathe float">
                 <Target className="cog-icon spin-slow" />
                 <div className="cog-content">
                    <span className="cog-title">Problem-Solving</span>
                    <span className="cog-detail">Structural resolution and logical decomposition of architectures.</span>
                 </div>
              </div>

              <div className="cognitive-pioneer violet-breathe float">
                 <Users className="cog-icon pulse" />
                 <div className="cog-content">
                    <span className="cog-title">Team Collaboration</span>
                    <span className="cog-detail">Fostering synergy within multi-functional development groups.</span>
                 </div>
              </div>

              <div className="cognitive-pioneer amber-breathe float">
                 <MessageSquare className="cog-icon breathe" />
                 <div className="cog-content">
                    <span className="cog-title">Communication</span>
                    <span className="cog-detail">Clear technical documentation and stakeholder alignment.</span>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
