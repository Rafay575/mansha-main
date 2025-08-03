import React from 'react'
import img from "@/public/images/kick.webp"
import Image from 'next/image'
import Carousel from '@/components/Carousel';


export default function page() {
    const carouselData = [
        {
            id: 1,
            title: "Precision in Every Step",
            content:
                "We apply continuous improvement principles to everything we do. Through lean manufacturing, data-driven quality control, and rigorous benchmarking, we ensure consistent, high p",
        },
        {
            id: 2,
            title: "Create to Evolve",
            content:
                "Innovation is structured into our development cycles. From automated workflows to next-gen material research, we attempt to stay ahead by designing smarter, faster, and",
        },
        {
            id: 3,
            title: "The Human Element",
            content:
                "Worker welfare is a non-negotiable. We invest in safe environments, fair compensation, and ongoing skill and people development. Human-centric systems lead to resilient teams and superior outcomes.",
        },
    ];
    return (
        <div className='w-[100vw] overflow-x-hidden'>
            <div className='container mx-auto'>
                <div className='py-[20px] md:py-[40px] lg:py-[80px]'>
                    <p className='text-[50px] leading-[50px] md:text-[101px] font-bold md:leading-[72px]'>Built on </p>
                    <p className='text-[50px] leading-[50px] md:text-[101px] font-bold text-[#3c9be8]  md:leading-[82px]'>Purpose</p>
                </div>
                <div className="flex flex-wrap">
                    <div className='w-full lg:w-[50%] p-[0] pt-[40px]  lg:p-[20px]'>
                        <Image src={img} className='rounded-[20px]' alt='home2' />
                    </div>
                    <div className='w-full lg:w-[50%]  flex flex-col items-start '>
                        <p className='text-[21px] xl:text-[30px] font-[400] mt-[20px] xl:mt-[40px] font-semibold '>
                            From a small sports shop opened in 1959 to a trusted journey is built on passion, precision, and progress.
                        </p>
                        <br />
                        <p className='text-[25px] xl:text-[30px] font-[400] mt-[10px] lg:mt-[0] font-semibold'>
                            Decades later, that same spirit
                            drives us in everything we do
                            from the values we stand by to
                            the clients and partners we
                            proudly stand with. This is who
                            we are, and why it matters.
                        </p>
                    </div>
                </div>
                <div className='text-center mt-[60px]'>
                    <p className='text-[58px] leading-[59px] font-bold '>What we <br /> <span className='text-[#3F82D7]'>believe</span> in</p>
                </div>
                <Carousel />
            </div>
        </div>
    )
}
