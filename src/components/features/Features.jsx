import React from "react";
import Title from "../layout/Title";
import ServiceCard from "./ServiceCard"
import Data from '../../Data'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


function Features() {
  const [Services, setServices] = useState(Data.Services)
  return (
    <section
      id="features"
      className="w-full h-[800px] pt-20 pb-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What i do" />
      
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={12} // Space between slides
        // navigation // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination
        
        autoplay={{
          delay: 1000, // Delay between transitions in milliseconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          // Define breakpoints for responsive behavior
          640: {
            slidesPerView: 1, // 1 slide on small screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
          },
        }}
      >
       
       {Services.map((ser, index) => (
          <SwiperSlide key={index}>
            <ServiceCard service={ser} />
          </SwiperSlide>
        ))}

      </Swiper>
     
    </section>
  );
}

export default Features;
