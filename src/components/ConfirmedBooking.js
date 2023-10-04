import React from "react";
import PageHeading from "./PageHeading";

const ConfirmedBooking = (props) => {
  const heading = "Reservation confirmed!";
  const subtitle = "Enjoy your time in your favorite restaurant";

  return (
    <>
      <PageHeading heading={heading} subtitle={subtitle}/>
    </>
  );
};

export default ConfirmedBooking;