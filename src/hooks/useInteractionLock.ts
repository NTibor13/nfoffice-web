import { useEffect, useRef } from "react";

export function useInteractionLock(isLocked: boolean) {
  const unlockRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    if (!isLocked) {
      unlockRef.current?.();
      unlockRef.current = null;
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    const preventWheel = (e: WheelEvent) => e.preventDefault();
    const preventTouchMove = (e: TouchEvent) => e.preventDefault();
    const preventScrollKeys = (e: KeyboardEvent) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
        "Spacebar",
      ];
      if (keys.includes(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", preventWheel, { passive: false });
    window.addEventListener("touchmove", preventTouchMove, { passive: false });
    window.addEventListener("keydown", preventScrollKeys, { passive: false });

    unlockRef.current = () => {
      window.removeEventListener("wheel", preventWheel as any);
      window.removeEventListener("touchmove", preventTouchMove as any);
      window.removeEventListener("keydown", preventScrollKeys as any);

      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevBodyTouchAction;
    };

    return () => {
      unlockRef.current?.();
      unlockRef.current = null;
    };
  }, [isLocked]);
}
