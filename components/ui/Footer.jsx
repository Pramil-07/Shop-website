import React from 'react'

const Footer=()=>{
    return (
        <>
        <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-orange-200 text-black">
    <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back?<br/>Start your free trial today.
        </h2>
        <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block text-white bg-orangeLite-400 rounded-full shadow-xl border border-transparent hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:bg-black"
            href="#">Buy Dessert Now</a>
        <div class="mt-14 xl:mt-20">
            <nav class="flex flex-wrap justify-center text-lg font-medium text-black">
                <div class="px-5 py-2"><a href="#">Contact</a></div>
                <div class="px-5 py-2"><a href="#">Pricing</a></div>
                <div class="px-5 py-2"><a href="#">Privacy</a></div>
                <div class="px-5 py-2"><a href="#">Terms</a></div>
                <div class="px-5 py-2"><a href="#">Twitter</a></div>
            </nav>
            <p class="mt-7 text-base text-black">© 2023 XYZ, LLC</p>
        </div>
    </div>
</footer>
        </>
    )
}
export default Footer;