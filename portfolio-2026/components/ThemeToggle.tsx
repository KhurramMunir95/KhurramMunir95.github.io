"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  function toggle() {
    const nextLight = !light;
    const theme = nextLight ? "light" : "dark";
    const root = document.getElementById("khurram-interactive-2026");
    if (root) root.dataset.theme = theme;
    document.body.dataset.theme = theme;
    setLight(nextLight);
  }

  return (
    <button type="button" className="ka-theme cursor-interaction" onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}>
      {light ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
      <span className="ka-theme-label">{light ? "Dark" : "Light"}</span>
    </button>
  );
}
