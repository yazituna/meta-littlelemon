import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

const Main = () => {

// useReducer
const [availableTimes, setAvailableTimes] = useState([
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00"
]);

function submitForm(formData) {
  return <p>Hello!</p>
}

  return (
    <>
      <body>
        <Header />
        <Homepage />
        <Footer />
      </body>
    </>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />