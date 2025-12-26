// src/app/page.tsx (yoki src/app/(site)/page.tsx)

import Header from "@/components/common/Header/Header";
import CategorySidebar from "@/components/e-commerce/CategorySidebar/CategorySidebar";
import HomeHero from "@/components/e-commerce/HomeHero/HomeHero";
import FlashSale from "@/components/e-commerce/FlashSale/FlashSale";
import BrowseCategory from "@/components/e-commerce/BrowseCategory/BrowseCategory";
import Footer from "@/components/common/Footer/Footer";
import styles from "./page.module.scss";
import BestSellingProducts from "../../components/e-commerce/BestSellingProducts/BestSellingProducts";
import FeaturedBanner from "../../components/e-commerce/FeaturedBanner/FeaturedBanner";
import NewArrivals from "../../components/e-commerce/NewArrivals/NewArrivals";
import Services from "../../components/e-commerce/Services/Services";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section with Sidebar */}
          <section className={styles.heroSection}>
            <CategorySidebar />
            <div className={styles.heroWrapper}>
              <HomeHero />
            </div>
          </section>

          {/* Flash Sales Section */}
          <FlashSale />

          {/* Browse by Category Section */}
          <BrowseCategory />

          {/* Best Selling Products (Optional - qo'shsangiz bo'ladi) */}
          <BestSellingProducts />
          {/* <BestSellingProducts /> */}
          <FeaturedBanner />
          <NewArrivals />
          <Services />
        </div>
      </main>

      <Footer />
    </>
  );
}
