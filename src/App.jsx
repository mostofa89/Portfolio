import { useEffect, useState } from "react";
import profileImage from "../img/joy.jpg";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const HERO_STATS = [
  { value: "6+", label: "Portfolio projects" },
  { value: "10", label: "Core technologies" },
  { value: "100%", label: "Responsive layout" },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        level: 95,
        icon: `${ICON_BASE}/html5/html5-original.svg`,
      },
      { name: "CSS3", level: 92, icon: `${ICON_BASE}/css3/css3-original.svg` },
      {
        name: "JavaScript",
        level: 90,
        icon: `${ICON_BASE}/javascript/javascript-original.svg`,
      },
      {
        name: "React",
        level: 88,
        icon: `${ICON_BASE}/react/react-original.svg`,
      },
      {
        name: "Tailwind CSS",
        level: 86,
        icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Python",
        level: 86,
        icon: `${ICON_BASE}/python/python-original.svg`,
      },
      {
        name: "Django",
        level: 84,
        icon: `${ICON_BASE}/django/django-plain.svg`,
      },
      {
        name: "Django REST Framework",
        level: 80,
        icon: `${ICON_BASE}/django/django-plain.svg`,
      },
      {
        name: "MySQL",
        level: 82,
        icon: `${ICON_BASE}/mysql/mysql-original.svg`,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 90, icon: `${ICON_BASE}/git/git-original.svg` },
      {
        name: "GitHub",
        level: 92,
        icon: `${ICON_BASE}/github/github-original.svg`,
      },
      {
        name: "VS Code",
        level: 94,
        icon: `${ICON_BASE}/vscode/vscode-original.svg`,
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Single-page personal portfolio built with React, responsive CSS, smooth navigation, animations, and GitHub Pages deployment.",
    tech: ["React", "CSS3", "Vite"],
    features: ["Animated sections", "Contact flow", "CV access"],
    live: "https://mostofa89.github.io/Portfolio",
    github: "https://github.com/mostofa89/Portfolio",
    visual: "portfolio",
  },
  {
    title: "LMS - Learning Management System",
    description:
      "Learning management platform concept with authentication, course tracking, and dashboard-driven student workflows.",
    tech: ["Django", "DRF", "MySQL"],
    features: ["Role-based access", "Course management", "Student progress"],
    live: "",
    github: "https://github.com/mostofa89",
    visual: "lms",
  },
  {
    title: "Cartify - eCommerce Application",
    description:
      "Full-stack eCommerce application built with React and Tailwind CSS on the frontend, plus Django REST Framework and MySQL on the backend.",
    tech: ["React", "Tailwind CSS", "Django", "DRF", "MySQL"],
    features: ["Product browsing", "Cart workflow", "REST API backend"],
    live: "",
    github: "https://github.com/mostofa89/cartify",
    visual: "cartify",
  },
  {
    title: "Gallery Manager",
    description:
      "A gallery management project for organizing images, managing uploads, and practicing clean CRUD workflows.",
    tech: ["Django", "Python", "MySQL"],
    features: ["Image gallery", "Upload workflow", "Admin management"],
    live: "",
    github: "https://github.com/mostofa89/Gallery_Manager",
    visual: "gallery",
  },
  {
    title: "Blog Application",
    description:
      "Content publishing app concept with author management, posts, and a simple maintainable content flow.",
    tech: ["Django", "Bootstrap", "SQLite"],
    features: ["Post creation", "Authentication", "Blog listing"],
    live: "",
    github: "https://github.com/mostofa89",
    visual: "blog",
  },
  {
    title: "Task Manager",
    description:
      "Task management app for planning, tracking, and prioritizing work with a clean responsive interface.",
    tech: ["React", "JavaScript", "CSS"],
    features: ["Task tracking", "Priority handling", "Responsive cards"],
    live: "https://taskmanager-hjb5.onrender.com/",
    github: "https://github.com/mostofa89/TaskManager",
    visual: "task",
  },
];

const EDUCATION = [
  {
    degree: "BSc in Computer Science and Engineering",
    school: "BRAC University",
    meta: "Relevant courses: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning",
    period: "2021 - Present",
  },
];

const EXPERIENCE = [
  {
    title: "Independent Full Stack Learning",
    org: "Personal project practice",
    meta: "Currently building real-world projects using Django, React, DRF, MySQL, and modern CSS.",
    period: "Ongoing",
  },
  {
    title: "Project-Based Development",
    org: "No professional experience yet",
    meta: "Improving practical skills through portfolio, Cartify, LMS, blog, and task management projects.",
    period: "Current",
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "mostofakamaljoy89@gmail.com",
    href: "mailto:mostofakamaljoy89@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/mostofa89",
    href: "https://github.com/mostofa89",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "Abu Hena Mostofa Kamal Joy",
    href: "https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/",
    icon: "linkedin",
  },
  {
    label: "Location",
    value: "238/A AhammedNagar, Mirpur-1, Dhaka-1216",
    href: "https://maps.google.com",
    icon: "location",
  },
];

const CV_FILE = "Mostofa_Kamal_Joy_Improved_CV.pdf";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-18% 0px -58% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".scroll-animate"));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading scroll-animate">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  alternate = false,
}) {
  return (
    <section id={id} className={`section ${alternate ? "section-alt" : ""}`}>
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </div>
    </section>
  );
}

function TimelineItem({ title, org, meta, period }) {
  return (
    <article className="timeline-card scroll-animate">
      <div className="timeline-dot" />
      <div>
        <div className="timeline-top">
          <h3>{title}</h3>
          <span>{period}</span>
        </div>
        <p className="timeline-org">{org}</p>
        <p className="timeline-meta">{meta}</p>
      </div>
    </article>
  );
}

function SkillCard({ group }) {
  return (
    <article className="card skill-card scroll-animate">
      <div className="card-title-row">
        <h3>{group.title}</h3>
        <span>{group.items.length} skills</span>
      </div>
      <div className="skill-list">
        {group.items.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-row">
              <span className="skill-name">
                <img src={skill.icon} alt={`${skill.name} icon`} />
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-track" aria-hidden="true">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ProjectVisual({ type, title }) {
  return (
    <div
      className={`project-visual project-visual-${type}`}
      aria-label={`${title} preview image`}
    >
      <div className="preview-window">
        <div className="preview-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-body">
          <div className="preview-sidebar" />
          <div className="preview-content">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="preview-orb" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card scroll-animate">
      <ProjectVisual type={project.visual} title={project.title} />
      <div className="project-header">
        <span className="project-badge">{project.tech[0]} Project</span>
        <span className="project-corner">-&gt;</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-row">
        {project.tech.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <ul className="feature-list">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : null}
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const year = new Date().getFullYear();
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const jumpTo = (id) => {
    setMobileOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "Visitor").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "Portfolio enquiry").trim();
    const message = String(form.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "No message provided.",
    ].join("\n");

    const mailto = `mailto:mostofakamaljoy89@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="animated-grid" aria-hidden="true" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container navbar">
          <a
            href="#home"
            className="brand"
            onClick={(event) => {
              event.preventDefault();
              jumpTo("home");
            }}
          >
            MK<span>.</span>
          </a>

          <nav
            className={`nav-links ${mobileOpen ? "is-open" : ""}`}
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => jumpTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              className="download-button compact nav-cv"
              href={`${import.meta.env.BASE_URL}${CV_FILE}`}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </nav>

          <div className="nav-actions">
            <a
              className="download-button compact nav-desktop-cv"
              href={`${import.meta.env.BASE_URL}${CV_FILE}`}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
            <button
              type="button"
              className={`menu-toggle ${mobileOpen ? "is-open" : ""}`}
              onClick={() => setMobileOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy scroll-animate">
              <h1>
                Abu Hena Mostofa Kamal Joy builds <span>animated</span> web
                experiences.
              </h1>
              <p className="hero-text">
                Computer Science and Engineering student focused on building
                clean, responsive, and practical full-stack web applications
                with React, Django, DRF, MySQL, and modern frontend
                technologies.
              </p>
              <div className="button-row">
                <button
                  type="button"
                  className="button primary"
                  onClick={() => jumpTo("projects")}
                >
                  View Projects
                </button>
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => jumpTo("contact")}
                >
                  Contact Me
                </button>
              </div>
              <div className="hero-stats">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual scroll-animate">
              <div className="profile-shell">
                <div className="profile-ring" />
                <img
                  src={profileImage}
                  alt="Abu Hena Mostofa Kamal Joy"
                  className="profile-photo"
                />
                <div className="profile-floating profile-top">
                  <img src={`${ICON_BASE}/react/react-original.svg`} alt="" />
                  React
                </div>
                <div className="profile-floating profile-right">
                  <img src={`${ICON_BASE}/django/django-plain.svg`} alt="" />
                  Django
                </div>
                <div className="profile-floating profile-bottom">
                  <img src={`${ICON_BASE}/github/github-original.svg`} alt="" />
                  GitHub Pages
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="About Me"
          title="A focused developer with strong frontend and backend foundations"
          description="I build modern web applications with component-based architecture, maintainable code, and a strong attention to responsive user experience."
        >
          <div className="content-grid">
            <article className="card story-card scroll-animate">
              <img
                src={profileImage}
                alt="Abu Hena Mostofa Kamal Joy"
                className="about-photo"
              />
              <div>
                <p>
                  I am a Computer Science and Engineering student who enjoys
                  building practical solutions with React, Django, Django REST
                  Framework, MySQL, and modern CSS.
                </p>
                <p>
                  This portfolio acts as my public profile and provides the
                  essential flow for visitors to discover my background, review
                  projects, open links, and get in touch.
                </p>
                <a
                  className="inline-link"
                  href={`${import.meta.env.BASE_URL}${CV_FILE}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open CV
                </a>
              </div>
            </article>

            <article className="card facts-card scroll-animate">
              <h3>Quick Facts</h3>
              <div className="fact-list">
                <div>
                  <span>Name</span>
                  <strong>Abu Hena Mostofa Kamal Joy</strong>
                </div>
                <div>
                  <span>Email</span>
                  <strong>mostofakamaljoy89@gmail.com</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>238/A AhammedNagar, Mirpur-1, Dhaka-1216</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>Project-based learning</strong>
                </div>
              </div>
            </article>
          </div>
        </Section>

        <Section
          id="skills"
          alternate
          eyebrow="Skills"
          title="Real programming icons with animated progress"
          description="Each skill uses an official Devicon SVG and reveals on scroll with animated progress bars."
        >
          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Project cards with animated image previews"
          description="Each project includes a visual preview, short summary, stack, key features, live link, and source link."
        >
          <div className="project-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          alternate
          eyebrow="Education"
          title="Academic background and relevant coursework"
          description="The education timeline gives visitors the context they need to understand the learning path behind the portfolio."
        >
          <div className="timeline-list">
            {EDUCATION.map((item) => (
              <TimelineItem
                key={item.degree}
                title={item.degree}
                org={item.school}
                meta={item.meta}
                period={item.period}
              />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Practical learning and ongoing development"
          description="I do not have professional experience yet, so this section honestly focuses on active project work and learning."
        >
          <div className="timeline-list">
            {EXPERIENCE.map((item) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                org={item.org}
                meta={item.meta}
                period={item.period}
              />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          alternate
          eyebrow="Contact"
          title="Simple contact flow for email, social links, and direct messages"
          description="Visitors can use the links below or submit the form to start an email draft instantly."
        >
          <div className="contact-grid">
            <div className="contact-side scroll-animate">
              <div className="contact-links">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    className="contact-link"
                    href={link.href}
                    target={
                      link.label === "Email" || link.label === "Location"
                        ? "_self"
                        : "_blank"
                    }
                    rel="noreferrer"
                  >
                    <span
                      className={`contact-icon contact-icon-${link.icon}`}
                      aria-hidden="true"
                    >
                      {link.icon === "mail" ? "@" : null}
                      {link.icon === "github" ? "GH" : null}
                      {link.icon === "linkedin" ? "in" : null}
                      {link.icon === "location" ? "⌖" : null}
                    </span>
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <form
              className="card contact-form scroll-animate"
              onSubmit={handleContactSubmit}
            >
              <div className="field-grid">
                <label className="field">
                  <span>Your Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Your Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
              </div>
              <label className="field">
                <span>Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project enquiry"
                  required
                />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity"
                  required
                />
              </label>
              <button type="submit" className="button primary full-width">
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="footer-glow" aria-hidden="true" />
        <div className="container footer-inner">
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              onClick={(event) => {
                event.preventDefault();
                jumpTo("home");
              }}
            >
              MK<span>.</span>
            </a>
            <strong>Abu Hena Mostofa Kamal Joy</strong>
            <p>
              Full Stack Development Learner building practical React, Django,
              and MySQL projects.
            </p>
          </div>
          <div className="footer-panel">
            <span>Explore</span>
            <div className="footer-links">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="footer-panel">
            <span>Connect</span>
            <div className="footer-socials">
              <a href="mailto:mostofakamaljoy89@gmail.com">
                <span className="social-icon">@</span>Email
              </a>
              <a
                href="https://github.com/mostofa89"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">GH</span>GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">in</span>LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-cta">
            <p>
              Open to project feedback, collaboration ideas, and learning
              opportunities.
            </p>
            <button
              type="button"
              className="button primary"
              onClick={() => jumpTo("contact")}
            >
              Contact Me
            </button>
          </div>
          <p className="footer-copy">
            © {year} Abu Hena Mostofa Kamal Joy. Designed with React and
            deployed through GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}
