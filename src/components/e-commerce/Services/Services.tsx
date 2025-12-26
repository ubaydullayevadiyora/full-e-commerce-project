// src/components/e-commerce/Services/Services.tsx

"use client";

import { Truck, Headphones, ShieldCheck } from "lucide-react";
import styles from "./Services.module.scss";

interface Service {
  id: number;
  icon: any;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesGrid}>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <Icon size={32} strokeWidth={2} />
                </div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
