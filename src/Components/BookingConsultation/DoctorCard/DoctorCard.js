import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import { v4 as uuidv4 } from 'uuid';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const storedData = JSON.parse(sessionStorage.getItem("appointment"));

    const isStoredData = storedData && storedData[0].doctorName === name;

    useEffect(() => {
        if (storedData) {
            setAppointments(storedData)
        }
    }, [])

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);

        if (isStoredData) {
            sessionStorage.removeItem("appointment");
        }

        setShowModal(false);
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            ...appointmentData,
        };
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        setShowModal(false);
    };

    return (
        <div className="doctor-card-container">
            <div className="doctor-card-details-container">
                <div className="doctor-card-profile-image-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#F2994A" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> </svg>
                </div>
                <div className="doctor-card-details">
                    <div className="doctor-card-detail-name">{name}</div>
                    <div className="doctor-card-detail-speciality">{speciality}</div>
                    <div className="doctor-card-detail-experience">{experience} years experience</div>
                    <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
                {/* for reference  */}
                {/* <div>
              <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
              </div> */}
            </div>

            <div className="doctor-card-options-container">
                <Popup
                    style={{ backgroundColor: '#FFFFFF' }}
                    trigger={
                        <button className={`book-appointment-btn ${isStoredData ? 'cancel-appointment' : 'normal-state'}`}>
                            {isStoredData ? (
                                <>
                                    <div>Cancel Appointment</div>
                                </>
                            ) : (
                                <>
                                    <div>Book Appointment</div>
                                    <div>No Booking Fee</div>
                                </>
                            )}
                        </button>
                    }
                    modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                >
                    {(close) => (
                        <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
                            <div>
                                <div className="doctor-card-profile-image-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> </svg>
                                </div>
                                <div className="doctor-card-details">
                                    <div className="doctor-card-detail-name">{name}</div>
                                    <div className="doctor-card-detail-speciality">{speciality}</div>
                                    <div className="doctor-card-detail-experience">{experience} years experience</div>
                                    <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                                </div>
                            </div>

                            {isStoredData ? (
                                <>
                                    <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                                    {appointments.map((appointment) => (
                                        <div className="bookedInfo" key={appointment.id}>
                                            <p>Name: {appointment.name}</p>
                                            <p>Phone Number: {appointment.phoneNumber}</p>
                                            <button style={{ backgroundColor: 'red', border: 'none' }} onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                            )}
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    );
};

export default DoctorCard;
