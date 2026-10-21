
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mihretuPhoto from "./assets/profile.jpg";
import "./App.css";

const EMAIL = "mihiretuyeshi@gmail.com";
const GITHUB = "https://github.com/yeshi-830";

const roles = [
  "Aspiring Full-Stack Developer",
  "React Developer",
  "Backend Developer",
  "Software Engineering Student",
];

const skills = [
  { name: "HTML", icon: "🌐", level: "Frontend" },
  { name: "CSS", icon: "🎨", level: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: "Frontend" },
  { name: "React", icon: "⚛️", level: "Frontend" },
  { name: "Node.js", icon: "🟢", level: "Backend" },
  { name: "Express.js", icon: "🚀", level: "Backend" },
  { name: "MySQL", icon: "🗄️", level: "Database" },
  { name: "Git & GitHub", icon: "🔧", level: "Tools" },
];

const projects = [
  {
    id: 1,
    title: "University Registration System",
    description:
      "A university management application for registering students, viewing courses, and managing student information.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    category: "Full-Stack",
    github:
      "https://github.com/yeshi-830/university-registration-system",
    status: "Featured Project",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my skills, projects, background, and contact information.",
    technologies: ["React", "CSS", "JavaScript", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/yeshi-830/portifolio",
    status: "Featured Project",
    icon: "💻",
  },
  {
    id: 3,
    title: "ProTask Hub",
    description:
      "A task management project designed to help users organize tasks, track progress, and stay productive.",
    technologies: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    github: GITHUB,
    status: "In Development",
    icon: "📋",
  },
  {
    id: 4,
    title: "Full-Stack User Management App",
    description:
      "A full-stack application demonstrating frontend and backend integration with an API and database.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    category: "Full-Stack",
    github: "https://github.com/yeshi-830/full-stack-project",
    status: "Project",
    icon: "👥",
  },
  {
    id: 5,
    title: "Cafeteria Management System",
    description:
      "A developing project focused on organizing cafeteria operations and improving management workflows.",
    technologies: ["React", "JavaScript", "CSS"],
    category: "Web App",
    github: GITHUB,
    status: "In Development",
    icon: "🍽️",
  },
  {
    id: 6,
    title: "Pro Task Manager",
    description:
      "A productivity application focused on task organization, project tracking, and a clear task workflow.",
    technologies: ["React", "JavaScript", "CSS"],
    category: "Productivity",
    github: "https://github.com/yeshi-830/pro-task-manager",
    status: "In Development",
    icon: "✅",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  // Apply the selected theme.
  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);

    return () => {
      document.body.classList.remove("light-mode");
    };
  }, [darkMode]);

  // Animate the changing job title.
  useEffect(() => {
    let characterIndex = 0;
    let nextRoleTimeout;

    const currentRole = roles[roleIndex];
    setTypedText("");

    const typingInterval = window.setInterval(() => {
      characterIndex += 1;
      setTypedText(currentRole.slice(0, characterIndex));

      if (characterIndex >= currentRole.length) {
        window.clearInterval(typingInterval);

        nextRoleTimeout = window.setTimeout(() => {
          setRoleIndex((previousIndex) => (previousIndex + 1) % roles.length);
        }, 1800);
      }
    }, 65);

    return () => {
      window.clearInterval(typingInterval);
      window.clearTimeout(nextRoleTimeout);
    };
  }, [roleIndex]);

  // Show the back-to-top button and update the reading progress bar.
  useEffect(() => {
    const updateScroll = () => {
      setShowTopButton(window.scrollY > 350);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0;

      document.body.style.setProperty("--reading-progress", `${progress}%`);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      document.body.style.removeProperty("--reading-progress");
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open the visitor's email application with the message filled in.
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(contactMessage.trim());

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="header">
        <nav className="navbar container">
          <a className="logo" href="#home" onClick={closeMenu}>
            <span className="logo-bracket">&lt;</span>
            yeshi.dev
            <span className="logo-bracket">/&gt;</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <button
              className="theme-button"
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              title={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section" id="home">
          <div className="container hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="hero-label">
                <span className="status-dot" />
                Welcome to my portfolio
              </span>

              <h1>
                Hi, I'm <span className="gradient-text">Mihiretu Yeshi</span>
              </h1>

              <h2 className="hero-role">
                I'm a <span className="typed-text">{typedText}</span>
                <span className="typing-cursor">|</span>
              </h2>

              <p className="hero-description">
                I build modern, responsive web applications and keep learning
                how to turn ideas into useful digital experiences.
              </p>

              <div className="hero-buttons">
                <a className="btn btn-primary" href="#projects">
                  Explore My Projects <span>↗</span>
                </a>
                <a className="btn btn-outline" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="social-links hero-socials">
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={`mailto:${EMAIL}`}>
                  Email ✉
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="hero-image-glow" />
              <div className="hero-image">
                <img
                  src={mihretuPhoto}
                  alt="Mihiretu Yeshi"
                  loading="eager"
                />
              </div>
              <div className="floating-card floating-card-top">
                <span>💻</span>
                <div>
                  <strong>Web Development</strong>
                  <small>Building and learning</small>
                </div>
              </div>
              <div className="floating-card floating-card-bottom">
                <span>🚀</span>
                <div>
                  <strong>Always Learning</strong>
                  <small>One project at a time</small>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <strong>{projects.length}</strong>
              <span>Portfolio Projects</span>
            </div>
            <div className="stat-card">
              <strong>{skills.length}</strong>
              <span>Core Skills</span>
            </div>
            <div className="stat-card">
              <strong>Full-Stack</strong>
              <span>Learning Path</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Growth Mindset</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">GET TO KNOW ME</span>
              <h2>About <span className="gradient-text">Me</span></h2>
              <p>A little about my background and what I'm working toward.</p>
            </div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-icon">👨‍💻</div>
              <div className="about-content">
                <h3>Software Engineering Student & Developer</h3>
                <p>
                  I'm a software engineering student from Ethiopia with a
                  strong interest in web development. I'm developing my skills
                  in frontend and backend technologies by building practical
                  projects.
                </p>
                <p>
                  My goal is to become a capable full-stack developer,
                  strengthen my problem-solving skills, and create applications
                  that solve real problems. I believe in learning by building,
                  improving through feedback, and making steady progress.
                </p>
                <a className="text-link" href="#contact">
                  Let's connect <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">WHAT I WORK WITH</span>
              <h2>My <span className="gradient-text">Skills</span></h2>
              <p>Technologies I'm learning and using to build projects.</p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">WHAT I'VE BEEN BUILDING</span>
              <h2>Featured <span className="gradient-text">Projects</span></h2>
              <p>
                A selection of my web development work and projects in progress.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="project-card-top">
                    <span className="project-icon">{project.icon}</span>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <span className="project-status">{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="projects-footer">
              <a
                className="btn btn-outline"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                Explore My GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">LET'S TALK</span>
              <h2>Get In <span className="gradient-text">Touch</span></h2>
              <p>
                Have a project idea, question, or opportunity? Feel free to
                reach out.
              </p>
            </div>

            <div className="contact-layout">
              <div className="contact-info">
                <h3>Let's connect</h3>
                <p>
                  I'm happy to connect with other learners, developers, and
                  people interested in building useful software.
                </p>

                <div className="contact-links">
                  <a className="contact-card" href={`mailto:${EMAIL}`}>
                    <span className="contact-card-icon">✉️</span>
                    <span>
                      <strong>Email</strong>
                      <small>{EMAIL}</small>
                    </span>
                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    className="contact-card"
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-card-icon">🐙</span>
                    <span>
                      <strong>GitHub</strong>
                      <small>Explore my repositories</small>
                    </span>
                    <span className="contact-arrow">↗</span>
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact-message-box"
                  placeholder="Write your message here..."
                  rows="5"
                  value={contactMessage}
                  onChange={(event) => setContactMessage(event.target.value)}
                  required
                />

                <button className="btn btn-primary contact-submit" type="submit">
                  Send via Email <span>↗</span>
                </button>

                <p className="contact-note">
                  This opens your default email application with your message
                  prepared. It does not send the message automatically.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <a className="logo footer-logo" href="#home">
            <span className="logo-bracket">&lt;</span>
            yeshi.dev
            <span className="logo-bracket">/&gt;</span>
          </a>

          <p>
            Designed and built by Mihiretu Yeshi.
          </p>

          <div className="footer-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={`mailto:${EMAIL}`}>Email ✉</a>
          </div>

          <small>© {new Date().getFullYear()} Mihiretu Yeshi. All rights reserved.</small>
        </div>
      </footer>

      {/* Back to top */}
      {showTopButton && (
        <button
          className="back-to-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
