import React from "react";
import "./StageWorkBlock.css";

const StageWorkBlock = (props) => {
  return (
    <div className="stage__work__post">
      <div className="stage__work__post__inner">
        <div className="stage__work__post__number">
          <h4>{props.numberblock}</h4>
        </div>
        <div className="stage__work__post__heading">
          <h6>{props.headingblock}</h6>
        </div>
        <div className="stage__work__post__description">
          <h6>{props.descriptionblock}</h6>
        </div>
      </div>
    </div>
  );
};

export default StageWorkBlock;
