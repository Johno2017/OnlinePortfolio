import React from "react";

import Hero from "../components/Hero.js";
import Content from "../components/Content.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello! My name is John Ong and I am an aspiring Full-Stack Developer.
        </p>
        <p>
          On top of being a full-time Computer Science Student I am constantly
          teaching myself new technologies outside of the curriculum. Within
          just building this site alone I learned how to use{" "}
          <strong>React.js</strong> much more effectively as well as{" "}
          <strong>React Spring(animations)</strong> and{" "}
          <strong>React-Bootstrap (Responsive Layouts).</strong>
        </p>
        <p>
          On top of the new technologies I learned to build this site I am also
          well-versed in the following:
        </p>
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <Col>
              <ul>
                <strong>
                  <u>Languages:</u>
                </strong>
                <li>
                  <strong>C++</strong>
                </li>
                <li>
                  <strong>C#</strong>
                </li>
                <li>
                  <strong>Java</strong>
                </li>
                <li>
                  <strong>JavaScript</strong>
                </li>
                <li>
                  <strong>Python</strong>
                </li>
                <li>
                  <strong>HTML5/CSS3</strong>
                </li>
                <li>
                  <strong>Python</strong>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <strong>
                  <u>Backend:</u>
                </strong>
                <li>
                  <strong>SQL</strong>
                </li>
                <li>
                  <strong>MySQL</strong>
                </li>
                <li>
                  <strong> Google Firebase Firestore (NoSQL Database)</strong>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <strong>
                  <u>Other Technologies:</u>
                </strong>
                <li>
                  <strong>Git/Git WorkFlow</strong>
                </li>
                <li>
                  <strong>Firebase Hosting</strong>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Content>
    </div>
  );
}

export default AboutPage;
