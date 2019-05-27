import React from 'react';
import './Card.css';

function CardContent({ cardHeading, cardText }) {
  return (
    <div>
      <h3 className="cardHeading">{cardHeading}</h3>
      <p className="cardText">{cardText}</p>
    </div>
  );
}

export default CardContent;
