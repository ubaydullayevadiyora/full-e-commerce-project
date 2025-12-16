"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login-form.module.scss";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);

    // Login logikangiz (API call va hokazo)
    // Muvaffaqiyatli login bo'lsa:
    router.push("/"); // yoki "/dashboard" yoki boshqa sahifa
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.header}>
        <h1 className={styles.title}>Log in to Exclusive</h1>
        <p className={styles.subtitle}>Enter your details below</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
          <Link href="/forgot-password" className={styles.forgotLink}>
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
}
