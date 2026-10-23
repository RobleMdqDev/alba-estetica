"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#" className={styles.wordmark} aria-label="Alba, ir al inicio">
          ALBA
        </a>
        <nav aria-label="Principal">
          <ul id="menu" className={`${styles.links} ${open ? styles.open : ""}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#turnos" className={`btn btn-outline btn-sm ${styles.cta}`}>
          Reservar turno
        </a>
        <button
          className={styles.menuBtn}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 7h14M3 13h14" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
