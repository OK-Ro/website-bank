// App.js
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

import ScrollEffectContainer from "./ScrollEffectContainer";
import FeaturedTemplatesSection from "./components/FeaturedTemplatesSection";
import AboutSection from "./AboutSection";
import PopularCategoriesSection from "./components/PopularCategoriesSection";
import ServicesSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HomeSection />
      <ScrollEffectContainer>
        <PopularCategoriesSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <FeaturedTemplatesSection />
      </ScrollEffectContainer>
      <ScrollEffectContainer>
        <AboutSection />
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
