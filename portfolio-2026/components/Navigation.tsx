"use client";

import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const root = document.getElementById("khurram-interactive-2026");
    if (!root) return;
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('.ka-nav a[href^="#"]'));
    const lifetime = new AbortController();
    let frame = 0;

    function setActive(id: string) {
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    function update() {
      frame = 0;
      let active = "ki-home";
      links.forEach((link) => {
        const target = document.getElementById(link.hash.slice(1));
        if (target && target.getBoundingClientRect().top <= 140) active = target.id;
      });
      if (window.scrollY > 350 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        active = "ki-contact";
      }
      setActive(active);
    }

    root.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!link || !root.contains(link)) return;
      const hash = link.getAttribute("href");
      if (!hash) return;
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const destination = document.getElementById(id);
      if (!destination || !root.contains(destination)) return;
      event.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      destination.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      setActive(id);
      window.history.replaceState(null, "", hash);
    }, { signal: lifetime.signal });

    window.addEventListener("scroll", () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    }, { passive: true, signal: lifetime.signal });
    window.addEventListener("resize", update, { passive: true, signal: lifetime.signal });
    update();
    return () => { lifetime.abort(); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  return null;
}
