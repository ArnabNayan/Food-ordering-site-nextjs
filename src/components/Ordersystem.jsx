
import React from 'react';
import image12 from '../../public/temporary/cart.png'
import image13 from '../../public/temporary/card4.webp'
import image14 from '../../public/temporary/pickup.png'

import Image from 'next/image';
const Ordersystem = () => {
    return (
        <div className='bg-fuchsia-50 h-screen  md:h-[80vh]'>
            <h1 className=' text-yellow-500  text-2xl md:text-5xl text-center font-bold py-4'>How Will You Order?</h1> 
            <p className='text-slate-500 text-lg font-medium text-center'>Order Your Favourite Food and Enjoy Your Day With Our Nice And Tasty Food</p>
            <div className='flex flex-col md:flex-row md:justify-between py-5 mx-5'>
                <div>
                 <Image className='bg-yellow-500 rounded-full p-5 mx-auto' src={image12}alt=""width={100}height={20}></Image>
                 <h1 className='text-black font-bold text-2xl py-2 text-center'>1.Select Your Food</h1>
                 <p className='text-slate-500 font-medium text-lg  text-center'>Choose your food from our website</p>
                </div>
                <div className='mx-auto text-center'>
                <Image className='rounded-full bg-yellow-500 p-5 mx-auto' src={image13} alt=""width={100}height={100}></Image>
                <h1 className='text-black font-bold text-2xl py-2 text-center'>2.Pay With Card or Cash</h1>
                <p className='text-slate-500 font-medium text-lg  text-center'>You can pay with cash on delivery or credit card</p>
                </div>
                <div>
                <Image className='bg-yellow-500 rounded-full p-5 mx-auto' src={image14} alt=""width={100}height={20}></Image>
                <h1 className='text-black font-bold text-2xl py-2 text-center'>3.Pickup or Delivery</h1>
                <p className='text-slate-500 font-medium text-lg  text-center'>You can take your order from  our<br/> shop or online delivery</p>
                </div>
            </div>
            
            <button className="bg-yellow-500 text-white text-lg rounded-md py-3 px-12 text-center block mx-auto">Order Now</button>
         
        </div>
    );
};

export default Ordersystem;