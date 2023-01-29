import Contact from "./Components/ContactComponents/Contact";
import HeroSection from "./Components/HeroComponents/HeroSection";
import MyServices from "./Components/MyServicesComponents/MyServices";
import ProfessionalSkills from "./Components/ProfessionalSkillsComponents/ProfessionalSkills";
import PortfolioComponent from "./Components/ProtfolioComponent/PortfolioComponent";
import TestimonialSliderComponent from "./Components/TestimonialComponent/TestimonialSliderComponent";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="mx-4 mb-20 md:mx-10">
      <Header />
      <HeroSection />
      <MyServices />
      <ProfessionalSkills />
      <PortfolioComponent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
