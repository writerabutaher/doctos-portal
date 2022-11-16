import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {

    const [selected, setSelected] = useState(new Date);

    return (
        <>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            ></AppointmentBanner>
            <AvailableAppointment
                selected={selected}
            ></AvailableAppointment>
        </>
    );
};

export default Appointment;