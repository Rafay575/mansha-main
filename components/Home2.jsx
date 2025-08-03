import Image from 'next/image'
import React from 'react'
import img from "../public/images/homeimage2.webp"
import Link from 'next/link'

export default function Home2() {
    return (
        <div className=''>
            <div className="flex flex-wrap">
                <div className='w-full lg:w-[50%]  pt-[40px] '>
                    <Image src={img} className='rounded-[20px]' alt='home2' />
                </div>
                <div className='w-full lg:w-[50%] py-[20px] flex flex-col justify-between items-start 2xl:py-[60px] lg:px-[10px]'>
                    <p className='text-[38px] xl:text-[43px] font-bold'>Who we are </p>
                    <p className='text-[17px] xl:text-[19px] font-[400] mt-[10px] lg:mt-[0]'>Rooted in tradition, driven by innovation, Mansha & Brothers
                        is where traditional craftsmanship meets the future. We craft
                        products made We make products not just for peak
                        performance, but for the moments that demand heart, grit,
                        and something you can count on. Partnering with global
                        names to build sustainable value in every stitch, every strike.
                    </p>
                    <Link href={"/identity"}>
                    <button  className='bg-[#3C9BE8] text-white text-[19px] px-[20px] py-[15px] rounded-[10px] mt-[10px] lg:mt-[0]'>More about Our Identity</button>
                    </Link>
                </div>
            </div>
            <hr className='my-[20px] border-[1.5px] border-[#808080]'/>
        </div>
    )
}
