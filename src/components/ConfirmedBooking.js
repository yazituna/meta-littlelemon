import React from "react";
import PageHeading from "./PageHeading";
import okIcon from "../assets/success.png";
import madrian from "../assets/marioadrian2.jpg";
import { Link } from "react-router-dom";

const ConfirmedBooking = (props) => {
  const heading = "Reservation confirmed!";
  const subtitle = "Enjoy your time in your favorite restaurant!";

  const text1 = "Thank you for making a reservation in our restaurant!"
  const text2 = "In order to confirm your reservation, please click on the confirmation link sent to your email address."
  const text3 = "Unconfirmed reservations are not completed and can be reserved by other guests."
  const text4 = "Thank you for your understanding."

  return (
    <>
      <PageHeading heading={heading} subtitle={subtitle}/>
      <section className="sectioncontainer">
        <div className="row">
            <div className="column">
                <img className="okIcon" src={okIcon} />
                <p className="text-left">{text1}</p>
                <p className="text-left vimportant">{text2}</p>
                <p className="text-left">{text3}</p>
                <p className="text-left">{text4}</p>
                <Link key="HomePage" to="/" className='link-to-res'>Go Back to Homepage</Link>
            </div>
            <div className="column">
                <img className="chic-image" src={madrian} />
            </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmedBooking;