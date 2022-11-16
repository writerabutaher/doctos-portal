import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selected, setSelected }) => {
    return (
        <>
            <div className="hero bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        >
                        </DayPicker>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentBanner;