// App.js
import React from "react";
import styled from "styled-components";
import Header from "./Header";

import ScrollEffectContainer from "./ScrollEffectContainer";
import FeaturedTemplatesSection from "./FeaturedTemplatesSection";
import AboutSection from "./AboutSection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import ServicesSection from "./ServiceSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactSection";
import Footer from "./Footer";
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
