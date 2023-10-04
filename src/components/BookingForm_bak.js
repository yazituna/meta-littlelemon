import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookingForm = (props) => {
    const availableTimes = props.avaiableTimes;

    return (
        <section className="sectioncontainer">
            <form style={{display: "grid", maxWidth: "50%", gap: "20px"}}>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time ">
                    {availableTimes.map((availableTime) => (
                        <option>{availableTime}</option>
                    ))}
                </select>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <label htmlFor="notes">Leave a note</label>
                <textarea placeholder="Leave your note here..." id="notes" rows="5" columns="65" />
                <input type="submit" value="Make Your reservation" />
            </form>
        </section>
    );
};

export default BookingForm;