import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../components/about-me/about-me";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Contact from "../components/contact/contact";

const Home = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Sobre mim</Link>
          </li>
          <li>
            <Link to="/experience">Experiência</Link>
          </li>
          <li>
            <Link to="/skills">Habilidades</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
