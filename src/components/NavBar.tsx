"use client";

import React, { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Rólunk", href: "#rolunk" },
  { label: "Vagyonkezelés", href: "#vagyonkezeles" },
  { label: "Befektetés", href: "#befektetes" },
  { label: "Családi kultúra", href: "#csaladikultura" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // kicsit “premium” érzet: scrollnál erősebb háttér/border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobil menü nyitva: ne scrollozzon a háttér
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  // ESC zárja
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60]">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <div
            className={[
              "rounded-2xl border transition-all",
              "backdrop-blur-md",
              scrolled
                ? "bg-white/70 border-zinc-200 shadow-sm"
                : "bg-white/50 border-zinc-200/70",
            ].join(" ")}
          >
            <div className="flex h-14 items-center justify-between px-4">
              {/* Brand */}
              <a href="#" className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white">
                  <span className="text-sm font-semibold tracking-wide">N</span>
                </span>
                <span className="text-sm font-semibold tracking-[0.22em] text-[var(--nf-ink)]">
                  NFOFFICE
                </span>
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-700">
                {NAV.map((x) => (
                  <a
                    key={x.href}
                    href={x.href}
                    className="hover:text-zinc-900 transition-colors"
                  >
                    {x.label}
                  </a>
                ))}
              </nav>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
                >
                  Kapcsolat
                </a>
              </div>

              {/* Mobile burger */}
              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
                aria-label="Menü"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[70] md:hidden">
          {/* overlay */}
          <button
            aria-label="Bezárás"
            className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200">
              <span className="text-sm font-semibold tracking-[0.22em]">
                NFOFFICE
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
                aria-label="Bezárás"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-5 py-5">
              <div className="flex flex-col gap-3">
                {NAV.map((x) => (
                  <a
                    key={x.href}
                    href={x.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-zinc-800 hover:bg-zinc-50 transition-colors"
                  >
                    {x.label}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
                >
                  Kapcsolatfelvétel
                </a>
              </div>

              <p className="mt-6 text-xs text-zinc-500">
                Diszkréció • hosszú táv • átláthatóság
              </p>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
