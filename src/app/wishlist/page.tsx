// src/app/wishlist/page.tsx

"use client";

import { useState } from "react";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { Trash2, Eye, ShoppingCart } from "lucide-react";
import styles from "./page.module.scss";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  inStock?: boolean;
}

interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const wishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image:
      "https://images.pexels.com/photos/2422476/pexels-photo-2422476.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image:
      "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image:
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
  },
];

const recommendedProducts: RecommendedProduct[] = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    badge: "-35%",
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviews: 99,
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    rating: 5,
    reviews: 55,
    image:
      "https://images.pexels.com/photos/159399/gamepad-gaming-control-close-up-159399.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "NEW",
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    rating: 4,
    reviews: 75,
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(wishlistItems);

  const handleRemoveItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleMoveAllToBag = () => {
    console.log("Move all to bag");
    // Add to cart logic here
  };

  const handleAddToCart = (id: number) => {
    console.log("Add to cart:", id);
    // Add to cart logic here
  };

  return (
    <>
      <Header />

      <main className={styles.wishlistPage}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Wishlist</span>
          </div>

          {/* Wishlist Header */}
          <div className={styles.wishlistHeader}>
            <h2 className={styles.wishlistTitle}>
              Wishlist ({wishlist.length})
            </h2>
            <button className={styles.moveAllBtn} onClick={handleMoveAllToBag}>
              Move All To Bag
            </button>
          </div>

          {/* Wishlist Grid */}
          {wishlist.length > 0 ? (
            <div className={styles.wishlistGrid}>
              {wishlist.map((item) => (
                <div key={item.id} className={styles.wishlistCard}>
                  <div className={styles.imageWrapper}>
                    {item.discount && (
                      <span className={styles.discountBadge}>
                        -{item.discount}%
                      </span>
                    )}
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={16} />
                    </button>
                    <img src={item.image} alt={item.name} />
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => handleAddToCart(item.id)}
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.productName}>{item.name}</h3>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>${item.price}</span>
                      {item.originalPrice && (
                        <span className={styles.originalPrice}>
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Your wishlist is empty</p>
            </div>
          )}

          {/* Just For You Section */}
          <section className={styles.recommendedSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleRow}>
                <div className={styles.sectionTag}>
                  <div className={styles.redBar}></div>
                  <span className={styles.tagText}>Just For You</span>
                </div>
              </div>
              <button className={styles.seeAllBtn}>See All</button>
            </div>

            <div className={styles.recommendedGrid}>
              {recommendedProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageWrapper}>
                    {product.badge && (
                      <span
                        className={`${styles.badge} ${
                          product.badge === "NEW"
                            ? styles.newBadge
                            : styles.discountBadge
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <div className={styles.productActions}>
                      <button
                        className={styles.actionBtn}
                        aria-label="Quick view"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                    <img src={product.image} alt={product.name} />
                    <button className={styles.productAddToCartBtn}>
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <div className={styles.productPrices}>
                      <span className={styles.productPrice}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className={styles.productOriginalPrice}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className={styles.productRating}>
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
                      <span className={styles.reviewCount}>
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
