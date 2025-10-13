"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Discover",
    content:
      "Since 1959, we’ve grown from a local shop to a reliable and trusted manufacturer by staying true to what matters. We create with intention, partnering with brands that value craft, purpose, and impact.",
  },
  {
    id: 2,
    title: "Design",
    content:
      "Gathered insights are transformed into practical, high-performance solutions. Each concept is engineered for function, durability, and scalability from the start.",
  },
  {
    id: 3,
    title: "Develop",
    content:
      "Prototypes evolve through testing, data, and collaboration. The result is refined product ready for consistent, large-scale production.",
  },
  {
    id: 4,
    title: "Deliver",
    content:
      "Precision planning and intense quality control ensure reliability across every shipment. Global partners receive on-time delivery with verified standards.",
  },
  {
    id: 5,
    title: "Support",
    content:
      "Partnership extends beyond production. Continuous improvement, transparent communication, and technical support sustain long-term performance.",
  },
];



export default function Methods() {
  const [activeCard, setActiveCard] = useState(1);

  // Helper to decide if screen is md or bigger
  const [isMd, setIsMd] = React.useState(false);
  React.useEffect(() => {
    const onResize = () => setIsMd(window.innerWidth >= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleToggle = (id) => {
    if (id !== activeCard) setActiveCard(id);
  };

  return (
    <div className="working mt-[60px] py-20">
      <p className="text-[50px] md:text-[70px] text-white font-bold leading-[72px] text-center">
        The <span className="text-[#3F82D7]">4DS</span> Method
      </p>

      <div className="flex flex-wrap justify-center gap-3 py-[20px] lg:px-32 w-full mx-auto">
        {cardData.map((card) => {
          const isActive = activeCard === card.id;

          // Responsive: width for md+, height for sm
          const transitionStyles = isMd
            ? {
                width: isActive ? "35%" : "14%",
                height: "450px", // fixed height on md+
                minWidth: isActive ? "220px" : "110px",
              }
            : {
                width: "96%",
                height: isActive ? "400px" : "100px",
                minWidth: "200px",
              };

          return (
            <motion.div
              key={card.id}
              onClick={() => handleToggle(card.id)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`
                rounded-[25px] p-2 sm:p-4 cursor-pointer overflow-hidden flex flex-col
                bg-gray-50 bg-opacity-50 text-white mx-auto
                transition-all duration-500 ease-in-out
              `}
              style={transitionStyles}
            >
              {/* Header */}
              <div className="flex items-center  my-2 ml-6 text-white font-semibold text-2xl">
                {card.id.toString().padStart(2, "0")}
                {isActive && (
                  <>
                    <span className="mx-2 text-2xl">|</span>
                    <span className="ml-2 text-5xl font-semibold">
                      {card.title}
                    </span>
                  </>
                )}
              </div>

              {/* Content */}
              <AnimatePresence initial={false} mode="wait">
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[15px] p-8 lg:p-14 transition-all sm:text-[15px] md:text-[20px] font-medium flex flex-col flex-grow"
                  >
                    {card.content}
                    <div className="mt-auto flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Plus icon when collapsed */}
              {!isActive && (
                <motion.div
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center mt-auto self-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Plus className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}