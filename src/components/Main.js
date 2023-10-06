import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutPage from "./AboutPage";
import OrderPage from "./OrderPage";
import MenuPage from "./MenuPage";
import LoginPage from "./LoginPage";
import ConfirmPage from "./ConfirmPage";
import ConfirmedBooking from "./ConfirmedBooking";

const hours = [];
for (let i=12; i<=21; i++){
    hours.push(i.toString().concat(":00"));
};

const Main = () => {

const [availableTimes, setAvailableTimes] = useState([]);

const updateTimes = () => {
  let randtimes = Math.floor(Math.random() * (hours.length-2)) + 2;
  let selectedhours = [];

  for (let j=1; j<=randtimes; j++){
      let temphour = hours[Math.floor(Math.random() * hours.length)];
      if (!(selectedhours.includes(temphour))) {
          selectedhours.push(temphour);
      }
  };

  selectedhours.sort();

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

const submitForm = (values) => {
  setResDetails({
    guests: values.guests,
    resDate: values.resDate,
    resTime: values.resTime,
    occasion: values.occasion,
    notes: values.notes,
    fullName: values.fullName,
    phone: values.phone,
    email: values.email,
  })
  let path = `/pconfirm`;
  navigate(path);
};

const goReservation = () => {
  let path = `/reservations`;
  navigate(path);
}

const goMenu = () => {
  let path = `/order`;
  navigate(path);
}

const goConfirmed = () => {
  let path = `/confirmed`;
  navigate(path);
}

  return (
    <Routes> 
      <Route path="/" element={<HomePage goReservation={goReservation} goMenu={goMenu} />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/menu" element={<MenuPage/>}></Route>
      <Route
        path="/reservations"
        element={<BookingPage
          availableTimes = {availableTimes}
          submitForm = {submitForm}
          updateTimes = {updateTimes}
           />}>
          </Route>
      <Route path="/order" element={<OrderPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/pconfirm" element={<ConfirmPage resDetails = {resDetails} goConfirmed={goConfirmed}/>}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
    </Routes>
  );
};

export default Main;

// <BookingPage avaiableTimes = {availableTimes} submitForm = {submitForm} />