import React, { useEffect, useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [date, setDate] = useState(null);

    const appointmentData = {
        doctorName,
        doctorSpeciality,
        date,
        slot: selectedSlot
      };

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber });
        setName('');
        setPhoneNumber('');

        sessionStorage.setItem("appointment", JSON.stringify(appointmentData));
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date of Appointment:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="time">Book Time Slot:</label>
                <select id="time" onChange={(e) => handleSlotSelection(e.target.value)}>
                    <option value="time">Select a time slot</option>
                    <option value="8am">8am</option>
                    <option value="9am">9am</option>
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm
