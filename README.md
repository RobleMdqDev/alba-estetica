# Alba, estética y dermatología

Landing para un centro de estética y dermatología en Palermo, Buenos Aires.

**Demo:** https://alba-estetica-seven.vercel.app

> Proyecto de muestra para portfolio. El negocio es ficticio y las fotos son de [Unsplash](https://unsplash.com).

## Qué incluye

- Tratamientos por categoría (rostro, corporal, láser) con foto que cambia según la pestaña
- Reserva de turnos online con validación (no permite domingos ni fechas pasadas)
- Equipo, testimonios, preguntas frecuentes y ubicación
- Menú adaptado al celular y botón flotante de WhatsApp

## Stack

- Next.js 16 (App Router) y React 19
- TypeScript
- CSS Modules, sin librerías de UI
- `next/image` con fotos locales y desenfoque de carga
- Publicado en Vercel

## Diseño

Estructura basada en el DESIGN.md de Oura (colección awesome-design-md), con paleta propia fría: porcelana, azul tinta, verde azulado y rosa empolvado. Los colores, tipografías y formas están documentados en [DESIGN.md](DESIGN.md).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. El contenido (textos, precios, horarios) está en `lib/data.ts`.

---

Diseño y desarrollo: Alberto Nicolas Robledo
