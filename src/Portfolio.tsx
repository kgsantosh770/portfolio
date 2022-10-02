import Navbar from "./portfolio-components/Navbar";
import About from "./portfolio-components/About";
import Experience from "./portfolio-components/Experience";
import Projects from "./portfolio-components/Projects";
import Contact from "./portfolio-components/Contact";
import TechIconsBox from "./portfolio-components/TechIconsBox";
import HangingEmail from "./portfolio-components/HangingEmail";
import HangingSocialMedia from "./portfolio-components/HangingSocialMedia";

function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="portfolio-content">
        <div className="about-techicons">
          <About />
          <TechIconsBox />
        </div>
        <Experience />
        <Projects />
        <Contact />
        <HangingEmail />
        <HangingSocialMedia />
      </div>
    </div>
  );
}

export default Portfolio;
