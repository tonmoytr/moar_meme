import About from "./components/About";
import Gallery from "./components/Gallery2";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Tokenomics />
      <HowToBuy />
    </>
  );
}
