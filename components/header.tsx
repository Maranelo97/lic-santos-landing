"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CONTACT_HREF } from "@/lib/site";
import { ContactLink } from "@/components/contact-link";
import { SmoothAnchor } from "@/components/smooth-anchor";

const navItems = [
  { href: "#acompanamiento", label: "Acompañamiento" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container flex h-[76px] items-center justify-between">
        <SmoothAnchor href="#inicio" className="brand-mark" aria-label="Melina Santos, inicio">
          <span className="brand-monogram" aria-hidden="true">MS</span>
          <span>
            <strong>Melina Santos</strong>
            <small>Psicóloga · Psicoanalista</small>
          </span>
        </SmoothAnchor>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <SmoothAnchor key={item.href} href={item.href as `#${string}`} className="nav-link">
              {item.label}
            </SmoothAnchor>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ContactLink
            href={CONTACT_HREF}
            source="header"
            className="button button-small button-primary"
            target="_blank"
            rel="noreferrer"
          >
            Consultar disponibilidad <span aria-hidden="true">↗</span>
          </ContactLink>
        </div>

        <button
          type="button"
          className="menu-button lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "≡"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav lg:hidden"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="site-container flex flex-col gap-1 pb-5">
              {navItems.map((item) => (
                <SmoothAnchor
                  key={item.href}
                  href={item.href as `#${string}`}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </SmoothAnchor>
              ))}
              <ContactLink
                href={CONTACT_HREF}
                source="mobile_menu"
                className="button button-primary mt-3"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Consultar disponibilidad <span aria-hidden="true">↗</span>
              </ContactLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
