"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

export default function Approach() {
  const cardData = [
    { id: 1, title: "Discover" },
    { id: 2, title: "Plan" },
    { id: 3, title: "Design" },
    { id: 4, title: "Build" },
    { id: 5, title: "Launch" },
  ];
  const [activeCard, setActiveCard] = useState(1);

  const handleToggle = (id) => {
    setActiveCard((prev) => (prev === id ? prev : id));
  };

  return (
    <div className=" py-8">
      <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
      <p className="text-base mb-6">
        At Mansha & Brothers, we have developed our 4 Ds Approach – Discover,
        Design, Develop, Deliver, Support. This combines tradition with
        innovation to deliver lasting value. From understanding your needs to
        creating and delivering high-performance products, we ensure precision
        and efficiency at every step.
      </p>

<div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
  {cardData.map((card) => {
    const isActive = activeCard === card.id;
    return (
      <div
        key={card.id}
        onClick={() => handleToggle(card.id)}
        className={`
          relative cursor-pointer overflow-hidden rounded-[1.5rem]
          my-2 lg:my-0
          /* sizing */
          w-full ${isActive ? "lg:w-3/5" : "lg:w-1/5"}
          h-32 lg:h-40

          /* colors */
          ${isActive ? "bg-[#3C9BE8] text-white" : "bg-blue-100 text-gray-800"}

          /* smooth transitions */
          transition-[width,height,background-color] duration-500 ease-in-out
        `}
      >
        {/* Top row: index */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className={`text-lg w-full font-medium ${isActive ? "" : "text-center"}`}>
            {String(card.id).padStart(2, "0")}
          </span>

          {/* Active: X in bottom-right, faded in */}
          {isActive && (
            <div
              className="absolute bottom-4 right-4 rounded-full border-2 p-2
                         transition-opacity duration-500 ease-in-out  animate-fadeIn"
            >
              <X className="w-6 h-6 stroke-white" />
            </div>
          )}

          {/* Collapsed: + centered, popped in */}
          {!isActive && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         rounded-full border-2 p-2 border-gray-800
                         transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <Plus className="w-8 h-8 stroke-gray-800" />
            </div>
          )}
        </div>

        {/* Active title: fade & slide in */}
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-start px-6">
            <h3
              className="text-3xl lg:text-4xl font-extrabold leading-tight text-white
                         transition-opacity duration-500 ease-in-out  animate-fadeIn"
            >
              {card.title}
            </h3>
          </div>
        )}
      </div>
    );
  })}
</div>


      <Link href="/identity">
        <button className="mt-6 bg-[#3C9BE8] text-white text-lg px-5 py-3 rounded-lg">
          More about Our Identity
        </button>
      </Link>

      <hr className="my-8 border-gray-300" />
    </div>
  );
}
