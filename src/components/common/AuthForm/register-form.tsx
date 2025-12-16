"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./register-form.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Register logikangiz (API call)
    // Muvaffaqiyatli bo'lsa:
    router.push("/"); // yoki "/login" yoki boshqa sahifa
  };

  const handleGoogleRegister = () => {
    console.log("Google sign up clicked");
    // Google OAuth logikasi
    // Muvaffaqiyatli bo'lsa:
    router.push("/");
  };

  return (
    <div className={styles.RegisterContainer}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageSection}>
            <Image
              src="/images/image.png"
              alt="Shopping cart with smartphone and bags"
              width={805}
              height={781}
              priority
              className={styles.RegisterImage}
            />
          </div>

          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <h1 className={styles.formTitle}>Create an account</h1>
              <p className={styles.formSubtitle}>Enter your details below</p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={styles.input}
                  required
                />

                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  value={formData.emailOrPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, emailOrPhone: e.target.value })
                  }
                  className={styles.input}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={styles.input}
                  required
                />

                <button type="submit" className={styles.createButton}>
                  Create Account
                </button>

                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  className={styles.googleButton}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign up with Google
                </button>

                <p className={styles.loginLink}>
                  Already have account? <Link href="/auth/login">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
