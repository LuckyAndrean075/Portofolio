import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
