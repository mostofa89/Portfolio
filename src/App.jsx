import profileImage from "../img/joy.jpg";

const profile = {
  firstName: "Mostofa",
  lastName: "Kamal",
  fullName: "Abu Hena Mostofa Kamal Joy",
  title: "Full Stack Developer",
  tagline: "I build modern, responsive, and user friendly web applications that solve real problems.",
  email: "mostofakamaljoy89@gmail.com",
  phone: "+880 1234-567890",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mostofa89",
  linkedin: "https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/",
  facebook: "https://facebook.com/mostofa89",
};

const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Experience", "Contact"];

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills = [
  { name: "HTML", level: "95", icon: `${iconBase}/html5/html5-original.svg` },
  { name: "CSS", level: "90", icon: `${iconBase}/css3/css3-original.svg` },
  { name: "JavaScript", level: "90", icon: `${iconBase}/javascript/javascript-original.svg` },
  { name: "React", level: "90", icon: `${iconBase}/react/react-original.svg` },
  { name: "Tailwind CSS", level: "85", icon: `${iconBase}/tailwindcss/tailwindcss-original.svg` },
  { name: "Python", level: "80", icon: `${iconBase}/python/python-original.svg` },
  { name: "Django", level: "85", icon: `${iconBase}/django/django-plain.svg` },
  { name: "MySQL", level: "85", icon: `${iconBase}/mysql/mysql-original.svg` },
  { name: "Git", level: "90", icon: `${iconBase}/git/git-original.svg` },
  { name: "GitHub", level: "90", icon: `${iconBase}/github/github-original.svg` },
];

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio website built with React and modern CSS.",
    technologies: ["React", "CSS", "Vite"],
    github: "https://github.com/mostofa89/Portfolio",
    live: "https://mostofa89.github.io/Portfolio",
  },
  {
    name: "LMS - Learning Management System",
    description: "Full stack LMS concept with course, student, and dashboard features.",
    technologies: ["Django", "DRF", "MySQL"],
    github: "https://github.com/mostofa89",
    live: "#",
  },
  {
    name: "Cartify - eCommerce Application",
    description: "E-commerce platform with cart, payment flow, and admin panel.",
    technologies: ["Django", "JavaScript", "MySQL"],
    github: "https://github.com/mostofa89/cartify",
    live: "https://e-storeaccessoriesmart.onrender.com",
  },
  {
    name: "Blog Application",
    description: "Blog application with authentication and dashboard workflow.",
    technologies: ["Django", "SQLite", "Bootstrap"],
    github: "https://github.com/mostofa89",
    live: "#",
  },
  {
    name: "Task Manager",
    description: "Task management app to organize daily tasks and track progress.",
    technologies: ["React", "CSS", "Django"],
    github: "https://github.com/mostofa89/TaskManager",
    live: "https://taskmanager-hjb5.onrender.com/",
  },
];

const experience = [
  ["Personal Portfolio Website", "React Project", "Designed and developed a responsive personal portfolio to showcase skills, projects, education, and contact information.", "Current"],
  ["Cartify eCommerce Application", "Full Stack Project", "Building an eCommerce project with product browsing, cart workflow, and backend database practice.", "Current"],
  ["Learning Management System", "Academic Project Practice", "Practicing full-stack concepts such as dashboards, user roles, REST APIs, and database design.", "Ongoing"],
];

const education = [
  ["BSc in Computer Science and Engineering", "BRAC University", "Relevant courses: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning", "2021 - Present"],
  ["Higher Secondary Certificate", "Notre Dame College", "Science Group", "2018 - 2020"],
  ["Secondary School Certificate", "Motijheel Govt. Boys' High School", "Science Group", "2016 - 2018"],
];

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Go to home">
            M<span>.</span>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
          <a className="download-button" href={`${import.meta.env.BASE_URL}Mostofa-Kamal-CV.html`} download>
            Download CV
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="star-field" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="intro-pill">Hello, I'm</span>
              <h1>
                {profile.firstName} <em>{profile.lastName}</em>
              </h1>
              <h2>
                Full Stack <span>Developer</span>
              </h2>
              <p>{profile.tagline}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View My Work
                </a>
                <a className="button secondary" href="#contact">
                  Hire Me <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
              <div className="social-row" aria-label="Social links">
                <span>Follow Me</span>
                <a href={profile.github} target="_blank" rel="noreferrer">GH</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">in</a>
                <a href={profile.facebook} target="_blank" rel="noreferrer">fb</a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <span className="floating-badge badge-code">&lt;/&gt;</span>
              <span className="floating-badge badge-react">
                <img src={`${iconBase}/react/react-original.svg`} alt="" />
              </span>
              <span className="floating-badge badge-js">
                <img src={`${iconBase}/javascript/javascript-original.svg`} alt="" />
              </span>
              <img src={profileImage} alt={profile.fullName} />
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <img src={profileImage} alt={`${profile.fullName} working`} />
              <span className="signature">Mostofa Kamal</span>
            </div>
            <div className="about-content reveal">
              <span className="eyebrow">About Me</span>
              <h2>Passionate about creating impactful digital experiences</h2>
              <p>
                I am a full stack developer who loves building web applications. I enjoy turning
                complex problems into simple, beautiful, and intuitive designs while improving my
                skills with modern technologies.
              </p>
              <div className="about-facts">
                <span>Name: {profile.fullName}</span>
                <span>Experience: Project-based learning</span>
                <span>Email: {profile.email}</span>
                <span>Phone: {profile.phone}</span>
                <span>Location: {profile.location}</span>
                <span>Languages: Bengali, English</span>
              </div>
              <a className="button primary compact" href={`${import.meta.env.BASE_URL}Mostofa-Kamal-CV.html`} download>
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <SectionTitle eyebrow="My Skills" title="Technologies I work with" />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card reveal" style={{ "--delay": `${index * 55}ms` }} key={skill.name}>
                  <img src={skill.icon} alt={`${skill.name} icon`} />
                  <span>{skill.name}</span>
                  <div className="meter">
                    <i style={{ width: `${skill.level}%` }} />
                  </div>
                  <small>{skill.level}%</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <SectionTitle eyebrow="My Projects" title="Recent work and featured builds" />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card reveal" style={{ "--delay": `${index * 70}ms` }} key={project.name}>
                  <div className="project-preview">
                    <span />
                    <span />
                    <span />
                    <i />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="details section">
          <div className="container details-grid">
            <div className="panel reveal" id="experience">
              <SectionTitle eyebrow="Experience" title="Project-based learning" />
              {experience.map(([role, company, detail, date]) => (
                <article className="timeline-item" key={role}>
                  <span className="timeline-dot" />
                  <div>
                    <h3>{role}</h3>
                    <strong>{company}</strong>
                    <p>{detail}</p>
                  </div>
                  <time>{date}</time>
                </article>
              ))}
            </div>

            <div className="panel reveal" id="education">
              <SectionTitle eyebrow="Education" title="Academic path" />
              {education.map(([degree, place, score, date]) => (
                <article className="education-item" key={degree}>
                  <div>
                    <h3>{degree}</h3>
                    <p>{place}</p>
                    <strong>{score}</strong>
                  </div>
                  <time>{date}</time>
                </article>
              ))}
            </div>

            <div className="panel testimonial reveal">
              <SectionTitle eyebrow="Career Goal" title="What I am working toward" />
              <blockquote>
                I do not have professional work experience yet. I am currently building real-world
                projects with React, Django, DRF, MySQL, and modern CSS to improve my full-stack
                development skills.
              </blockquote>
              <div className="quote-author">
                <img src={profileImage} alt="Reviewer" />
                <span>
                  {profile.fullName}
                  <small>Full Stack Development Learner</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info reveal">
              <SectionTitle eyebrow="Contact Me" title="Let's build something useful" />
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}</a>
                <a href={`tel:${profile.phone}`}><span>Phone</span>{profile.phone}</a>
                <span><b>Location</b>{profile.location}</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/mostofa89</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>github.com/mostofa89</a>
                <a href={profile.facebook} target="_blank" rel="noreferrer"><span>Facebook</span>facebook.com/mostofa89</a>
              </div>
            </div>

            <form className="contact-form reveal" action={`mailto:${profile.email}`} method="post">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" rows="6" placeholder="Your Message" />
              <button className="button primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand" href="#home">M<span>.</span></a>
          <p>(c) 2026 {profile.fullName}. All rights reserved.</p>
          <a className="to-top" href="#home" aria-label="Back to top">^</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
