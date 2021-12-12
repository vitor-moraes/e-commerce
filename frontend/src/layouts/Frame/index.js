import React from "react";
import "./styles.css";

function Frame(props) {
  return (
    <div className="container-frame">
      <div className="frame">{props.children}</div>
    </div>
  );
}

export default Frame;
