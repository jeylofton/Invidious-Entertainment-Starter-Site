"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Reveals elements with the `reveal` class as they scroll into view.

   This lives in the root layout, which persists across client-side
   navigation — so the effect must re-run on every route change. Without
   the pathname dependency the observer is only ever wired up on first
   mount, and every page navigated to afterwards keeps its `.reveal`
   elements at opacity 0, i.e. renders blank until a hard reload. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
