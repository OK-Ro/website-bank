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
    </div>
  );
}

export default App;
