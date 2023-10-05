import React, { useState , useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import OrderPage from "./OrderPage";
import MenuPage from "./MenuPage";
import LoginPage from "./LoginPage";
import ConfirmedBooking from "./ConfirmedBooking";

const hours = [];
for (let i=12; i<=21; i++){
    hours.push(i.toString().concat(":00"));
};

const Main = (hours) => {

const [availableTimes, setAvailableTimes] = useState(["14:00", "17:00", "20:00"]);

const updateTimes = () => {
  let randtimes = Math.floor(Math.random() * (hours.length-2)) + 2;
  let selectedhours = [];

  for (let j=1; j<=randtimes; j++){
      let temphour = hours[Math.floor(Math.random() * hours.length)];
      if (!(selectedhours.includes(temphour))) {
          selectedhours.push(temphour);
      }
  };
  setAvailableTimes(selectedhours);
};

const [resDetails, setResDetails] = useState({
  guests: '',
  resDate: '',
  resTime: '',
  occasion: 'none',
  notes: '',
  fullName: '',
  phone: '',
  email: '',
});

let navigate = useNavigate();

function submitForm() {
  let path = `/confirmed`;
  navigate(path);
};

  return (
    <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/menu" element={<MenuPage/>}></Route>
      <Route
        path="/reservations"
        element={<BookingPage
          availableTimes = {availableTimes}
          submitForm = {submitForm}
          updateTimes = {updateTimes}
          resDetails = {resDetails}
           />}>
          </Route>
      <Route path="/order" element={<OrderPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking resDetails = {resDetails} />}></Route>
    </Routes>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />