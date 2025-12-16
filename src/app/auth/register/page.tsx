import type { Metadata } from "next";
import RegisterForm from "@/components/common/AuthForm/register-form";
import styles from "./register.module.scss";

export const metadata: Metadata = {
  title: "Sign Up - Exclusive | Create Your Account",
  description:
    "Create an account at Exclusive to enjoy exclusive deals, free express delivery, and more. Sign up now to get 10% off your first order.",
  keywords:
    "sign up, create account, register, exclusive, e-commerce, online shopping",
  openGraph: {
    title: "Sign Up - Exclusive",
    description:
      "Create an account at Exclusive to enjoy exclusive deals and offers",
    type: "website",
  },
};

export default function RegisterPage() {
  return (
    <div className={styles.RegisterPage}>
      <RegisterForm />
    </div>
  );
}
