import React from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';


const AvailableAppointment = ({ selected }) => {
    return (
        <div>
            <p>Available Appointments on {format(selected, 'PP')}</p>
            <AppointmentOptions
                selected={selected}
            ></AppointmentOptions>
        </div>
    );
};

export default AvailableAppointment;