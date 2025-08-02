import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ma-photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi <span className="purple"> me présenter </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">Khadidja Tair</b>, développeuse full-stack avec plus de 3 ans d'expérience, principalement avec la stack <b className="purple">JavaScript (MERN + Next.js)</b>.
              <br />
              <br />
              Je suis diplômée d’un master en informatique et je poursuis un doctorat en systèmes d'information, avec un focus sur la modélisation et l’optimisation des processus métiers.
              <br />
              <br />
              J’ai contribué à plusieurs projets web complexes, notamment dans le domaine des services à la personne, en France. Je suis passionnée par le développement de solutions web modernes, performantes et maintenables.
              <br />
              <br />
              Mon objectif est d’intégrer une équipe dynamique où je peux continuer à évoluer techniquement et contribuer à des projets à fort impact.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                alt="ma photo"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #6c63ff",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez-moi sur</h1>
            <p>
              N’hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="mailto:khadidjatair@gmail.com"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khadidja-t-3888001a5/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.researchgate.net/profile/Khadidja-Tair?ev=hdr_xprf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiResearchgate />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
