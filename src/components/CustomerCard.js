import React from "react";

const CustomerCard = ({ name, rating, description, imageSrc }) => {
  return (
    <div className="customerscard column">
      <div className="row">
        <div className="column">
          <img className="customer-image" src={imageSrc} alt={name} /> 
        </div>
        <div className="column">
          <h3 className="card-title">{name}</h3>
          <p className="card-title">{rating}</p>
        </div>
      </div>
      <div className="row">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CustomerCard;