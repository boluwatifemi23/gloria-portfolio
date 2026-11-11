"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#lifecycle", label: "Programmes" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">{profile.shortName}</a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-ink">{l.label}</a>
          ))}
          <ThemeButton dark={dark} onClick={toggle} />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton dark={dark} onClick={toggle} />
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" className="rounded-md p-2 text-ink" aria-label={open ? "Close menu" : "Open menu"}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <div className="wrap flex flex-col py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base text-ink">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeButton({ dark, onClick }) {
  return (
    <button onClick={onClick} className="rounded-full border border-line p-2 text-muted hover:text-ink" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  );
}
