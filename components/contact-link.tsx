"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  source: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContactLink({
  children,
  source,
  onClick,
  ...props
}: ContactLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "contact_click", contact_source: source });
        window.gtag?.("event", "generate_lead", {
          event_category: "contact",
          event_label: source,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

