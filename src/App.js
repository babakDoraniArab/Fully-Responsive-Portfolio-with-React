import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/HomeSection/Home";
import Skills from "./components/Skills/SkillsList";
import "./_base.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
