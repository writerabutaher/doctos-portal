import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../../Components/Button/PrimaryButton';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content md:flex-row flex-col">
                    <img src={treatment} className='md:w-2/5 rounded-lg shadow-2xl' />
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae laudantium vel? Accusamus ullam error quisquam eaque officiis quasi iure laudantium aliquid? Aut fuga harum cupiditate repellendus voluptates a molestias?</p>
                        <PrimaryButton>Get Stated</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;