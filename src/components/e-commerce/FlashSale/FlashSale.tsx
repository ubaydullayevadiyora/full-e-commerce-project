// src/components/e-commerce/FlashSale/FlashSale.tsx

"use client";

import { useState, useEffect } from "react";
import { Heart, Eye } from "lucide-react";
import styles from "./FlashSale.module.scss";

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: 160,
    discountedPrice: 120,
    discount: 40,
    rating: 5,
    reviews: 88,
    image:
      "https://images.pexels.com/photos/159399/gamepad-gaming-control-close-up-159399.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    originalPrice: 1160,
    discountedPrice: 960,
    discount: 35,
    rating: 4,
    reviews: 75,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    originalPrice: 400,
    discountedPrice: 370,
    discount: 30,
    rating: 5,
    reviews: 99,
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    originalPrice: 400,
    discountedPrice: 375,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

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

  return (
    <section className={styles.flashSales}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.badge}>Today's</div>
          <h2 className={styles.title}>Flash Sales</h2>
        </div>

        <div className={styles.timer}>
          <div className={styles.timeUnit}>
            <span className={styles.label}>Days</span>
            <span className={styles.value}>
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeUnit}>
            <span className={styles.label}>Hours</span>
            <span className={styles.value}>
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeUnit}>
            <span className={styles.label}>Minutes</span>
            <span className={styles.value}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeUnit}>
            <span className={styles.label}>Seconds</span>
            <span className={styles.value}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.name} />
              <span className={styles.discountBadge}>-{product.discount}%</span>
              <div className={styles.actions}>
                <button
                  className={styles.actionBtn}
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} />
                </button>
                <button className={styles.actionBtn} aria-label="Quick view">
                  <Eye size={16} />
                </button>
              </div>
            </div>
            <button className={styles.addToCart}>Add To Cart</button>

            <div className={styles.info}>
              <h3 className={styles.name}>{product.name}</h3>
              <div className={styles.prices}>
                <span className={styles.discountedPrice}>
                  ${product.discountedPrice}
                </span>
                <span className={styles.originalPrice}>
                  ${product.originalPrice}
                </span>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < product.rating
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className={styles.reviewCount}>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <button className={styles.viewAllBtn}>View All Products</button>
      </div>
    </section>
  );
}
