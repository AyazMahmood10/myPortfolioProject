import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.webp";
import Button from "react-bootstrap/Button";
import Pdf from "../../components/my-navbar/Ayaz_resume.pdf";

import "./about.style.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="pt-3 text-center font-details-b pb-3">ABOUT ME</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          {/* Profile Picture */}
          <Col xs={12} md={6}>
            <Row className="justify-content-center mr-2 mb-2 ml-2">
              <Image
                className="profile justify-content-end"
                alt="profile"
                src={Profile}
                thumbnail
                fluid
              />
            </Row>
          </Col>

          {/*About me description*/}
          <Col xs={12} md={6}>
            <Row className=" align-items-start p-2 my-details font-details-about rounded">
              {/* description */}
              Hi there! I am <strong>&nbsp;Ayaz Mahmood.</strong>
              <br />
              I am a Full Stack Web Developer with React.js, Redux, Express.js,
              Node.js and Mongo DB as my tech stack.
              <br />I have strong fundamentals in computer algorithms, dynamic
              <br />
              programming, object oriented programming and relational databases.
              <br />
              Working with the clients, my goal is always driven towards
              providing
              <br />
              amazing experience with the best level of quality and service to
              them.
              <br />I love learning about new technologies, what problems are
              they solving and how can I use them to build better and scalable
              products.
              <br />
              Outside of computers, I love sports. I have played upto national
              <br />
              level in badminton, representing my state, Jharkhand, India.
              <br />
            </Row>

            <Row>
              {/* buttons */}
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a href={Pdf} target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/AyazMahmood10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-danger">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/in/ayaz-mahmood-0a8b0813b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
