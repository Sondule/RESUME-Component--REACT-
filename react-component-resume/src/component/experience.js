import React from "react";

const Experience = (props) => {
  return (
    <div>
      <h2>{props.exp}</h2>
      <h4>{props.company}</h4>
      <p>{props.details}</p>
      <hr />
    </div>
  );
};

export default Experience;