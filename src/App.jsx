import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mihretuPhoto from "./assets/profile.jpg";
import "./App.css";

const roles = [
  "Aspiring Full-Stack Developer",
  "React Developer",
  "Backend Developer",
  "Software Engineering Student",
];

const skills = [
  { icon: "🌐", name: "HTML", category: "Frontend" },
  { icon: "🎨", name: "CSS", category: "Frontend" },
  { icon: "⚡", name: "JavaScript", category: "Frontend" },
  { icon: "⚛️", name: "React", category: "Frontend" },
  { icon: "🟢", name: "Node.js", category: "Backend" },
  { icon: "🚀", name: "Express.js", category: "Backend" },
  { icon: "🗄️", name: "MySQL", category: "Database" },
  { icon: "🔧", name: "Git & GitHub", category: "Tools" },
];

const projects = [
  {
    number: "01",
    icon: "🎓",
    title: "University Registration System",
    description:
      "A full-stack university registration project for managing student information and courses with a React frontend, Express API, and MySQL database.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    github:
      "https://github.com/yeshi-830/university-registration-system",
    live: "",
    status: "Full-stack project",
  },
  {
    number: "02",
    icon: "💼",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my developer profile, skills, projects, and professional links.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/yeshi-830/portifolio",
    live: "",
    status: "Portfolio website",
  },
  {
    number: "03",
    icon: "📋",
    title: "ProTask Hub",
    description:
      "A task management project designed to organize tasks, track progress, and improve everyday productivity.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yeshi-830",
    live: "",
    status: "Learning project",
  },
  {
    number: "04",
    icon: "👥",
    title: "Full-Stack User Management App",
    description:
      "A full-stack learning project focused on managing user records through a React interface, Express API, and MySQL database.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/yeshi-830/full-stack-project",
    live: "",
    status: "Full-stack project",
  },
  {
    number: "05",
    icon: "🍽️",
    title: "Cafeteria Management System",
    description:
      "A project concept for organizing cafeteria operations, menu information, and customer orders as the application develops.",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    github: "https://github.com/yeshi-830",
    live: "",
    status: "In development",
  },
  {
    number: "06",
    icon: "✅",
    title: "Pro Task Manager",
    description:
      "A productivity application in development, designed to organize tasks, manage priorities, and track work using a Kanban-style board.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yeshi-830/pro-task-manager",
    live: "",
    status: "In development",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);

    return () => {
      document.body.classList.remove("light-mode");
    };
  }, [darkMode]);

  useEffect(() => {
    const role = roles[roleIndex];
    let index = 0;
    let timeout;

    setTypedText("");

    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(role.slice(0, index));

      if (index >= role.length) {
        window.clearInterval(interval);

        timeout = window.setTimeout(() => {
          setRoleIndex((current) => (current + 1) % roles.length);
        }, 2000);
      }
    }, 65);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [roleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
      </div>

      {/* Navigation */}
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          yeshi<span>.dev</span>
        </a>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setDarkMode((current) => !current)}
            type="button"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="status-dot" />
            Learning, building, and growing
          </motion.div>

          <motion.div
            className="profile-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
          >
            <img
              src={mihretuPhoto}
              alt="Mihiretu Yeshi"
              className="profile-photo"
              fetchPriority="high"
            />
          </motion.div>

          <motion.p
            className="welcome"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I'm <span>Mihiretu Yeshi</span>
          </motion.h1>

          <h2 className="typing-role" aria-label={roles[roleIndex]}>
            {typedText}
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h2>

          <p className="description">
            I build responsive web experiences and full-stack applications
            while continuously improving my software engineering skills.
          </p>

          <div className="buttons">
            <a href="#projects" className="button primary-button">
              Explore My Work <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="button secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links hero-socials">
            <a
              href="https://github.com/yeshi-830"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="#skills">My Skills ↓</a>
          </div>
        </section>

        {/* Portfolio statistics */}
        <section className="stats-section" aria-label="Portfolio overview">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>{skills.length}</strong>
              <span>Skills & Tools</span>
            </div>

            <div className="stat-card">
              <strong>{projects.length}</strong>
              <span>Featured Projects</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Learning Mindset</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <p className="section-title">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p className="section-intro">
            I'm a software engineering student working toward becoming a
            skilled full-stack developer.
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3>Turning ideas into web applications</h3>

              <p>
                I'm learning to build accessible, responsive websites and
                applications using modern web technologies.
              </p>

              <p>
                I enjoy solving problems, understanding how frontend and
                backend systems work together, and learning by building
                practical projects.
              </p>

              <p>
                My goal is to keep improving my skills and create software
                that solves real problems.
              </p>
            </div>

            <div className="about-card">
              <h3>My Current Focus</h3>
              <p>🌐 Responsive web development</p>
              <p>⚛️ React and JavaScript</p>
              <p>🟢 Node.js and Express APIs</p>
              <p>🗄️ MySQL and database design</p>
              <p>🔧 Git and GitHub workflows</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills">
          <p className="section-title">TOOLS I AM LEARNING</p>
          <h2>My Skills</h2>

          <p className="section-intro">
            Technologies I'm using and practicing as I develop my skills.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.article
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -4 }}
              >
                <span className="skill-icon" aria-hidden="true">
                  {skill.icon}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section projects">
          <p className="section-title">WHAT I'M BUILDING</p>
          <h2>Featured Projects</h2>

          <p className="section-intro">
            Explore my work, the technologies behind it, and the source code.
            Live demos appear when a deployed website is available.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>

                  <span className="project-icon" aria-hidden="true">
                    {project.icon}
                  </span>
                </div>

                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View Source Code <span aria-hidden="true">↗</span>
                  </a>

                  {project.live && (
                    <a
                      className="project-link live-demo-link"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <p className="section-title">LET'S CONNECT</p>
          <h2>Let's build something useful.</h2>

          <p className="section-intro">
            Explore my code, follow my learning journey, or connect with me
            about software development.
          </p>

          <div className="contact-links">
            <a
              className="contact-card"
              href="https://github.com/yeshi-830"
              target="_blank"
              rel="noreferrer"
            >
              <span>💻</span>
              <strong>GitHub</strong>
              <small>Explore my repositories ↗</small>
            </a>

            <a
              className="contact-card"
              href="mailto:mihiretuyeshi@gmail.com?subject=Portfolio%20Inquiry"
            >
              <span>✉️</span>
              <strong>Email</strong>
              <small>mihiretuyeshi@gmail.com</small>
            </a>
          </div>

          <div className="contact-message-box">
            <label htmlFor="project-message">Send a quick message</label>

            <textarea
              id="project-message"
              name="project-message"
              rows="5"
              placeholder="Tell me about your project, idea, or opportunity..."
            />

            <a
              className="contact-submit"
              href="mailto:mihiretuyeshi@gmail.com?subject=Portfolio%20Inquiry"
            >
              Send via email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <a className="logo" href="#home">
            yeshi<span>.dev</span>
          </a>

          <p>Open to learning, collaboration, and meaningful projects.</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Mihiretu Yeshi. Built with React.
        </p>
      </footer>

      {showTopButton && (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;