"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HomeHero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  // Try autoplay when ready
  useEffect(() => {
    if (videoReady && videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay blocked, video will remain paused
      });
    }
  }, [videoReady]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pl-[20px] md:pl-[50px] pb-[40px] overflow-hidden">
      {/* Fallback Image */}
      {!videoReady && (
        <Image
          src="/images/load.png"
          alt="Background"
          fill
          className="object-cover z-0 transition-opacity duration-500"
          priority
        />
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        src="/images/video.mp4"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Text Content */}
      <div className="relative z-[2]">
        <p className="text-white font-bold text-[45px] md:text-[55px] mb-3 lg:text-[70px] leading-[50px] lg:leading-[60px]">
          FROM LEGACY
        </p>
        <p className="text-white font-bold text-[45px] md:text-[65px] lg:text-[90px] leading-[40px] lg:leading-[60px]">
          TO INNOVATION
        </p>
      </div>
    </section>
  );
}
