"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>Exclusive</div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/auth/register">Sign Up</a>
          </li>
        </ul>

        <div className={styles.rightSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchBtn}>...</button>
          </div>

          <div className={styles.icons}>
            <button className={styles.iconBtn}>..</button>
            <button className={styles.iconBtn}>.</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
