
import getProduct from '@/utils/getProduct';
import Image from 'next/image';
import React from 'react';

const Product = async() => {
   const products=await getProduct();
    
    return(
      <div className=" overflow-x-scroll text-yellow-500 font-bold">
        {/* WRAPPER */}
        <div className="w-max flex ">
          {/* SINGLE ITEM */}
          {products.map((product) => (
            <div
              key={product._id}
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuscia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {/* IMAGE CONTAINER */}
              {product.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                  <Image src={product.img} alt="" fill className="object-contain" />
                </div>
              )}
              {/* TEXT CONTAINER */}
              <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                <p className="p-4 2xl:p-8">{product.desc}</p>
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-yellow-500 text-white p-2 rounded-md">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
       </div>
    );
};

export default Product;
