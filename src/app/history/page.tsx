'use client'
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Tab from "../../../components/Tab";
import Carousel from "../../../components/Carousel";
import Link from "next/link";

export default function History() { 

  return (
    <div>
      <Navbar name1="LOSANGELES" name2="MOUNTAINS" toggleColor="text-black"/>
      <main className="min-h-screen flex flex-col justify-between">

        <div className="relative py-3 px-4 max-w-screen-xl mx-auto md:px-8">
          <h1 className="text-[10rem] leading-[162px]">01.</h1>
          <h2 className="absolute left-[13.5rem] md:left-52 top-[5rem] text-5xl font-bold">HISTORY</h2>
          <p className="text-black w-[85%] mx-auto my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi similique dolores laborum molestias quis ullam. Soluta cupiditate quisquam ipsum voluptate, dolor hic, illum, error temporibus sint exercitationem facilis! Maiores!</p>
        </div>

        <Carousel />
      </main>

       <section className="md:flex items-center bg-white">
          <div className="w-full">
            <div className="relative py-3 px-4 max-w-screen-xl mx-auto md:px-8">
              <h1 className="text-[10rem] text-[#9fa7b5] leading-[162px]">02.</h1>
              <h2 className="absolute left-[13.8rem] text-[#9fa7b5] md:left-[15rem] top-[5rem] text-5xl font-bold">CLIMB</h2>
              <p className="text-black md:w-[53%] md:absolute left-60 md:left-[25rem] top-[5rem] mx-auto my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi similique dolores laborum molestias quis ullam. Soluta cupiditate quisquam ipsum voluptate, dolor hic, illum, error temporibus sint exercitationem facilis! Maiores!</p>
          </div>
          </div>
  
      </section>
        <Tab />
      <footer className="text-gray-500 bg-[#404e6c]">
         <div className="items-center justify-between sm:flex px-4 py-5 md:px-8 flex space-x-8 max-w-screen-xl mx-auto">
                <div className="mt-4 sm:mt-0">
                               <div className="flex-none flex items-center gap-3 lg:flex-initial outline-none rounded-full">
                    <Link className="w-10 h-10" href="#">
                        <Image
                            src="/mountain.jpg" 
                            width={120} 
                            height={50}
                            alt="logo"
                            className="w-full h-full rounded-full"
                        />
                       
                    </Link>
                        <div className="text-xl flex flex-col text-[#5d7098]">
                            <b>LOSANGELES</b>
                            <b>MOUNTAINS</b>
                        </div>   
                </div>
                </div>
          <div className="mt-6 sm:mt-0 text-[#5d7098]">
             <b>COPYRIGHT 20216. ALL RIGHTS RESERVED.</b>
                </div>
            </div>
      </footer>
    </div>
  )
}