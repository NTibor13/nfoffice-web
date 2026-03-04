"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInteractionLock } from "@/hooks/useInteractionLock";

type Phase = "in" | "out" | "done";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("in");
  const [shouldShowIntro, setShouldShowIntro] = useState<boolean | null>(null);
  const timeouts = useRef<number[]>([]);

  // Állítsd ehhez az időt a CSS animációid teljes hosszához
  const INTRO_DURATION = 3200; // ms
  const FADE_OUT_DURATION = 700; // ms (egyezzen a duration-700-zal)

  const introActive = shouldShowIntro === true && phase !== "done";
  useInteractionLock(introActive);

  // Intro lifecycle: in -> out -> done
  const INTRO_SEEN_KEY = "nf_intro_seen_v1";

  useEffect(() => {
    const seen = localStorage.getItem(INTRO_SEEN_KEY) === "1";

    if (seen) {
      setShouldShowIntro(false);
      setPhase("done");
    } else {
      setShouldShowIntro(true);
    }
  }, []);

  useEffect(() => {
    if (shouldShowIntro !== true) return;
    timeouts.current.push(
      window.setTimeout(() => setPhase("out"), INTRO_DURATION),
    );

    timeouts.current.push(
      window.setTimeout(() => {
        setPhase("done");
        localStorage.setItem(INTRO_SEEN_KEY, "1");
      }, INTRO_DURATION + FADE_OUT_DURATION),
    );

    return () => {
      timeouts.current.forEach((t) => window.clearTimeout(t));
      timeouts.current = [];
    };
  }, [shouldShowIntro]);

  return (
    <>
      {/* Main tartalom: amíg intro megy, ne lehessen kattintani/aktiválni semmit */}
      <div className={phase !== "done" ? "pointer-events-none" : ""}>
        {children}
      </div>

      {introActive && (
        <div
          className={[
            "fixed inset-0 z-[100] flex items-center justify-center",
            "bg-[var(--nf-paper)]",
            "transition-opacity duration-700",
            phase === "out" ? "opacity-0" : "opacity-100",
            "pointer-events-auto",
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
          </div>
        </div>
      )}
    </>
  );
}
