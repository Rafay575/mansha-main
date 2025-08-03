"use client"
import React, { useState } from 'react'
import img from "@/public/images/teaching.webp"
import Image from 'next/image'
import img1 from "@/public/images/img1.jpg"
import img2 from "@/public/images/img2.webp"
import img3 from "@/public/images/img3.webp"
import img4 from "@/public/images/img4.jpg"
import img5 from "@/public/images/img5.webp"
import img6 from "@/public/images/img6.webp"
import img7 from "@/public/images/img7.webp"
import img8 from "@/public/images/img8.webp"
import GetInTouch from '@/components/GetInTouch'
import Methods from '@/components/Methods'

export default function page() {
   
    const data = [
        { step: "01", title: "Research", img: img1 },
        { step: "02", title: "Design", img: img2 },
        { step: "03", title: "Sourcing", img: img3 },
        { step: "04", title: "Production Plan", img: img4 },
        { step: "05", title: "Production", img: img5 },
        { step: "06", title: "Quality Control", img: img6 },
        { step: "07", title: "Packaging", img: img7 },
        { step: "08", title: "Warehousing", img: img8 },
    ]


    return (
        <>
        <div className='w-[96vw] mx-auto'>
            {/* Section1  */}
            <div className=''>
                <div className='py-[20px] md:py-[40px] lg:py-[80px]'>
                    <p className='text-[50px] leading-[40px] md:text-[101px] font-bold md:leading-[72px]'> <span className=' text-[#3c9be8]  '>Innovation </span>in <br />
                        every step</p>
                </div>
                <div className="flex flex-wrap">
                    <div className='w-full lg:w-[50%] p-[0] pt-[40px]  lg:p-[20px]'>
                        <Image src={img} className='rounded-[40px]' alt='home2' />
                    </div>
                    <div className='w-full lg:w-[50%] py-[20px] flex flex-col items-start '>
                        <p className='text-[25px] xl:text-[40px] lg:pr-10  mt-[10px] xl:mt-[30px] font-bold '>
                           
                            From process optimization and
                            smart tooling to responsible
                            material sourcing, we embed
                            forward-thinking solutions into
                            every layer of our work. Our
                            approach blends data, design,
                            and discipline to create
                            products that don’t just meet
                            standards — they redefine them.
                        </p>
                    </div>
                </div>
            </div>
    
</div>
            {/* Section2  */}
       <Methods />

<div className='w-[96vw] mx-auto'>
            {/* Section3  */}
            <div className=' my-[60px]'>
                <p className='text-[40px] leading-[42px] md:text-[70px]   font-bold md:leading-[72px]  '>
                    From Method to
                    <br /> <span className='text-[#3E82DF]'>Manufacturing</span>
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-x-[10px] gap-y-[20px] mt-[120px]'>
                    {data.map((card, index) => (
                        <div key={index} className='flex flex-col items-center relative mt-20 lg:mt-0'>
                            <Image
                                src={card.img}
                                alt='step image'
                                className='w-[85%]  rounded-full object-cover border-[7px] border-[#d2ecfa] shadow-md aspect-square absolute -top-20'
                            />
                            <div className='flex flex-col justify-end bg-[#D2ECFA] w-full pt-[70px] pb-[30px] px-4 rounded-t-[20%] rounded-b-[40px] text-center shadow h-[280px]  sm:h-[420px]  md:h-[310px] lg:h-[300px]  xl:h-[220px] 2xl:h-[220px]'>
                                <p className='text-[20px] font-semibold  lg:mt-[10px]'>{card.step}</p>
                                <p className='text-[17px] font-bold text-black'>{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

         

            <GetInTouch />
           

        </div>
        </>

    )
}
