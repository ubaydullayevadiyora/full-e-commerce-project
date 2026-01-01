// src/app/cart/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { X, Minus, Plus } from "lucide-react";
import styles from "./page.module.scss";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const shippingCost = 0; // Free shipping
  const total = calculateSubtotal() + shippingCost;

  const handleApplyCoupon = () => {
    console.log("Apply coupon:", couponCode);
    // Coupon logic here
  };

  return (
    <>
      <Header />

      <main className={styles.cartPage}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Cart</span>
          </div>

          {cartItems.length > 0 ? (
            <>
              {/* Cart Table */}
              <div className={styles.cartTable}>
                {/* Table Header */}
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>Product</div>
                  <div className={styles.headerCell}>Price</div>
                  <div className={styles.headerCell}>Quantity</div>
                  <div className={styles.headerCell}>Subtotal</div>
                </div>

                {/* Table Body */}
                <div className={styles.tableBody}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartRow}>
                      <div className={styles.productCell}>
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                        />
                        <span className={styles.productName}>{item.name}</span>
                      </div>
                      <div className={styles.priceCell}>${item.price}</div>
                      <div className={styles.quantityCell}>
                        <div className={styles.quantityControl}>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            min="1"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className={styles.subtotalCell}>
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className={styles.cartActions}>
                <Link href="/shop" className={styles.returnBtn}>
                  Return To Shop
                </Link>
                <button className={styles.updateBtn}>Update Cart</button>
              </div>

              {/* Bottom Section */}
              <div className={styles.bottomSection}>
                {/* Coupon */}
                <div className={styles.couponSection}>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className={styles.couponInput}
                  />
                  <button
                    className={styles.applyCouponBtn}
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </button>
                </div>

                {/* Cart Total */}
                <div className={styles.cartTotal}>
                  <h3 className={styles.cartTotalTitle}>Cart Total</h3>
                  <div className={styles.totalRow}>
                    <span>Subtotal:</span>
                    <span>${calculateSubtotal()}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping:</span>
                    <span>
                      {shippingCost === 0 ? "Free" : `$${shippingCost}`}
                    </span>
                  </div>
                  <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <Link href="/checkout" className={styles.checkoutBtn}>
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
              <Link href="/shop" className={styles.shopBtn}>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
