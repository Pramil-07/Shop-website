import React from "react";
import Image from "next/image";
import { Button } from '../ui/button';

const Selling =()=>{
    return(
        <>
        <div className="md:py-20">
            <div className="container p-14 ">
                {/* ------------------------------------------- */}
                <div className="grid grid-cols-6 text-center  md:py-1 ">

<div class="col-start-2 col-span-4 my-6">  


    <h1 className='text-5xl font-bold'>Our Best Selling Desserts </h1>
   <p className="py-4 text-gray-400 text-lg">
   Discover our range of organic and healthy sweets, expertly crafted to meet diverse tastes.
   </p>
</div>
</div>
                {/* ------------------------------------------- */}
            <div className="grid grid-cols-3 gap-16 px-16 w-11/12 mx-auto" >
                <div className="shadow-lg hover:shadow-xl  cursor-pointer px-11 py-6  rounded-lg bg-white hover:scale-105 transition-all relative">
                    {/* ------------------------------ */}
                    <div className="grid grid-cols-2 gap-6 relative ">
                        <Image src='/assets/Kala-Jamun.png' width={250} height={250} className="absolute left-16"/>
                        <div className="my-16">
                            <p className="text-gray-400 text-lg">#1 Selling</p>
                            <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
                        </div>
                    </div>
                                        {/* ------------------------------ */}
                                        <p className=" text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde id consectetur labore earum doloribus id consectetur labore earum doloribus.</p>
                    <div className="gird grid-cols-2 gap-8 items-center py-2 flex">
                        <h1 className="font-semibold text-nowrap text-2xl">$ 29.99</h1>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Discover More</Button>

                    </div>
                </div>
                               {/* ------------------------------------------ */}

                               <div className="shadow-lg hover:shadow-xl  cursor-pointer px-11 py-6  rounded-lg bg-white hover:scale-105 transition-all relative">
                    {/* ------------------------------ */}
                    {/* <div className="grid grid-cols-2 gap-6 relative ">
                        <Image src='/assets/Kaju-Roll.png' width={250} height={250} className=""/>
                        <div className="my-16">
                            <p className="text-gray-400 text-lg">#1 Selling</p>
                            <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
                        </div>
                    </div> */}


                    <div className="grid grid-cols-2 gap-6 relative ">
                        <Image src='/assets/Kesar-Peda.png' width={400} height={400} className="absolute left-20
                         bottom-10"/>
                        <div className="my-16">
                            <p className="text-gray-400 text-lg">#1 Selling</p>
                            <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
                        </div>
                    </div>
                                        {/* ------------------------------ */}
                                        <p className=" text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde id consectetur labore earum doloribus id consectetur labore earum doloribus.</p>
                    <div className="gird grid-cols-2 gap-8 items-center py-2 flex">
                        <h1 className="font-semibold text-2xl text-nowrap ">$ 29.99</h1>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Discover More</Button>

                    </div>
                </div>

                {/* ------------------------------------------ */}
                <div className="shadow-lg hover:shadow-xl  cursor-pointer px-11 py-6  rounded-lg bg-white hover:scale-105 transition-all relative">
                    {/* ------------------------------ */}
                    <div className="grid grid-cols-2 gap-6 relative ">
                        <Image src='/assets/Besan-Laddu.png' width={250} height={250} className="absolute left-1/3 bottom-10 "/>
                        <div className="my-16">
                            <p className="text-gray-400 text-lg">#1 Selling</p>
                            <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
                        </div>
                    </div>
                                        {/* ------------------------------ */}
                                        <p className=" text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde id consectetur labore earum doloribus id consectetur labore earum doloribus.</p>
                    <div className="gird grid-cols-2 gap-8 items-center py-2 flex">
                        <h1 className="font-semibold text-2xl text-nowrap ">$ 29.99</h1>
                        <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Discover More</Button>

                    </div>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}
export default Selling;