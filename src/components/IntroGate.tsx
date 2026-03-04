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
            {/* Top ornament row */}
            <div className="nf-orn-row nf-orn-top">
              <img src="/margareta.svg" className="nf-flower nf-flower-left" />
              <div className="nf-line-grow" />
            </div>
            <img src="/logo.svg" className="nf-monogram" />
            <div className="nf-orn-row nf-orn-bottom">
              <div className="nf-line-grow" />
              <img src="/margareta.svg" className="nf-flower nf-flower-right" />
            </div>{" "}
          </div>
        </div>
      )}

      {children}
    </>
  );
}
