"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    id: 1,
    title: "Focused on you",
    content:
      "We conduct our operations with one goal in mind: customer success. Every process, product, and partnership is shaped by real world requirements and feedback. Responsiveness, reliability, and long-term value define how we deliver.",
  },
  {
    id: 2,
    title: "Clear by Design",
    content:
      "Transparency is embedded in our systems from procurement to delivery. We maintain open communication, consistent reporting, and traceable workflows. This clarity builds trust and strengthens collaboration.",
  },
  {
    id: 3,
    title: "Precision in Every Step",
    content:
      "We apply continuous improvement principles to everything we do. Through lean manufacturing, data-driven quality control, and rigorous benchmarking, we ensure consistent, high performance.",
  },
  {
    id: 4,
    title: "Future First",
    content:
      "We prioritize energy efficiency, circular design, and material responsibility across our supply chain. Our environmental targets are measurable, monitored, and evolving.",
  },
  {
    id: 5,
    title: "The Human Element",
    content:
      "Worker welfare is a non-negotiable. We invest in safe environments, fair compensation, and ongoing skill and people development. Human-centric systems lead to resilient teams and superior outcomes.",
  },
  {
    id: 6,
    title: "Create to Evolve",
    content:
      "Innovation is structured into our development cycles. From automated workflows to next-gen material research, we attempt to stay ahead by designing smarter, faster, and evolving.",
  },
];


export default function Carouselone() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(1); // Start with index 1 (second item)
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        // Set the total number of slides
        setCount(api.scrollSnapList().length);

        // Set the initial slide to index 1 (second item)
        api.scrollTo(1, { immediate: true });

        // Update current slide when selection changes
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-full flex justify-center py-10">
            <Carousel opts={{ align: "start"}}  setApi={setApi} className="w-[70%] md:w-[80%] max-w-xl">
                <CarouselContent>
                    {carouselData.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-full">
                            <div className="p-2">
                                <Card className="bg-[#EAF7FE] text-black shadow-lg h-[370px] lg:h-[220px]">
                                    <CardContent className="flex flex-col gap-4 p-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-center">{item.title}</h3>
                                        <p className="text-base md:text-lg font-semibold  leading-6">{item.content}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
               
            </Carousel>
        </div>
    );
}