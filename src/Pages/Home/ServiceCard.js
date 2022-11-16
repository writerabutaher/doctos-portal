import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const ServiceCard = () => {

    const serviceInfo = [
        {
            id: 1,
            img: fluoride,
            h1: 'Fluoride Treatment',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur .'
        },
        {
            id: 2,
            img: cavity,
            h1: 'Cavity Filling',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur .'
        },
        {
            id: 3,
            img: whitening,
            h1: 'Teeth Whiting',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur .'
        },
    ]

    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-3'>
                {
                    serviceInfo.map(service => {
                        const { id, img, h1, text } = service;
                        return (
                            <div key={id} className={`card shadow-xl m-6`}>
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

export default ServiceCard;