import Image from 'next/image';
import React from 'react';

const Parallex = () => {
    return (
        <div className='parallex-item bg-fixed text-white p-32'>
            <div className='space-y-6'>
                <h2 className='text-center text-lg text-red-600 '><em>Website for Restaurant and Cafe</em></h2>
                <h1 className='uppercase text-center text-4xl font-bold'>easy order in 3 steps</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-20 container mx-auto'>
                <div className='flex relative flex-col justify-center items-center text-center space-y-5'>
                    <Image src='/assets/setp-img1.png' alt='' height={100} width={140} />
                    <h2 className='text-xl font-bold'>Explore Restaurants</h2>
                    <p className='leading-8'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</p>
                    <p className='absolute h-10 w-10 -top-10 rounded-full bg-red-500 text-white flex justify-center items-center'>1</p>
                </div>
                <div className='flex relative flex-col justify-center items-center text-center space-y-5'>
                    <Image src='/assets/setp-img2.png' alt='' height={100} width={140} />
                    <h2 className='text-xl font-bold'>Choose a Tasty Dish</h2>
                    <p className='leading-8'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</p>
                    <p className='absolute h-10 w-10 -top-10 rounded-full bg-red-500 text-white flex justify-center items-center'>2</p>
                </div>
                <div className='flex relative flex-col justify-center items-center text-center space-y-5'>
                    <Image src='/assets/setp-img3.png' alt='' height={100} width={140} />
                    <h2 className='text-xl font-bold'>Follow The Status</h2>
                    <p className='leading-8'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</p>
                    <p className='absolute h-10 w-10 -top-10 rounded-full bg-red-500 text-white flex justify-center items-center'>3</p>
                </div>
            </div>
        </div>
    );
};

export default Parallex;