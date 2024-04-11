import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hsp from "../assets/img/hsp.png";
import nabr from "../assets/img/nabr.png";
import fbr from "../assets/img/fbr.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import apexMarket from "../assets/img/apex_markets.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Apex Markets",
      description: "Development",
      imgUrl: apexMarket,
      websiteUrl: "https://apexmarkets.io/",
    },
    {
      title: "Home Shool panda",
      description: "Design and Development",
      imgUrl: hsp,
      websiteUrl: "https://homeschoolpanda.com/",
    },
    {
      title: "NABR",
      description: "Design and Development",
      imgUrl: nabr,
      websiteUrl: "https://www.nabr.org/",
    },
    {
      title: "FBR",
      description: "Design and Development",
      imgUrl: fbr,
      websiteUrl: "https://fbresearch.org/",
    },
  ];

  const projectsDiscription = [
    {
      title: "Apex Markets",
      description:
        "Apex Markets is a global market company that provides a secure, reliable, and convenient gateway into the world of open financial systems to aspiring traders ",
      imgUrl: apexMarket,
      websiteUrl: "https://apexmarkets.io/",
    },
    {
      title: "Home Shool panda",
      description:
        "Homeschool Panda’s online homeschool planner lets you organize the lessons and saves valuable time. Moreover, this innovative digital planning record keeping & collaborative system can be accessed from anywhere and on any device.",
      imgUrl: hsp,
      websiteUrl: "https://homeschoolpanda.com/",
    },
    {
      title: "NABR",
      description:
        "This app advocates for ethical and essential animal research, ensuring sound public policy for the humane use of animals in biomedical research. It unifies the scientific community's voice on legislative, regulatory, and legal matters related to laboratory animal welfare.",
      imgUrl: nabr,
      websiteUrl: "https://www.nabr.org/",
    },
    {
      title: "FBR",
      description:
        "This app facilitates the study and understanding of animals for scientific and medical discovery, spanning from wildlife observation to disease treatment development in laboratory animals and pets. It aims to advance cures by providing a platform for observational and theoretical research on animal behavior and biology.",
      imgUrl: fbr,
      websiteUrl: "https://fbresearch.org/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div>
                    <h2>Projects</h2>
                    <p>
                      Welcome to my portfolio of projects! Below, you'll find a
                      showcase of my recent work and accomplishments. Feel free
                      to explore and get inspired!
                    </p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Discription</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsDiscription.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
