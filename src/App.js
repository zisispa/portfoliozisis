import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./assets/images/scrolltotop.svg";

const App = () => {
  return (
    <div className='bg-navy_color'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop
        smooth
        component={<MySVG />}
        style={{
          background: "#64ffda",
          color: "#0a192f",
        }}
      />
    </div>
  );
};

export default App;
