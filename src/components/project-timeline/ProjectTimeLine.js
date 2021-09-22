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

import "./ProjectTimeLine.css";

// projects
import L_Pong from "../../assets/img/projects/pong.png";
import L_TextTract from "../../assets/img/projects/textTract.png";
import L_Bookmark from "../../assets/img/projects/bookmark_app.png";
import L_Dictionary from "../../assets/img/projects/dictionary.png";
import L_PasswordGenerator from "../../assets/img/projects/password_generator.png"

//images
import L_REACT from "../../assets/img/skills/react.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_Node from "../../assets/img/skills/nodejs.svg"

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
          {/* Project: TextTract - A text utility React Project */}
          <ImageEvent
            date="21/08/2021"
            className="text-center"
            text="Text Utility App"
            src={L_TextTract}
            alt="Text Utility App"
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
                        <strong>Description:</strong> A tool which when provided with a text
                        gives the word count, character count, converts it to upper case and lower case,
                        removes extra spaces, special characters and much more. It has buttons to perform
                        the above mentioned task as desired by the user.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            SPA built using React.
                          </li>
                          <li>
                            Uses React Router to navigate to Home and About pages.
                          </li>
                          <li>Dark mode feature which users can use to switch between light and dark 
                             theme as desired.
                          </li>
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
                                src={L_REACT_ROUTER}
                                alt="React Router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center ">
                <UrlButton
                  
                  href="https://github.com/AyazMahmood10/TextTract"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Phrase Book - A React Project */}
          <ImageEvent
            date="10/03/2021"
            className="text-center"
            text="Dictionary"
            src={L_Dictionary}
            alt="Dictionary"
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
                        <strong>Description:</strong> A dictionary which supports 12 languages.
                        Users can enter a word then select the language and it will show the
                        available meanings with examples.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Provides the meaning of the entered words along with examples.
                          </li>
                          <li>
                            Supports 12 languages.
                          </li>
                          <li>
                             Dark mode feature which users can use to switch between light and dark 
                             theme as desired.
                          </li>
                          <li>
                            Data is fetched using Axios from the open source dictionary API.
                          </li>
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
                                src={L_MATERIALUI}
                                alt="Material UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/AyazMahmood10/WordBook"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Pong Game */}
          <ImageEvent
            date="15/12/2020"
            className="text-center"
            text="Pong Game"
            src={L_Pong}
            alt="Pong Game"
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
                        <strong>Description:</strong> Developed a pong game
                        where users can compete with the computer and showcase their
                        pong skills.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>A full game is of 7 points. Whoever scores to 7 first, wins.</li>
                          <li>A canvas is created which contains the paddle at the bottom and top of the canvas
                            One for the user and the other for computer.
                          </li>
                          <li>When a game is finished, an option is display for the rematch.</li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
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
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/AyazMahmood10/pong"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Bookmark App */}
          <ImageEvent
            date="02/09/2020"
            className="text-center"
            text="Bookmark App"
            src={L_Bookmark}
            alt="Bookmark App"
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
                        <strong>Description:</strong> A Bookmark app which provides
                        an option to add the website name and its URL. This data is stored
                        in the local storage. If later on, the user wants to access the website
                        that was bookmarked, a simple click on the saved bookmark will direct
                        to the website.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            An option to add the wesbite as a bookmark in the local storage.
                          </li>
                          <li>
                            Bookmarked website can be accessed on clicking on saved bookmark. 
                          </li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
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
              <div className="d-flex justify-content-center flex-nowrap text-center ">
                <UrlButton
                  href="https://github.com/AyazMahmood10/bookmark-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Password Generator */}
          <ImageEvent
            date="07/06/2020"
            className="text-center"
            text="Node JS Password Generator"
            src={L_PasswordGenerator}
            alt="Node JS Password Generator"
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
                        <strong>Description:</strong> A command line password generator using
                          Node JS.
                        <br />
                        <br />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Generates a random password depending on the number of characters provided.
                          </li>
                          <li>
                            By default it will be a random 8 character password which can contain alphabhets, 
                            special characters and numbers. 
                            The input and the length of the password can be specfied too.
                          </li>
                          <li>
                            Genrated password can be copied to clipboard and also can be added to a text file.
                          </li>
                          <li>
                            Created a symlink so that there will be a gloabl command for the password generator.
                          </li>
                        </ul>
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Node}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node JS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center ">
                <UrlButton
                  href="https://github.com/AyazMahmood10/simplePasswordGenerator"
                  target="_blank"
                >
                  SOURCE CODE
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
