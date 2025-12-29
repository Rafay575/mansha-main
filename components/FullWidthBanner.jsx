"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = ["/images/s1.png", "/images/s2.png", "/images/s3.png", "/images/s4.png"];

const TRANSITION_MS = 500;   // slide animation duration
const AUTOPLAY_EVERY = 3000; // time each slide stays before moving
const PAUSE_AFTER_CLICK = 5000; // pause autoplay after arrow click

export default function FullWidthBanner() {
  const [index, setIndex] = useState(0); // can go to IMAGES.length (clone)
  const [withTransition, setWithTransition] = useState(true);

  // Duplicate first slide at end for seamless loop
  const track = useMemo(() => [...IMAGES, IMAGES[0]], []);

  // for pausing autoplay on manual interaction
  const lastManualRef = useRef(0);

  // autoplay
  useEffect(() => {
    const id = window.setInterval(() => {
      // if user clicked recently, skip autoplay
      if (Date.now() - lastManualRef.current < PAUSE_AFTER_CLICK) return;
      setIndex((i) => i + 1);
    }, AUTOPLAY_EVERY);

    return () => window.clearInterval(id);
  }, []);

  // When hitting the cloned slide, snap back to 0 without transition
  useEffect(() => {
    if (index === IMAGES.length) {
      const t = window.setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
        requestAnimationFrame(() => setWithTransition(true));
      }, TRANSITION_MS);
      return () => window.clearTimeout(t);
    }
  }, [index]);

  const goNext = () => {
    lastManualRef.current = Date.now();
    setIndex((i) => i + 1);
  };

  const goPrev = () => {
    lastManualRef.current = Date.now();

    // if we're at the start, do a smooth "wrap" illusion:
    // jump to clone position (end), then go back one with transition
    if (index === 0) {
      setWithTransition(false);
      setIndex(IMAGES.length); // go to cloned slide instantly
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          setIndex(IMAGES.length - 1); // animate to last real slide
        });
      });
      return;
    }

    setIndex((i) => i - 1);
  };

  const activeDot = index % IMAGES.length;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[20vh] min-h-[200px] w-full md:h-[400px]">
        {/* Track */}
        <div
          className="flex h-full"
          style={{
            width: `${track.length * 100}%`,
            transform: `translate3d(-${index * (100 / track.length)}%, 0, 0)`,
            transition: withTransition ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
          }}
        >
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full w-full"
              style={{ flex: `0 0 ${100 / track.length}%` }}
            >
              <Image
                src={src}
                alt={`banner-${i}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-top rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="group absolute left-3 top-1/2 -translate-y-1/2 z-10
                     rounded-full bg-black/35 backdrop-blur-md
                     p-3 shadow-lg ring-1 ring-white/15
                     transition hover:bg-black/55 active:scale-95"
        >
          <svg
            className="h-5 w-5 text-white transition group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="group absolute right-3 top-1/2 -translate-y-1/2 z-10
                     rounded-full bg-black/35 backdrop-blur-md
                     p-3 shadow-lg ring-1 ring-white/15
                     transition hover:bg-black/55 active:scale-95"
        >
          <svg
            className="h-5 w-5 text-white transition group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, i) => {
            const active = activeDot === i;
            return (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  active ? "bg-white scale-110" : "bg-white/50"
                } ring-1 ring-black/10`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
