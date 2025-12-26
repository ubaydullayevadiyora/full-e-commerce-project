// src/components/e-commerce/NewArrivals/NewArrivals.tsx

"use client";

import Link from "next/link";
import styles from "./NewArrivals.module.scss";

interface ArrivalItem {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  size: "large" | "medium" | "small";
}

const arrivals: ArrivalItem[] = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image:
      "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/product/playstation-5",
    size: "large",
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image:
      "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/category/womens-collections",
    size: "medium",
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image:
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/product/amazon-speakers",
    size: "small",
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "/product/gucci-perfume",
    size: "small",
  },
];

export default function NewArrivals() {
  return (
    <section className={styles.newArrivals}>
      {/* Section Tag */}
      <div className={styles.sectionTag}>
        <div className={styles.redBar}></div>
        <span className={styles.tagText}>Featured</span>
      </div>

      {/* Title */}
      <h2 className={styles.title}>New Arrival</h2>

      {/* Grid Layout */}
      <div className={styles.grid}>
        {arrivals.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`${styles.card} ${styles[item.size]}`}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <span className={styles.shopNow}>Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
