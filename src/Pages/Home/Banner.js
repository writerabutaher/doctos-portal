import React from 'react';
import chair from '../../assets/images/chair.png';
import bgBanner from "../../assets/images/bg.png";
import PrimaryButton from '../../Components/Button/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae laudantium vel? Accusamus ullam error quisquam eaque officiis quasi iure laudantium aliquid? Aut fuga harum cupiditate repellendus voluptates a molestias?</p>
                    <PrimaryButton>Get Stated</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;