import FeaturedTemplatesSection from "./FeaturedTemplatesSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import ServicesSection from "./ServiceSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedTemplatesSection />
      <PopularCategoriesSection />
      <ServicesSection />
    </div>
  );
}

export default App;
