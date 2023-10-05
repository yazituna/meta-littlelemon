import React from "react";
import PageHeading from "./PageHeading";
import okIcon from "../assets/success.png";
import { Link } from "react-router-dom";

const ConfirmPage = (props) => {
  const heading = "Reservation confirmed!";
  const subtitle = "Enjoy your time in your favorite restaurant!";

  const text1 = "Thank you for making a reservation in our restaurant!";
  const text2 = "In order to confirm your reservation, please click on the confirmation link sent to your email address.";
  const text3 = "Unconfirmed reservations are not completed and can be reserved by other guests.";
  const text4 = "Thank you for your understanding.";

  const resDetails = props.resDetails;

  return (
    <>
      <PageHeading heading={heading} subtitle={subtitle}/>
      <section className="sectioncontainer">
        <div className="row">
            <img className="okIcon" src={okIcon} />
            <p className="text-left">{text1}</p>
            <p className="text-left vimportant">{text2}</p>
            <p className="text-left">{text3}</p>
            <p className="text-left">{text4}</p>
              <p>
                {resDetails.resDate}, {resDetails.resTime}, {resDetails.fullName}, {resDetails.guests}
                </p>
            <button className="buttonprimary">Confirm reservation</button>
        </div>
      </section>
    </>
  );
};

export default ConfirmPage;