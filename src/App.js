import AboutSection from "./AboutSection";
import Contact from "./ContactSection";
import FeaturedTemplatesSection from "./FeaturedTemplatesSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import ServicesSection from "./ServiceSection";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedTemplatesSection />
      <AboutSection />
      <PopularCategoriesSection />
      <ServicesSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
