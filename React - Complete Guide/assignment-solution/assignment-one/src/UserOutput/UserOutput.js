import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Testing out put component</p>
      <p>And the user is: {props.userName}</p>
    </div>
  );
};

export default userOutput;
