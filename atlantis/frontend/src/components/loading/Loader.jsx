import React from "react";
import "./Loader.scss";
import { useRef } from "react";

const Loader = () => {
  return (
    <div className="mask">
      <div className="mask__content">
        <img src="img/circleLogo.png" alt="img" />
      </div>
		</div>
  );
};

export default Loader;