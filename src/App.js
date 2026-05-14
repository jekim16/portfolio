import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Experience", "Skills", "Education", "Contact"];

const EXPERIENCES = [
  {
    date: "August 2023 — Present",
    role: "Junior Web Developer",
    company: "City Assessor's Office · Davao City",
    tasks: [
      "Create necessary systems requested by superiors",
      "Extract data from existing database of the office's current system",
      "Assist with testing new systems being created for the office",
      "Ensure new systems meet employees' and BLGF's requirements",
    ],
  },
  {
    date: "August 2022 — August 2023",
    role: "Customer Service Representative",
    company: "VXI SM Davao · AT&T U-verse Account",
    tasks: [
      "Assisted AT&T customers with billing inquiries",
      "Responsible for making sales on the U-verse broadband account",
    ],
  },
  {
    date: "May 2022 — June 2022",
    role: "Full Stack Developer",
    company: "Webee Labs",
    tasks: [
      "Learned Laravel and WordPress development",
      "Fixed issues and added features to existing company websites",
    ],
  },
  {
    date: "October 2021 — April 2022",
    role: "Software Developer",
    company: "Anflo Management and Investment Corp.",
    tasks: [
      "Studied new programming languages for company needs",
      "Created software tools essential to the company's operations",
    ],
  },
  {
    date: "September 2020 — October 2021",
    role: "ICT and Data Manager",
    company: "Institute for Autonomy and Governance",
    tasks: [
      "Created and maintained the organization's website",
      "Responsible for computer troubleshooting and technical facilities",
      "Facilitated the conference hall during events",
    ],
  },
  {
    date: "May 2019 — September 2020",
    role: "Research Assistant",
    company: "Institute for Autonomy and Governance",
    tasks: [
      "Maintained the organization's website",
      "Assisted the Head of Research with research projects",
      "Compiled data and created infographics",
      "Handled computer troubleshooting and technical facilities",
    ],
  },
];

const SKILLS = [
  { icon: "🌐", name: "Web Dev" },
  { icon: "🐘", name: "Laravel" },
  { icon: "🔧", name: "WordPress" },
  { icon: "🗄️", name: "Databases" },
  { icon: "📊", name: "MS Office" },
  { icon: "🗂️", name: "MS Access" },
  { icon: "💻", name: "Full Stack" },
  { icon: "🎨", name: "Infographics" },
  { icon: "🛠️", name: "IT Support" },
  { icon: "📞", name: "BPO / CRM" },
  { icon: "🧪", name: "QA Testing" },
  { icon: "👥", name: "Leadership" },
];

const STATS = [
  { num: "6+", label: "Years Experience" },
  { num: "5", label: "Companies" },
  { num: "BSIT", label: "Degree" },
  { num: "2×", label: "Civil Service Eligible" },
];

const CONTACTS = [
  { icon: "✉️", label: "Email", value: "jekimlao16@gmail.com" },
  { icon: "📱", label: "Phone", value: "+63 997 612 9248" },
  { icon: "📍", label: "Location", value: "Davao City, Philippines" },
];

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedItem({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Nav({ active }) {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(13,27,42,0.88)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(240,192,64,0.18)",
    }}>
      <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 3, color: "#f0c040", textTransform: "uppercase" }}>MJL</span>
      <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} style={{
              fontFamily: "monospace", fontSize: 11, letterSpacing: 2,
              color: active === link ? "#f0c040" : "#8a8f9a",
              background: "none", border: "none", cursor: "pointer",
              textTransform: "uppercase", transition: "color .25s",
            }}>{link}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center", padding: "120px 48px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(240,192,64,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(240,192,64,0.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 60% 80% at 80% 40%,rgba(240,192,64,0.07) 0%,transparent 70%)",
      }} />

      {/* Left */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-block", fontFamily: "monospace", fontSize: 11,
          letterSpacing: 3, color: "#f0c040", textTransform: "uppercase",
          border: "1px solid #f0c040", padding: "6px 14px", borderRadius: 2, marginBottom: 28,
          animation: "fadeUp .6s ease both",
        }}>Available for Opportunities</div>

        <h1 style={{
          fontFamily: "Georgia, serif", fontSize: "clamp(52px,6vw,90px)", fontWeight: 900,
          lineHeight: .95, color: "#fff", marginBottom: 24,
          animation: "fadeUp .6s ease .1s both",
        }}>
          Michael<br />James<br /><span style={{ color: "#f0c040" }}>L. Lao</span>
        </h1>

        <p style={{
          fontSize: 15, lineHeight: 1.8, color: "#8a8f9a", maxWidth: 420, marginBottom: 40,
          animation: "fadeUp .6s ease .2s both",
        }}>
          IT graduate and full-stack developer with expertise in web development,
          systems creation, and data management. Bringing technical depth and BPO experience to every project.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp .6s ease .3s both" }}>
          <a href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              background: "#f0c040", color: "#0d1b2a", fontFamily: "monospace", fontSize: 12,
              letterSpacing: 2, textTransform: "uppercase", border: "none", padding: "14px 28px",
              cursor: "pointer", fontWeight: 600, textDecoration: "none", display: "inline-block",
              transition: "transform .2s",
            }}>Get In Touch</a>
          <a href="#experience"
            onClick={e => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              border: "1px solid rgba(240,192,64,0.3)", color: "#f5f0e8", background: "transparent",
              fontFamily: "monospace", fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
              padding: "14px 28px", cursor: "pointer", textDecoration: "none", display: "inline-block",
              transition: "border-color .2s, color .2s",
            }}>View Work</a>
        </div>
      </div>

      {/* Right — photo card */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: 300 }}>
          <div style={{
            position: "absolute", top: 20, left: 20, right: -20, bottom: -20,
            border: "2px solid #f0c040", zIndex: 0,
          }} />
          <div style={{
            position: "relative", zIndex: 1, width: 300, height: 360,
            background: "linear-gradient(135deg,#1a2d42 0%,#0d1b2a 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 80, fontWeight: 900, color: "#f0c040", opacity: .18, lineHeight: 1 }}>MJL</div>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: "#f0c040", textTransform: "uppercase", marginTop: 12 }}>
              Michael James L. Lao
            </div>
          </div>
          <div style={{
            position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
            background: "#f0c040", color: "#0d1b2a", fontFamily: "monospace",
            fontSize: 10, letterSpacing: 2, padding: "8px 20px", whiteSpace: "nowrap", fontWeight: 600, zIndex: 2,
          }}>Junior Web Developer · City Assessor's Office</div>
        </div>
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}

function StatsBar() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4,1fr)",
      borderTop: "1px solid rgba(240,192,64,0.18)", borderBottom: "1px solid rgba(240,192,64,0.18)",
      margin: "0 48px",
    }}>
      {STATS.map((s, i) => (
        <div key={i} style={{
          padding: "32px 24px", textAlign: "center",
          borderRight: i < STATS.length - 1 ? "1px solid rgba(240,192,64,0.18)" : "none",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 40, fontWeight: 900, color: "#f0c040", lineHeight: 1 }}>{s.num}</div>
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, color: "#8a8f9a", textTransform: "uppercase", marginTop: 8 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 64 }}>
      <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 3, color: "#f0c040", textTransform: "uppercase" }}>{num}</span>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", margin: 0 }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: "rgba(240,192,64,0.18)" }} />
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 48px" }}>
      <SectionHeader num="01" title="Experience" />
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,#f0c040,transparent)" }} />
        {EXPERIENCES.map((exp, i) => (
          <AnimatedItem key={i} delay={i * 60} style={{ paddingLeft: 48, paddingBottom: 56 }}>
            <div style={{
              position: "absolute", left: -6, marginTop: 6,
              width: 13, height: 13, borderRadius: "50%",
              background: "#f0c040", border: "2px solid #0d1b2a",
            }} />
            <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 2, color: "#f0c040", textTransform: "uppercase", marginBottom: 8 }}>{exp.date}</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{exp.role}</div>
            <div style={{ fontFamily: "monospace", fontSize: 13, color: "#8a8f9a", marginBottom: 16, letterSpacing: 1 }}>{exp.company}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {exp.tasks.map((t, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "#f5f0e8", lineHeight: 1.7, padding: "4px 0" }}>
                  <span style={{ color: "#f0c040", flexShrink: 0 }}>—</span>{t}
                </li>
              ))}
            </ul>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 48px", background: "rgba(255,255,255,0.02)" }}>
      <SectionHeader num="02" title="Skills & Tools" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 16 }}>
        {SKILLS.map((sk, i) => (
          <AnimatedItem key={i} delay={i * 40}>
            <div style={{
              background: "#131f2e", border: "1px solid rgba(240,192,64,0.18)",
              padding: "24px 20px", textAlign: "center",
              cursor: "default", transition: "border-color .2s, transform .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f0c040"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,192,64,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{sk.icon}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 1.5, color: "#f5f0e8", textTransform: "uppercase" }}>{sk.name}</div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" style={{ padding: "100px 48px" }}>
      <SectionHeader num="03" title="Education & Eligibility" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {[
          {
            tag: "Education",
            title: "Notre Dame University",
            sub: "Bachelor of Science in Information Technology · 2015–2019",
            items: [
              "Former Vice-President, College of Computer Studies",
              "MOS: Microsoft Office & Microsoft Access",
              "Leadership Training (2017–2018)",
              "OJT at MrPau Softwares, Davao City",
            ],
          },
          {
            tag: "Civil Service Eligibility",
            title: "Career Service Examination",
            sub: "Passed both levels of the Philippine Civil Service Examination.",
            items: [
              "Subprofessional Level — March 18, 2018",
              "Professional Level — March 17, 2019",
            ],
          },
        ].map((card, i) => (
          <AnimatedItem key={i} delay={i * 100}>
            <div style={{
              background: "#131f2e", border: "1px solid rgba(240,192,64,0.18)",
              padding: 40, height: "100%", boxSizing: "border-box",
              transition: "border-color .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#f0c040"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(240,192,64,0.18)"}
            >
              <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 3, color: "#f0c040", textTransform: "uppercase", marginBottom: 20 }}>{card.tag}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8, marginTop: 0 }}>{card.title}</h3>
              <p style={{ fontSize: 13, color: "#8a8f9a", lineHeight: 1.7, margin: 0 }}>{card.sub}</p>
              <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 13, color: "#f5f0e8", padding: "5px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{ color: "#f0c040", fontSize: 7, flexShrink: 0 }}>◆</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 48px", background: "rgba(255,255,255,0.02)" }}>
      <SectionHeader num="04" title="Contact" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {CONTACTS.map((c, i) => (
          <AnimatedItem key={i} delay={i * 80}>
            <div style={{
              background: "#131f2e", border: "1px solid rgba(240,192,64,0.18)",
              padding: 32, display: "flex", alignItems: "center", gap: 20,
              transition: "border-color .2s, transform .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#f0c040"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,192,64,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 2, color: "#f0c040", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "#f5f0e8" }}>{c.value}</div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(240,192,64,0.18)", padding: "32px 48px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <p style={{ fontFamily: "monospace", fontSize: 11, color: "#8a8f9a", letterSpacing: 1, margin: 0 }}>© 2026 Michael James L. Lao</p>
      <p style={{ fontFamily: "monospace", fontSize: 11, color: "#8a8f9a", letterSpacing: 1, margin: 0 }}>BSIT · Web Developer · Davao City</p>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("Experience");

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase())).filter(Boolean);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#0d1b2a", color: "#f5f0e8", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav active={activeSection} />
      <Hero />
      <StatsBar />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
