import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <h1>Book now!</h1>
      <BookingForm avaiableTimes = {props.avaiableTimes} submitForm = {props.submitForm}/>
    </>
  );
};

export default BookingPage;