export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const HERO_ROLES = [
  "Full Stack Developer",
  "React Engineer",
  "Django Architect",
  "Problem Solver",
];

export const HERO_STATS = [
  { value: "6+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Curiosity" },
];

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    accent: "from-[#34d399] to-[#38bdf8]",
    items: [
      { name: "React", level: 88, icon: `${ICON_BASE}/react/react-original.svg` },
      { name: "JavaScript", level: 90, icon: `${ICON_BASE}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", level: 86, icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
      { name: "HTML5", level: 95, icon: `${ICON_BASE}/html5/html5-original.svg` },
      { name: "CSS3", level: 92, icon: `${ICON_BASE}/css3/css3-original.svg` },
    ],
  },
  {
    title: "Backend",
    accent: "from-neon-cyan to-neon-violet",
    items: [
      { name: "Python", level: 86, icon: `${ICON_BASE}/python/python-original.svg` },
      { name: "Django", level: 84, icon: `${ICON_BASE}/django/django-plain.svg`, invert: true },
      { name: "DRF", level: 80, icon: `${ICON_BASE}/django/django-plain.svg`, invert: true },
      { name: "MySQL", level: 82, icon: `${ICON_BASE}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: "Tools & Workflow",
    accent: "from-[#34d399] to-[#818cf8]",
    items: [
      { name: "Git", level: 90, icon: `${ICON_BASE}/git/git-original.svg` },
      { name: "GitHub", level: 92, icon: `${ICON_BASE}/github/github-original.svg`, invert: true },
      { name: "VS Code", level: 94, icon: `${ICON_BASE}/vscode/vscode-original.svg` },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    tagline: "This very site",
    description:
      "An animated, single-page React portfolio with framer-motion, Tailwind, and GitHub Pages deployment.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    live: "https://mostofa89.github.io/Portfolio",
    github: "https://github.com/mostofa89/Portfolio",
    gradient: "from-[#34d399]/20 via-[#38bdf8]/20 to-[#818cf8]/20",
    accent: "#38bdf8",
  },
  {
    title: "Cartify",
    tagline: "Full-stack eCommerce",
    description:
      "End-to-end shopping experience - React + Tailwind frontend, Django REST Framework + MySQL backend.",
    tech: ["React", "Tailwind", "Django", "DRF", "MySQL"],
    live: "",
    github: "https://github.com/mostofa89/cartify",
    gradient: "from-[#38bdf8]/22 via-[#818cf8]/18 to-[#34d399]/16",
    accent: "#38bdf8",
  },
  {
    title: "Task Manager",
    tagline: "Plan, track, prioritize",
    description:
      "A responsive task management app with prioritization, card-based UI, and live deployment on Render.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://taskmanager-hjb5.onrender.com/",
    github: "https://github.com/mostofa89/TaskManager",
    gradient: "from-[#34d399]/18 via-[#38bdf8]/20 to-[#818cf8]/18",
    accent: "#34d399",
  },
  {
    title: "LMS Platform",
    tagline: "Learning management",
    description:
      "Course platform concept with authentication, role-based access, course tracking, and student dashboards.",
    tech: ["React", "Tailwind", "Django", "DRF", "MySQL"],
    live: "",
    github: "https://github.com/mostofa89",
    gradient: "from-[#818cf8]/22 via-[#38bdf8]/18 to-[#34d399]/14",
    accent: "#818cf8",
  },
  {
    title: "Gallery Manager",
    tagline: "Image CRUD workflows",
    description:
      "Gallery management project for uploads, organization, and clean admin workflows with Django and MySQL.",
    tech: ["Django", "Python", "MySQL"],
    live: "",
    github: "https://github.com/mostofa89/Gallery_Manager",
    gradient: "from-[#38bdf8]/18 via-[#818cf8]/16 to-[#34d399]/14",
    accent: "#38bdf8",
  },
  {
    title: "Blog Application",
    tagline: "Author & publish",
    description:
      "Content publishing app with author management, post creation, authentication, and a clean reading flow.",
    tech: ["Django", "Bootstrap", "SQLite"],
    live: "",
    github: "https://github.com/mostofa89",
    gradient: "from-[#818cf8]/18 via-[#38bdf8]/18 to-[#34d399]/14",
    accent: "#38bdf8",
  },
];

export const EDUCATION = [
  {
    degree: "BSc in Computer Science and Engineering",
    school: "BRAC University",
    meta: "Data Structures - Algorithms - Database Systems - Web Development - Machine Learning",
    period: "2021 - Present",
  },
];

export const EXPERIENCE = [
  {
    title: "Independent Full Stack Learning",
    org: "Self-directed practice",
    meta: "Building production-quality projects with Django, React, DRF, MySQL, and modern CSS.",
    period: "Ongoing",
  },
  {
    title: "Project-Based Development",
    org: "Portfolio Work",
    meta: "Sharpening practical skills via Cartify, LMS, Gallery Manager, Blog, and Task Manager.",
    period: "Current",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "mostofakamaljoy89@gmail.com",
    href: "mailto:mostofakamaljoy89@gmail.com",
    iconName: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/mostofa89",
    href: "https://github.com/mostofa89",
    iconName: "github",
  },
  {
    label: "LinkedIn",
    value: "Abu Hena Mostofa Kamal Joy",
    href: "https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/",
    iconName: "linkedin",
  },
  {
    label: "Location",
    value: "Mirpur-1, Dhaka-1216, Bangladesh",
    href: "https://maps.google.com/?q=Mirpur-1,Dhaka",
    iconName: "mapPin",
  },
];

export const CV_FILE = "Mostofa_Kamal_Joy_Improved_CV.pdf";

export const MARQUEE_WORDS = [
  "React",
  "Django",
  "Tailwind",
  "Python",
  "MySQL",
  "Framer Motion",
  "DRF",
  "Vite",
  "Full Stack",
  "GitHub Pages",
];
