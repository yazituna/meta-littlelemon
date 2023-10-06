import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import CallToAction from './components/CallToAction';
import BookingForm from "./components/BookingForm";
import ConfirmPage from './components/ConfirmPage';


test('Renders the BookingForm heading', () => {
  render(<CallToAction />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

describe("Booking Form", () => {
  test("User is able to submit the form if required info is provided", () => {
    const guests = "7";
    const resDate = "2023-10-20";
    const resTime = "14:00";
    const occasion = "none";
    const fullName = "John Doe";
    const phone = "80123456789";
    const email = "doejohn@doe.com"

    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} updateTimes={()=>null} />);

    // You have to write the rest of the test below to make the assertion pass

    const guestInput = screen.getByLabelText(/Number of guests/);
    const dateInput = screen.getByLabelText(/Choose date/);
    const timeInput = screen.getByLabelText(/Choose time/);
    const occInput = screen.getByLabelText(/Occasion/);
    const nameInput = screen.getByLabelText(/Fullname/);
    const phoneInput = screen.getByLabelText(/Phone number/);
    const emailInput = screen.getByLabelText(/Email address/);
    const submitButton = screen.getByRole("button");

    waitFor( async () => {
      fireEvent.change(guestInput, { target: { value: guests } });
     });

    waitFor( async () => {
      fireEvent.change(dateInput, { target: { value: resDate } });
     });

    waitFor( async () => {
      fireEvent.change(timeInput, { target: { value: resTime } });
     });

    waitFor( async () => {
      fireEvent.change(occInput, { target: { value: occasion } });
     });

    waitFor( async () => {
      fireEvent.change(nameInput, { target: { value: fullName } });
     });

    waitFor( async () => {
      fireEvent.change(phoneInput, { target: { value: phone } });
     });

    waitFor( async () => {
      fireEvent.change(emailInput, { target: { value: email } });
     });

    waitFor( async () => {
      fireEvent.click(submitButton);
     });

    waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      guests,
      resDate,
      resTime,
      occasion,
      fullName,
      phone,
      email,
    }));

  });
});

const resDetails = {
  guests: "7",
  resDate: "2023-10-20",
  resTime: "14:00",
  occasion: "none",
  fullName: "John Doe",
  phone: "80123456789",
  email: "doejohn@doe.com",
}

test('Renders the Confirmation page correctly', () => {
  render(<MemoryRouter><ConfirmPage resDetails={{id: 1}} /></MemoryRouter>);
  const headingElement = screen.getByText("Confirm reservation");
  expect(headingElement).toBeInTheDocument();
})