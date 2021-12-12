import React from "react";
import "./styles.css";

function Standard(props) {
  return (
    <div className="container-standard">
      <div className="header"></div>
      <div className="body">{props.children}</div>
      <div className="footer"></div>
    </div>
  );
}

export default Standard;
