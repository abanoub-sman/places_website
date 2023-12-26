import React from 'react';

import './Card.css';
// this is a presentational component 
const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
