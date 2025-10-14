import React from 'react'
import Link from 'next/link'

export default function GetInTouch() {
  return (
    <div className=' text-center'>
      <div className='getintouch min-h-[400px] w-full text-center rounded-[20px] py-[20px] px-[15%]'>
        <p className='text-white text-[32px] lg:text-[50px] font-bold'>Get In Touch</p>
        <p className='text-white text-[20px] lg:text-[24px] mt-[20px]'>
         We’re here to build what’s next, creating products that deliver quality, consistency, and real value. Let’s start a conversation about how we can make it happen together.
          </p>
      </div>

      <Link href={"/contact"}>
      <button className="bg-[#3C9BE8] text-white text-[19px] px-[35px] py-[5px] rounded-[10px] mt-[10px] lg:mt-[0] relative bottom-[20px]">
        Contact Us
      </button>
      </Link>
    </div>
  )
}
