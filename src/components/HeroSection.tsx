"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/heroImg.png",
  "/heroImg.png",
  "/heroImg.png",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed Swiper background using public /heroImg.png and full width */}
      <div className="absolute inset-0 w-full h-[420px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                <Image 
                  src={src} 
                  alt={`slide-${i}`} 
                  fill 
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content on top of slider */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="h-[420px] flex items-center">
            <div className="w-full px-6">
              <div className="grid md:grid-cols-2 items-center gap-6">
                <div className="py-8">
                 
                  <h1 className="text-3xl md:text-6xl  text-gray-800 mb-3 leading-tight">
                    Shop <span className="text-[#15ADB7]">Computer</span>
                    <br />
                   <span className="text-[#15ADB7]"> & experience</span>
                  </h1>
                  <p className="text-gray-700 text-xs md:text-sm mb-4 leading-relaxed max-w-md">
                    You Cannot Inspect Quality Into The Product; It Is Already There.
                    <br />
                    I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.
                  </p>
                  <Link href="/shop">
                    <button 
                      className="text-white px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-colors"
                      style={{ backgroundColor: "#14B1F0" }}
                    >
                      View More
                    </button>
                  </Link>
                </div>

                <div className="flex justify-end pr-4">
                  <div className="relative" style={{ width: "280px", height: "200px" }}>
                    {/* <Image 
                      src="/heroImg.png" 
                      alt="feature" 
                      fill 
                      className="object-contain"
                      sizes="280px"
                    /> */}
                    <div className="absolute -top-4 -right-4 text-white rounded-full w-52 h-52 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(90deg, #FDC830 0%, #F37335 100%)' }} >
                      <div className="text-6xl">40%</div>
                      <div className="text-5xl">Off</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}