import React from "react";
import "../styles/Content.css";
import { ReactComponent as ImgWomenSvg } from "../images/illustration-woman-online-desktop.svg";
// import { ReactComponent as BoxSvg } from "../images/illustration-box-desktop.svg";

const Content = () => {
  return (
    <div className="Content">
      <div className="image-wrapper">
        <ImgWomenSvg className="womenSvg" />
      </div>
      <div className="according-wrapper">
        <h1>FAQ</h1>
      </div>
    </div>
  );
};

export default Content;
