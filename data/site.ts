/**
 * Single source of truth for personal info, links and projects.
 * Anything marked TODO is a placeholder; replace before deploying.
 */
export interface Project {
  no: string;
  name: string;
  problem: string;
  tags: string[];
  visual: "rag" | "ml" | "api" | "typer";
  /** Honest feature tracking. Leave empty to hide. */
  built: string[];
  planned: string[];
  links: { label: string; href: string }[];
}

export const site = {
  name: "Sepehr",
  lastName: "Shirazi",
  role: "Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer building web applications and exploring practical AI: RAG systems, machine learning and SaaS products.",
  email: "sepehrshirazi27@gmail.com",
  available: { show: true, label: "Open to opportunities" }, // set show:false if not accurate
  socials: [
    { label: "GitHub", href: "https://github.com/sepehrshz" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sepehr-shirazi-61100422b/",
    }, // TODO
    { label: "Instagram", href: "https://instagram.com/sepehrr_shz" }, // TODO (remove if not wanted)
  ],
  portrait: "/profile.jpg" as string, // e.g. '/portrait.jpg' placed in /public
  stack: [
    {
      title: "Frontend",
      items: [
        { name: "Vue 3", level: 80 },
        { name: "Nuxt", level: 80 },
        { name: "React", level: 75 },
        { name: "Next", level: 70 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      items: [
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 75 },
        { name: "PostgreSQL", level: 75 },
        { name: "Prisma", level: 75 },
        { name: "Fastify", level: 75 },
        { name: "Docker", level: 10 },
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        { name: "RAG", level: 30 },
        { name: "LLM APIs", level: 70 },
        { name: "Qdrant", level: 30 },
        { name: "Python", level: 50 },
        { name: "LightGBM", level: 50 },
      ],
    },
  ],
  projects: [
    {
      no: "01",
      name: "Context-IQ",
      problem:
        "An AI-powered document intelligence app. Retrieval-augmented generation lets people ask questions of their own documents and get grounded answers.",
      tags: ["Nuxt", "PostgreSQL", "Prisma", "Qdrant", "LLM APIs"],
      visual: "rag",
      built: [],
      planned: [], // TODO list what is implemented vs planned
      links: [
        { label: "Live Demo", href: "#" },
        {
          label: "Source Code",
          href: "https://github.com/sepehrshz/Context-IQ",
        },
        { label: "Case Study", href: "#" },
      ],
    },
    {
      no: "02",
      name: "Real Estate Price Prediction",
      problem:
        "A machine learning project that estimates property prices from structured listing data using a LightGBM model.",
      tags: ["Python", "LightGBM", "Machine Learning", "Data Analysis"],
      visual: "ml",
      built: [],
      planned: [],
      links: [
        { label: "Source Code", href: "#" },
        { label: "Case Study", href: "#" },
      ],
    },
    {
      no: "03",
      name: "Typer",
      problem:
        "A full-stack website for learning 10-finger typing and test your speed.",
      tags: ["Nuxt", "PostgreSQL", "Prisma", "REST APIs"],
      visual: "typer",
      built: [],
      planned: [],
      links: [
        { label: "Live Demo", href: "#" },
        { label: "Source Code", href: "https://github.com/sepehrshz/Typer" },
      ],
    },
  ] as Project[],
};
