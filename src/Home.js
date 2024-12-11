import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import './index.css';

import Hero from "./components/Hero";
import Prestations from "./components/Prestations";
import Galerie from "./components/Galerie";
import Apropos from "./components/Apropos";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  const heroRef = useRef(null);
  const prestationRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar
        onContactClick={() => scrollToSection(contactRef)}
        onHeroClick={() => scrollToSection(heroRef)}
        onPrestationClick={() => scrollToSection(prestationRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
      />
      <main className="flex-grow">
        <section ref={heroRef}>
          <Hero
            onPrestationClick={() => scrollToSection(prestationRef)}
            onContactClick={() => scrollToSection(contactRef)}
          />
        </section>
        <section ref={prestationRef}>
          <Prestations />
        </section>
        <Galerie />
        <section ref={aboutRef}>

        <Apropos />
        </section>
        
        <Blog />
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2024 Ziboulette. Tous droits réservés.
      </footer>
    </div>
  );
}
