import type { Metadata } from "next";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import LoginForm from "@/components/common/AuthForm/login-form";
import styles from "./login.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Log In - Exclusive | Access Your Account",
  description:
    "Log in to your Exclusive account to manage orders, track shipments, and access exclusive deals.",
  keywords: "login, sign in, account access, exclusive login, e-commerce login",
  openGraph: {
    title: "Log In - Exclusive",
    description: "Access your Exclusive account",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Log In - Exclusive",
    description: "Access your Exclusive account",
  },
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className={styles.loginPage}>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <Image
              src="/images/image.png"
              alt="Shopping cart with phone and bags"
              width={800}
              height={600}
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.formSection}>
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
