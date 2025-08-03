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

export default function page() {
    const cardData = [
        {
            id: 1,
            title: "Discover",
            content:
                "Since 1959, we’ve evolved from a local sports shop to a trusted manufacturer not by chasing trends, but by staying true to what matters. In 1989, we shifted from retail to making products with intention, partnering with brands who care about craft, values, and impact. For us, it’s never just about what we make—it’s about why we make it, and who we make it with.",
        },
        {
            id: 2,
            title: "Plan",
            content:
                "We carefully map out every project through detailed planning, ensuring timelines, resources, and goals align. Our strategic process includes market research, technical feasibility, and stakeholder alignment to reduce risks and ensure efficiency.",
        },
        {
            id: 3,
            title: "Design",
            content:
                "Our design process blends creativity with functionality. From wireframes to full prototypes, we focus on creating visually compelling and user-friendly interfaces that reflect your brand and enhance the user experience across all devices.",
        },
        {
            id: 4,
            title: "Build",
            content:
                "Our development team brings ideas to life with clean, scalable code. Using modern stacks like MERN/Next.js, we build secure, high-performance applications with backend integration, database management, and full responsiveness.",
        },
        {
            id: 5,
            title: "Launch",
            content:
                "We finalize deployment with rigorous testing and quality checks. From server setup to post-launch monitoring, we ensure a smooth go-live experience. We also offer ongoing support and optimization to keep your project running smoothly.",
        },
    ];

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


    const [activeCard, setActiveCard] = useState(1);

    const handleToggle = (id) => {
        setActiveCard((prev) => (prev === id ? null : id));
    };
    return (
        <div className='w-[100vw] '>
            {/* Section1  */}
            <div className='container mx-auto'>
                <div className='py-[20px] md:py-[40px] lg:py-[80px]'>
                    <p className='text-[50px] leading-[40px] md:text-[101px] font-bold md:leading-[72px]'> <span className=' text-[#3c9be8]  '>Innovation </span>in <br />
                        every step</p>
                </div>
                <div className="flex flex-wrap">
                    <div className='w-full lg:w-[50%] p-[0] pt-[40px]  lg:p-[20px]'>
                        <Image src={img} className='rounded-[40px]' alt='home2' />
                    </div>
                    <div className='w-full lg:w-[50%] py-[20px] flex flex-col items-start '>
                        <p className='text-[25px] xl:text-[30px] font-[400] mt-[10px] xl:mt-[30px] font-semibold '>
                            Innovation in
                            every step
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

            {/* Section2  */}
            <div className='working  min-h-[600px] mt-[60px]  pt-[40px] '>
                <p className=' text-[50px] md:text-[70px] md:text-[90px] text-white font-bold leading-[72px] text-center ' >The <span className='text-[#3F82D7]'>4DS</span> Method</p>
                <div className="flex gap-[5px] sm:gap-[10px] flex-wrap items-start justify-center py-[20px] w-full mx-auto">
                    {cardData.map((card) => {
                        const isActive = activeCard === card.id;

                        return (
                            <div
                                key={card.id}
                                onClick={() => handleToggle(card.id)}
                                className={`rounded-[25px] p-2 sm:p-4 transition-all duration-300 cursor-pointer h-[100%] min-h-[500px] lg:min-h-[400px] text-white 
                  ${isActive ? "bg-[#A3A3A1] text-white w-[35%]" : "bg-[#A3A3A1] text-white w-[14%]  "}
                   flex flex-col ${!isActive ? "justify-between items-center" : ""}
              `}
                            >
                                <div className={`text-lg font-semibold mb-2 text-white" `}>
                                    {card.id < 10 ? `0${card.id}` : card.id}
                                </div>
                                <div className="text-[20px] md:text-[30px] lg:text-[40px] font-bold hidden md:block">{card.title}</div>

                                {isActive ? (
                                    <>
                                        <div className="text-[20px] md:text-[30px] lg:text-[40px] font-bold block md:hidden">{card.title}</div>
                                        <div className="text-[15px] sm:text-[15px] md:text-[17px] font-medium">{card.content}</div>
                                        <div className="mt-auto flex justify-end">
                                            <div className="w-6 h-6 rounded-full border flex items-center justify-center border-white">
                                                <span className="text-sm font-bold">×</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white">
                                        <span className="text-lg font-bold">+</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Section3  */}
            <div className='container mx-auto my-[60px]'>
                <p className='text-[40px] leading-[42px] md:text-[70px] md:text-[90px]  font-bold md:leading-[72px]  '>
                    From Method to
                    <br /> <span className='text-[#3E82DF]'>Manufacturing</span>
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-x-[5px] gap-y-[20px] mt-[40px]'>
                    {data.map((card, index) => (
                        <div key={index} className='flex flex-col items-center relative'>
                            <Image
                                src={card.img}
                                alt='step image'
                                className='w-[95%]  rounded-full object-cover border-[7px] border-[#d2ecfa] shadow-md aspect-square absolute top-0'
                            />
                            <div className='flex flex-col justify-end bg-[#D2ECFA] w-full pt-[70px] pb-[30px] px-4 rounded-t-[90%] rounded-b-[40px] text-center shadow h-[280px]  sm:h-[420px]  md:h-[310px] lg:h-[350px]  xl:h-[250px] 2xl:h-[260px]'>
                                <p className='text-[20px] font-semibold text-[#3E82DF] lg:mt-[10px]'>{card.step}</p>
                                <p className='text-[17px] font-medium text-gray-700'>{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Section4  */}
            <GetInTouch />

        </div>
    )
}
