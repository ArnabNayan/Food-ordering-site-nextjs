import React from 'react';
import image8 from '../../public/temporary/menubanner.png'
import Image from 'next/image';
const AboutSlider = () => {
    return (
        <div data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"  className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
               <div className="flex-1 flex items-center justify-center flex-col gap-4 text-yellow-500 font-bold">
                 <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-7xl ">Nothing to worry about with FoodieZone</h1>
                 <button className="bg-yellow-500 text-white py-4 px-8">Stay With Us</button>
               </div>
            <div className="w-full flex-1 relative">
            <Image  src={image8}alt=""fill
             className="object-cover"></Image>
            </div>
          </div>
    );
};

export default AboutSlider;