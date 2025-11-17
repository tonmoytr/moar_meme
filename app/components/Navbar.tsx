"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MoarNavbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#howtobuy", label: "How to Buy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#F69CA0] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your logo image if you have one */}
          <Image
            src="/assets/logo.png"
            alt="MOAR Logo"
            width={50}
            height={40}
            className="object-contain"
          />
          {/* <span className="text-lg font-semibold tracking-wide">MOAR</span> */}
        </Link>

        {/* Right: Desktop menu */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-medium hover:text-teal-800 hover:font-bold transition-opacity"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="https://dexscreener.com/bsc/0x7c3f57f714ee1fa0bb76911a18684bef8c624122"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold bg-black text-white rounded-none hover:opacity-90 transition-opacity"
          >
            DEXSCREENER
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-black/10"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden border-t border-black/10 transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-base font-medium hover:opacity-70 transition-opacity"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://www.dextools.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold bg-black text-white rounded-none hover:opacity-90 transition-opacity"
              onClick={() => setOpen(false)}
            >
              DEXTools
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
