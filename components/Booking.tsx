"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import consultorio from "@/public/fotos/consultorio.jpg";
import { categories, slots } from "@/lib/data";
import styles from "./Booking.module.css";

type Errors = Partial<Record<"nombre" | "telefono" | "fecha" | "horario", string>>;

const toIso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const options = ["Evaluación sin cargo", ...categories.flatMap((c) => c.treatments.map((t) => t.name))];

export default function Booking() {
  const [slot, setSlot] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ name: string; detail: string } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const minDate = toIso(new Date());
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre")).trim();
    const telefono = String(data.get("telefono")).replace(/\D/g, "");
    const fecha = String(data.get("fecha"));
    const tratamiento = String(data.get("tratamiento"));
    const [y, m, d] = fecha.split("-").map(Number);
    const day = fecha ? new Date(y, m - 1, d) : null;

    const next: Errors = {};
    if (nombre.length < 3) next.nombre = "Escribí tu nombre y apellido.";
    if (telefono.length < 8) next.telefono = "El número debe tener al menos 8 dígitos.";
    if (!day) next.fecha = "Elegí un día.";
    else if (fecha < minDate) next.fecha = "Elegí un día a partir de hoy.";
    else if (day.getDay() === 0) next.fecha = "Los domingos está cerrado. Elegí otro día.";
    if (!slot) next.horario = "Elegí un horario.";
    setErrors(next);
    if (Object.keys(next).length > 0 || !day) return;

    const fechaTxt = day.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" }).replace(",", "");
    setDone({
      name: nombre.split(" ")[0],
      detail: `Te esperamos el ${fechaTxt} a las ${slot} h para ${tratamiento.toLowerCase()}. Te vamos a confirmar por WhatsApp.`,
    });
  }

  function reset() {
    setDone(null);
    setSlot(null);
    setErrors({});
  }

  return (
    <section className="section" id="turnos">
      <div className={`wrap ${styles.layout}`}>
        <div>
          <h2 className="heading">Reservá tu turno</h2>
          <p className={`lead ${styles.lead}`}>Elegí día y horario. Te confirmamos por WhatsApp en menos de una hora.</p>
          <dl className={styles.info}>
            <div><dt>Sin cargo</dt><dd>La primera evaluación es gratuita.</dd></div>
            <div><dt>Cambios</dt><dd>Podés cambiar o cancelar hasta 24 h antes.</dd></div>
            <div><dt>Pagos</dt><dd>Efectivo, transferencia y tarjeta en cuotas.</dd></div>
          </dl>
          <div className={styles.photo}>
            <Image
              src={consultorio}
              alt="Sala de espera del centro, con sillones y luz cálida"
              fill
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.card}>
          {done ? (
            <div className={styles.success} role="status">
              <div className={styles.check} aria-hidden="true">✓</div>
              <h3 className="heading">Turno reservado, {done.name}</h3>
              <p>{done.detail}</p>
              <button type="button" className="btn btn-outline" onClick={reset}>
                Reservar otro turno
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <Field id="nombre" label="Nombre y apellido" error={errors.nombre}>
                <input className={styles.input} id="nombre" name="nombre" autoComplete="name" aria-invalid={!!errors.nombre} aria-describedby="nombre-error" />
              </Field>
              <div className={styles.row}>
                <Field id="telefono" label="WhatsApp" error={errors.telefono}>
                  <input className={styles.input} id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" placeholder="11 2345 6789" aria-invalid={!!errors.telefono} aria-describedby="telefono-error" />
                </Field>
                <Field id="tratamiento" label="Tratamiento">
                  <select className={styles.input} id="tratamiento" name="tratamiento">
                    {options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field id="fecha" label="Día" error={errors.fecha}>
                <input className={styles.input} id="fecha" name="fecha" type="date" onFocus={(e) => (e.currentTarget.min = toIso(new Date()))} aria-invalid={!!errors.fecha} aria-describedby="fecha-error" />
              </Field>
              <fieldset className={styles.field}>
                <legend className={styles.label}>Horario</legend>
                <div className={styles.slots}>
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={styles.slot}
                      aria-pressed={slot === s}
                      onClick={() => {
                        setSlot(s);
                        setErrors((e) => ({ ...e, horario: undefined }));
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className={styles.error} role="alert">{errors.horario}</p>
              </fieldset>
              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Reservar turno
              </button>
              <p className={styles.note}>Sitio de muestra: el formulario no envía datos.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
      <p className={styles.error} id={`${id}-error`} role="alert">
        {error}
      </p>
    </div>
  );
}
