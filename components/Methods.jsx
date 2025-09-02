"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        The <span className="text-[#3F82D7]">4 Ds</span> Method
      </p>

      <div className="flex flex-wrap justify-center gap-3 py-[20px] lg:px-32 w-full mx-auto">
        {cardData.map((card) => {
          const isActive = activeCard === card.id;

          // Responsive: width for md+, height for sm
          const transitionStyles = isMd
            ? {
                width: isActive ? "35%" : "14%",
                height: "600px", // fixed height on md+
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