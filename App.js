import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Anime from "./components/Anime";
import Engagement from "./components/Engagement";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import Career from "./components/Career";
import Inc from "./components/Inc";
import Job from "./components/Job";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Anime />
      <Engagement />
      <Cards />
      <Newsletter />
      <Career />
      <Inc />
      <Job />
      <Footer />
    </div>
  );
}

export default App;
