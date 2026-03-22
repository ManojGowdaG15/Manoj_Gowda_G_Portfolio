import { useScrollReveal } from '../hooks/useScrollReveal';
import { education } from '../data/portfolio';
import { Award, GraduationCap, Microscope, BookOpen, CheckCircle2, Radio } from 'lucide-react';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="about-archive" id="about" ref={ref}>
      <div className="container archive-inner">
        
        {/* LEFT COLUMN: THE COMPREHENSIVE NARRATIVE (STICKY) */}
        <div className="archive-left reveal">
           <span className="section-label">ACADEMIC ARCHIVE / 01</span>
           <h2 className="archive-title">
             Evolution of <span className="text-gradient">Architectural Excellence</span>.
           </h2>
           
           <div className="archive-narrative-stack">
              <div className="archive-stat-box">
                 <span className="stat-val-huge">9.43</span>
                 <span className="stat-lab-huge">AGGREGATE MCA CGPA</span>
              </div>
              
              <div className="archive-narrative-block">
                 <h4 className="archive-sub-pro"><BookOpen size={14} className="icon-gap" /> // ACADEMIC RIGOR</h4>
                 <p className="archive-para-pro">
                    Consistently maintaining an elite standing with a 9.43 MCA CGPA. 
                    My academic history is a testament to persistent performance.
                 </p>
              </div>

              <div className="archive-narrative-block">
                 <h4 className="archive-sub-pro"><Microscope size={14} className="icon-gap" /> // RESEARCH FOCUS</h4>
                 <p className="archive-para-pro">
                    Directly mentored by <strong>IBM Enterprise Architects</strong>, specialized 
                    in <strong>RAG Architectures</strong> and distributed systems.
                 </p>
              </div>

              <div className="archive-status-list">
                 <span className="status-item"><Radio size={12} className="icon-gap active-dot" /> PURSUING MCA (AUG 2026)</span>
                 <span className="status-item"><CheckCircle2 size={12} className="icon-gap" /> BCA ALUMNUS (9.01 CGPA)</span>
                 <span className="status-item"><CheckCircle2 size={12} className="icon-gap" /> PUC COMMERCE (91.67%)</span>
                 <span className="status-item"><CheckCircle2 size={12} className="icon-gap" /> SSLC KSEEB (78.9%)</span>
              </div>
           </div>
        </div>

        {/* RIGHT COLUMN: INSTITUTIONS (ONE BY ONE) */}
        <div className="archive-right reveal delay-2">
           <div className="archive-stack">
              
              {/* INST 01: DR. AIT (HERO LAYOUT - PHOTO TOP) */}
              <div className="archive-card teal-pro hero-dossier">
                 <div className="archive-hero-media">
                    <img src="/assets/dr_ait.png" alt="Dr. AIT" className="archive-img-cover" />
                 </div>
                 <div className="archive-card-info padding-pro">
                    <span className="archive-card-num">2024 – 2026 (CURRENT)</span>
                    <h3 className="archive-card-name">Dr. Ambedkar Institute of Technology (Dr. AIT), Bengaluru</h3>
                    <p className="archive-card-loc">VTU Affiliated / Karnataka State</p>
                    <p className="archive-card-deg">Master of Computer Applications (MCA)</p>
                    <div className="archive-card-footer-flex">
                       <span className="archive-score-label">CGPA: 9.43 / 10.0</span>
                       <div className="archive-card-status active">PURSUING</div>
                    </div>
                 </div>
              </div>

              {/* INST 02: PINNACLE */}
              <div className="archive-card indigo-pro">
                 <div className="archive-card-media">
                    <img src="/assets/pinnacle_logo.png" alt="Pinnacle" className="archive-img-fit logo-mode" />
                 </div>
                 <div className="archive-card-info">
                    <span className="archive-card-num">2021 – 2024 (ALUMNUS)</span>
                    <h3 className="archive-card-name">Pinnacle Institute of Management and Science, Bengaluru</h3>
                    <p className="archive-card-loc">Bachelor Alumnus / Graduate Record</p>
                    <p className="archive-card-deg">Bachelor of Computer Applications (BCA)</p>
                    <div className="archive-card-footer-flex">
                       <span className="archive-score-label">CGPA: 9.01 / 10.0</span>
                       <div className="archive-card-status completed">GRADUATED</div>
                    </div>
                 </div>
              </div>

              {/* INST 03: MAHESH */}
              <div className="archive-card amber-pro">
                 <div className="archive-card-media">
                    <img src="/assets/mahesh_logo.png" alt="Mahesh" className="archive-img-fit logo-mode" />
                 </div>
                 <div className="archive-card-info">
                    <span className="archive-card-num">2019 – 2021 (PUC)</span>
                    <h3 className="archive-card-name">Mahesh PU College, Nagarabhavi, Bengaluru</h3>
                    <p className="archive-card-loc">Commerce with Computer Science</p>
                    <p className="archive-card-deg">Pre-University Course (PUC)</p>
                    <div className="archive-card-footer-flex">
                       <span className="archive-score-label">PERCENTAGE: 91.67%</span>
                       <div className="archive-card-status completed">COMPLETED</div>
                    </div>
                 </div>
              </div>

              {/* INST 04: ST. JOHN'S */}
              <div className="archive-card charcoal-pro">
                 <div className="archive-card-media">
                    <img src="/assets/st_johns_logo.png" alt="St. John's" className="archive-img-fit logo-mode" />
                 </div>
                 <div className="archive-card-info">
                    <span className="archive-card-num">2018 – 2019 (SSLC)</span>
                    <h3 className="archive-card-name">St. John's High School, Nagarabhavi, Bengaluru</h3>
                    <p className="archive-card-loc">KSEEB Board / Secondary Record</p>
                    <p className="archive-card-deg">Secondary School Leaving Cert (SSLC)</p>
                    <div className="archive-card-footer-flex">
                       <span className="archive-score-label">PERCENTAGE: 78.9%</span>
                       <div className="archive-card-status completed">COMPLETED</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
