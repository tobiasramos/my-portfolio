import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../components/about-me/about-me";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Contact from "../components/contact/contact";
import styles from "./Home.module.css";
import { Tab } from "@mui/material";
import Projects from "../components/projects/projects";

const Home = () => {
  return (
    <div className={styles.container}>
      <Router>
        <nav className={styles.link}>
          <ul>
            <Tab
              className={styles.tab}
              label="Sobre mim"
              component={Link}
              to="/"
            />
            <Tab
              className={styles.tab}
              label="Experiência"
              component={Link}
              to="/experience"
            />
            <Tab
              className={styles.tab}
              label="Habilidades"
              component={Link}
              to="/skills"
            />
            <Tab
              className={styles.tab}
              label="Projetos"
              component={Link}
              to="/projects"
            />
            <Tab
              className={styles.tab}
              label="Contato"
              component={Link}
              to="/contact"
            />
          </ul>
        </nav>
        <div className={styles.rendering}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
