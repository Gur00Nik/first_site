import React from "react";
import Header from "./components/Header/Header";
import BuildBlock from "./components/BuildBlock/BuildBlock";
import ResultsBlock from "./components/ResultsBlock/ResultsBlock";
import StageWork from "./components/StageWork/StageWork";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import "./App.css";
function App() {
  return (
    <section>
      <div className="background">
        <Header />
        <BuildBlock />
        <ResultsBlock />
      </div>
      <StageWork />
      <div className="background">
        <Gallery />
        <Footer />
      </div>
    </section>
  );
}

export default App;
