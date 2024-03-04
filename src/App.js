import Contact from "./ContactSection";
import FeaturedTemplatesSection from "./FeaturedTemplatesSection";
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
      <PopularCategoriesSection />
      <ServicesSection />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
