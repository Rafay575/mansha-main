"use client";
import React, { useState } from "react";
import Link from 'next/link'


export default function Approch() {
  const cardData = [
    { id: 1, title: "Discover" },
    { id: 2, title: "Plan" },
    { id: 3, title: "Design" },
    { id: 4, title: "Build" },
    { id: 5, title: "Launch" },
  ];
  const [activeCard, setActiveCard] = useState(1);

  const handleToggle = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="container mx-auto">
        <p className="text-[38px] xl:text-[43px] font-bold">Our Approach</p>
        <p className="text-[17px] xl:text-[19px] font-[400] mt-[15px]">
          At Mansha & Brothers, we have developed our 4DS Approach - Discover, Design, Develop, Deliver, Support. This combines tradition
          with innovation to deliver lasting value. From understanding your needs to creating and delivering high-performance products, we
          ensure precision and efficiency at every step.
        </p>

        <div className="flex gap-[5px] sm:gap-[10px] flex-wrap items-start justify-start py-[20px] w-full">
          {cardData.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleToggle(card.id)}
                className={`rounded-[25px] p-2 sm:p-4 transition-all duration-300 cursor-pointer
                  ${isActive ? "bg-[#3C9BE8] text-white w-[30%]" : "bg-[#D2ECFA] text-black w-[15%]"}
                  h-[150px] flex flex-col ${!isActive ? "items-center justify-center" : ""}
              `}
              >
                <div className={`text-lg font-semibold mb-2 ${isActive ? "text-white" : "text-[#242021]"}`}>
                  {card.id < 10 ? `0${card.id}` : card.id}
                </div>

                {isActive ? (
                  <>
                    <div className="text-[20px] sm:text-[30px] md:text-[40px] font-bold">{card.title}</div>
                    <div className="mt-auto flex justify-end">
                      <div className="w-6 h-6 rounded-full border flex items-center justify-center border-white">
                        <span className="text-sm font-bold">×</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[#242021]">
                    <span className="text-lg font-bold">+</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Link href={"/identity"}>
          <button className="bg-[#3C9BE8] text-white text-[19px] px-[20px] py-[15px] rounded-[10px] mt-[10px] lg:mt-[0]">
            More about Our Identity
          </button>
        </Link>
        <hr className="my-[20px] border-[1.5px] border-[#808080]" />
      </div>
    </div>
  );
}
