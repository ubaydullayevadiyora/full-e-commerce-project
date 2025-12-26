// src/components/e-commerce/BestSellingProducts/BestSellingProducts.tsx

"use client";

import Link from "next/link";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import styles from "./BestSellingProducts.module.scss";

interface Product {
  id: number;
  name: string;
  price?: number;
  originalPrice?: number;
  discountedPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  slug?: string;
}

const bestSellingProducts: Product[] = [
  {
    id: 1,
    name: "The north coat",
    discountedPrice: 260,
    originalPrice: 360,
    discount: 28,
    rating: 5,
    reviews: 65,
    image:
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "/product/the-north-coat",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    discountedPrice: 960,
    originalPrice: 1160,
    discount: 17,
    rating: 4.5,
    reviews: 65,
    image:
      "https://images.pexels.com/photos/2422476/pexels-photo-2422476.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "/product/gucci-duffle-bag",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    discountedPrice: 160,
    originalPrice: 170,
    discount: 6,
    rating: 4.5,
    reviews: 65,
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "/product/rgb-cpu-cooler",
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    rating: 5,
    reviews: 65,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "/product/small-bookshelf",
  },
];

export default function BestSellingProducts() {
  return (
    <section className={styles.bestSelling}>
      {/* Section Tag */}
      <div className={styles.sectionTag}>
        <div className={styles.redBar}></div>
        <span className={styles.tagText}>This Month</span>
      </div>

      {/* Title and View All Button */}
      <div className={styles.titleRow}>
        <h2 className={styles.title}>Best Selling Products</h2>
        <Link href="/products/best-selling" className={styles.viewAllButton}>
          View All
        </Link>
      </div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {bestSellingProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount={!!product.discount}
            showAddToCart={true}
          />
        ))}
      </div>
    </section>
  );
}
