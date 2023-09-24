import React from 'react';

const Footer = () => {
    return (
        <>
   

<footer  className="footer md:flex flex-col justify-center items-center md:flex-row md:justify-between h-auto md:h-[40vh] bg-black text-white p-4 md:p-20">
  <div data-aos="fade-up"duration="2000" className="text-center md:text-left mb-4 md:mb-0">
    <span className="font-bold text-yellow-500">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div data-aos="fade-up"duration="2000" className="text-center md:text-left mb-4 md:mb-0">
    <span className="font-bold text-yellow-500">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div data-aos="fade-up"duration="2000" className="text-center md:text-left mb-4 md:mb-0">
    <span className="font-bold text-yellow-500">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
    <a className="link link-hover">Security policy</a>
  </div> 
  <div data-aos="fade-up"duration="2000" className="text-center md:text-left mb-4 md:mb-0">
    <span className="font-bold text-yellow-500">Social</span> 
    <a className="link link-hover">Twitter</a> 
    <a className="link link-hover">Instagram</a> 
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Github</a>
  </div> 
  <div data-aos="fade-up"duration="2000" className="text-center md:text-left">
    <span className="font-bold text-yellow-500">Apps</span> 
    <a className="link link-hover">Mac</a> 
    <a className="link link-hover">Windows</a> 
    <a className="link link-hover">iPhone</a> 
    <a className="link link-hover">Android</a>
  </div>
</footer>

<footer  className="footer md:flex flex-col items-center justify-center  bg-black text-white p-4 ">
  <div data-aos="fade-up"duration="2000">
    <h1 className='text-4xl text-yellow-500 font-bold text-center mx-auto'>FoodieZone</h1>
    <p className='text-yellow-500 font-medium text-sm py-2'>Copyright © 2023 - All rights reserved by FoodieZone Company Ltd.</p>


    <h1 className='text-white font-medium text-base text-center mx-auto'>Contact with Us</h1>
    <div className="grid grid-cols-3 gap-4 justify-center md:justify-end text-center mx-auto">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> 
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>

  </div> 
  <div className="text-center md:text-left mx-auto">
    
  </div>
  <div className="text-center md:mt-0 mx-auto">
    {/* <h1 className='text-white font-medium text-base'>Contact with Us</h1>
    <div className="grid grid-cols-3 gap-4 justify-center md:justify-end">
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> 
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-yellow-500">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div> */}
  </div>
</footer>

        </>
    );
};

export default Footer;