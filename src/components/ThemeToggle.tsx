"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
    >
      <Sun className="sun ic sm" aria-hidden="true" />
      <Moon className="moon ic sm" aria-hidden="true" />
    </button>
  );
}
