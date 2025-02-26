import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

 
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cards/>
      <HowItWorks/>
    </main>
  );
}
