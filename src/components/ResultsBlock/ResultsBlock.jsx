import React from "react";
import Results from "../Results/Results";
import "./ResultsBlock.css";

const results = [
  { number: 15, sense: "Строительных бригад" },
  { number: 20, sense: "Лет опыта в строительстве" },
  { number: 100, sense: "Лет - средний срок службы дома" },
  { number: 150, sense: "Построенных домов" },
];
const ResultsBlock = () => {
  return (
    <div id="our successes" className="build__heading__block">
      <div className="container">
        <h1 className="build__heading">Наши успехи</h1>
        <div className="build__statistics__block">
          {results.map(({ number, sense }) => {
            return <Results key={sense} number={number} sense={sense} />;
          })}
        </div>
        <div className="link__bar"></div>
      </div>
    </div>
  );
};

export default ResultsBlock;
