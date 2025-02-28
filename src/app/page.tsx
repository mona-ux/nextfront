import Cards from "@/components/Cards";
import { DailyDiscounts } from "@/components/DailyDiscounts";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { InstallApp } from "@/components/InstallApp";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order";
import PopularItems from "@/components/PopularItems";
import SandwichDeal from "@/components/SandwichDeal";
import { SearchFood } from "@/components/SearchFood";

 
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cards/>
      <HowItWorks/>
      <PopularItems/>
      <FeaturedRestaurants/>
      <SearchFood/>
      <DailyDiscounts/>
      <InstallApp/>
      <SandwichDeal/>
      <Order/>
      <Footer/>
    </main>
  );
}
