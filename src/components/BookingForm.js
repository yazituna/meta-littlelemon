import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import guestIcon from "../assets/guests.png";
import dateIcon from "../assets/date.png";
import timeIcon from "../assets/time.png";
import occIcon from "../assets/occasion_2.png";
import noteIcon from "../assets/notes.png";

const BookingForm = (props) => {
    const availableTimes = props.avaiableTimes;

    const {isLoading, response, submit} = useSubmit();

    const formik = useFormik({
        initialValues: {
          guests: '',
          resDate: '',
          resTime: '',
          occasion: 'None',
          notes: '',
        },
        onSubmit: (values) => {
          submit('https://yazituna.com', values)
        },
        validationSchema: Yup.object({
          firstName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          comment: Yup.string().min(25, 'Must be at least 25 characters!').required('Required'),
        }),
      });
      return (
        <section className="sectioncontainer">
            <form className="form-style" onSubmit={formik.handleSubmit}>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={guestIcon} alt="Guest icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            id="guests"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            />
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={dateIcon} alt="Date icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="resDate">Choose date</label>
                        <input
                            id="resDate"
                            type="date"
                            />
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={timeIcon} alt="Time icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="resTime">Choose time</label>
                        <select id="resTime ">
                            {availableTimes.map((availableTime) => (
                                <option key={availableTime}>{availableTime}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={occIcon} alt="Occasion icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion">
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={noteIcon} alt="Notes icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="notes">Leave a note</label>
                        <textarea
                            id="notes"
                            placeholder="Leave your note here..."
                            rows="5"
                            columns="65" />
                    </div>
                </div>
                <div className="row-form">
                    <input type="submit" className="buttonprimary input-submit" value="Make Your reservation" />
                </div>
            </form>
        </section>
    );
};

export default BookingForm;