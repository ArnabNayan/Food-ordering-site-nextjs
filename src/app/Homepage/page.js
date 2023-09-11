// "use client"

import Slider from "@/components/Slider";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import image8 from '../../../public/temporary/p16.png'
// import Swiper from 'react-id-swiper';
import Offer from "@/components/Offer";
import GetOrder from "@/components/GetOrder";
import Cooker from "@/components/Cooker";
import Ordersystem from "@/components/Ordersystem";
import Popular from "@/components/Popular";
import Specialmenu from "@/components/Specialmenu";
import Product from "@/components/Product";
import Review from "@/components/Review";


const Homepage = () => {
     return (

 
 <div className="overflow-x-hidden overflow-y-hidden">
  <Slider/>
  <Product/>
  <Offer/>
  <Cooker/>
  <GetOrder/>
  <Popular/>
  <Ordersystem/>
  <Review/>
  <Specialmenu/>
 </div>
 

        
    );
};

export default Homepage;