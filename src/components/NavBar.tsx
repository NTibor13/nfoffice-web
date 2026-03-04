"use client";

import React, { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function NavBar() {
  const NAV: NavItem[] = useMemo(
    () => [
      { label: "Rólunk", href: "#rolunk" },
      { label: "Vagyonkezelés", href: "#vagyonkezeles" },
      { label: "Befektetés", href: "#befektetes" },
      { label: "Családi kultúra", href: "#csaladikultura" },
      { label: "Kapcsolat", href: "#kapcsolat" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  // ESC zárja
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Mobilon: nyitott menünél ne scrollozzon a háttér
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Pebble-szerű "floating pills" */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* LEFT PILL (badge) */}
            <a
              href="#"
              className={[
                "inline-flex items-center gap-3",
                "h-14 rounded-2xl border border-zinc-200/80",
                "bg-white/65 backdrop-blur-md shadow-sm",
                "px-4",
                "transition hover:bg-white/80",
              ].join(" ")}
            >
              <img
                src="/badge.svg"
                alt="NF badge"
                className="h-8 w-8"
                draggable={false}
              />
              <div className="hidden sm:block">
                <div className="text-xs font-semibold tracking-[0.22em] text-[var(--nf-ink)]">
                  NFOFFICE
                </div>
                <div className="text-[11px] text-zinc-600">
                  Family Office • diszkréció
                </div>
              </div>
            </a>

            {/* RIGHT PILL (menu toggle) */}
            <div
              className={[
                "inline-flex items-center",
                "h-14 rounded-2xl border border-zinc-200/80",
                "bg-white/65 backdrop-blur-md shadow-sm",
                "overflow-hidden",
              ].join(" ")}
            >
              <button
                type="button"
                aria-label="Menü"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={[
                  "inline-flex items-center justify-center",
                  "h-14 w-14",
                  "transition hover:bg-white/70",
                ].join(" ")}
              >
                {/* burger / close ikon */}
                {!open ? (
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
                ) : (
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
                )}
              </button>

              {/* “Menu” label / CTA-szerű rész, Pebble feel */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={[
                  "hidden sm:inline-flex items-center",
                  "h-14 px-5",
                  "text-sm font-medium text-zinc-800",
                  "transition hover:bg-white/70",
                ].join(" ")}
              >
                Menü
              </button>

              <a
                href="#kapcsolat"
                onClick={() => setOpen(false)}
                className={[
                  "inline-flex items-center justify-center",
                  "h-14 px-5",
                  "text-sm font-medium",
                  "bg-[var(--nf-mauve)] text-white",
                  "transition hover:opacity-90",
                ].join(" ")}
              >
                Kapcsolat
              </a>
            </div>
          </div>

          {/* MENÜ – Desktop/Tablet: lebegő dropdown a jobb pill alatt */}
          <div className="relative">
            {/* Click-outside overlay (elegáns, de egyszerű) */}
            {open && (
              <button
                aria-label="Bezárás"
                className="fixed inset-0 z-[59] cursor-default"
                onClick={() => setOpen(false)}
              />
            )}

            {/* Dropdown panel */}
            <div
              className={[
                "absolute right-0 z-[61] mt-3",
                "w-[min(420px,calc(100vw-2rem))]",
                "origin-top-right",
                "rounded-2xl border border-zinc-200/80",
                "bg-white/75 backdrop-blur-md shadow-lg",
                "transition-all duration-300",
                "md:w-[420px]",
                open
                  ? "pointer-events-auto opacity-100 translate-y-0 scale-100"
                  : "pointer-events-none opacity-0 -translate-y-2 scale-[0.985]",
              ].join(" ")}
            >
              {/* Mobilon legyen “lenyíló” full-width érzet: ugyanaz a panel, csak széles */}
              <div className="p-3">
                <div className="grid gap-1">
                  {NAV.map((x) => (
                    <a
                      key={x.href}
                      href={x.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "rounded-xl px-3 py-3",
                        "text-sm text-zinc-800",
                        "hover:bg-white/60 transition",
                      ].join(" ")}
                    >
                      {x.label}
                    </a>
                  ))}
                </div>

                <div className="mt-3 grid gap-2 sm:hidden">
                  {/* mobilon “függőlegesen lefelé nyíló” extra gomb */}
                  <a
                    href="#kapcsolat"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 transition"
                  >
                    Kapcsolatfelvétel
                  </a>
                </div>

                <div className="mt-3 hidden sm:block">
                  <p className="px-3 pb-1 text-xs text-zinc-600">
                    Diszkréció • hosszú táv • átláthatóság
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kis távtartó, hogy a dropdown ne takarja az elemeket */}
          <div className="h-2" />
        </div>
      </div>
    </>
  );
}
