import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
                setSelectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;