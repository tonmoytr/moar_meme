"use client";

import { useState } from "react";

const STEPS = [
  {
    q: "INSTALL A WALLET (METAMASK)",
    a: "Add MetaMask to your browser/phone. You'll use this to hold BNB and the token.",
  },
  {
    q: "ADD BNB SMART CHAIN NETWORK",
    a: "Network: BNB Smart Chain (BSC) — Chain ID 56, Symbol BNB, Explorer bscscan.com. You can add it from MetaMask → Add network.",
  },
  {
    q: "FUND YOUR WALLET WITH BNB",
    a: "Buy BNB on an exchange or card on-ramp, then send to your MetaMask address on BSC (BEP-20).",
  },
  {
    q: "CONNECT TO PANCAKESWAP",
    a: "Open pancakeswap.finance, click Connect Wallet, choose MetaMask.",
  },
  {
    q: "IMPORT TOKEN & SWAP",
    a: "Paste the token contract address, set slippage if needed (e.g., 1–5%), enter BNB amount, and Swap.",
  },
];

export default function HowToBuy() {
  const [open, setOpen] = useState(0); // first open by default

  const toggle = (idx: number) => setOpen((cur) => (cur === idx ? -1 : idx));

  return (
    <section id="howtobuy"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }} // same as About
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          HOW TO BUY
        </h2>

        <div className="mt-10 space-y-4 md:space-y-2">
          {STEPS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="mx-auto max-w-4xl">
                {/* Header row */}
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between bg-white px-6 py-6 md:py-7 text-left shadow-sm"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-extrabold tracking-wide uppercase">
                    {item.q}
                  </span>
                  <span className="text-2xl md:text-3xl leading-none select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Answer panel (pink strip like reference) */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="bg-[#F69CA0] px-6 py-4 text-center text-sm md:text-base">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional tiny footer note (replace with token CA if you want) */}
        {/* <p className="mt-6 text-center text-sm opacity-70">
          Tip: After launch, paste the token contract here: 0xYourTokenContract…
        </p> */}
      </div>
    </section>
  );
}
