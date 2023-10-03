import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import OrderPage from "./OrderPage";
import MenuPage from "./Menupage";
import LoginPage from "./LoginPage";

const Main = () => {

const navs = [
  {
    to: "/",
    page: "Homepage",
  },
  {
    to: "/about",
    page: "About",
  },
  {
    to: "/menu",
    page: "Menu",
  },
  {
    to: "/reservations",
    page: "Reservations",
  },
  {
    to: "/order",
    page: "Order Online",
  },
  {
    to: "/login",
    page: "Login",
  },
];

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
      <Header navs={navs} />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/menu" element={<MenuPage/>}></Route>
        <Route path="/reservations" element={<BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />}></Route>
        <Route path="/order" element={<OrderPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />