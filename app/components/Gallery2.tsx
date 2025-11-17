"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const IMAGES = [
  "/assets/gallery/g1.png",
  "/assets/gallery/g2.png",
  "/assets/gallery/g3.png",
  "/assets/gallery/g4.png",
  "/assets/gallery/g5.png",
  "/assets/gallery/g6.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }} // same as About
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight"
        >
          LEGENDARY ARTWORKS
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {IMAGES.map((src, i) => (
            <motion.figure
              variants={fadeUp}
              key={i}
              className="
                group relative bg-white
                border-l-14 border-b-14 border-[#c74046]
                p-3
                shadow-[0_2px_0_rgba(0,0,0,0.15)]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              {/* Fixed, consistent frame for all images */}
              <div className="relative w-full aspect-4/5">
                <Image
                  src={src}
                  alt={`Artwork ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  priority={i < 3}
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
