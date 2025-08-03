"use client"
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
import logo from "@/public/images/logo.svg"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";



export default function Navbar() {
    return (
        <nav className=' fixed top-0 left-0 w-[100vw] z-[8] bg-white border-b-4 border-[#3F82D7] '>
            <div className="container mx-auto flex items-center ">
                <Image src={logo} alt="english" className="w-[150px] hover:scale-[1.1] duration-300 cursor-pointer" />
                <div className=' items-center mx-auto hidden md:flex'>
                    <Link href="/" className=' navlinks'>Home</Link>
                    <Link href="/identity" className='navlinks'>Identity</Link>
                    <Link href="/approach" className='navlinks'>Approch</Link>
                    <Link href="/contact" className='navlinks'>Contact</Link>

                </div>

                <Sheet>
                    <SheetTrigger className='block md:hidden ml-auto relative  duration-500 z-[999]'>
                        <RxHamburgerMenu className='text-[30px] text-[#3F82D7]  duration-500' />
                    </SheetTrigger>
                    <SheetContent className='bg-white w-[50%]  duration-500'>
                        <SheetHeader>
                            <SheetDescription>
                                <div className='flex flex-col items-center'>
                                    <Link href="/" className=' navlinks'>Home</Link>
                                    <Link href="/identity" className='navlinks'>Identity</Link>
                                    <Link href="/approach" className='navlinks'>Approch</Link>
                                    <Link href="/contact" className='navlinks'>Contact</Link>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </nav>
    )
}
