import React from "react";
import Image from "next/image";

const ApproachHero = () => {
  return (
    <section className="w-[96vw] mx-auto">
      {/* Section 1 */}
      <div>
        <div className="py-5 md:py-10 lg:py-20">
          <p className="text-[50px] leading-[40px] md:text-[101px] font-bold md:leading-[72px]">
            <span className="text-[#3c9be8]">Innovation </span>in <br />
            every step
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Image with half Aero overlay */}
          <div className="w-full lg:w-1/2 p-0 pt-10 lg:p-5">
            <div className="relative h-[260px] sm:h-[360px] md:h-[440px] lg:h-[520px] rounded-[40px] overflow-hidden">
              <Image
                src="/images/teaching.webp"
                alt="home2"
                fill
                className="object-cover"
                priority
              />
              {/* Half-width Aero glass overlay (right half on lg+, top half on small) */}
            
            </div>
          </div>

          {/* Text block */}
          <div className="w-full lg:w-1/2 py-5 flex flex-col items-start">
            <p className="text-[25px] xl:text-[40px] lg:pr-10 mt-2 xl:mt-8 font-bold">
              From process optimization and smart tooling to responsible
              material sourcing, we embed forward-thinking solutions into every
              layer of our work. Our approach blends data, design, and
              discipline to create products that don’t just meet standards —
              they redefine them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachHero;
