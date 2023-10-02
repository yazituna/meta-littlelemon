import React from "react";
import RestaurantFood from "../assets/restauranfood.jpg";

const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const CallToAction = () => {
  return (
    <>
      <section className="sectioncontainer bg-green">
        <div className="row">
          <div className="column">
            <h1 className="display-title text-color-primary-yellow">Little Lemon</h1>
            <h3 className="sub-title text-color-light">Chicago</h3>
            <p className="lead-text text-color-light text-left">{intro}</p>
            <button className="buttonprimary">Reserve a table</button>
          </div>
          <div className="column-right">
            <img id="flag-image" src={RestaurantFood} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;