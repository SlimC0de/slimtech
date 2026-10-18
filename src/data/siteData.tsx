
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
// SLIMTECH PROFILE
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
// PERSONAL PORTFOLIO PROFILE
// ─────────────────────────────────────────────────────────────

  export const profile = {
    name: "HebTech",
    photo: founderImage,

    role: "UI/UX Designer & Web and Mobile App Developer",

    location: "Abuja, Nigeria",
    email: "[hello@slimtech.dev](mailto:hello@slimtech.dev)",
    availability: "Available for new projects",

    headline:
    "I design and build digital experiences that move businesses forward.",

    intro:
    "I'm a designer and developer focused on creating beautiful, intuitive, and functional digital experiences. From UI/UX design and brand identity to modern websites, mobile applications, and digital products, I turn ideas into practical solutions that help businesses grow.",

    about: [
      "Hi, I'm Ebubechukwu Henry, a UI/UX designer and developer passionate about turning ideas into beautiful, functional digital experiences. I design intuitive interfaces, build responsive websites, and develop mobile apps that help businesses and people bring their ideas to life.",

      "I work with individuals, startups, and growing businesses to create meaningful digital solutions through UI/UX design, web development, mobile app development, and custom software. My approach combines creativity, technical problem-solving, and attention to detail to build products that look great and work seamlessly.",
    ],

    facts: [
    {
    label: "Based in",
    value: "Abuja, Nigeria · Available worldwide",
    },
    {
    label: "Design",
    value: "UI/UX design, wireframing, prototyping, and visual design",
    },
    {
    label: "Development",
    value: "Websites, mobile apps, and digital products",
    },
    {
    label: "Working with",
    value: "Startups, businesses, and individuals",
    },
    {
    label: "Approach",
    value: "Creative thinking, thoughtful design, quality code",
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

  tagline: "Digital products, built to stand out.",

  description:
    "We create modern websites, mobile applications, digital products and practical learning experiences for businesses ready to move forward.",

  email: "hello@slimtech.dev",

  whatsapp: "2348153988773",

  founder: {
    name: "Henry Ebubechukwu",
    role: "Founder & Software Developer",
    image: founderImage,
    bio:
      "SlimTech focuses on building modern digital products, websites and mobile applications that combine thoughtful design with reliable technology.",
  },

  team: [
    {
      name: "Henry Ebubechukwu",
      role: "Founder & Software Developer",
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
      title: "UI & UX Design",
      description:
        "Clear, intuitive interfaces that make websites and applications easier to understand, navigate and use.",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "High-performance, responsive websites designed to communicate clearly, build trust and turn visitors into customers.",
    },
    {
      number: "03",
      title: "Mobile Applications",
      description:
        "Modern Android and iOS applications with thoughtful interfaces, smooth experiences and dependable functionality.",
    },
    {
      number: "04",
      title: "Digital Products",
      description:
        "From marketplaces and business dashboards to custom platforms, we turn ideas into practical digital products.",
    },
   
  ],

  // Actual client work only.
  // Keep concept projects in the separate projects export below.

    projects: [
      {
        number: "01",
        slug: "Jpcups-kids-school",
        title: "Jocups Kids School",
        category: "School Website",
        description:
          "A school website showcasing the institution, academic programmes and admissions information.",
        link: "https://jocupskidsschoolng.netlify.app/",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
        ],
      },
      {
        number: "02",
        slug: "mobile-app-ui-ux",
        title: "Mobile App UI/UX Design",
        category: "Mobile App Design",
        description:
        "A clean, modern mobile app experience focused on intuitive navigation, thoughtful layouts, clear data presentation, and seamless interactions. Designed to make complex information simple, accessible, and easy to use.",
        link: "",
        image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb33f1130500581.6181832690289.jpg",
        technologies: [
        "UI Design",
        "UX Design",
        "Mobile App Design",
        "Prototyping",
        "Interaction Design",
        ],
      }

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
      title: "Design",
      description:
        "We shape the structure, interface and user experience before moving into development.",
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
        "We prepare your product for launch and can help with maintenance, technical support and future improvements.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// HERO & PORTFOLIO MOCK PROJECTS
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
    role: "UI concept",
    result:
      "Illustrates a possible business dashboard experience.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
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
    role: "Mobile UI concept",
    result:
      "Illustrates a possible mobile finance experience.",
    stack: [
      "React Native",
      "TypeScript",
      "Expo",
    ],
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
    items: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "Firebase",
      "Supabase",
    ],
  },
  {
    group: "Backend & Tooling",
    items: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "CI/CD",
      "Testing",
    ],
  },
  {
    group: "Design & Delivery",
    items: [
      "UI/UX Design",
      "Prototyping",
      "Product Planning",
      "Deployment",
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
    body:
      "We start by understanding who the product is for and what success looks like, then agree on a scope that fits your goals and budget.",
  },
  {
    title: "Design and prototype",
    body:
      "We shape the interface and experience early, making it easier to review ideas and refine the details before development progresses.",
  },
  {
    title: "Build in stages",
    body:
      "We develop the product in manageable stages, sharing progress and gathering feedback throughout the process.",
  },
  {
    title: "Launch and support",
    body:
      "We prepare the product for launch and can provide ongoing maintenance, technical support and improvements.",
  },
];