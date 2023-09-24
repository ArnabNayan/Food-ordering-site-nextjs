import Image from 'next/image';
import React from 'react';
import image8 from '../../public/temporary/foodblog.jpg'
const BlogBanner = () => {
    return (
        <div data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"  className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 overflow-hidden">
               <div className="flex-1 flex items-center justify-center flex-col gap-4 text-yellow-500 font-bold">
                 <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-7xl ">Current News About Us</h1>
                 
               </div>
            <div className="w-full flex-1 relative">
            <Image  src={image8}alt=""fill
             className="object-cover"></Image>
            </div>
          </div>
    );
};

export default BlogBanner;