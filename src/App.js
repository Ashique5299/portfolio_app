import { useState } from "react";
import Contact from "./Components/ContactComponents/Contact";
import HeroSection from "./Components/HeroComponents/HeroSection";
import MyServices from "./Components/MyServicesComponents/MyServices";
import ProfessionalSkills from "./Components/ProfessionalSkillsComponents/ProfessionalSkills";
import PortfolioComponent from "./Components/ProtfolioComponent/PortfolioComponent";
import ResumeComponent from "./Components/ResumeComponents/ResumeComponent";
import TestimonialSliderComponent from "./Components/TestimonialComponent/TestimonialSliderComponent";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import HeaderButtonSection from "./Layout/HeaderButtonSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="mx-4 mb-20 md:mx-10">
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <HeaderButtonSection menuOpen={menuOpen} />
        <HeroSection />
        <MyServices />
        <ProfessionalSkills />
        <PortfolioComponent />
        <ResumeComponent />
        {/* <TestimonialSliderComponent /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
