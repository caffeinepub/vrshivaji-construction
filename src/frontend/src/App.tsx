import React from 'react';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import HomeHero from './components/sections/HomeHero';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
