"use client"
import React from 'react';
import Countdown from 'react-countdown';
const endingDate=new Date("2023-9-21")

const Contdown = () => {
    return (
      <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate} />
    );
};

export default Contdown;