import React from "react";
import "./Loader.scss";
import { useRef } from "react";

const Loader = () => {
  return (
    <div className="mask">
      <div className="mask__content">
        <img src="img/circleLogo.PNG" alt="img" />
      </div>
		</div>
  );
};

export default Loader;