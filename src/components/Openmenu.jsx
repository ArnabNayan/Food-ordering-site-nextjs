"use client";
import image1 from "../../public/temporary/phone.png"
import image2 from "../../public/temporary/cart.png"
import Image from 'next/image';
import React, { useState } from 'react';
import image from '../../public/temporary/menu1.png'
import image4 from '../../public/temporary/close.png';
import Link from 'next/link';
const Openmenu = () => {
    const[open,setOpen]=useState(false)
    return (
        <div>
           {
            !open ? (<Image src={image}alt=""width={20}height={20} onClick={()=>setOpen(true)}></Image>) 
            : (<Image src={image4}alt=""width={20}height={20} onClick={()=>setOpen(false)}></Image> )
           }
         {
            open&&   <div className="absolute left-0 top-24 bg-yellow-500 text-white flex items-center justify-center gap-3 text-2xl flex-col w-full h-[calc(100vh-6rem)] z-10"onClick={()=>setOpen(false)} >
            <div className="flex flex-col"onClick={()=>setOpen(false)}>
                 <Image className="bg-yellow-500 p-2 rounded-full ms-14" width={40} height={40} src={image1} alt=""></Image>
                 <div className="ms-3">
                     <h1 className="font-bold">0198736262</h1>
                 </div>
            </div> 
        <Link className="font-bold " href="/Homepage">Homepage</Link>
         <Link className="font-bold " href="/Products">Products</Link>
         <Link className="font-bold " href="/Menu">Menu</Link>
         {/* <h1 className="text-yellow-500  lg:text-5xl font-extrabold flex">FoodieZone</h1> */}
         <Link className="font-bold " href="/AboutUs">AboutUs</Link>
         <Link className="font-bold " href="/Blog">Blog</Link>
         <Link className="font-bold " href="/Contacts">Contact</Link>
         <Image className="bg-yellow-500 px-2 py-2 rounded-full" src={image2}alt=""width={40}height={40}></Image>
        </div>
         }
       </div>
        
    );
};

export default Openmenu;