import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../components/about-me/about-me";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Contact from "../components/contact/contact";
import styles from "./Home.module.css";
import { Tab } from "@mui/material";
import Projects from "../components/projects/projects";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "/";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isExperiencePage = location.pathname === "/experience";

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Router>
          <div className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`${styles.link} ${showMenu ? styles.showMenu : ""}`}>
            <ul>
              <Tab
                className={`${styles.tab} ${
                  activeTab === "/" ? styles.active : ""
                }`}
                label="Sobre mim"
                component={Link}
                to="/"
                onClick={() => setActiveTab("/")}
              />
              <Tab
                className={`${styles.tab} ${
                  activeTab === "/experience" ? styles.active : ""
                }`}
                label="Experiência"
                component={Link}
                to="/experience"
                onClick={() => setActiveTab("/experience")}
              />
              <Tab
                className={`${styles.tab} ${
                  activeTab === "/skills" ? styles.active : ""
                }`}
                label="Habilidades"
                component={Link}
                to="/skills"
                onClick={() => setActiveTab("/skills")}
              />
              <Tab
                className={`${styles.tab} ${
                  activeTab === "/projects" ? styles.active : ""
                }`}
                label="Projetos"
                component={Link}
                to="/projects"
                onClick={() => setActiveTab("/projects")}
              />
              <Tab
                className={`${styles.tab} ${
                  activeTab === "/contact" ? styles.active : ""
                }`}
                label="Contato"
                component={Link}
                to="/contact"
                onClick={() => setActiveTab("/contact")}
              />
            </ul>
          </nav>
          <section className={styles.rendering}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </Router>
      </main>
      <Footer addMarginTop={isExperiencePage} />
    </div>
  );
};

export default Home;
