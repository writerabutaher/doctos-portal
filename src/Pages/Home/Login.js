import React from 'react';
import bg from '../../assets/images/appointment.png'

const Login = () => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12" style={{ backgroundImage: `url(${bg})` }}>
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-primary text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Contact Us</h2>

                        <h1 className="max-w-screen-md text-white text-3xl text-center mx-auto">Stay Connected With Us</h1>
                    </div>

                    <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">


                        <div className="sm:col-span-2">
                            <label htmlFor="Name" className="inline-block text-white text-sm sm:text-base mb-2">Name</label>
                            <input name="Name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2" />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="inline-block text-white text-sm sm:text-base mb-2">Email</label>
                            <input name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2" />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="inline-block text-white text-sm sm:text-base mb-2">Message</label>
                            <textarea name="message" className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-primary rounded outline-none transition duration-100 px-3 py-2"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;