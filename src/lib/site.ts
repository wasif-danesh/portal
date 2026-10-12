export const site = {
  name: "Wasif Danesh",
  brand: "Wasify AI",
  title: "Wasif Danesh — AI engineer & builder",
  description:
    "Portfolio of Wasif Danesh: AI products, apps, and writing on machine learning, agents and cloud engineering.",
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
    { label: "Home", href: "/" },
    { label: "Apps", href: "/apps" },
    { label: "Writing", href: "/writing" },
    { label: "About", href: "/about" },
    { label: "Work with me", href: "/work-with-me" },
  ],
} as const;
