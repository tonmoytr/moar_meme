"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 md:py-16 border-t border-black/10"
      style={{ backgroundColor: "#F69CA0" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          {/* Replace /logo.png with your logo */}
          <Image
            src="/assets/logo.png"
            alt="MOAR Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 mt-2">
          <Link
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-black rounded-none bg-white hover:bg-black hover:text-white transition-colors"
          >
            {/* Telegram icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M9.3 16.9c-.3 0-.2-.1-.3-.4l-.7-2.4 8.5-5.4c.4-.2.1-.3-.2-.1l-10.5 6.6-2.3-.7c-.5-.2-.5-.5.1-.7l17.7-6.9c.4-.2.8.1.6.9l-3 14.1c-.1.6-.5.8-1 .5l-5-3.7-2.4 2.3c-.3.4-.5.4-.5 0l.1-2.8 10.3-9.3" />
            </svg>
          </Link>

          <Link
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-black rounded-none bg-white hover:bg-black hover:text-white transition-colors"
          >
            {/* X (Twitter) icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M18.244 2H21l-6.45 7.372L22 22h-6.769l-5.3-7.093L3.6 22H1l6.95-7.945L2 2h6.85l4.78 6.405L18.244 2Zm-2.373 18.4h1.764L7.2 3.6H5.33l10.54 16.8Z" />
            </svg>
          </Link>

          <Link
            href="https://www.dextools.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center border border-black rounded-none bg-white hover:bg-black hover:text-white transition-colors"
          >
            {/* Dextools icon (generic link icon) */}
            <Image
              src="/assets/dexs.webp"
              alt="MOAR Logo"
              width={120}
              height={50}
              className="object-contain"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h5v2H6.41l9.3 9.29-1.42 1.42L5 8.41V19h11v-4h2v6H3V5Z" />
            </svg> */}
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm font-medium opacity-80 mt-4">
          © {new Date().getFullYear()} MOAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
