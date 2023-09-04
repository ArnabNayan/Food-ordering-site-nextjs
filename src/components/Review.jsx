
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating ,Star} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {  useRef} from 'react';
import Image from 'next/image';

const Review = () => {
    

    const myStyles = {
        itemShapes: Star,
        activeFillColor:'orange',
        inactiveFillColor: 'lightgray'
      }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    if (progressCircle.current && progressContent.current) {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
    return (
      <div className='bg-black  md:bg-[url("/offerBg.png")]' data-aos="fade-up"
      data-aos-easing="linear"   data-aos-duration="1000">
        <h1 className='text-center text-yellow-500  font-bold'>Testimonials</h1>
        <h1 className='text-center font-bold text-white text-3xl md:text-5xl py-3'>Why Our Client Choose Us</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
          
        <SwiperSlide>
                 
                <div className='mx-24 my-16 flex flex-col items-center'data-aos="zoom-in"   data-aos-duration="500">
                  <div className='w-20 h-30'>
                
                  <Image className='rounded-full'src='/chef2.jpg' alt=''width={100}height={100} ></Image>
                  </div>
                 <h3 className="text-2xl font-semibold text-yellow-500">Linkon Dev </h3>
                 <p className="py-4 text-lg text-yellow-500">I ordered food from many food delevary company before but this company is best </p>
                <Rating
      style={{ maxWidth: 300 }}
      value={4.8}
      itemStyles={myStyles}
      readOnly
    />
    <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

                </div>
            </SwiperSlide>
        
        <SwiperSlide>
                 
                <div className='mx-24 my-16 flex flex-col items-center'data-aos="zoom-in"   data-aos-duration="500">
                  <div className='w-20 h-30'>
                
                  <Image className='rounded-full'src='/chef5.jpg' alt=''width={100}height={100} ></Image>
                  </div>
                 <h3 className="text-2xl font-semibold text-yellow-500">Johnson Christofer </h3>
                 <p className="py-4 text-lg text-yellow-500">Fastest delivary and Well tasty food increase my love for the company . </p>
                <Rating
      style={{ maxWidth: 300 }}
      value={4.3}
      itemStyles={myStyles}
      readOnly
    />
    <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

                </div>
            </SwiperSlide>
        <SwiperSlide>
                 
                <div className='mx-24 my-16 flex flex-col items-center'data-aos="zoom-in"   data-aos-duration="500">
                  <div className='w-20 h-30'>
                
                  <Image className='rounded-full'src='/chef8.jpg' alt=''width={100}height={100} ></Image>
                  </div>
                 <h3 className="text-2xl font-semibold text-yellow-500">Maria Bose </h3>
                 <p className="py-4 text-lg text-yellow-500">Very good customer support and well behaviour from the site of the company </p>
                <Rating
      style={{ maxWidth: 300 }}
      value={4.5}
      itemStyles={myStyles}
      readOnly
    />
    <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

                </div>
            </SwiperSlide>
        
       
       
      </Swiper>
      </div>
    );
};
export default Review;