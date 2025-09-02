"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ApproachHero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);

  // Try to play when ready
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoReady) return;

    const tryPlay = async () => {
      try {
        await v.play();
        setNeedsManualPlay(false);
      } catch (e) {
        setNeedsManualPlay(true);
      }
    };
    tryPlay();
  }, [videoReady]);

  // Resume playback on tab focus (if paused by the browser)
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible" && videoRef.current && videoReady) {
        videoRef.current.play().catch(() => setNeedsManualPlay(true));
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [videoReady]);

  const handleManualPlay = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setNeedsManualPlay(false);
    } catch (e) {
      // still blocked; user may need to tap again
    }
  };

  return (
    <section className="w-[96vw] mx-auto">
      <div>
        <div className="py-5 md:py-10 lg:py-20">
          <p className="text-[50px] leading-[40px] md:text-[101px] font-bold md:leading-[72px]">
            <span className="text-[#3c9be8]">Innovation </span>
            in <br />
            every step
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Video with fallback image */}
          <div className="w-full lg:w-1/2 p-0 pt-10 lg:p-5">
            <div className="relative h-[260px] sm:h-[360px] md:h-[440px] lg:h-[520px] rounded-[40px] overflow-hidden">
              {/* Fallback Image while video loads */}
              {!videoReady && (
                <Image
                  src="/images/load.png"
                  alt="Loading video..."
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              )}

              <video
                ref={videoRef}
                src="/images/video.mp4"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  videoReady ? "opacity-100" : "opacity-0"
                }`}
                muted
                playsInline
                loop
                autoPlay
                preload="auto"
                onLoadedData={() => setVideoReady(true)}
                onCanPlay={() => setVideoReady(true)}
                onError={() => setVideoReady(false)}
              />

              {/* Manual play overlay if autoplay blocked */}
              {needsManualPlay && (
                <button
                  onClick={handleManualPlay}
                  className="absolute inset-0 grid place-items-center bg-black/30 backdrop-blur-sm"
                  aria-label="Play video"
                >
                  <span className="px-5 py-2 rounded-full bg-white/90 text-gray-900 font-medium shadow">
                    Tap to play
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Text block */}
          <div className="w-full lg:w-1/2 py-5 flex flex-col items-start">
            <p className="text-[25px] xl:text-[40px] lg:pr-10 mt-2 md:mt-0 font-bold">
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
