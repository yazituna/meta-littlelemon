import React from "react";

const CustomerCard = ({ name, rating, description, imageSrc }) => {
  return (
    <div className="customers-card column">
      <div className="row">
        <div className="column-cust-image">
          <img className="customer-image" src={imageSrc} alt={name} /> 
        </div>
        <div className="column-cust-info">
          <h3 className="card-title cust-info-text">{name}</h3>
          <p className="card-title cust-info-text">{rating}</p>
        </div>
      </div>
      <div className="row">
        <p className="boxed-text">{description}</p>
      </div>
    </div>
  );
};

export default CustomerCard;