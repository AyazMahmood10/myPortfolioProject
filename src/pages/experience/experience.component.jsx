import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import L_COGNIZANT from "../../assets/img/experience/cognizant.webp";

import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap card-header"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_COGNIZANT}
                  alt="Cognizant logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column card-body-color">
                <div>
                  <Card.Title className="text-center">
                    {" "}
                    Programmer Analyst{" "}
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong> Full Stack Developer </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Node JS, JavaScript ,
                    HTML, CSS, MongoDB
                    <br />
                    <strong>Duration:</strong> October 2018 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Integral member in design, analysis and development 
                        efforts for SPA web- applications to solve complex business
                        problems.
                      </li>
                      <li>
                        Involved in developing new features and refining
                        existing features and functionalities.
                      </li>
                      <li>
                        Responsible for immediately acting upon and fixing any
                        production issues.
                      </li>
                      <li>
                        {" "}
                        Engineered strongly typed components using React,
                        leveraged Relay store in updating UI, Reduced code
                        clutter by 70%, and achieved clear flow of data from
                        model to view.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
