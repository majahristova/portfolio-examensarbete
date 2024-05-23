import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Competence from "./components/Competence/Competence";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="hero">
          <Hero />
        </div>
        <div id="competence">
          <Competence />
        </div>
        <h1 className="headingExperience">My experience</h1>
        <div id="work-exp">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default App;
