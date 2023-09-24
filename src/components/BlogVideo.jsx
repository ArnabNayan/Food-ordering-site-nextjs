import React from 'react';

const BlogVideo = () => {
    return (
        <div  className='min-h-screen bg-black md:bg-[url("/offerBg.png")] md:h-[120vh]'>
          <h1  data-aos="fade-up"duration="1000" className='text-yellow-500 text-2xl md:text-5xl text-center font-bold'>Our Foods Blog</h1> 
          <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/SLoRZTDljn8?si=0LX0kVuEdYS5Gpl6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/vGtXABUWGrs?si=XecfDW3f9-K2JT0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/vbrT0q8X6Kw?si=YgIoqWnWkFsTgiaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/2WEoW_ItjnA?si=UwakFozupqPfppQK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/KsTm8aXE8fA?si=xsjkkaRAbgcJ0XJm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div data-aos="zoom-in"duration="2000">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/MobnKrtdPqg?si=1jQtQpu2bg5v1Unw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          </div>
        </div>
    );
};

export default BlogVideo;