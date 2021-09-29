import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import L_COGNIZANT from "../../assets/img/experience/cognizant.webp";


import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
            <Card className="focus">
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
                    React Developer{" "}
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong> Programmer Analyst </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Node JS, Redux, Material-UI, JavaScript, HtML, CSS, Bootstrap 
                    <br />
                    <strong>Duration:</strong> January 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Integral member in design, analysis and development 
                        efforts for SPA web- applications to solve complex business
                        problems.
                      </li>
                      <li>
                        Developed components with new features, refined existing features and functionalities.
                      </li>
                      <li>
                        Assigned for immediately acting upon and fixing any production issues.
                      </li>
                      <li>
                        {" "}
                        Understanding business prerequisites, planning and executing frameworks appropriately.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container className="focus">
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
                    Software Developer{" "}
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong>Technology:</strong> React JS, JavaScript ,
                    HTML, CSS, Bootstrap
                    <br />
                    <strong>Duration:</strong> October 2018 - December 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Redesigned UI accessibility for Cognizant internal website by 
                        fixing HTML, CSS, JavaScript Issues.
                      </li>
                      <li>
                        Engineered strongly typed components using React, leveraged Relay store in updating UI.
                      </li>
                      <li>
                        Reduced code clutter by 70% and achieved clear flow of data from model to view.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
