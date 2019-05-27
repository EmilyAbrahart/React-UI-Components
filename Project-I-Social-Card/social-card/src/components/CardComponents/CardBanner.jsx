import React from 'react';
import './Card.css';

function CardBanner({ source, alt }) {
  return <img src={source} alt={alt} />;
}

export default CardBanner;
