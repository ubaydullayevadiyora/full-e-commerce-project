import Navbar from "@/components/common/Navbar/Navbar";
import HomeHero from "@/components/e-commerce/HomeHero/HomeHero";
import FlashSale from "@/components/e-commerce/FlashSale/FlashSale";

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <main className="home container">
        <HomeHero />
        <FlashSale />
      </main>
    </>
  );
}
