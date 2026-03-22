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
                    <span className="tag-pill">JavaScript</span>
                    <span className="tag-pill">TypeScript</span>
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
                 <p className="module-text">High-performance stack for modern web applications.</p>
                 <div className="module-tags">
                    <span className="tag-pill">HTML5</span>
                    <span className="tag-pill">CSS3</span>
                    <span className="tag-pill">PHP</span>
                    <span className="tag-pill">React 18</span>
                    <span className="tag-pill">Node.js</span>
                    <span className="tag-pill">Tailwind CSS</span>
                    <span className="tag-pill">REST APIs</span>
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
                 <p className="module-text">Secure data storage and local server environment design.</p>
                 <div className="module-tags">
                    <span className="tag-pill">MySQL</span>
                    <span className="tag-pill">SQLite</span>
                    <span className="tag-pill">XAMPP</span>
                    <span className="tag-pill">MongoDB</span>
                    <span className="tag-pill">VectorDB (Pinecone)</span>
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
                 <p className="module-text">Orchestration with modern frameworks and version control.</p>
                 <div className="module-tags">
                    <span className="tag-pill">Django</span>
                    <span className="tag-pill">Git</span>
                    <span className="tag-pill">GitHub</span>
                    <span className="tag-pill">Flask</span>
                    <span className="tag-pill">Express.js</span>
                    <span className="tag-pill">Vite</span>
                    <span className="tag-pill">Lucide React</span>
                    <span className="tag-pill">JWT Auth</span>
                    <span className="tag-pill">MERN Stack</span>
                 </div>
              </div>
           </div>

           {/* CATEGORY 05: AI & INTELLIGENCE SYSTEMS */}
           <div className="core-module ai-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Brain size={22} className="module-icon" />
                    <span className="module-meta">ID: AI-CORE</span>
                 </div>
                 <h3 className="module-title">AI & Intelligence Systems</h3>
                 <p className="module-text">Advanced AI pipeline engineering — building intelligent search, semantic retrieval, and LLM-powered applications.</p>
                 <div className="module-tags">
                    <span className="tag-pill">RAG (Retrieval-Augmented Generation)</span>
                    <span className="tag-pill">LangChain</span>
                    <span className="tag-pill">Pinecone (VectorDB)</span>
                    <span className="tag-pill">OpenAI API</span>
                    <span className="tag-pill">Groq</span>
                    <span className="tag-pill">FastAPI</span>
                    <span className="tag-pill">MCP (Model Context Protocol)</span>
                    <span className="tag-pill">Prompt Engineering</span>
                 </div>
              </div>
           </div>

           {/* CATEGORY 06: COGNITIVE DOMAIN */}
           <div className="core-module cognitive-card-glow kinetic">
              <div className="module-orb"></div>
              <div className="module-inner">
                 <div className="module-head">
                    <Users size={22} className="module-icon" />
                    <span className="module-meta">ID: HUMAN-CORE</span>
                 </div>
                 <h3 className="module-title">Cognitive Domain</h3>
                 <p className="module-text">Structural resolution, synergistic collaboration, and functional alignment.</p>
                 <div className="module-tags">
                    <span className="tag-pill">Problem Solving</span>
                    <span className="tag-pill">Team Collaboration</span>
                    <span className="tag-pill">Communication</span>
                    <span className="tag-pill">Project Management</span>
                    <span className="tag-pill">Technical Documentation</span>
                    <span className="tag-pill">Agile Teamwork</span>
                 </div>
              </div>
           </div>

         </div>

      </div>
    </section>
  );
}
