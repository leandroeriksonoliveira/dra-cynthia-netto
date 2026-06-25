import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { WarningSigns } from "@/components/WarningSigns";
import { Consultation } from "@/components/Consultation";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <WarningSigns />
        <Consultation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
