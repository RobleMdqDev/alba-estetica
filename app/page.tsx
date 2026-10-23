import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import { Faq, Location, Process, Team, Testimonials } from "@/components/Sections";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <p className="announce">Tu primera evaluación de piel es sin cargo.</p>
      <Nav />
      <main>
        <Hero />
        <Treatments />
        <Process />
        <Team />
        <Testimonials />
        <Booking />
        <Faq />
        <Location />
      </main>
      <Footer />
    </>
  );
}
