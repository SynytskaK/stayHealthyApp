// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import './Notification.css'

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
const [phone, setPhone] = useState(null);
const [date, setDate] = useState(null);
const [time, setTime] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('name');
    const storedPhone = sessionStorage.getItem('phone');

    // const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const doctorName = (sessionStorage.getItem('doctorName'));
    const doctorSpeciality = (sessionStorage.getItem('doctorSpeciality'));
    const doctorDate = (sessionStorage.getItem('date'));
    const doctorTime = (sessionStorage.getItem('slot'));

    if(doctorDate) {
        setDate(doctorDate)
    }
    if(doctorTime) {
        setTime(doctorTime)
    }
    console.log('doctorName', doctorName)
    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if(storedPhone) {
        setPhone(storedPhone)
    }
    // Set doctorData state if storedDoctorData exists
    if (doctorName) {
      setDoctorData(doctorName);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (doctorSpeciality) {
        setAppointmentData(doctorSpeciality);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  console.log('isLoggedIn',isLoggedIn)
  console.log('appointmentData',appointmentData)

  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <strong>Doctor:</strong> {doctorData}
              </p>
              <p className="appointment-card__message">
                <strong>Speciality:</strong> {appointmentData}
              </p>
              <p className="appointment-card__message">
                <strong>Name:</strong> {username}
              </p>
              <p className="appointment-card__message">
                <strong>Phone Number:</strong> {phone}
              </p>
              <p className="appointment-card__message">
                <strong>Date of Appointment:</strong> {date}
              </p>
              <p className="appointment-card__message">
                <strong>Time Slot:</strong> {time}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;