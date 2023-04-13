import React from 'react';
import "./Anthropology.css";

const Anthropology = (props) => {
  const className = `anthropology-departament ${props.anthropologyVisible ? 'visible' : 'hidden'}`;
  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export default Anthropology;
