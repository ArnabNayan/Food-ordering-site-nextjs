import Image from 'next/image';
import React from 'react';
import image5 from '../../public/temporary/p9.png'
const Specialmenu = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between min-h-screen bg-fuscia-50 md:bg-[url("/whitebg2.avif")] md:h-[100vh] '>
       
 
  <div  data-aos="fade-up-right"duration="2000" className="flex-1 w-full relative md:h-full mt-2 ">
    <Image  src={image5} alt=""width={550}height={100}  className="object-contain" />
  </div>

  <div  data-aos="fade-up-left"duration="3000" className="flex-1 flex flex-col text-center  p-6 ">
    <h1 className="text-yellow-500 text-xl font-bold md:text-4xl">What Makes Our Menu Special?</h1>
    <h1 className='text-black font-semibold text-xl text-left ms-11 py-4'>Pure Ingredients</h1>
    <p className="text-slate-500 text-lg text-left ms-11">
      Collecting Ingredients from fresh and clean side and this Ingredients is getting refreshed by our own research center
    </p>
    <h1 className='text-black font-semibold text-xl text-left ms-11 py-4'>Sustainability</h1>
    <p className="text-slate-500 text-lg text-left ms-11">
      Progressively simplify effective e-toilers and process-centric methods
      of empowerment. Quickly pontificate parallel.
    </p>
    <h1 className='text-black font-semibold text-xl text-left ms-11 py-4'>Environtalism</h1>
    <p className="text-slate-500 text-lg text-left ms-11">
     We try to ensure fresh and clean environment form our customer to make them happy and this is our promise
    </p>
    <h1 className='text-black font-semibold text-xl text-left ms-11 py-4'>Formula Transparency</h1>
    <p className="text-slate-500 text-lg text-left ms-11">
      We have our own research center and we research on the formula and make new formula with transparency
    </p>
    
  </div>

 
</div>

    );
};

export default Specialmenu;