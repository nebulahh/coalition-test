'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

      const slides = [
    {
      url: '/icy-mountain1.jpg',
    },
    {
      url: '/icy-mountain2.jpg',
    },
    {
      url: '/icy-mountain1.jpg',
    },

    {
      url: '/icy-mountain2.jpg',
    }
  ];

  return (
    <section className="bg-[#38455e] pt-4 md:pt-0 opacity-90">
      { width <= breakpoint
        ? <Swiper
            slidesPerView={1}
            centeredSlides={true}
            modules={[Pagination, A11y, Autoplay]}
            className="h-[14.5rem]"
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true
            }}>
          <SwiperSlide>
            <div className="flex w-full justify-center">
              <Image src={slides[0].url} alt="..." width={300} height={50} /> 
            </div>
              </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src={slides[1].url} alt="..." width={300} height={50}/>
            </div>
              </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src={slides[2].url} alt="..." width={300} height={50}/>
            </div>
              </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src={slides[3].url} alt="..." width={300} height={50}/>
            </div>
              </SwiperSlide>
          </Swiper>
        : <div>
          <div className="relative w-full flex gap-4 justify-center py-6 overflow-x-auto">
            <Image id="item1" className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="/slide1.jpg" alt="Image 1" width={150} height={30} />
            <Image id="item2" className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="/slide2.jpg" alt="Image 2" width={150} height={30} />
            <Image id="item3" className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="/slide3.jpg" alt="Image 3" width={150} height={30} />
            <Image id="item4" className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="/slide4.jpg" alt="Image 4" width={150} height={30} />
        </div>
                  <div className="mx-auto mb-3 text-center">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${i === 0 ? "" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      </div>
      }
  
    </section>
  )
}
