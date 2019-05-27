import React from 'react';
import './Card.css';

function CardContent({ cardHeading, cardText, cardLink }) {
  return (
    <div className="cardContent">
      <h3 className="cardHeading">{cardHeading}</h3>
      <p className="cardText">{cardText}</p>
      <p className="cardLink">{cardLink}</p>
    </div>
  );
}

export default CardContent;
