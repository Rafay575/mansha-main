import React from "react";
import img from "@/public/images/bop.jpg";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function page() {
 
  return (
    <div className="w-[96vw] mx-auto overflow-x-hidden">
      <div className="">
        <div className="pt-[20px] md:pt-[40px] lg:pt-[80px] pb-[20px]">
          <p className="text-[50px] leading-[50px] md:text-[101px] font-bold md:leading-[72px]">
            Built on{" "}
          </p>
          <p className="text-[50px] leading-[50px] md:text-[101px] font-bold text-[#3c9be8]  md:leading-[82px]">
            Purpose
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[50%] p-[0] pt-[40px]  lg:p-[20px]">
            <Image src={img} className="rounded-[20px]" alt="home2" />
          </div>
          <div className="w-full lg:w-[50%]  flex flex-col items-start ">
            <p className="text-[25px] xl:text-[30px]  mt-[20px] xl:mt-[32px] font-semibold ">
             From a small sports shop opened in 1959 to a sports manufacturer trusted by some of the biggest brands in the world. This journey has is built on passion, precision, and progress and decades later, that same spirit drives us in everything that we do.
            </p>
          </div>
        </div>
        <section className="w-full bg-[#eaf6fb] my-10 py-6 pb-32 md:py-6 md:pb-32">
          <h2 className="text-center font-bold text-2xl md:text-3xl">
            Trusted By
          </h2>
       <p className="text-[17px] md:text-[24px] text-center px-5 mt-6">
        Recognised for our consistent quality and dependable service, we are proud to be a manufacturing partner to world-class brands including Decathlon, adidas, Reebok, and Everlast. Our enduring relationships reflect a shared focus on performance and integrity.
       </p>
        </section>
        <div className="text-center mt-[60px]">
          <p className="text-[58px] leading-[59px] font-bold ">
            What we <br /> <span className="text-[#3F82D7]">believe</span> in
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
