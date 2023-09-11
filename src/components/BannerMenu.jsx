import React from 'react';
import image from '../../public/temporary/menu.png'
import Image from 'next/image';
import Bestpizza from './Bestpizza';
const BannerMenu = () => {
    return (
        <div className='flex-1 '>
           {/* <Image src={image}alt=""width={1400} height={100} ></Image>  */}
           <Image 
    src={image} 
    alt=""
    className="w-full h-full object-cover" 
    style={{objectFit: 'cover'}}
  />
     <Bestpizza/>
        </div>
    );
};

export default BannerMenu;