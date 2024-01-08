// src/pages/about.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import React from 'react';
;

const About = () => {
  return (
    <>
     
      <main className="home min-h-screen min-h-screen animated-gradient">
      <Navbar/>
        <section className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Om Mig</h1>
          <p className="text-lg">
            Hej, mitt namn är Eleonora och jag är en passionerad front-end utvecklare med en förkärlek för att skapa vackra och funktionella användargränssnitt. Efter en spännande resa genom olika aspekter av teknik och design, har jag hittat min nisch i att omvandla användarupplevelser till kod.
          </p>
          <p className="text-lg mt-4">
            Min bakgrund inom kriminalvården har gett mig en unik insikt i vikten av säkerhet och tillgänglighet, vilket jag nu tillämpar inom webbdesign och utveckling. Jag tror starkt på livslångt lärande och fortsätter att utveckla mina färdigheter inom moderna teknologier och ramverk.
          </p>
          <p className="text-lg mt-4">
            När jag inte kodar hittar du mig ofta utforska nya teknik- och designtrender eller träna brasiliansk jiujitsu. 
          </p>
        </section>
        <Footer />
      </main>
      
    </>
  );
};

export default About;
