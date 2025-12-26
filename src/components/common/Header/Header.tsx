// src/components/common/Header/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
    // Add search logic here
  };

  return (
    <header className={styles.header}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <div className={styles.bannerContent}>
          <p className={styles.bannerText}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link href="/shop" className={styles.shopNowLink}>
              ShopNow
            </Link>
          </p>
          <div className={styles.languageWrapper}>
            <label htmlFor="language-select" className={styles.srOnly}>
              Select Language
            </label>
            <select
              id="language-select"
              className={styles.languageSelector}
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            Exclusive
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Actions (Search, Wishlist, Cart) */}
          <div className={styles.navActions}>
            <form onSubmit={handleSearch} className={styles.searchBox}>
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <button
                type="submit"
                className={styles.searchButton}
                aria-label="Submit search"
              >
                <Search size={20} />
              </button>
            </form>

            <Link
              href="/wishlist"
              className={styles.iconButton}
              aria-label="Wishlist"
            >
              <Heart size={24} />
              <span className={styles.badge}>0</span>
            </Link>

            <Link
              href="/cart"
              className={styles.iconButton}
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              <span className={styles.badge}>0</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/auth/register" onClick={toggleMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
