import Cards from "@/components/Cards";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
// import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PopularItems from "@/components/PopularItems";

 
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cards/>
      <HowItWorks/>
      {/* <Counter/> */}
      <PopularItems/>
      <FeaturedRestaurants/>
    </main>
  );
}
