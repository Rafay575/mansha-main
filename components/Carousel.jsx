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
        title: "Precision in Every Step",
        content:
            "We apply continuous improvement principles to everything we do. Through lean manufacturing, data-driven quality control, and rigorous benchmarking, we ensure consistent, high performance.",
    },
    {
        id: 2,
        title: "Create to Evolve",
        content:
            "Innovation is structured into our development cycles. From automated workflows to next-gen material research, we attempt to stay ahead by designing smarter, faster solutions.",
    },
    {
        id: 3,
        title: "The Human Element",
        content:
            "Worker welfare is a non-negotiable. We invest in safe environments, fair compensation, and ongoing development. Human-centric systems build resilient teams and better outcomes.",
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
            <Carousel opts={{ align: "start" }} setApi={setApi} className="w-[70%] md:w-full max-w-xl">
                <CarouselContent>
                    {carouselData.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-full">
                            <div className="p-4">
                                <Card className="bg-[#EAF7FE] text-black shadow-lg h-[340px]">
                                    <CardContent className="flex flex-col gap-4 p-6">
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-sm leading-6">{item.content}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}