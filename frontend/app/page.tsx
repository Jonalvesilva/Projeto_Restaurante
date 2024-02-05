import About from "./components/About";
import { Chefs } from "./components/Chefs";
import { Depoimentos } from "./components/Depoimentos";
import { Dinner } from "./components/Dinner";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Qualidade from "./components/Qualidade";
import { Reservas } from "./components/Reservas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Qualidade />
      <Dinner />
      <Chefs />
      <Depoimentos />
      <Reservas />
      <Footer />
    </>
  );
}
