import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import guestIcon from "../assets/guests.png";
import dateIcon from "../assets/date.png";
import timeIcon from "../assets/time.png";
import occIcon from "../assets/occasion_2.png";
import noteIcon from "../assets/notes.png";
import contIcon from "../assets/contact.png"



const BookingForm = (props) => {
    const availableTimes = props.availableTimes;
    const submitForm = props.submitForm;
    const updateTimes = props.updateTimes;

    const yesterday = new Date(Date.now() -86400000);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          guests: '',
          resDate: '',
          resTime: '',
          occasion: 'none',
          notes: '',
          fullName: '',
          phone: '',
          email: '',
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
          guests: Yup.number()
            .typeError('Please enter a number.')
            .max(10, 'At most 10 guests can be selected. For more, please contact us.')
            .required('Guest number is required.'),
          resDate: Yup.date()
            .typeError('Please enter a valid date.')
            .min(yesterday, 'You cannot select a date earlier than today.')
            .required('Required field.'),
          resTime: Yup.string().required('Required field.'),
          fullName: Yup.string()
            .min(3, 'Your name must be at least 3 characters.')
            .max(80, 'Your name cannot exceed 80 characters.')
            .required('Required field.'),
          phone: Yup.number()
            .typeError("Please enter a proper phone number.")
            .positive("A phone number can't start with a minus.")
            .integer("A phone number can't include a decimal point.")
            .min(1000000, 'Invalid phone number.')
            .required('Required field.'),
          email: Yup.string()
            .email('Invalid email address.')
            .required('Required field.'),
        }),
      });

      return (
        <section className="sectioncontainer">
            <form className="form-style" onSubmit={formik.handleSubmit}>
                <div className="row-form">
                    <p>Please fill out the below form correctly to reserve your table in advance <br></br>in the best restaurant of the town!</p>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={guestIcon} alt="Guest icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            id="guests"
                            type="number"
                            placeholder="Number of guests"
                            min="1"
                            max="10"
                            {...formik.getFieldProps('guests')}
                            />
                        {formik.touched.guests && formik.errors.guests ? (<div>{formik.errors.guests}</div>) : null}
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
                            onChange={(e) => {
                                updateTimes();
                                formik.handleChange(e);
                              }}
                            onBlur={formik.handleBlur}
                            value={formik.values.resDate}
                            />
                        {formik.touched.resDate && formik.errors.resDate ? (<div>{formik.errors.resDate}</div>) : null}
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={timeIcon} alt="Time icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="resTime">Choose time</label>
                        <select
                            id="resTime "
                            {...formik.getFieldProps('resTime')}>
                            <option value='' disabled defaultValue>Choose time</option>
                            {availableTimes.map((availableTime) => (
                            <option key={availableTime} value={availableTime}>{availableTime}</option>
                            ))}
                        </select>
                        {formik.touched.resTime && formik.errors.resTime ? (<div>{formik.errors.resTime}</div>) : null}
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={occIcon} alt="Occasion icon" />
                    </div>
                    <div className="column-form-input">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            {...formik.getFieldProps('occasion')}>
                            <option value="none">None</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
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
                            maxLength="300"
                            rows="5"
                            columns="65"
                            {...formik.getFieldProps('notes')}
                            />
                    </div>

                </div>
                <div className="row-form">
                    <div className="column-form-icon">
                        <img src={contIcon} alt="Contact icon" />
                    </div>
                    <div className="column-form-input">
                    <p>We need your contact information to confirm your reservation.</p>
                        <label htmlFor="fullName" className="contact-label">Fullname</label>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Fullname"
                            maxLength="80"
                            {...formik.getFieldProps('fullName')}
                            />
                        {formik.touched.fullName && formik.errors.fullName ? (<div>{formik.errors.fullName}</div>) : null}

                        <label htmlFor="phone" className="contact-label">Phone number</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Phone number"
                            {...formik.getFieldProps('phone')}
                            />
                        {formik.touched.phone && formik.errors.phone ? (<div>{formik.errors.phone}</div>) : null}
                        <label htmlFor="email" className="contact-label">Email address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            {...formik.getFieldProps('email')}
                            />
                        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                    </div>
                </div>
                <div className="row-form">
                    <div className="column-form-icon"></div>
                    <div className="column-form-input">
                        <p id="termsc">By choosing to make your reservation, you agree to <Link>the terms and conditions</Link> of our services.</p>
                        <input type="submit" className="buttonprimary input-submit" value="Make your reservation" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default BookingForm;

/* {availableTimes.map((availableTime) => (
    <option key={availableTime} value={availableTime}>{availableTime}</option>
    ))} */