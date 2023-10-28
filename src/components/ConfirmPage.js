import React from "react";
import PageHeading from "./PageHeading";
import queIcon from "../assets/question.png";
import { Link } from "react-router-dom";

const ConfirmPage = (props) => {
  const heading = "Confirm your reservation!";
  const subtitle = "Please confirm the details to precede!";

  const resDetails = props.resDetails;

  return (
    <>
      <PageHeading heading={heading} subtitle={subtitle}/>
      <section className="sectioncontainer">
        <div className="row-confirm">
            <img className="queIcon" src={queIcon} alt="Question mark" />
            <p className="text-left text-confirm">Dear {resDetails.fullName},</p>
            <p className="text-left text-confirm">Please confirm your reservation details:</p>
            <table className="table-text confirm-table">
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="table-app">Reservation date: </td>
                  <td className="table-value">{resDetails.resDate}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-app">Reservation time:</td>
                  <td className="table-value">{resDetails.resTime}</td> 
                </tr>
                <tr className="table-row">
                  <td className="table-app">Number of guests:</td>
                  <td className="table-value">{resDetails.guests}</td> 
                </tr>
                <tr className="table-row">
                  <td className="table-app">Occasion:</td>
                  <td className="table-value">{resDetails.occasion}</td> 
                </tr>
                <tr className="table-row">
                  <td className="table-app">Notes:</td>
                  <td className="table-value">{resDetails.notes}</td> 
                </tr>
                <tr className="table-row">
                  <td className="table-app">Phone number:</td>
                  <td className="table-value">{resDetails.phone}</td> 
                </tr>
                <tr className="table-row">
                  <td className="table-app">Email address:</td>
                  <td className="table-value">{resDetails.email}</td> 
                </tr>
              </tbody>
          </table>
          <p id="termsc">By choosing to make your reservation, you agree to <Link>the terms and conditions</Link> of our services.</p>
          <Link key="Reservations" to="/reservations" className='confirm-linkres'>Back</Link>
          <button className="buttonprimary" onClick={props.goConfirmed}>Confirm reservation</button>
        </div>
      </section>
    </>
  );
};

export default ConfirmPage;