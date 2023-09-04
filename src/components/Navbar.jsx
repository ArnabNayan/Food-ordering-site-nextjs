
import Image from "next/image";
import image1 from "../../public/temporary/phone.png"
import image2 from "../../public/temporary/cart.png"

import Link from "next/link";
import Openmenu from "./Openmenu";
const Navbar = () => {
    return (
        <div className="h-12 p-4 flex items-center justify-between lg:px-4 border-b-2 border-b-yellow-500  md:h-16">
            <div className="hidden md:flex justify-between gap-4">
            <div className="flex">
                 <Image className="bg-yellow-500 p-2 rounded-full" width={40} height={40} src={image1} alt=""></Image>
                 <div className="ms-3">
                    <h1 className="text-black text-xs uppercase font-bold">Order Now</h1>
                    <h1 className="text-black text-sm font-bold">0198736262</h1>
                 </div>
            </div>
            </div>
            <div className="hidden md:flex justify-center gap-8 lg:ml-l0">
          <Link className="font-bold text-base" href="/Homepage">Homepage</Link>
         <Link className="font-bold text-base" href="/Products">Products</Link>
         <Link className="font-bold text-base" href="/Menu">Menu</Link>
          </div>
          <h1 className="text-yellow-500 md:text-center text-2xl md:text-5xl font-extrabold lg:-ml-20">FoodieZone</h1>
            <div className="hidden md:flex justify-center gap-8 lg:-ml-16">
            <Link className="font-bold text-base" href="/Events">Events</Link>
         <Link className="font-bold text-base" href="/Blog">Blog</Link>
         <Link className="font-bold text-base" href="/Contacts">Contact</Link>
          </div>
       
       <div className="md:hidden">
        <Openmenu/>
        </div> 
      
       <div className="hidden md:flex">
        <Image className="bg-yellow-500 px-2 py-2 rounded-full" src={image2}alt=""width={40}height={40}></Image>
        
       </div> 
        
       
        </div> 
    );
};

export default Navbar;