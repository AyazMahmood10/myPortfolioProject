import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:ayazmahmood0015@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger e-color"
                  title="ayazmahmood0015@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/ayaz-mahmood-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary l-color"
                  title="Visit my LinkenIn"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/AyazMahmood10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-dark g-color"
                  title="My other projects"
                >
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        {/*<Row>
          <Col>
          <Image className="profile justify-content-end" alt="profile" src={L_ADDRESS} thumbnail fluid />
          <span>Address</span>
          </Col>
        </Row>*/}
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
