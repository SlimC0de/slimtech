import founderImage from "../assets/founder.jpeg";

// ─────────────────────────────────────────────────────────────
// TYPES — COMPATIBLE WITH FRAMES.TSX
// ─────────────────────────────────────────────────────────────

export type ScreenVariant =
  | "dashboard"
  | "store"
  | "feed"
  | "wallet"
  | "fitness";

export interface Project {
  id: string;
  title: string;
  kind: "web" | "mobile";
  year: string;
  summary: string;
  role: string;
  result: string;
  stack: string[];
  accent: string;
  variant: ScreenVariant;
  liveUrl?: string;
  caseStudyUrl?: string;
  concept?: boolean;
}

// ─────────────────────────────────────────────────────────────
// PERSONAL PORTFOLIO PROFILE
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "HebTech",
  photo: founderImage,

  role: "Web & Mobile App Developer",

  location: "Abuja, Nigeria",
  email: "hello@slimtech.dev",
  availability: "Available for new projects",

  headline: "I build fast, reliable websites and mobile apps for businesses.",

  intro:
    "I'm a web and mobile app developer. I build responsive websites, web apps, and Android and iOS applications that are fast, dependable, and easy to use, from the first idea through to launch and support.",

  about: [
    "Hi, I'm Ebubechukwu Henry, a web and mobile app developer based in Abuja, Nigeria. I build responsive websites, web applications, and mobile apps for individuals, startups, and growing businesses.",

    "I focus on clean code, solid performance, and clear communication. I work closely with my clients, share progress at every stage, and deliver products that work smoothly and are ready to grow with the business.",
  ],

  facts: [
    {
      label: "Based in",
      value: "Abuja, Nigeria · Available worldwide",
    },
    {
      label: "Web",
      value: "Websites, web apps, and dashboards",
    },
    {
      label: "Mobile",
      value: "Android and iOS apps",
    },
    {
      label: "Working with",
      value: "Startups, businesses, and individuals",
    },
    {
      label: "Approach",
      value: "Clean code, fast delivery, clear communication",
    },
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/SlimC0de",
    },
    {
      label: "LinkedIn",
      href: "/",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2348153988773?text=Hello%20HebTech%2C%20I%27m%20interested%20in%20your%20services.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// MAIN AGENCY DATA
// Keeps compatibility with existing SlimTech pages.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: "SlimTech",

  tagline: "Websites and mobile apps, built to perform.",

  description:
    "We build modern websites, web apps, and mobile applications for businesses ready to move forward.",

  email: "hello@slimtech.dev",

  whatsapp: "2348153988773",

  founder: {
    name: "Henry Ebubechukwu",
    role: "Founder & Web and Mobile App Developer",
    image: founderImage,
    bio: "SlimTech builds modern websites and mobile applications that are fast, reliable, and easy to use.",
  },

  team: [
    {
      name: "Henry Ebubechukwu",
      role: "Founder & Web and Mobile App Developer",
      image: founderImage,
    },
    {
      name: "Coming Soon",
      role: "Team Member",
      image: "",
    },
    {
      name: "Coming Soon",
      role: "Team Member",
      image: "",
    },
  ],

  services: [
    {
      number: "01",
      title: "Website Development",
      description:
        "Fast, responsive websites that communicate clearly, build trust, and turn visitors into customers.",
    },
    {
      number: "02",
      title: "Web Applications",
      description:
        "Custom web apps, dashboards, and platforms that solve real business problems and scale as you grow.",
    },
    {
      number: "03",
      title: "Mobile App Development",
      description:
        "Android and iOS applications with smooth performance, dependable functionality, and a native feel.",
    },
    {
      number: "04",
      title: "Maintenance & Support",
      description:
        "Updates, bug fixes, performance improvements, and technical support after launch.",
    },
  ],

  // Actual client work only.
  // Keep concept projects in the separate projects export below.
  projects: [
    {
      number: "01",
      slug: "jocups-kids-school",
      title: "Jocups Kids School",
      category: "School Website",
      description:
        "A school website showcasing the institution, academic programmes and admissions information.",
      link: "https://jocupskidsschoolng.netlify.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      number: "02",
      slug: "don-swiss-apartments",
      title: "Don Swiss Apartments",
      category: "Hotel & Apartments Website",
      description:
        "A modern hospitality website showcasing apartment accommodation, amenities, and essential guest information, with a contact page for enquiries and bookings.",
      link: "https://donswiss.netlify.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
  ],

  technologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
    "Flutter",
    "Dart",
    "React Native",
    "Firebase",
    "Supabase",
    "Node.js",
  ],

  process: [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your idea, your business and the people your product needs to serve.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We agree on the scope, features, timeline and technology so everyone knows what is being built.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We develop your product in stages, sharing progress and refining the details along the way.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We deploy your product and can help with maintenance, technical support and future improvements.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// HERO PREVIEW PROJECTS
// These are illustrative UI concepts, not verified client results.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "www.yourwebsite.com",
    title: "Website",
    kind: "web",
    year: "Concept",
    summary:
      "A finance dashboard concept for monitoring cash flow, invoices and business activity in one place.",
    role: "Web app concept",
    result: "Illustrates a possible business dashboard.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    accent: "#5b6cff",
    variant: "dashboard",
    concept: true,
  },
  {
    id: "app",
    title: "App",
    kind: "mobile",
    year: "Concept",
    summary:
      "A mobile wallet concept for exploring payments, balances and everyday financial activity.",
    role: "Mobile app concept",
    result: "Illustrates a possible mobile finance app.",
    stack: ["React Native", "TypeScript", "Expo"],
    accent: "#f59e0b",
    variant: "wallet",
    concept: true,
  },
];

// ─────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────

export const skills = [
  {
    group: "Web Development",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    group: "Mobile Development",
    items: ["Flutter", "Dart", "React Native", "Expo", "Firebase", "Supabase"],
  },
  {
    group: "Backend & Tooling",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Git", "CI/CD", "Testing"],
  },
  {
    group: "Delivery",
    items: [
      "Product Planning",
      "Deployment",
      "App Store & Play Store Publishing",
      "Performance Optimisation",
      "Technical Support",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECT PROCESS
// ─────────────────────────────────────────────────────────────

export const process = [
  {
    title: "Understand the problem",
    body: "We start by understanding who the product is for and what success looks like, then agree on a scope that fits your goals and budget.",
  },
  {
    title: "Plan the build",
    body: "We map out the features, timeline and technology early, so there are no surprises once development starts.",
  },
  {
    title: "Build in stages",
    body: "We develop the product in manageable stages, sharing progress and gathering feedback throughout the process.",
  },
  {
    title: "Launch and support",
    body: "We deploy the product and can provide ongoing maintenance, technical support and improvements.",
  },
];