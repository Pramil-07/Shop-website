import React from "react";
import Image from "next/image";
import { Button } from '../ui/button';

const InstantDelivery = ()=>{
    return(<div className=" md:py-24">

        
        <div className="container p-16">
            <div className="grid grid-cols-2 gap-10 px-12">
            <div className=" order-2">
                <Image src='/assets/Kalakand.webp' width={400} height={200}/>
            </div>
            <div className="pe-40 order-1    ">
            <h1 className='text-5xl font-bold'>Instant Dessert At Your HOME </h1>
                <p className="py-8 text-gray-400 text-lg">
                Discover our range of organic and healthy sweets, expertly crafted to meet diverse tastes. We specialize in traditional Indian and Nepali confections, including a variety of Bengali-style sweets, all made with high-quality natural ingredients. 
                </p>
                <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Order Now</Button>
            </div>

            </div>
        </div>
        </div>
    )
}
export default InstantDelivery;