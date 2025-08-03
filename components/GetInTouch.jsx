import React from 'react'
import Link from 'next/link'

export default function GetInTouch() {
  return (
    <div className='container mx-auto lg:p-[20px] text-center'>
      <div className='getintouch min-h-[300px] w-full text-center rounded-[20px] py-[20px] px-[15%]'>
        <p className='text-white text-[50px] font-bold'>Get In Touch</p>
        <p className='text-white text-[19px] mt-[20px]'>We'd love to connect and explore how we can support your brand's journey. Whether you're
          looking to elevate product quality, streamline production, or develop something entirely new —
          let's start a conversation and create something exceptional together.</p>
      </div>

      <Link href={"/contact"}>
      <button className="bg-[#3C9BE8] text-white text-[19px] px-[35px] py-[5px] rounded-[10px] mt-[10px] lg:mt-[0] relative bottom-[20px]">
        Contact Us
      </button>
      </Link>
    </div>
  )
}
