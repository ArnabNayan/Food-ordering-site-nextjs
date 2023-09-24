import Image from 'next/image';
import React from 'react';

const AboutMeet = () => {
    return (
        <div className='min-h-screen bg-fuchsia-50 md:h-[100vh] px-3'>
           <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-3 md:gap-20 py-5'>
            <div>
           <h1  data-aos="fade-up-left"duration="1000" className='text-yellow-500 text-2xl md:text-4xl text-center font-bold'>Meet The Team of FoodieZone</h1>
            </div> 
            <div>
            <p  data-aos="fade-up-right"duration="1000" className="text-slate-500 text-lg font-medium">They are our best chef.They are well trained and famous chef.Our<br/> first priority is to make customer happy with our food.You can <br/>order your favourite food anytime from our site.Our chef is one of <br/> the best chef in the town</p>
            </div>
            </div>

            <div data-aos="fade-up"duration="2000" className='flex flex-col md:flex-row items-center justify-center  mt-3 '>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image  className='hover:scale-110 ' src="/chef6.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold">Ravi Datta</h2>
   
  </div>
</div>
            
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image  className='hover:scale-110' src="/chef2.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold ">Kim Johnson</h2>
   
  </div>
</div>
           
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image className='hover:scale-110' src="/chef5.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold">Ayush Tiyegi</h2>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default AboutMeet;