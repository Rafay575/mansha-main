"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-[100vw] z-[40] bg-white border-b-4 border-[#3F82D7]">
      <div className="container mx-auto flex items-center">
        <Link href="/" aria-label="Mansha & Brothers - Home">
          <Image
            src={logo}
            alt="Mansha & Brothers"
            className="w-[150px] hover:scale-[1.1] duration-300 cursor-pointer"
            priority
          />
        </Link>

        <div className="items-center mx-auto hidden md:flex">
          <Link href="/" className="navlinks">
            Home
          </Link>
          <Link href="/identity" className="navlinks">
            Identity
          </Link>
          <Link href="/approach" className="navlinks">
            Approach
          </Link>
          <Link href="/contact" className="navlinks">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="block md:hidden ml-auto relative z-[50]"
            aria-label="Open menu"
          >
            <RxHamburgerMenu className="text-[30px] text-[#3F82D7]" />
          </SheetTrigger>

          {/* Left-half overlay with blur + click-to-close */}
          <AnimatePresence>
            {open && (
              <motion.button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="fixed inset-y-0 left-0 w-1/2 bg-black/30 backdrop-blur-sm z-[45]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <SheetContent
            side="right"
            className="p-0 w-[50%] max-w-none z-[50] border-l border-gray-200"
          >
            {/* Slide/opacity animation for the panel content */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              className="h-full flex flex-col bg-white"
            >
              {/* Header with logo + close */}
              <SheetHeader className="p-3 border-b">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2"
                  >
                    <Image
                      src={logo}
                      alt="Mansha & Brothers"
                      className="w-[130px]"
                      priority
                    />
                  </Link>
                
                </div>
              </SheetHeader>

              {/* Body / links */}
              <SheetDescription className="sr-only">
                Mobile navigation
              </SheetDescription>
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-start px-3 py-6 gap-0">
                  <Link
                    href="/"
                    className="navlinks"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/identity"
                    className="navlinks"
                    onClick={() => setOpen(false)}
                  >
                    Identity
                  </Link>
                  <Link
                    href="/approach"
                    className="navlinks"
                    onClick={() => setOpen(false)}
                  >
                    Approach
                  </Link>
                  <Link
                    href="/contact"
                    className="navlinks"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Footer inside sheet */}
              <div className="px-5 py-4 border-t text-[10px] text-gray-500">
                <p>Mansha & Brothers © {new Date().getFullYear()}</p>
             
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
