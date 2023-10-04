import React from "react";
import MarioandAdrion from "../assets/marioandadrian.jpg";

const Chicago = () => {
  const about = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.";
  return (
    <>
      <section className="sectioncontainer">
        <div className="row">
          <div className="column">
            <h2 className="display-title text-color-primary-yellow">Little Lemon</h2>
            <h3 className="sub-title text-color-primary">Chicago</h3>
            <p className="text-left">{about}</p>
          </div>
          <div className="column">
            <img className="chic-image" src={MarioandAdrion} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chicago;