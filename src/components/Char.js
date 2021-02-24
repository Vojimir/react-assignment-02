import React from "react";
const char = (props) => {
  const mystyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <p style={mystyle} onClick={props.clicked}>
      {props.character}
    </p>
  );
};

export default char;
