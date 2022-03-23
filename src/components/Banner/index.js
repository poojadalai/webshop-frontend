import React from "react";
import "./styles.css";
import Fan from "../../images/Fan.png";

function Banner() {
  return (
    <div className="container">
      <div className="text">
        <p>
          Products for every need,at the <br /> distance of a click
        </p>
      </div>
      <div className="imageClass">
        <img className="image" alt="Some pictures" src={Fan} />
      </div>
    </div>
  );
}

export { Banner };
