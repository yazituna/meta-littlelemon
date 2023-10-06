import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

const HomePage = (props) => {
  return (
    <>
        <CallToAction goReservation={props.goReservation} />
        <Specials goMenu={props.goMenu}/>
        <CustomersSay />
        <Chicago />
    </>
  );
};

export default HomePage;
