import React from "react";
import BookingForm from "./BookingForm";
import PageHeading from "./PageHeading";

const BookingPage = (props) => {
  const heading = "Reserve a table";
  const subtitle = "Have your place in your favorite restaurant";

  return (
    <>
      <PageHeading heading={heading} subtitle={subtitle}/>
      <BookingForm avaiableTimes = {props.avaiableTimes} submitForm = {props.submitForm}/>
    </>
  );
};

export default BookingPage;