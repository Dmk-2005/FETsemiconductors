"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  { src: "/hero-bg-1.jpg", alt: "Semiconductor chip circuit board illustration" },
  { src: "/hero-bg-2.jpg", alt: "Engineer holding semiconductor chip" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-transform ease-in-out ${
              index === current
                ? transitioning
                  ? "scale-110 duration-[6000ms]"
                  : "scale-105 duration-[6000ms]"
                : "scale-100 duration-0"
            }`}
            style={{
              animation: index === current ? "kenBurns 6s ease-in-out infinite alternate" : "none",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="absolute inset-0 z-[2] opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container-custom relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              <span className="block mb-3">Engineering from</span>
              <span className="block mb-3">Legacy to Next</span>
              <span className="block text-orange-400 mt-2">Generation Silicon</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed"
            >
              Delivering cutting-edge semiconductor engineering services and design solutions that enable the development of next-generation chips and innovative electronic products.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-orange-400" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.12); }
        }
        .duration-1200 {
          transition-duration: 1200ms;
        }
      `}</style>
    </section>
  );
}
