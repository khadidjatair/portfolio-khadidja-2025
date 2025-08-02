import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Développé par Khadidja Tair</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

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
  );
}

export default Footer;
