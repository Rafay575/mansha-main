import Image from 'next/image'
import React from 'react'
import img from "../public/images/wwr.jpg"
import Link from 'next/link'

export default function Home2() {
    return (
        <div className=''>
            <div className="flex flex-wrap">
                <div className='w-full lg:w-[50%]  pt-[40px] '>
                    <Image src={img} className='rounded-[20px]' alt='home2' />
                </div>
                <div className='w-full lg:w-[50%] py-[20px] flex flex-col space-y-[20px] mt-[20px] items-start lg:px-[20px]'>
                    <p className='text-[38px] xl:text-[43px] font-bold'>Who we are </p>
                    <p className='text-[17px] xl:text-[24px] font-[400] mt-[10px] lg:mt-[0]'>
                      At Mansha & Brothers, our tradition fuels our ambition for innovation. Every product is designed to perform and trusted when strength and heart matter most. Together with global partners, we build sustainable value in every stitch.
                    </p>
                    <Link href={"/identity"}>
                    <button  className='bg-[#3C9BE8] text-white text-[19px] px-[20px] py-[15px] rounded-[10px] mt-[10px] lg:mt-[0]'>More about Our Identity</button>
                    </Link>
                </div>
            </div>
            <hr className='my-[20px] border-[0.5px] border-[#cfcfcf]'/>
        </div>
    )
}
