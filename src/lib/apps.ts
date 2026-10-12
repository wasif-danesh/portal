export type AppStatus = "live" | "beta" | "in-development" | "private";

export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  icon: "voice" | "vision" | "platform";
  href?: string;
  tags: string[];
  featured?: boolean;
}

export const statusLabel: Record<AppStatus, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
  private: "Client work",
};

// Add a new app here and it appears on the home page and /apps automatically.
export const apps: AppEntry[] = [
  {
    slug: "wasify-voice",
    name: "Wasify Voice",
    tagline: "Text-to-speech and voice cloning",
    description:
      "Expressive multilingual speech generation, rapid voice cloning and multi-speaker dialogue, built as a studio for creators.",
    status: "in-development",
    icon: "voice",
    // href: "https://audio.wasifyai.com", // enable when the app is live
    tags: ["Text-to-speech", "Voice cloning", "Streaming"],
    featured: true,
  },
  {
    slug: "wasify-vision",
    name: "Wasify Vision",
    tagline: "Generative image studio",
    description:
      "A diffusion playground with model and LoRA hosting and a prompt canvas for creators and design studios.",
    status: "in-development",
    icon: "vision",
    // href: "https://image.wasifyai.com", // enable when the app is live
    tags: ["Diffusion", "LoRA", "Canvas"],
    featured: true,
  },
  {
    slug: "enterprise-ai-portal",
    name: "Enterprise AI Portal",
    tagline: "Document intelligence and search",
    description:
      "Operations dashboard combining document extraction, retrieval-augmented search and workflow notifications for teams.",
    status: "private",
    icon: "platform",
    tags: ["RAG", "Document processing", "RBAC"],
  },
];
