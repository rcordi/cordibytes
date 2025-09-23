import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollTopButton from "./components/ScrollTopButton";

export default function App() {
  return (
    <>

      {/* Main content above particles */}
      <div className="relative z-0">
        <Header />
        <Hero />
        <Home />
        <Footer />
      </div>

      {/* Scroll button on top */}
      <ScrollTopButton />
    </>
  );
}
