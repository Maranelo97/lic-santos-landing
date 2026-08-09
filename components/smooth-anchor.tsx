"use client";

import { useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SmoothAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: `#${string}`;
  children: ReactNode;
};

export function SmoothAnchor({
  href,
  children,
  onClick,
  ...props
}: SmoothAnchorProps) {
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = href === "#"
      ? document.documentElement
      : document.getElementById(decodeURIComponent(href.slice(1)));

    if (!target) return;

    event.preventDefault();
    onClick?.(event);
    window.history.replaceState(null, "", href);

    if (lenis) {
      lenis.scrollTo(target, {
        duration: shouldReduceMotion ? 0.62 : 1.08,
        easing: (value) => 1 - Math.pow(1 - value, 4),
        offset: href === "#inicio" ? 0 : -88,
      });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
