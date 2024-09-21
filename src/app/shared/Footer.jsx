import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary mt-24 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white'>
                <div>
                    <h1 className='text-4xl font-bold text-white'>Tomato</h1>
                </div>
                <div>
                    <h1 className='mb-5'>Home</h1>
                    <div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contract</p>
                    </div>
                </div>
                <div>
                    <h1 className='mb-5'>Home</h1>
                    <div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contract</p>
                    </div>
                </div>
                <div>
                    <h1 className='mb-5'>Home</h1>
                    <div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contract</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-16 text-white'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Food Delivery App</p>
            </div>
        </div>
    );
};

export default Footer;