"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export default function Hero() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "100vh",
        // sharp 50/50 split (top yellow, bottom teal)
        background:
          "linear-gradient(to bottom, #ffc502 0%, #ffc502 50%, #ffc502 50%, #ffc502 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid min-h-screen grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 sm:px-6 lg:px-8"
        >
          {/* Left: Text */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h1 className="text-4xl  font-semibold leading-tight sm:text-5xl md:text-4xl md:font-light w-1/2 bg-white border border-black text-center mb-8">
              BNB CHAIN
            </h1>
            <h2 className="text-4xl  font-semibold leading-tight sm:text-5xl md:text-9xl md:font-bold">
              MOAR
            </h2>

            <p className="mt-4 max-w-xl sm:text-lg md:text-2xl font-normal">
              Work Hard and Build Harder! <br />
              Moar - A strong narrative given by BNB Chain, created by Joan
              Cornellà.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/how-to-buy"
                className="px-5 py-3 text-xl font-semibold bg-black text-white rounded-none hover:opacity-90 transition-opacity"
              >
                How to Buy
              </Link>
              <Link
                href="https://www.dextools.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xl font-semibold bg-black text-white rounded-none hover:opacity-90 transition-opacity"
              >
                DEXTools
              </Link>

              {/* Socials */}
              <Link
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="ml-1 inline-flex h-11 w-11 items-center justify-center border border-black rounded-none bg-white hover:bg-black hover:text-white transition-colors"
                title="Telegram"
              >
                {/* Telegram Icon (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M9.3 16.9c-.3 0-.2-.1-.3-.4l-.7-2.4 8.5-5.4c.4-.2.1-.3-.2-.1l-10.5 6.6-2.3-.7c-.5-.2-.5-.5.1-.7l17.7-6.9c.4-.2.8.1.6.9l-3 14.1c-.1.6-.5.8-1 .5l-5-3.7-2.4 2.3c-.3.4-.5.4-.5 0l.1-2.8 10.3-9.3" />
                </svg>
              </Link>

              <Link
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="inline-flex h-11 w-11 items-center justify-center border border-black rounded-none bg-white hover:bg-black hover:text-white transition-colors"
                title="X"
              >
                {/* X (Twitter) Icon (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.45 7.372L22 22h-6.769l-5.3-7.093L3.6 22H1l6.95-7.945L2 2h6.85l4.78 6.405L18.244 2Zm-2.373 18.4h1.764L7.2 3.6H5.33l10.54 16.8Z" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center md:justify-end"
          >
            {/* Replace /hero-token.png with your asset */}
            <div className="relative aspect-square sm:w-80 lg:w-md">
              <Image
                src="/assets/hero.jpeg"
                alt="MOAR Token"
                width="650"
                height="800"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
