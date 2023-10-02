import React from "react";

const SpecialsCard = ({ title, price, description, imageSrc }) => {
  return (
    <div className="specialscard column">
      <div className="row">
        <img src={imageSrc} alt={title} className="specials-image" /> 
      </div>
      <div className="row">
        <div className="column">
          <h3 className="special-title">{title}</h3>
        </div>
        <div className="column">
          <p className="highlight text-color-secondary price">{price}</p>
        </div>
      </div>
      <div className="row-spaced">
        <p className="boxed-text">{description}</p>
        <a className="order-link">Order a delivery</a>
      </div>
    </div>
  );
};

export default SpecialsCard;