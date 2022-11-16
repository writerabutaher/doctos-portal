import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../../Components/Button/PrimaryButton';

const Appointment = () => {
    return (
        <>
            <div className="hero bg-cover bg-center bg-no-repeat my-40" style={{ backgroundImage: `url(${appointment})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae laudantium vel? Accusamus ullam error quisquam eaque officiis quasi iure laudantium aliquid? Aut fuga harum cupiditate repellendus voluptates a molestias?</p>
                        <PrimaryButton>Make Appointment</PrimaryButton>
                    </div>
                    <img src={doctor} className="w-full md:w-1/2 rounded-lg -mt-40 hidden lg:block" />
                </div>
            </div>
        </>
    );
};

export default Appointment;