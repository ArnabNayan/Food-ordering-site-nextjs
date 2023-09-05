
import Image from 'next/image';
import React from 'react';

const GetOrder = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between h-screen md:gap-40 bg-fuchsia-50 md:h-[80vh]'>
            <div data-aos="zoom-in"duration="2000" className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        
             <h1 className='font-bold text-black text-2xl md:text-6xl'>Get Your Order 24/7 Right At Your Doorsteps</h1>
             <p className="text-slate-500 text-lg font-medium p-3">We try to make fastest delivery to our customer and try to give the best service to you.You can get fresh and tasty food made by our best cooker in a healthy environment because we also try to ensure our customers good healthy condition.</p>
        
        <button className="bg-yellow-500 text-white rounded-md py-3 px-6">Order Now</button>
            </div>
            <div className="flex-1 w-full relative md:h-full overflow-hidden">
               <Image data-aos="fade-up-left"duration="2000"  src="/order3.avif"alt=""width={494} height={100}  className="object-contain hover:scale-110"></Image>
            </div>
            
        </div>
    );
};

export default GetOrder;