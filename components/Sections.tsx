import Image from "next/image";
import evaluacion from "@/public/fotos/evaluacion.jpg";
import { faqs, steps, team, testimonials } from "@/lib/data";
import styles from "./Sections.module.css";

export function Process() {
  return (
    <section className={`section ${styles.clay}`} id="como-trabajamos">
      <div className={`wrap ${styles.process}`}>
        <div className={styles.processPhoto}>
          <Image
            src={evaluacion}
            alt="Dermatóloga aplicando un tratamiento facial a una paciente"
            fill
            placeholder="blur"
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "40% 50%" }}
          />
        </div>
        <div>
          <h2 className="heading">Primero te escuchamos, después tratamos.</h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="section" id="equipo">
      <div className="wrap">
        <div className={styles.head}>
          <h2 className="heading">Quiénes te atienden</h2>
          <p className="lead">Dos médicas dermatólogas y una cosmetóloga, todas matriculadas.</p>
        </div>
        <ul className={styles.team}>
          {team.map((p) => (
            <li key={p.name}>
              <div className={styles.portrait}>
                <Image
                  src={p.photo}
                  alt={`Retrato de ${p.name}`}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 767px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: p.position }}
                />
              </div>
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className={`section ${styles.ink}`}>
      <div className="wrap">
        <h2 className="heading">Lo que dicen nuestros pacientes</h2>
        <p className={styles.rating}>4,9 de 5 en Google, con 612 reseñas</p>
        <ul className={styles.quotes}>
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className={styles.quote}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <span>{t.name}</span>
                  <span className={styles.stars} aria-label="5 de 5 estrellas">
                    ★★★★★
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section" id="preguntas">
      <div className={`wrap ${styles.faqWrap}`}>
        <h2 className="heading">Preguntas frecuentes</h2>
        <div className={styles.faq}>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className={`section ${styles.olive}`} id="ubicacion">
      <div className={`wrap ${styles.location}`}>
        <div>
          <h2 className="heading">Te esperamos en Palermo</h2>
          <p className={styles.address}>A dos cuadras de Plaza Armenia, Palermo, Buenos Aires</p>
          <dl className={styles.hours}>
            <div><dt>Lunes a viernes</dt><dd>9 a 20 h</dd></div>
            <div><dt>Sábados</dt><dd>9 a 14 h</dd></div>
            <div><dt>Domingos y feriados</dt><dd>Cerrado</dd></div>
          </dl>
          <a href="#turnos" className="btn btn-secondary">Reservar turno</a>
        </div>
        <div className={styles.map} role="img" aria-label="Mapa ilustrativo de la zona">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="300" fill="#e3ebf2" />
            <g stroke="#ffffff" strokeWidth="10" fill="none">
              <path d="M-10 90 L410 60" />
              <path d="M-10 210 L410 190" />
              <path d="M90 -10 L120 310" />
              <path d="M250 -10 L280 310" />
            </g>
            <g stroke="#ffffff" strokeWidth="4" fill="none" opacity=".7">
              <path d="M-10 150 L410 125" />
              <path d="M180 -10 L200 310" />
              <path d="M340 -10 L360 310" />
            </g>
            <rect x="290" y="210" width="90" height="70" rx="12" fill="#8fb3b0" opacity=".55" />
            <circle cx="195" cy="138" r="34" fill="#1e4e52" opacity=".18" />
            <circle cx="195" cy="138" r="14" fill="#1e4e52" />
            <circle cx="195" cy="138" r="5" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </section>
  );
}
