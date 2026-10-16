export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  contribution: string;
  stack: string[];
  accent: "lime" | "violet" | "orange";
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Amazon Price Optimizer",
    category: "E-commerce analytics · SaaS",
    description: "A marketplace analytics platform built around Amazon SP-API data, product performance, and business reporting.",
    contribution: "Designed backend workflows and reporting for sales, costs, margins, and operational metrics.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "BullMQ", "Redis", "Amazon SP-API"],
    accent: "lime",
    href: "https://priceoptimizerpro.com"
  },
  {
    number: "02",
    name: "ChocolateGPT",
    category: "AI-powered product",
    description: "A web product exploring AI-assisted chocolate and recipe workflows with subscription-based access.",
    contribution: "Worked across the product experience, authentication, and subscription flow.",
    stack: ["Next.js", "PocketBase", "Stripe", "Google OAuth", "Python"],
    accent: "orange",
    href: "https://chocolategpt.com"
  },
  {
    number: "03",
    name: "Real Estate Lead Platform",
    category: "Lead generation · Web platform",
    description: "A focused real-estate web experience designed to help visitors understand an offer and take the next step.",
    contribution: "Full-stack implementation across the website experience and supporting application logic.",
    stack: ["React", "Node.js", "REST APIs", "Responsive UI"],
    accent: "violet",
    href: "https://floridacashforhome.com"
  }
];

export const capabilities = [
  { title: "Full-stack product development", description: "From responsive interfaces to API design, data models, and production delivery." },
  { title: "SaaS architecture", description: "Authentication, role-based access, subscriptions, background jobs, and reporting." },
  { title: "API integrations", description: "Third-party services, marketplace APIs, webhooks, and resilient data workflows." },
  { title: "Performance & reliability", description: "Practical improvements to response times, application performance, and maintainability." }
];

export const stackGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "BullMQ"] },
  { label: "Data & infrastructure", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker", "Linux"] },
  { label: "Product integrations", items: ["Amazon SP-API", "Stripe", "OAuth", "Webhooks"] }
];
