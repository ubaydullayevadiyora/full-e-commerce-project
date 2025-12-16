// src/components/e-commerce/CategorySidebar/CategorySidebar.tsx

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./CategorySidebar.module.scss";

export default function CategorySidebar() {
  const categories = [
    {
      name: "Woman's Fashion",
      hasSubmenu: true,
      href: "/category/womens-fashion",
    },
    { name: "Men's Fashion", hasSubmenu: true, href: "/category/mens-fashion" },
    { name: "Electronics", hasSubmenu: false, href: "/category/electronics" },
    {
      name: "Home & Lifestyle",
      hasSubmenu: false,
      href: "/category/home-lifestyle",
    },
    { name: "Medicine", hasSubmenu: false, href: "/category/medicine" },
    {
      name: "Sports & Outdoor",
      hasSubmenu: false,
      href: "/category/sports-outdoor",
    },
    { name: "Baby's & Toys", hasSubmenu: false, href: "/category/baby-toys" },
    {
      name: "Groceries & Pets",
      hasSubmenu: false,
      href: "/category/groceries-pets",
    },
    {
      name: "Health & Beauty",
      hasSubmenu: false,
      href: "/category/health-beauty",
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            <Link href={category.href} className={styles.categoryLink}>
              <span>{category.name}</span>
              {category.hasSubmenu && (
                <ChevronRight size={16} className={styles.arrow} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
