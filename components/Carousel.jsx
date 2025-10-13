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
    title: "Focused on You",
    content:
      "Our priority is your success, built on responsiveness, reliability, and long-term value.",
  },
  {
    id: 2,
    title: "Clear By Design",
    content:
      "Transparency guides every stage from sourcing to delivery.",
  },
  {
    id: 3,
    title: "Precision In Every Step",
    content:
      "We follow continuous improvement in everything we do. Through lean manufacturing, data-driven quality control, and benchmarking, we deliver a consistent level of manufacturing.",
  },
  {
    id: 4,
    title: "Future First",
    content:
      "We drive energy efficiency, circular design, and material responsibility with measurable and evolving goals.",
  },
  {
    id: 5,
    title: "The Human Element",
    content:
      "Worker welfare will always be non-negotiable. Safety, fair pay, and growth create stronger, more capable teams.",
  },
  {
    id: 6,
    title: "Created to Evolve",
    content:
      "Streamlined processes, advanced materials, and designs built for the future.",
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
                                <Card className="bg-[#EAF7FE] text-black shadow-lg h-[370px] lg:h-[250px]">
                                    <CardContent className="flex flex-col gap-4 px-8 pb-8">
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