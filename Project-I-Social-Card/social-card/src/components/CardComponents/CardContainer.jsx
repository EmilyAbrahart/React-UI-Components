import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer({link}) {
  return (
    <a href={link}>
    <div className="cardContainer">
      <CardBanner
        source="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        alt="ReactJS"
      />
      <CardContent cardHeading="Get started with React" cardText="React makes it painless to create interactive UIs. Design simple views for each state in your application."
      cardLink={link} />

    </div>
    </a>
  );
}

export default CardContainer;