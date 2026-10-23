import Image from "next/image";
import hero from "@/public/fotos/hero.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.top}`}>
        <h1 className={`display ${styles.title}`}>
          Tu piel,
          <br />
          sin apuro.
        </h1>
        <div className={styles.side}>
          <p className="lead">
            Primero una dermatóloga evalúa tu piel, sin cargo. Después te proponemos solo lo que necesitás.
          </p>
          <div className={styles.actions}>
            <a href="#turnos" className="btn btn-primary">
              Reservar turno
            </a>
            <a href="#tratamientos" className="btn btn-outline">
              Ver tratamientos
            </a>
          </div>
        </div>
      </div>

      <div className={styles.photo}>
        <Image
          src={hero}
          alt="Retrato de una mujer con pecas y la piel al natural"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.img}
        />
        <div className={`wrap ${styles.overlay}`}>
          <div className={styles.next}>
            <p>
              <strong>Próximo turno libre</strong>
              Mañana a las 10:30
            </p>
            <a href="#turnos" className="btn btn-secondary btn-sm">
              Reservar turno
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
