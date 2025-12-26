// src/components/common/ProductCard/ProductCard.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: {
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
  };
  showDiscount?: boolean;
  showAddToCart?: boolean;
}

export default function ProductCard({
  product,
  showDiscount = true,
  showAddToCart = true,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const displayPrice = product.discountedPrice || product.price || 0;
  const originalPrice = product.originalPrice || 0;
  const productSlug = product.slug || `/product/${product.id}`;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick view modal logic
    console.log("Quick view:", product.name);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic
    console.log("Added to cart:", product.name);
  };

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={productSlug} className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} loading="lazy" />

        {showDiscount && product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}

        <div className={styles.actions}>
          <button
            className={`${styles.actionBtn} ${
              isWishlisted ? styles.active : ""
            }`}
            onClick={handleWishlist}
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          <button
            className={styles.actionBtn}
            onClick={handleQuickView}
            aria-label="Quick view"
          >
            <Eye size={16} />
          </button>
        </div>

        {showAddToCart && isHovered && (
          <button className={styles.addToCart} onClick={handleAddToCart}>
            <ShoppingCart size={18} />
            Add To Cart
          </button>
        )}
      </Link>

      <div className={styles.info}>
        <Link href={productSlug}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>

        <div className={styles.prices}>
          <span className={styles.price}>${displayPrice}</span>
          {originalPrice > displayPrice && (
            <span className={styles.originalPrice}>${originalPrice}</span>
          )}
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < product.rating ? styles.starFilled : styles.starEmpty
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
  );
}
