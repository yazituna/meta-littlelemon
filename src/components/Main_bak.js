import React, { useState , useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import OrderPage from "./OrderPage";
import MenuPage from "./MenuPage";
import LoginPage from "./LoginPage";
import ConfirmedBooking from "./ConfirmedBooking";
import SampleJson from "../data/samplecalendar.json";

// useReducer
const initializeTimes = (availableTimes) => {
  const today = new Date(Date.now());

  const fetchData = () => {
    fetch(SampleJson)
    .then((response) => response.json())
    .then(data => initializeTimes(data));
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  return availableTimes[today];
};

const updateTimes = (state, action) => {};

const Main = () => {

const [state, dispatch] = useReducer(updateTimes, availableTimes, initializeTimes);

const [resDetails, setResDetails] = useState([]);

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
      <Route path="/confirmed" element={<ConfirmedBooking resDetails = {resDetails} />}></Route>
    </Routes>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />