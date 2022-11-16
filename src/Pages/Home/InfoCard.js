import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoCard = () => {

    const CardInfo = [
        {
            id: 1,
            img: clock,
            h1: 'Opening Hours',
            text: '24 Active Hours Open',
            bg: 'bg-gradient-to-l from-primary to-secondary'
        },
        {
            id: 2,
            img: marker,
            h1: 'Visit Our Location',
            text: 'Brooklyn, United States Of America',
            bg: 'bg-neutral'
        },
        {
            id: 3,
            img: phone,
            h1: 'Contact Us Now',
            text: '+88 097487 78432',
            bg: 'bg-gradient-to-l from-primary to-secondary'
        },
    ]

    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-3'>
                {
                    CardInfo.map(card => {
                        const { id, img, h1, text, bg } = card
                        return (
                            <div key={id} className={`card lg:card-side shadow-xl text-white m-6 ${bg}`}>
                                <figure className='p-6'><img src={img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{h1}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InfoCard;