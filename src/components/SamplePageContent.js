import React from "react";
import Chef from "../assets/chef.jpg";
import { Link } from "react-router-dom";

const text1 = "This is a placeholder text on a sample page. The focus of the assessment was on the Reservations page and on form design. That is why, these pages are left intentionally without specific content.";
const text2 = "Thank you for your understanding. Wish you a great evaluation!"


const PageHeading = () => {
  return (
    <>
      <section className="sectioncontainer">
        <div className="row">
            <div className="column">
                <p className="text-left highlight">{text1}</p>
                <p className="text-left">{text2}</p>
                <Link key="Reservations" to="/reservations" className='link-to-res'>Go to Reservations Page</Link>
            </div>
            <div className="column">
                <img className="chic-image" src={Chef} />
            </div>
        </div>
      </section>
    </>
  );
};

export default PageHeading;

