"use client";
import Image from "next/image";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }}
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider mb-10">
        LEGENDARY ARTWORKS
      </h2>

      {/* Centered, capped width; image dictates height */}
      <div className="mx-auto w-full max-w-7xl">
        <Image
          src="/assets/gallery.png"
          alt="Legendary Artworks"
          width={2400} // any proportional numbers are fine
          height={3600} // keep the correct tall ratio
          className="w-full h-auto block" // block avoids the inline-image gap
          priority
        />
      </div>
    </section>
  );
}
