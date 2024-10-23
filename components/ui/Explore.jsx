import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';

const Explore = ()=>{
    return (
        <>
        <div className="container py-30 bg-orange-50 h-auto">
                        {/* ------------------------------------- */}

            <div className="grid grid-cols-6 text-center  md:py-16">

             <div class="col-start-2 col-span-4 ">  

           
                 <h1 className='text-5xl font-bold'>Explore Our Sweet Experiene </h1>
                <p className="py-2 text-gray-400 text-lg">
                Discover our range of organic and healthy sweets, expertly crafted to meet diverse tastes. We specialize in traditional Indian and Nepali confections, including a variety of Bengali-style sweets, all made with high-quality natural ingredients. 
                </p>
             </div>
            </div>

            {/* ------------------------------------- */}
            <div className="grid grid-cols-3 gap-16 w-4/5 mx-auto">
                    <div className="shadow-lg hover:shadow-xl  cursor-pointer px-8 py-10  rounded-lg bg-white hover:scale-105 transition-all" >
                        <h1 className='text-3xl text-gray-700 font-semibold '>Nepali sweet</h1>
                        <p className="py-2 text-gray-400 text-lg">Lorem, ipsum dolor sit amet consectetur sit amet consectetur</p>
                        <Image src='/assets/nepal.png' width={200} height={100} className='py-8'/>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Nepali Style</Button>
                    </div>
                    <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg bg-white hover:scale-105 transition-all">
                    <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
                        <p className="py-2 text-gray-400 text-lg">Lorem, ipsum dolor sit amet consectetur sit amet consectetur</p>
                        <Image  src='/assets/india.png'  width={200} height={100} className='py-8'/>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Indian Style</Button>
                    </div>
                    <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg bg-white hover:scale-105 transition-all">
                    <h1 className='text-3xl text-gray-700 font-semibold '>Explore </h1>
                        <p className="py-2 text-gray-400 text-lg">Lorem, ipsum dolor sit amet consectetur sit amet consectetur</p>
                        <Image src='/assets/nepal.png'  width={100} height={100} className='py-8'/>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Discover More</Button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Explore;