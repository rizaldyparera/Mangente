import Link from "next/link";
import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';

function Destinations () {
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    return (
        <>
           <div className="pt-32 px-4">
                <div className="flex items-center">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide flex-col flex items-center">
                                <img
                                    className="object-cover mb-[10px] w-[320px] h-[280px] sm:w-[360px] sm:h-[300px] md:w-[420px] md:h-[320px] lg:w-[512px] lg:h-[340px] xl:w-[580px] xl:h-[360px] rounded-[25px]"
                                    src="/Assets/ora.jpg"
                                    alt="apple watch photo"
                                />
                                <h1 className="font-bold font-inter text-sm mb-[5px]">Ora Beach Resort</h1>                          
                                <p className="text-sm"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Maluku Tengah</p>
                                <p className="font-inter font-semibold text-sm"><i className='bx bxs-star text-[#FFD600] relative top-[1px]' ></i>5.0 <span className="font-medium text-xs text-subtitle-color">(1K Reviews)</span></p>
                            </div>
                            <div className="swiper-slide flex flex-col items-center">
                                <img
                                    className="object-cover mb-[10px] w-[320px] h-[280px] sm:w-[360px] sm:h-[300px] md:w-[420px] md:h-[320px] lg:w-[512px] lg:h-[340px] xl:w-[580px] xl:h-[360px] rounded-[25px]"
                                    src="/Assets/liang.jpg"
                                    alt="apple watch photo"
                                />
                                <h1 className="font-bold font-inter text-sm mb-[5px]">Liang Beach</h1>                          
                                <p className="text-sm"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Maluku Tengah</p>
                                <p className="font-inter font-semibold text-sm"><i className='bx bxs-star text-[#FFD600] relative top-[1px]' ></i>5.0 <span className="font-medium text-xs text-subtitle-color">(1K Reviews)</span></p>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                        <div className="flex-col text-right w-full lg:w-11/12 xl:w-full px-2">
                            <h1 className="font-bold font-inter text-2xl sm:text-3xl md:text-4xl xl:text-[42px] text-right mb-[10px]">Explore <span className="text-red-color">Top Destinations</span></h1>
                            <p className="font-medium font-inter text-subtitle-color text-sm sm:text-base md:text-lg lg:text-xl text-right mb-5">Enjoy the best vacation experience of your life</p>
                            <Link href="#">  
                                <a  className="bg-primary-color hover:bg-secondary-color text-sm font-inter text-center text-white-color py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium">View All</a>                                                        
                            </Link>
                        </div>
                </div>
           </div>
             
           
        </>
    )
}
export default Destinations;