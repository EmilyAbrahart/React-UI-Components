import React from 'react';
import './Card.css';

function CardBanner({ source, alt }) {
  return <img className="cardBannerImg" src={source} alt={alt} />;
}

export default CardBanner;
