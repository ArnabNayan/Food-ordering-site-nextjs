
import Image from 'next/image';
import React from 'react';

const Cooker = () => {
    return (
        <div className='mt-5'>
            <h1  data-aos="flip-left"duration="1000" className='text-yellow-500 text-2xl md:text-5xl text-center font-bold'>Meet Our Best Team</h1>

            <div data-aos="fade-up"duration="2000" className='flex flex-col md:flex-row items-center justify-center p-8 gap-12'>
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure><Image  className='hover:scale-110' src="/chef6.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold">Ravi Datta</h2>
   
  </div>
</div>
            
<div className="card w-72 bg-base-100 shadow-xl">
  <figure><Image  className='hover:scale-110' src="/chef2.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold ">Kim Johnson</h2>
   
  </div>
</div>
           
<div className="card w-72 bg-base-100 shadow-xl">
  <figure><Image className='hover:scale-110' src="/chef5.jpg"alt=""width={340}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold">Ayush Tiyegi</h2>
    
  </div>
</div>
<div className="card w-72 bg-base-100 shadow-xl">
  <figure><Image className='hover:scale-110' src="/chef10.jpg"alt=""width={390}height={100}></Image></figure>
  <div className="card-body">
    <h2 data-aos="zoom-in"duration="2000" className="card-title text-yellow-500 text-3xl font-bold">John Kong</h2>
    
  </div>
</div>

            </div>
        </div>
    );
};

export default Cooker;