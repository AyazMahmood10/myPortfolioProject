import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./project-timeline.style.css";

// projects
import L_Android from "../../assets/img/projects/android.png";
import L_Hotel from "../../assets/img/projects/L_HOTEL.jpeg";
import L_News from "../../assets/img/projects/news_reader.webp";
import L_Book from "../../assets/img/projects/book.png";
import L_Snake from "../../assets/img/projects/snake.png";

//images
import L_REACT from "../../assets/img/skills/react.svg";
import L_AWS from "../../assets/img/skills/aws.png";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_WPS from "../../assets/img/skills/PowerShell.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#0505331f",
  },
  date: {
    backgroundColor: "#7a89ce",
  },
  marker: {
    borderColor: "#7a89ce",
  },
  timelineTrack: {
    backgroundColor: "lightblue",
  },
});

const ProjectTimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* Project: Customized news reader */}
          <ImageEvent
            date="12/10/2020"
            className="text-center"
            text="Customized News Reader"
            src={L_News}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A tool which captures the
                        screenshots from different websites and gets the updated
                        information every hour
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Deployed it on Windows server using Amazon EC2
                          </li>
                          <li>
                            There is a task scheduler which runs the PowerShell
                            script every hour
                          </li>
                          <li>News gets updated automatically</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_WPS}
                                alt="Windows PowerShell"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Windows Powershell
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS}
                                alt="AWS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">Task Scheduler</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center ">
                <UrlButton
                  style={{ backgroundColor: "pink" }}
                  href="https://github.com/yadla97/News-Reader"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Guessing Game - Android Project */}
          <ImageEvent
            date="11/15/2020"
            className="text-center"
            text="Guess Four Android App"
            src={L_Android}
            alt="Guess Four Android App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A random guessing game
                        which has 2 players who is guessing each other's choosen
                        numbers each player uses different strategies for the
                        guesses. Used worker threads, handlers, loopers and
                        message queues for designing the application
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Two computer players generate a random 4-digit
                            secret code which the other player has to guess
                          </li>
                          <li>
                            Communicating this guess and waiting for a response
                            from the opponent thread
                          </li>
                          <li>
                            Optimizing their guess based on response to win the
                            game
                          </li>
                          <li>Responsive Design</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">Android studio</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yadla97/AndroidDevelopment/tree/main/Guessing%20Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="12/13/2019"
            className="text-center"
            text="Book Rack Website"
            src={L_Book}
            alt="Book Rack website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Designed and created the
                        web portal for online book trading and bug reporting
                        processes
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User sign in/sign up</li>
                          <li>User can rate books</li>
                          <li>User can add/remove items from cart</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yadla97/AndroidDevelopment/tree/main/Guessing%20Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="08/19/2020"
            className="text-center"
            text="Hotel booking system"
            src={L_Hotel}
            alt="Hotel booking system"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Developed and implemented
                        Restful API for a web application that interacts with
                        users in the process of booking a hotel room end-to-end
                        using HTML5, CSS3, Bootstrap, JSTL. Designed
                        microservices using spring-boot that provides the
                        desired functionalities like book a room, cancel a
                        reservation. Used hibernate as back-end framework which
                        reduces database code substantially
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User sign up/ sign in</li>
                          <li>Set Location and Browse hotels</li>
                          <li>Set preferences and book a room</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Html5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BootStrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              BootStrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">JSTL</span>
                          </li>
                          <li>
                            <span className="p-2">Spring-boot</span>
                          </li>
                          <li>
                            <span className="p-2">Hibernate</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yadla97/AndroidDevelopment/tree/main/Guessing%20Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Snake Game */}
          <ImageEvent
            date="12/10/2020"
            className="text-center"
            text="Snake Game"
            src={L_Snake}
            alt="Snake game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A variant of snake game
                        where the player maneuvers a line which grows in length,
                        with the line itself being a primary obstacle.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            The snake continually gets longer as it consumes
                            food
                          </li>
                          <li>
                            The snake reverses the direction if consumes purple
                            food{" "}
                          </li>
                          <li>Application of reverse linked list</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Html5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center ">
                <UrlButton
                  style={{ backgroundColor: "pink" }}
                  href="https://github.com/yadla97/SnakeGame"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  style={{ backgroundColor: "pink" }}
                  href="https://yadla97.github.io/SnakeGame/"
                  target="_blank"
                >
                  PLAY GAME
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeLine;
