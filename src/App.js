import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

// component
import MyNavbar from "./components/my-navbar/MyNavbar";
import MyCarousal from "./components/my-carousal/MyCarousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./pages/about/About";
import Skills from "./pages/skills/SkillsComponent";
import Experience from "./pages/experience/Experience";
import ProjectTimeLine from "./components/project-timeline/ProjectTimeLine";
import ContactForm from "./pages/contact-form/ContactForm";
import FooterPanel from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      {/*About me section*/}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      {/* Skills */}

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      {/* Experience */}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />
            <Experience />
          </Slide>
        </Container>
      </div>

      {/* Project Timeline */}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />
            <ProjectTimeLine />
          </Slide>
        </Container>
      </div>

      {/* Contact form */}
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />
            <ContactForm />
          </Slide>
        </Container>
      </div>
      <FooterPanel />
    </div>
  );
};

export default App;
