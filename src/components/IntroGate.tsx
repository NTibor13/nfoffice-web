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
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower"
              />
              <div className="nf-orn-line" />
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower"
              />
            </div>

            {/* Center monogram */}
            <img
              src="/logo.svg"
              alt="NF"
              className="nf-monogram mx-auto h-28 w-auto md:h-36"
            />

            {/* Bottom ornament row */}
            <div className="nf-orn-row nf-orn-bottom">
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower"
              />
              <div className="nf-orn-line" />
              <img
                src="/margareta.svg"
                alt=""
                aria-hidden="true"
                className="nf-flower"
              />
            </div>
          </div>{" "}
        </div>
      )}

      {children}
    </>
  );
}
