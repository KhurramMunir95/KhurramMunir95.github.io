"use client";

import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() { setVisible(window.scrollY > 350); }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function goToTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  return (
    <button type="button" className={`ka-back-top${visible ? " is-visible" : ""}`}
      onClick={goToTop} aria-label="Back to top" title="Back to top">
      <span className="ka-up-glyph"><ChevronsUp size={24} aria-hidden="true" /></span>
    </button>
  );
}
