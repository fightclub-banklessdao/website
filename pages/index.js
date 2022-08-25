import React from "react";
import Header from "../components/global/Header";
import Hero from "../components/global/Hero";
import Mint from "../components/global/Mint";
import Venture from "../components/global/Venture";
import Footer from "../components/global/Footer";

export default function index() {
  return (
    <div>
      <div className="angled-gradient">
        <Header />
        <Hero />
      </div>
      <Mint />
      <Venture />
      <Footer />
    </div>
  );
}
