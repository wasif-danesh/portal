export const site = {
  /** Product name. Always "Wasify AI" in user-visible text. */
  name: "Wasify AI",
  author: "Wasif Danesh",
  title: "Wasify AI: All your AI. One app.",
  description:
    "Wasify AI is one app for chat, documents, images, video, voice and music that runs on your own computer. Coming first to Mac.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wasifyai.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "wasif.danesh@gmail.com",
  locale: "en_AU",
  twitter: "@wasif71880",
  social: [
    { label: "GitHub", href: "https://github.com/wasif-danesh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wasif-danesh-96a53a24/" },
    { label: "X", href: "https://x.com/wasif71880" },
    { label: "Medium", href: "https://medium.com/@wasif.danesh_63400" },
  ],
  nav: [
    { label: "Products", href: "/products" },
    { label: "Watch", href: "/watch" },
    { label: "Privacy", href: "/privacy" },
    { label: "Architecture", href: "/architecture" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Writing", href: "/writing" },
    { label: "About", href: "/about" },
  ],
} as const;
