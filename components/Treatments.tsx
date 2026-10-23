"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { categories } from "@/lib/data";
import styles from "./Treatments.module.css";

export default function Treatments() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Flechas izquierda/derecha para moverse entre pestañas
  function onKeyDown(e: KeyboardEvent, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : categories.length - 1)) % categories.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="section" id="tratamientos">
      <div className={`wrap ${styles.layout}`}>
        <div className={styles.media}>
          {categories.map((c, i) => (
            <Image
              key={c.id}
              src={c.photo}
              alt={c.alt}
              fill
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 45vw"
              className={`${styles.img} ${i === active ? styles.visible : ""}`}
              aria-hidden={i !== active}
            />
          ))}
        </div>

        <div>
          <h2 className="heading">Qué podemos hacer por tu piel</h2>
          <div className={styles.tabs} role="tablist" aria-label="Tipo de tratamiento">
            {categories.map((c, i) => (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${c.id}`}
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {categories.map((c, i) => (
            <ul
              key={c.id}
              id={`panel-${c.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${c.id}`}
              hidden={i !== active}
              className={styles.list}
            >
              {c.treatments.map((t) => (
                <li key={t.name} className={styles.row}>
                  <div>
                    <h3>{t.name}</h3>
                    <p>{t.description}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.price}>desde {t.price}</span>
                    <span>{t.minutes}</span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
          <p className={styles.note}>Los precios son por sesión. En la evaluación te damos el total de tu plan.</p>
        </div>
      </div>
    </section>
  );
}
