import React from "react";
import Image from "next/image";
import { Button } from '../ui/button';

const OrderSweet = ()=>{
    return (
        <div className="bg-orange-50   md:py-24">

        
        <div className="container">
            <div className="grid grid-cols-2 gap-20 ">
            <div className="mx-40">
                <Image src='/assets/rasbari.png' width={700} height={600}/>
            </div>
            <div className="pe-40">
            <h1 className='text-5xl font-bold'>Order Your Favourite Mithai (sweets) </h1>
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
export default OrderSweet;