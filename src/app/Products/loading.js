import Image from 'next/image';
import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  let isLoading = true;

  // Simulate a 3-second loading delay
  setTimeout(() => {
    isLoading = false;
  }, 3000);
    return (
        <SkeletonTheme baseColor='yellow' highlightColor="#B2BEB5">
            <div className=" overflow-x-scroll text-yellow-500 font-bold">
          
          {/* WRAPPER */}
          <div className="w-max flex ">
            {/* SINGLE ITEM */}
            {[...Array(3).keys()].map((it) => (
              <div
                key={it}
                className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuscia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
              >
                {/* IMAGE CONTAINER */}
              
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
             {
              isLoading&&(
                <Skeleton circle height={280}width={300}  />
              )}:{
                !isLoading&&(
                  <Image src={product.img} alt="" fill className="object-contain" />
                )
              }
                 
            
              </div>
                
                {/* TEXT CONTAINER */}
                <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <h1>
                    {
                      isLoading?(
                        <Skeleton width={200} height={35}/>
                      ):(<h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>)
                    }
                     </h1>
                  <p>{
                    isLoading?(
                      <Skeleton width={400} height={100}/>
                    ):(<p className="p-4 2xl:p-8">{product.desc}</p>)
                    }</p>
                  <span>
                     {
                      isLoading?(<Skeleton width={100}/>):( <span className="text-xl font-bold">${product.price}</span>)
                     }
                  </span>
                  <button>
                 {
                  isLoading?( <Skeleton width={50}/>):(<button className="bg-yellow-500 text-white p-2 rounded-md uppercase">
                  Add to Cart
                  </button>)
                 }
                  </button>
                </div>
              </div>
            ))}
          </div>
         </div> 
        </SkeletonTheme>
    );
};

export default loading;