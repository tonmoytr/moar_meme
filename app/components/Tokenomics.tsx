"use client";

import { useState } from "react";

interface CardProps {
  label: string;
  value: string;
}

const CA = "0x498C0ae41f6c9eBAc59498d932ECECDf33D14444";

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <section
      id="tokenomics"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          TOKENOMICS
        </h2>

        {/* Contract Address (copyable) */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex-1 bg-white border border-black px-4 py-3 sm:py-4 rounded-none overflow-x-auto">
              <p className="text-xs tracking-wider uppercase opacity-60">
                Contract Address
              </p>
              <p className="mt-1 font-mono text-sm sm:text-base break-all">
                {CA}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="shrink-0 h-full px-9 py-6 sm:py-4 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black font-semibold rounded-none hover:opacity-90 transition-opacity"
              aria-label="Copy contract address"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card label="Supply" value="1,000,000,000" />
          <Card label="Ticker" value="$MOAR" />
          <Card label="Tax" value="0 / 0" />
          <Card label="LP" value="BURNED" />
        </div>
      </div>
    </section>
  );
}

function Card({ label, value }: CardProps) {
  return (
    <div className="bg-white border-l-4 border-b-4 border-black p-6 shadow-[0_2px_0_rgba(0,0,0,0.15)]">
      <p className="text-xs tracking-widest uppercase opacity-60">{label}</p>
      <p className="mt-2 text-2xl md:text-3xl font-extrabold">{value}</p>
    </div>
  );
}
