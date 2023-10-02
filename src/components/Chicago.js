import React from "react";
import MarioandAdrion from "../assets/marioandadrian.jpg";
import Chef from "../assets/chef.jpg";

const about = "Ut porttitor at mi at lobortis. Donec feugiat dui lorem, quis interdum velit molestie condimentum. Suspendisse non auctor magna, id pretium tellus. Etiam non ex id tortor egestas ultrices. Morbi egestas tincidunt massa, eu congue risus efficitur ut.";

const Chicago = () => {
  return (
    <>
      <section className="sectioncontainer">
        <div className="row">
          <div className="column">
            <h2 className="display-title text-color-primary-yellow">Little Lemon</h2>
            <h3 className="sub-title text-color-primary">Chicago</h3>
            <p>{about}</p>
          </div>
          <div className="column">
            <img src={MarioandAdrion} />
            <img src={Chef} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chicago;