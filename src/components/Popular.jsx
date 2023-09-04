
import Image from 'next/image';
import React from 'react';

import image16 from '../../public/temporary/p2.png'
import image17 from '../../public/temporary/p10.png'
import image18 from '../../public/temporary/p5.png'
import image19 from '../../public/temporary/p7.png'
const Popular = () => {
    return (
       <div className='  bg-black md:bg-[url("/offerBg.png")] '>
        <h1 className=' text-yellow-500  text-2xl md:text-5xl text-center font-bold py-4'>Popular Collection</h1>
        <div className='flex flex-col md:flex-row items-center justify-center p-8 gap-4'>
            <div className="card w-72  shadow-xl bg-black">
  <figure><Image className='hover:scale-110' src={image17}alt=""width={340}height={100}></Image></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title text-yellow-500 text-3xl font-bold ">Pizza</h2>
   
  </div>
</div>
            
<div className="card w-72 bg-black shadow-xl ">
  <figure><Image className='hover:scale-110' src={image16}alt=""width={340}height={100}></Image></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title text-yellow-500 text-3xl font-bold">Burger</h2>
   
  </div>
</div>
           

<div className="card w-72 bg-black shadow-xl">
  <figure><Image className='hover:scale-110' src={image18}alt=""width={340}height={100}></Image></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title text-yellow-500 text-3xl font-bold">Egg Burger</h2>
    
  </div>
</div>
<div className="card w-72 bg-black shadow-xl">
  <figure><Image className='hover:scale-110' src={image19}alt=""width={340}height={100}></Image></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title text-yellow-500 text-3xl font-bold">Pasta</h2>
    
  </div>
</div>

            </div>
       </div>

    );
};

export default Popular;