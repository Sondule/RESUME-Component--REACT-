import React from "react";

const Skill = (props) => {
  return (
    <>
      <h2>{props.skill}</h2>
      <ul>
        <li>Java</li>
        <li>JavaSecript</li>
        <li>Testing</li>
        <li>Api Design</li>
        <li>System Design</li>
      </ul>
      <hr />
      <h2>{props.hobby}</h2>
      <ol>
        <li>Tabel Tennis</li>
        <li>Reading Books</li>
        <li>Biography</li>
        <li>Teaching</li>
      </ol>
    </>
  );
};

export default Skill;