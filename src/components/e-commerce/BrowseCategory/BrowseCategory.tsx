// src/components/e-commerce/BrowseCategory/BrowseCategory.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";
import styles from "./BrowseCategory.module.scss";

interface Category {
  id: number;
  name: string;
  icon: any;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Phones",
    icon: Smartphone,
    href: "/category/phones",
  },
  {
    id: 2,
    name: "Computers",
    icon: Monitor,
    href: "/category/computers",
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: Watch,
    href: "/category/smartwatch",
  },
  {
    id: 4,
    name: "Camera",
    icon: Camera,
    href: "/category/camera",
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: Headphones,
    href: "/category/headphones",
  },
  {
    id: 6,
    name: "Gaming",
    icon: Gamepad2,
    href: "/category/gaming",
  },
];

export default function BrowseCategory() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className={styles.browseCategory}>
      {/* Section Tag */}
      <div className={styles.sectionTag}>
        <div className={styles.redBar}></div>
        <span className={styles.tagText}>Categories</span>
      </div>

      {/* Title and Navigation */}
      <div className={styles.titleRow}>
        <h2 className={styles.title}>Browse By Category</h2>

        <div className={styles.navButtons}>
          <button className={styles.navButton} aria-label="Previous categories">
            <ChevronLeft size={20} />
          </button>
          <button className={styles.navButton} aria-label="Next categories">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className={styles.categoryGrid}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              href={category.href}
              className={`${styles.categoryCard} ${
                activeCategory === category.id ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className={styles.iconWrapper}>
                <Icon size={48} strokeWidth={1.5} />
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
