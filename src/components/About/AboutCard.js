import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Khadidja TAIR </span> 
            d'<span className="purple"> Algérie</span>.
            <br />
            Actuellement, je suis développeuse logiciel.
            <br />
            Je suis passionnée par le développement web et les nouvelles technologies.
            <br />
            <br />
            En dehors du développement, j’aime également :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> La recherche scientifique
            </li>
            <li className="about-activity">
              <ImPointRight /> Le développement personnel
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ne laisse pas ton temps passer pour rien : apprends chaque jour et travaille pour laisser un impact !"
          </p>
          <footer className="blockquote-footer">Khadidja Tair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
