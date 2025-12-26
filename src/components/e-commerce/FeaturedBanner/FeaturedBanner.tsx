// src/components/e-commerce/FeaturedBanner/FeaturedBanner.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./FeaturedBanner.module.scss";

export default function FeaturedBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <section className={styles.featuredBanner}>
      <div className={styles.bannerContainer}>
        <div className={styles.content}>
          <span className={styles.category}>Categories</span>
          <h2 className={styles.title}>Enhance Your Music Experience</h2>

          {/* Timer */}
          <div className={styles.timer}>
            <div className={styles.timeCircle}>
              <span className={styles.timeValue}>
                {formatTime(timeLeft.hours)}
              </span>
              <span className={styles.timeLabel}>Hours</span>
            </div>
            <div className={styles.timeCircle}>
              <span className={styles.timeValue}>
                {formatTime(timeLeft.days)}
              </span>
              <span className={styles.timeLabel}>Days</span>
            </div>
            <div className={styles.timeCircle}>
              <span className={styles.timeValue}>
                {formatTime(timeLeft.minutes)}
              </span>
              <span className={styles.timeLabel}>Minutes</span>
            </div>
            <div className={styles.timeCircle}>
              <span className={styles.timeValue}>
                {formatTime(timeLeft.seconds)}
              </span>
              <span className={styles.timeLabel}>Seconds</span>
            </div>
          </div>

          <Link href="/products/featured" className={styles.buyButton}>
            Buy Now!
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow}></div>
          <img
            src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="JBL Speaker"
            className={styles.productImage}
          />
        </div>
      </div>
    </section>
  );
}
