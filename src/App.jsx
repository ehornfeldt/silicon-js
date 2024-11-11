import React from "react";
import { useState } from "react";
import "./styles/style.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Brands from "./components/Brands.jsx";
import AppFeatures from "./components/AppFeatures.jsx";
import HowItWork from "./components/HowItWork.jsx";
import Desktop from "./components/Desktop.jsx";
import Reviews from "./components/Reviews.jsx";
import FAQ from "./components/FAQ.jsx";
import Subscribe from "./components/Subscribe.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setMode("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <>
      <Header mode={mode} setMode={toggleMode} />
      <Hero mode={mode} />
      <Brands />
      <AppFeatures />
      <HowItWork />
      <Desktop />
      <Reviews />
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
