'use client';
import React from 'react'
import { Button } from '../../components/ui/button';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';


// const shop = () => {
//   return (
//     <>
    
//     <Header/>
    
//         <div className="container py-30  h-auto">
//                         {/* ------------------------------------- */}

//             <div className="grid grid-cols-6 text-center  md:py-16">

//              <div class="col-start-2 col-span-4 ">  

           
//                  <h1 className='text-5xl font-bold'></h1>Shop Now
//                 <p className="py-2 text-gray-400 text-lg">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, qui!
//                 </p>
//              </div>
//             </div>

//             {/* -------------------cards start------------------ */}
//             <div className="grid grid-cols-3 gap-16 w-4/5 mx-auto">
//                     <div className="shadow-lg hover:shadow-xl  cursor-pointer px-8 py-10  rounded-lg bg-white hover:scale-105 transition-all" >
//                         <h1 className='text-3xl text-gray-700 font-semibold '>Nepali sweet</h1>
//                         <p className="py-2 text-gray-400 text-lg">Lorem, ipsum dolor sit amet consectetur sit amet consectetur</p>
//                         <Image src='/assets/Besan-Laddu.png' width={200} height={100} className='py-8'/>
//                         <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Nepali Style</Button>
//                     </div>
//                     <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg bg-white hover:scale-105 transition-all">
//                     <h1 className='text-3xl text-gray-700 font-semibold '>Indian sweets</h1>
//                         <p className="py-2 text-gray-400 text-lg">Lorem, ipsum dolor sit amet consectetur sit amet consectetur</p>
//                         <Image  src='/assets/kaju_katli.png'  width={200} height={100} className='py-8'/>
//                         <Button className=' p-5 rounded-md shadow-lg bg-orangeLite-400 hover:scale-105 transition-all text-lg font-normal tracking-wide'>Indian Style</Button>
//                     </div>
//                                 {/* -------------------cards end------------------ */}

//             </div>
//         </div>
        
//     <Footer/>
//     </>
//   )
// }


import ProductCard from '../../components/ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    description: 'This is a great product.',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    description: 'This is another great product.',
    image: '/images/product2.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    description: 'This is a great product.',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    description: 'This is another great product.',
    image: '/images/product2.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    description: 'This is a great product.',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    description: 'This is another great product.',
    image: '/images/product2.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
    description: 'This is a great product.',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20',
    description: 'This is another great product.',
    image: '/images/product2.jpg',
  },
  
];

export default function Shop() {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-5 my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
