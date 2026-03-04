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
            {/* TOP: bal virág + jobbra húzó vonal */}
            <div className="nf-orn-row nf-orn-top">
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower nf-flower-tl"
              />
              <div className="nf-orn-line nf-orn-line-top" />
            </div>

            {/* CENTER LOGO */}
            <img
              src="/logo.svg"
              alt="NF"
              className="nf-monogram mx-auto h-[clamp(90px,14vmin,200px)] w-auto"
            />
            {/* BOTTOM: balra húzó vonal + jobb virág */}
            <div className="nf-orn-row nf-orn-bottom">
              <div className="nf-orn-line nf-orn-line-bottom" />
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower nf-flower-br"
              />
            </div>
          </div>{" "}
        </div>
      )}

      {children}
    </>
  );
}
