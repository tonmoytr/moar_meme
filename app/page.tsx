import About from "./components/About";
import ArtWork from "./components/ArtWork";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ArtWork />
      <Tokenomics />
      <HowToBuy />
    </>
  );
}
