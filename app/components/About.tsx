
import Image from "next/image";

export default function About() {
  return (
    <section id="about"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F69CA0" }} // salmon-pink like the reference
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* LEFT: IMAGE */}
          <div className="flex justify-center md:justify-start">
            {/* Replace /about-building.png with your image */}
            <div className="relative w-[18rem] sm:w-88 lg:w-md aspect-3/5">
              <Image
                src="/assets/moar.png"
                alt="MOAR Building"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 32vw"
                priority
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="text-[#111]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              BE A “MOAR” GUEST!
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-semibold">
              The First-ever NFT Project of Joan Cornellà
            </p>

            <div className="mt-6">
              <p className="text-lg italic font-semibold">
                “I would like, if I may, to take you on a strange journey.”
              </p>
              <p className="mt-1 text-sm opacity-70">
                The Rocky Horror Picture Show 1975
              </p>
            </div>

            <div className="mt-8 max-w-xl leading-relaxed text-[15px] sm:text-base opacity-95">
              <p>
                Moar is a meme character by the famous artist Joan Cornella,
                known for dark humor and simple but bold messages. Today, BNB
                Chain posted Moar with the slogan “Work Hard — Build Harder.”
              </p>
              <p className="mt-4">
                It’s a fun way to remind the community that memes can inspire
                real building.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xl sm:text-2xl font-extrabold">
              {/* pin icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="#c0392b"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
              <span>0 Moar Street, METAVERSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
