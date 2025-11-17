"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stagger } from "./anim";

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

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }} // salmon-pink like the reference
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid items-start gap-10 md:grid-cols-2 lg:gap-16"
        >
          {/* LEFT: IMAGE */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-start"
          >
            {/* Replace /about-building.png with your image */}
            <div className="relative w-[18rem] sm:w-88 lg:w-md aspect-3/5">
              <Image
                src="/assets/moar.png"
                alt="MOAR Building"
                width={350}
                height={450}
                className="object-contain"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 32vw"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: TEXT */}
          <motion.div variants={fadeUp} className="text-[#111] mt-2 md:mt-32">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              ABOUT $MOAR
            </h2>

            {/* <p className="mt-2 text-lg sm:text-xl font-semibold">
              The First-ever NFT Project of Joan Cornellà
            </p> */}

            {/* <div className="mt-6">
              <p className="text-lg italic font-semibold">
                “I would like, if I may, to take you on a strange journey.”
              </p>
              <p className="mt-1 text-sm opacity-70">
                The Rocky Horror Picture Show 1975
              </p>
            </div> */}

            <div className=" mt-8 md:mt-16 max-w-xl leading-relaxed text-lg opacity-95">
              <p className="text-2xl font-normal tracking-wide leading-12">
                Moar is a meme created by the famous artist Joan Cornella,
                known for dark humor and simple but bold messages. Today, BNB
                Chain posted Moar with the slogan “Work Hard — Build Harder.”
              </p>
              {/* <p className="mt-4">
                It’s a fun way to remind the community that memes can inspire
                real building.
              </p> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
