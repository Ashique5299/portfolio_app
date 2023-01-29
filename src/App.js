import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative overflow-hidden">
      <div className="px-4 pb-20 md:px-10 bg-gradient-to-b from-[#f0ebe3] to-[#ffffff] dark:bg-gradient-to-b dark:from-[#222831] dark:to-[#222831]">
        <Header
          toggleTheme={toggleTheme}
          toggleMenu={toggleMenu}
          theme={theme}
        />
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
