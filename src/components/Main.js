import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import OrderPage from "./OrderPage";
import MenuPage from "./MenuPage";
import LoginPage from "./LoginPage";

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
    <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/menu" element={<MenuPage/>}></Route>
      <Route path="/reservations" element={<BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />}></Route>
      <Route path="/order" element={<OrderPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />