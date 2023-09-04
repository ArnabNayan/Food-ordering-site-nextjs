"use client"
import React, { useRef, useState } from 'react';
import image8 from '../../public/temporary/p16.png'
import image9 from '../../public/temporary/p17.png'
import image10 from '../../public/temporary/p18.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
const Slider = () => {
  return (
    <>
    <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="flex-1 flex items-center justify-center flex-col gap-4 text-yellow-500 font-bold">
              <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-7xl ">we deliver your order wherever you are in Need</h1>
              <button className="bg-yellow-500 text-white py-4 px-8">Order Now</button>
            </div>
         <div className="w-full flex-1 relative">
         <Image src={image8}alt=""fill
          className="object-cover"></Image>
         </div>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="flex-1 flex items-center justify-center flex-col gap-4 text-yellow-500 font-bold">
              <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-7xl ">always fresh & always crispy & always hot</h1>
              <button className="bg-yellow-500 text-white py-4 px-8">Order Now</button>
            </div>
         <div className="w-full flex-1 relative">
         <Image src={image9}alt=""fill
          className="object-cover"></Image>
         </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="flex-1 flex items-center justify-center flex-col gap-4 text-yellow-500 font-bold">
              <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-7xl ">the best pizza for you to share with your family</h1>
              <button className="bg-yellow-500 text-white py-4 px-8">Order Now</button>
            </div>
         <div className="w-full flex-1 relative">
         <Image src={image10}alt=""fill
          className="object-cover"></Image>
         </div>
       </div>
      </SwiperSlide>
    </Swiper>
  </>
  );
};

export default Slider;