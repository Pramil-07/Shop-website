"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = ()=>{
    return(
        <>
        <div className="container">

       
     

        <div className="  flex justify-between overflow-hidden gap-2"  >

       
          
        {/* --------------------------left Section start-------------------------- */}
        <div className="  w-3/5 mr-40">
       
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {/* ----------------------------------- */}
          <SwiperSlide>
            <div className=" rounded-md border transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl4.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
{/* ----------------------------------- */}
<SwiperSlide>
            <div className=" rounded-md border  dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl3.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
{/* ----------------------------------- */}
<SwiperSlide>
            <div className=" rounded-md border  dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl2.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
{/* ----------------------------------- */}
<SwiperSlide>
            <div className="rounded-md border  dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl1.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
{/* ----------------------------------- */}
<SwiperSlide>
            <div className=" rounded-md border  dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl4.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
{/* ----------------------------------- */}
<SwiperSlide>
            <div className=" rounded-md border  dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-8s">
    <img
      src="/assets/ppl1.jpg"
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-3">
      <div className="grid grid-cols-2 items-center gap-3">

        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
           Pramil Dhungana
          
        </h1>
        <div className="flex gap-2">
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
          <Star width={20} className='text-yellow-400'/>
        </div>
      </div>
      <p className="py-8 text-gray-400 text-lg">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eveniet, rem distinctio optio nisi illum nihil quisquam quae hic beatae iure voluptatum, quaerat itaque et. 
                </p>
       
    </div>
</div>
</SwiperSlide>
        </Swiper>
        </div>
        {/* --------------------------left Section end-------------------------- */}

        {/* --------------------------right Section start-------------------------- */}
      
        <div className=" ">
        <div className="col-start-2 col-span-4 my-6">  


<h1 className='text-5xl h-3/5 font-bold'>What Our Coustomer Say </h1>
<p className="py-4 text-gray-400 text-lg">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae.</p>

<div className="mt-10 flex items-center justify-center gap-x-6">
    <div className="hidden sm:block -space-x-2 overflow-hidden">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="/"/>
    </div>
    <div className="boder-none sm:border-l-2 border-black sm:pl-8">
        <div className="flex justify-center sm:justify-start">
            <h3 className="text-2xl font-semibold mr-2">4.6</h3>

            <img className="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon"/>
        </div>
        <div>
            <h3 className="text-sm">Rated by 25k on google.</h3>
        </div>
    </div>
</div>
        {/* --------------------------right Section end-------------------------- */}

</div>

               
              </div>
      
      </div>
      </div>
      </>
    )
}
export default Testimonial;