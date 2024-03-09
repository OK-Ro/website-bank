// App.js
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ScrollEffectContainer from "./ScrollEffectContainer";
import FeaturedTemplatesSection from "./FeaturedTemplatesSection";
import AboutSection from "./AboutSection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import ServicesSection from "./ServiceSection";
import Testimonials from "./Testimonials";
import Contact from "./ContactSection";
import Footer from "./Footer";

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <ScrollEffectContainer>
        <FeaturedTemplatesSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <AboutSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <PopularCategoriesSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <ServicesSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <Testimonials />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <Contact />
      </ScrollEffectContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
