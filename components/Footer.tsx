"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className="wrap">
          <div className={styles.grid}>
            <div>
              <a href="#" className={styles.wordmark}>ALBA</a>
              <p className={styles.muted}>Consejos para cuidar tu piel, una vez por mes.</p>
              {subscribed ? (
                <p className={styles.thanks} role="status">Listo, ya estás suscripta o suscripto.</p>
              ) : (
                <form className={styles.newsletter} onSubmit={onSubscribe}>
                  <label htmlFor="news-email" className="sr-only">Tu email</label>
                  <input id="news-email" type="email" placeholder="Tu email" required />
                  <button type="submit">Suscribirme</button>
                </form>
              )}
            </div>
            <div>
              <h2 className={styles.colTitle}>Tratamientos</h2>
              <ul>
                <li><a href="#tratamientos">Rostro</a></li>
                <li><a href="#tratamientos">Corporal</a></li>
                <li><a href="#tratamientos">Láser</a></li>
              </ul>
            </div>
            <div>
              <h2 className={styles.colTitle}>El centro</h2>
              <ul>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#como-trabajamos">Cómo trabajamos</a></li>
                <li><a href="#preguntas">Preguntas frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h2 className={styles.colTitle}>Contacto</h2>
              <ul>
                <li><a href="#turnos">Turnos online</a></li>
                <li><a href={`https://wa.me/${WHATSAPP}`}>WhatsApp</a></li>
                <li><a href="#ubicacion">Palermo, Buenos Aires</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>Proyecto de muestra para portfolio. Alba es un negocio ficticio. Fotos de Unsplash.</span>
            <span>Diseño y desarrollo: Alberto Nicolas Robledo</span>
          </div>
        </div>
      </footer>

      <a className={styles.wa} href={`https://wa.me/${WHATSAPP}`} aria-label="Escribinos por WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z" />
        </svg>
      </a>
    </>
  );
}
