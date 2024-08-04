import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";
import Experience from "./Experience";

const Body = () => {
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Education />
      <Experience/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
