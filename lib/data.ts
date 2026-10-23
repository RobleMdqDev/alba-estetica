import type { StaticImageData } from "next/image";
import rostro from "@/public/fotos/rostro.jpg";
import corporal from "@/public/fotos/corporal.jpg";
import laser from "@/public/fotos/laser.jpg";
import lucia from "@/public/fotos/equipo-lucia.jpg";
import carla from "@/public/fotos/equipo-carla.jpg";
import sofia from "@/public/fotos/equipo-sofia.jpg";

// Número de muestra: reemplazar por el del cliente
export const WHATSAPP = "5491100000000";

export type Treatment = { name: string; description: string; minutes: string; price: string };

export type Category = {
  id: string;
  label: string;
  photo: StaticImageData;
  alt: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    id: "rostro",
    label: "Rostro",
    photo: rostro,
    alt: "Paciente con máscara de arcilla durante una limpieza facial",
    treatments: [
      { name: "Limpieza profunda", description: "Extracción, exfoliación y máscara elegida según tu tipo de piel.", minutes: "60 min", price: "$38.000" },
      { name: "Peeling químico", description: "Ácidos en concentración controlada para manchas, textura y marcas de acné.", minutes: "45 min", price: "$52.000" },
      { name: "Hidratación con ácido hialurónico", description: "Devuelve luminosidad y elasticidad, sin agujas.", minutes: "50 min", price: "$45.000" },
    ],
  },
  {
    id: "corporal",
    label: "Corporal",
    photo: corporal,
    alt: "Manos de una terapeuta haciendo un masaje de drenaje",
    treatments: [
      { name: "Drenaje linfático", description: "Masaje manual que reduce la retención de líquidos y la pesadez.", minutes: "60 min", price: "$34.000" },
      { name: "Radiofrecuencia corporal", description: "Estimula el colágeno para mejorar la firmeza de abdomen, brazos y piernas.", minutes: "40 min", price: "$41.000" },
      { name: "Tratamiento de celulitis", description: "Ondas de choque y masaje para alisar la piel de forma progresiva.", minutes: "50 min", price: "$48.000" },
    ],
  },
  {
    id: "laser",
    label: "Láser",
    photo: laser,
    alt: "Sesión de depilación láser en una pierna",
    treatments: [
      { name: "Depilación láser", description: "Láser de diodo apto para todo tipo de piel, con sesiones rápidas.", minutes: "15 a 60 min", price: "$18.000" },
      { name: "Manchas y lentigos", description: "Luz pulsada intensa que aclara manchas solares y unifica el tono.", minutes: "30 min", price: "$55.000" },
      { name: "Rejuvenecimiento fraccionado", description: "Renueva la superficie de la piel y suaviza líneas finas y cicatrices.", minutes: "45 min", price: "$89.000" },
    ],
  },
];

export const steps = [
  { title: "Evaluación sin cargo", text: "Una dermatóloga analiza tu piel, tus hábitos y lo que querés lograr. Son 20 minutos." },
  { title: "Plan por escrito", text: "Te damos tratamientos, cantidad de sesiones y precio total antes de empezar." },
  { title: "Seguimiento", text: "Fotografiamos y medimos los cambios en cada sesión, y ajustamos el plan si hace falta." },
];

export const team = [
  { name: "Dra. Lucía Méndez", role: "Médica dermatóloga, directora", photo: lucia, position: "50% 20%" },
  { name: "Dra. Carla Ríos", role: "Médica dermatóloga, láser", photo: sofia, position: "50% 20%" },
  { name: "Sofía Vidal", role: "Cosmetóloga, tratamientos faciales", photo: carla, position: "50% 30%" },
];

export const testimonials = [
  { quote: "Fui por las manchas del sol y en tres sesiones cambió por completo. Me explicaron todo antes de empezar.", name: "Valeria, 41" },
  { quote: "Lo que más valoro es que no te venden de más. Me dijeron qué necesitaba y qué no.", name: "Martín, 35" },
  { quote: "Reservé online en un minuto y me atendieron a horario. El lugar es hermoso.", name: "Julieta, 28" },
];

export const faqs = [
  { q: "¿La evaluación inicial tiene costo?", a: "No. La primera evaluación con una dermatóloga es gratuita y no te obliga a hacer ningún tratamiento." },
  { q: "¿Cuántas sesiones voy a necesitar?", a: "Depende del tratamiento y de tu piel. En la evaluación te damos la cantidad estimada y el precio total por escrito." },
  { q: "¿Los tratamientos duelen?", a: "La mayoría no. Con láser se siente un leve calor o pinchazo, y usamos enfriamiento para que sea cómodo." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí, con tarjeta de crédito. También aceptamos efectivo y transferencia." },
  { q: "¿Atienden a hombres?", a: "Sí. Todos los tratamientos son para cualquier tipo de piel." },
];

export const slots = ["09:00", "10:30", "12:00", "15:00", "16:30", "18:00"];
