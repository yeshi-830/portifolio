import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Projects', 'projects'],
    ['Contact', 'contact'],
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MySQL',
    'Git & GitHub',
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          mihretu<span>.dev</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {/* Home */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Mihiretu</span>
            </h1>

            <h2>Full-Stack Developer</h2>

            <p className="description">
              I build modern, responsive websites and web applications.
              I enjoy solving problems, learning new technologies, and
              turning creative ideas into reality.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Projects
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/yeshi830"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#skills">Explore My Skills ↓</a>
            </div>
          </div>

          <div className="profile-area">
         <img
  src="/profile.jpg"
  alt="Mihiretu's profile"
  className="profile-photo"
/>

            <p className="profile-caption">
              Building ideas into reality ✨
            </p>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-description">
            I'm a developer passionate about creating useful, attractive,
            and user-friendly applications. I'm continuously improving my
            skills by building projects and learning modern technologies.
          </p>

          <div className="info-grid">
            <article className="info-card">
              <div className="card-icon">💻</div>
              <h3>My Passion</h3>
              <p>
                Creating useful websites and applications with clean,
                maintainable code.
              </p>
            </article>

            <article className="info-card">
              <div className="card-icon">🚀</div>
              <h3>My Goal</h3>
              <p>
                Growing as a developer and building practical solutions
                that solve real problems.
              </p>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies I'm learning and using to build web applications.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <p className="section-label">SOME OF MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of projects from my software development journey.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-icon">🎓</div>

              <p className="project-number">PROJECT 01</p>

              <h3>Student Management System</h3>

              <p className="project-description">
                A web application for organizing student information
                and academic records.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/yeshi830"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-icon">🌐</div>

              <p className="project-number">PROJECT 02</p>

              <h3>Personal Portfolio</h3>

              <p className="project-description">
                A responsive personal website presenting my skills,
                projects, and developer journey.
              </p>

              <div className="tags">
                <span>React</span>
                <span>CSS</span>
                <span>Vite</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/yeshi830"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-icon">💡</div>

              <p className="project-number">PROJECT 03</p>

              <h3>Future Project</h3>

              <p className="project-description">
                A place for my upcoming ideas and new software development
                experiments.
              </p>

              <div className="tags">
                <span>JavaScript</span>
                <span>Learning</span>
              </div>

              <a className="project-link" href="#contact">
                Discuss a project ↗
              </a>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Let's Build Something <span>Great</span>
          </h2>

          <p className="section-description">
            Have a project idea or want to connect? I'd love to hear from you.
          </p>

          <a
            className="btn primary contact-button"
            href="mailto:mihiretuyeshi@gmail.com"
          >
            Email Me ↗
          </a>

          <p className="contact-social">
            Find me on{' '}
            <a
              href="https://github.com/yeshi830"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mihiretu. Built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App