import Navbar from "./portfolio-components/Navbar";
import About from "./portfolio-components/About";
import Experience from "./portfolio-components/Experience";
import Projects from "./portfolio-components/Projects";
import Contact from "./portfolio-components/Contact";

function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="portfolio-content">
        <About />
        <div className="spacer"></div>
        <Experience />
        <div className="spacer"></div>
        <Projects />
        <div className="spacer"></div>
        <Contact />
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default Portfolio;
