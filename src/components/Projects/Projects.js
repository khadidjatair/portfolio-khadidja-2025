import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import instan from "../../Assets/Projects/instan.png";
import receipt from "../../Assets/Projects/receipet.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import telegram from "../../Assets/Projects/telegram-scraper.png";
import predictive from "../../Assets/Projects/MdP.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment, couvrant à la fois le développement web fullstack, la data, l'automatisation et l'intelligence artificielle.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instan}
              isBlog={false}
              title="Instan.fr — Aide à domicile"
              description="Participation à Refonte de la plateforme Instan.fr, un service d’aide à la personne avec deux portails : back-office administratif et interface intervenants. Contribution aux deux côtés, avec développement de fonctionnalités comme la gestion des missions, factures, calendriers de disponibilité, notification, formulaires, etc. Stack MERN (MongoDB, Express, React, Node) et Next.js pour le SEO et les performances.
Tech : React.js, SCSS, Bootstrap, Node.js, MongoDB, Next.js."
              demoLink="https://www.instan.fr/"
            />
          </Col>



  



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telegram}
              isBlog={false}
              title="Telegram Scraper — Crypto & Trading"
              description="Développement d’un outil backend pour scraper les canaux Telegram (messages, utilisateurs, usernames) via GramJS, dans le but d’aider les traders à collecter automatiquement des données sur la cryptomonnaie. Intégration d’APIs temps réel pour récupérer les prix du marché. Stockage structuré des données dans MongoDB, avec endpoints REST sécurisés.
Tech : Node.js, Express.js, GramJS, MongoDB, API REST."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predictive}
              isBlog={false}
              title="Dashboard de Maintenance Prédictive"
              description="Dashboard de supervision industrielle dans le contexte de l'industrie 4.0. Permet de suivre l'état des machines, de recevoir des alertes, d’analyser les statistiques, et d’intégrer ou créer des modèles de prédiction (pannes, anomalies). Intégration d'un RNN (Réseau de Neurones Récurrent) pour anticiper les défaillances. Interface ergonomique et orientée temps réel.
Tech : React, Node.js, MongoDB, Python (RNN), Chart.js."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Application e-commerce"
              description="Développement d’une plateforme e-commerce complète : affichage dynamique de produits, gestion du panier, système de recherche, filtrage, création de compte, paiement simulé et interface d’administration. Gestion des produits, des stocks, et suivi des commandes côté admin.
Tech : React, Redux Toolkit, Node.js, Express, MongoDB."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={receipt}
              isBlog={false}
              title="Receipt App — Application de gestion de recettes de cuisine"
              description="Application web permettant la gestion de recettes de cuisine. Les utilisateurs peuvent ajouter, classer et consulter des recettes par catégorie. Travail réalisé sur l’intégration de l’authentification, ainsi que des fonctionnalités telles que la recherche, l’upload d’images, la pagination, etc.
              Tech : Next.js, React, Node.js, MongoDB, TypeScript."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
