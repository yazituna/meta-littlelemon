import React from "react";
import CustomerCard from "./CustomerCard";

const reviews = [
  {
    name: "John Doe",
    rating: "5⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus augue at velit convallis tempor.",
    getImageSrc: () => require("../assets/customer1.jpg"),
  },
  {
    name: "Jane Doe",
    rating: "5⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus augue at velit convallis tempor.",
    getImageSrc: () => require("../assets/customer2.jpg"),
  },
  {
    name: "Michael Doe",
    rating: "5⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus augue at velit convallis tempor.",
    getImageSrc: () => require("../assets/customer3.jpg"),
  },
  {
    name: "Elly Doe",
    rating: "5⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus augue at velit convallis tempor.",
    getImageSrc: () => require("../assets/customer4.jpg"),
  },

];

const CustomersSay = () => {
  return (
    <>
      <section className="sectioncontainer bg-gray">
        <div className="row">
          <h2 className="section-title section-title-center">Testimonials</h2>
        </div>
        <div className="testimonial-container">
          {reviews.map((review) => (
              <CustomerCard
                key={review.name}
                name={review.name}
                rating={review.rating}
                description={review.description}
                imageSrc={review.getImageSrc()}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default CustomersSay;