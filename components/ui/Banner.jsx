"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="bg-white ">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className='cursor-pointer'>
          <div className="container md:pt-5 md:pd-1">
            <div className="grid grid-cols-2 px-10">
              {/* ------------------left hero---------------- */}
              <div className=" ">
                <h1 className='text-6xl font-bold py-4  '>The Sweet <br/>   Essence of <br/> Bengal</h1>
                <div className=" absolute bottom-60 mt-5 right-80  ">
                 {/* <Image
                  src="/assets/sweetLogo-removebg-preview.png"
                  alt="Sweets"
                  className=''
                  width={100}
                  height={120}
                  />  */}
                  </div>

                <p className='py-8 tracking-wide '>Bengali sweets, also known as "Bengali Mishti" in the Bengali language, are a delightful and diverse range of sweet confections originating from the Indian state of West Bengal and the neighboring country of Bangladesh.</p>
                <div className="flex gap-5 py-6">
                  <Button className=' p-3 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Download App</Button>
                  <Button className=' p-3 rounded-md shadow-lg  hover:scale-105 transition-all text-lg font-normal tracking-wide ' variant="outline">Shop Sweets</Button>
                </div>
              </div>
              {/* ------------------right hero---------------- */}
              <div className=" flex h-4/5 w-4/5 items-center justify-center mx-20  py-20">
                <Image
                  src="/assets/kaju_katli.png"
                  className='my-10'
                  alt="Sweets"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
{/* ---------------------------------------------------------------- */}

        <SwiperSlide className='cursor-pointer'>
          <div className="container md:pt-5 md:pd-1">
            <div className="grid grid-cols-2 px-10">
              {/* ------------------left hero---------------- */}
              <div className=" ">
                <h1 className='text-6xl font-bold py-4  '>The Sweet <br/>   Essence of <br/> Bengal</h1>
                <div className=" absolute bottom-60 mt-5 right-80  ">
                 {/* <Image
                  src="/assets/sweetLogo-removebg-preview.png"
                  alt="Sweets"
                  className=''
                  width={100}
                  height={120}
                  />  */}
                  </div>

                <p className='py-8 tracking-wide '>Bengali sweets, also known as "Bengali Mishti" in the Bengali language, are a delightful and diverse range of sweet confections originating from the Indian state of West Bengal and the neighboring country of Bangladesh.</p>
                <div className="flex gap-5 py-6">
                  <Button className=' p-3 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Download App</Button>
                  <Button className=' p-3 rounded-md shadow-lg  hover:scale-105 transition-all text-lg font-normal tracking-wide ' variant="outline">Shop Sweets</Button>
                </div>
              </div>
              {/* ------------------right hero---------------- */}
              <div className="flex h-4/5 w-4/5 items-center justify-center mx-20  py-20">
                <Image
                  src="/assets/Motichoor-laddu.png"
                  className='my-10'
                  alt="Sweets"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
                  {/* ---------------------------------------------------------------- */}
      
                  
        <SwiperSlide className='cursor-pointer'>
          <div className="container md:pt-5 md:pd-1">
            <div className="grid grid-cols-2 px-10">
              {/* ------------------left hero---------------- */}
              <div className=" ">
                <h1 className='text-6xl font-bold py-4  '>The Sweet <br/>   Essence of <br/> Bengal</h1>
                <div className=" absolute bottom-60 mt-5 right-80  ">
                 {/* <Image
                  src="/assets/sweetLogo-removebg-preview.png"
                  alt="Sweets"
                  className=''
                  width={100}
                  height={120}
                  />  */}
                  </div>

                <p className='py-8 tracking-wide '>Bengali sweets, also known as "Bengali Mishti" in the Bengali language, are a delightful and diverse range of sweet confections originating from the Indian state of West Bengal and the neighboring country of Bangladesh.</p>
                <div className="flex gap-5 py-6">
                  <Button className=' p-3 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Download App</Button>
                  <Button className=' p-3 rounded-md shadow-lg  hover:scale-105 transition-all text-lg font-normal tracking-wide ' variant="outline">Shop Sweets</Button>
                </div>
              </div>
              {/* ------------------right hero---------------- */}
              <div className="flex h-4/5 w-4/5 items-center justify-center mx-20  py-20">
                <Image
                  src="/assets/Cham-Cham.png"
                  className='my-10'
                  alt="Sweets"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
