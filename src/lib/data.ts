// ============================================================
//  Single Source of Truth — All portfolio content lives here
//  Edit this file to update anything on the site
// ============================================================

// ─── PERSONAL INFO ───────────────────────────────────────────
export const PERSONAL = {
  name: "Gaurav Borawake",
  shortName: "Gaurav",
  title: "Full Stack Developer",
  tagline:
    "Software Developer at Uttam Infotech & B.Tech CSE Candidate. Crafting high-performance full-stack applications and premium digital solutions with modern frameworks.",
  bio: "I am a Software Developer at Uttam Infotech Global Ventures and a B.Tech Computer Science & Engineering student. I bridge the gap between robust backend engineering and sleek, responsive user experiences. With hands-on industry experience building web applications using React, Next.js, Node.js, and IoT, I focus on delivering highly optimized, clean-coded, and visually stunning digital products.",
  birthday: "27 April 2004",
  degree: "B.Tech CSE",
  location: "Navi Mumbai, Maharashtra",
  email: "gauravborawake5@gmail.com",
  phone: "+91 9322363470",
  cvUrl: "/Gaurav_CV.pdf",
  cvDownloadName: "Gaurav_CV.pdf",
  heroImage: "/hero.png",
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIALS = {
  github: "https://github.com/gauravborawake",
  linkedin: "https://www.linkedin.com/in/gauravborawake",
  instagram: "https://www.instagram.com/gauravborawake27",
};

// ─── TYPEWRITER TITLES (Hero) ─────────────────────────────────
export const HERO_TITLES = [
  "Software Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

// ─── HERO BADGES ─────────────────────────────────────────────
export const HERO_BADGES = [
  { label: "Experience", value: "1+ Yrs" },
  { label: "Projects Done", value: "10+" },
];

// ─── ABOUT — SKILL CATEGORIES ────────────────────────────────
// icons are referenced by string key and mapped in the component
export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    border: "border-blue-500/20 dark:border-blue-400/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "React & Next.js", iconKey: "Globe" },
      { name: "JavaScript & TypeScript", iconKey: "Code2" },
      { name: "HTML5 & CSS3", iconKey: "Layers" },
      { name: "Tailwind CSS", iconKey: "Smartphone" },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    border: "border-emerald-500/20 dark:border-emerald-400/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Node.js & Express", iconKey: "Server" },
      { name: "Python & Django", iconKey: "Code2" },
    ],
  },
  {
    title: "Database",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10 dark:bg-violet-400/10",
    border: "border-violet-500/20 dark:border-violet-400/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "MongoDB", iconKey: "Database" },
      { name: "PostgreSQL", iconKey: "Database" },
      { name: "MySQL", iconKey: "Database" },
      { name: "MSSQL", iconKey: "Database" },
    ],
  },
  {
    title: "Tools & Certificates",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    border: "border-amber-500/20 dark:border-amber-400/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    skills: [
      { name: "Git & GitHub", iconKey: "GitBranch" },
      { name: "MERN Stack Certificate", iconKey: "Award" },
      { name: "Technical Quiz Certificate", iconKey: "Award" },
      { name: "Gemini Google Certificate", iconKey: "Award" },
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export const EXPERIENCES = [
  {
    type: "experience" as const,
    title: "Software Developer",
    subtitle: "Uttam Infotech Global Ventures Pvt Ltd",
    duration: "Sep 2025 – Present",
    location: "Mumbai, India",
    jobType: "Full-time",
    workMode: "On-site",
    description: [
      "Designed and developed responsive websites using HTML, CSS, JavaScript, React.js, and Bootstrap.",
      "Worked with REST APIs, authentication systems, and third-party integrations to add dynamic functionality.",
      "Improved website performance, SEO, and mobile responsiveness while delivering client projects on time.",
    ],
  },
  {
    type: "experience" as const,
    title: "Frontend Developer Internship",
    subtitle: "Rudisn",
    duration: "Nov 2024 - Apr 2025",
    location: "Online",
    jobType: "Internship",
    workMode: "Remote",
    description: [
      "Building responsive web pages using HTML, CSS, JavaScript, and Bootstrap",
      "Assisting in the development of web applications using Node.js and Express",
      "Collaborating with the team to ensure the best user experience",
    ],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const EDUCATIONS = [
  {
    type: "education" as const,
    title: "B.Tech Computer Science & Engineering",
    subtitle: "Sanjivani College of Engineering, Savitribai Phule Pune University",
    duration: "2021 — 2025",
    location: "Kopargaon, Maharashtra",
    description: [
      "Completed my B.Tech in Computer Science & Engineering from Savitribai Phule Pune University in 2025.",
      "Worked on various projects using Python, Android Studio, HTML, CSS, JavaScript, Git, and GitHub.",
      "Successfully achieved 100% task completion during internship.",
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Socially – Social Media Platform",
    category: "Full Stack",
    description:
      "Scalable social media app with API integration, file uploads, and caching",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Clerk"],
    github: SOCIALS.github,
    live: "#",
    image: "/images/projects/socially.png",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack e-commerce platform with payment integration and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: SOCIALS.github,
    live: "#",
    image: "/images/projects/ecommerce.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Library System-Iot Based",
    category: "IoT Based Project",
    description:
      "Digital library system with membership plans, trainer profiles, and class scheduling",
    tech: ["Raspberry Pi", "Python", "MySQL"],
    github: SOCIALS.github,
    live: "#",
    image: "/images/projects/digital_library_iot.png",
    gradient: "from-emerald-500 to-teal-500",
  },
];

// ─── CONTACT INFO CARDS ───────────────────────────────────────
export const CONTACT_INFO = [
  {
    iconKey: "Phone",
    title: "Call Me",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    color:
      "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/20",
  },
  {
    iconKey: "Mail",
    title: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color:
      "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border-primary-500/20 dark:border-primary-400/20",
  },
  {
    iconKey: "MapPin",
    title: "Location",
    value: PERSONAL.location,
    href: "https://maps.google.com/?q=Mumbai",
    color:
      "bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 border-rose-500/20 dark:border-rose-400/20",
  },
];
