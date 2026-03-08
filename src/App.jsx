import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/style.css";
import "./assets/script";

import Navbar from "./Layouts/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ResumePage from "./pages/ResumePage";
import Footer from "./Layouts/Footer";
import Seperator from "./Elements/Seperator";
import BackToTop from "./Elements/BackToTop";
import Credits from "./Elements/Credits";
import Spinner from "./Elements/Spinner";

const App = () => {
  const [onHireMeClick, setOnHireMeClick] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const hireMeClick = (childStateValue) => {
    setOnHireMeClick(childStateValue);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar onHireMeClick={hireMeClick} />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <About />
                  <Seperator />
                  <Footer />
                  <Seperator />
                  <Credits />
                </>
              } />
              <Route path="/projects" element={
                <>
                  <Projects />
                  <Seperator />
                  <Footer />
                  <Seperator />
                  <Credits />
                </>
              } />
              <Route path="/project/:id" element={
                <>
                  <ProjectDetail />
                  <Seperator />
                  <Footer />
                  <Seperator />
                  <Credits />
                </>
              } />
              <Route path="/resume" element={
                <>
                  <ResumePage />
                  <Seperator />
                  <Footer />
                  <Seperator />
                  <Credits />
                </>
              } />
            </Routes>
          </main>
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;
