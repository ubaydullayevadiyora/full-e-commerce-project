"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <div className={styles.bannerContent}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link href="/shop" className={styles.shopNowLink}>
              ShopNow
            </Link>
          </p>
          <select className={styles.languageSelector}>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Exclusive
          </Link>

          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/auth/register">Sign Up</Link>
            </li>
          </ul>

          <div className={styles.navActions}>
            <div className={styles.searchBox}>
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} size={20} />
            </div>
            <button className={styles.iconButton} aria-label="Wishlist">
              <Heart size={24} />
            </button>
            <button className={styles.iconButton} aria-label="Shopping Cart">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
