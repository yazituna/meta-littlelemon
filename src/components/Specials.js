import React from "react";
import SpecialsCard from "./SpecialsCard";

const specialslist = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/greeksalad.jpg"),
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemondessert.jpg"),
  }
];

const Specials = () => {
  return (
    <>
      <section className="sectioncontainer">
        <div className="row">
          <div className="column">
            <h2 className="display-title text-color-dark">This week's specials!</h2>
          </div>
          <div className="column">
            <button className="buttonprimary">Online Menu</button>
          </div>
        </div>
        <div className="row">
          {specialslist.map((special) => (
              <SpecialsCard
                key={special.title}
                title={special.title}
                price={special.price}
                description={special.description}
                imageSrc={special.getImageSrc()}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Specials;