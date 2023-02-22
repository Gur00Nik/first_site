import React from "react";
import "./Results.css";
const Results = ({number,sense}) => {
  return (
    <div className="build__statistics">
      <h1 className="number">{number}</h1>
      <div className="link__bar"></div>
      <h5 className="build__description">{sense}</h5>
    </div>
  );
};

export default Results;
