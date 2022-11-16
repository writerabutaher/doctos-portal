import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

const AppointmentOptions = ({ selected }) => {

    const [appointment, setAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {
                appointment.map(e => {
                    const { name, slots } = e;
                    return (
                        <div className="card shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                                <div className="card-actions justify-center">
                                    <label
                                        disabled={slots.length === 0}
                                        htmlFor="booking-modal"
                                        className="btn btn-primary text-white"
                                        onClick={() => setTreatment(e)}
                                    >Book Appointment</label>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                treatment &&
                <BookingModal
                    selectedDate={selected}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;