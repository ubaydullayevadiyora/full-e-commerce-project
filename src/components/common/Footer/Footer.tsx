"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Exclusive</h3>
          <p className={styles.footerSubtitle}>Subscribe</p>
          <p className={styles.footerText}>Get 10% off your first order</p>
          <div className={styles.emailSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.sendButton} aria-label="Subscribe">
              <Send size={20} />
            </button>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Support</h3>
          <p className={styles.footerText}>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p className={styles.footerText}>exclusive@gmail.com</p>
          <p className={styles.footerText}>+88015-88888-9999</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Account</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/account">My Account</Link>
            </li>
            <li>
              <Link href="/login">Login / Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Link</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms Of Use</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Download App</h3>
          <p className={styles.downloadText}>Save $3 with App New User Only</p>
          <div className={styles.downloadSection}>
            <div className={styles.qrCode}>
              <Image
                src="/app-download-qr-code.png"
                alt="QR Code"
                width={80}
                height={80}
              />
            </div>
            <div className={styles.appButtons}>
              <Link href="#" className={styles.appButton}>
                <Image
                  src="/google-play-store-badge.png"
                  alt="Get it on Google Play"
                  width={110}
                  height={40}
                />
              </Link>
              <Link href="#" className={styles.appButton}>
                <Image
                  src="/apple-app-store-badge.png"
                  alt="Download on the App Store"
                  width={110}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <Link href="#" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
