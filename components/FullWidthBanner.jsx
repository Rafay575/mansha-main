"use client"
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const IMAGES = ["/images/s1.png", "/images/s2.png", "/images/s3.png", "/images/s4.png"];
const TRANSITION_MS = 500;   // slide animation duration
const AUTOPLAY_EVERY = 3000; // time each slide stays before moving (change if you want)

export default function FullWidthBanner() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  // Duplicate first slide at end for seamless loop
  const track = useMemo(() => [...IMAGES, IMAGES[0]], []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_EVERY);
    return () => clearInterval(id);
  }, []);

  // When hitting the cloned slide, snap back to 0 without transition
  useEffect(() => {
    if (index === IMAGES.length) {
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
        requestAnimationFrame(() => setWithTransition(true));
      }, TRANSITION_MS); // let current transition finish
      return () => clearTimeout(t);
    }
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner height: tweak as needed */}
      <div className="relative  h-[20vh] min-h-[200px] w-full md:h-[400px]">
        <div
          className="flex !rounded-xl h-full"
          style={{
            width: `${track.length * 100}%`,
            transform: `translate3d(-${index * (100 / track.length)}%, 0, 0)`,
            transition: withTransition ? `transform ${TRANSITION_MS}ms ease-in-out` : "none",
          }}
        >
          {track.map((src, i) => (
            <div key={`${src}-${i}`} className="relative !rounded-xl h-full w-full" style={{ flex: `0 0 ${100 / track.length}%` }}>
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

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, i) => {
            const active = index % IMAGES.length === i;
            return (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${active ? "bg-white" : "bg-white/50"} ring-1 ring-black/10`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
