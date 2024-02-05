import About from "./components/About";
import { Dinner } from "./components/Dinner";
import Hero from "./components/Hero";
import Qualidade from "./components/Qualidade";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Qualidade />
      <Dinner />
    </>
  );
}
