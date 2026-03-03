"use client";

import { useState } from "react";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  // Teszteléshez fixen "in"-en tartjuk (useEffect nélkül)
  const [phase] = useState<"in" | "out" | "done">("in");

  return (
    <>
      {phase !== "done" && (
        <div
          className={[
            "fixed inset-0 z-[100] flex items-center justify-center",
            "bg-[var(--nf-paper)]",
            "transition-opacity duration-700",
            phase === "out" ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <div className="nf-intro text-center select-none">
            {/* Logo */}
            <div className="nf-logo-wrap">
              <img
                src="/logo.svg"
                alt="NF"
                className="nf-monogram mx-auto h-28 w-auto md:h-36"
              />
            </div>

            {/* Line */}
            <div className="nf-line" />
            {/* Title */}
            <div className="nf-title-wrap">
              <div className="nf-title text-3xl md:text-4xl font-semibold tracking-[0.28em] text-[var(--nf-mauve)]">
                NFOFFICE
              </div>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
