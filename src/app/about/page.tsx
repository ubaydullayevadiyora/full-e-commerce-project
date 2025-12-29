// src/app/about/page.tsx

"use client";

import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import {
  Store,
  DollarSign,
  ShoppingBag,
  Banknote,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import styles from "./page.module.scss";

interface Stat {
  id: number;
  icon: any;
  value: string;
  label: string;
  highlight?: boolean;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: Store,
    value: "10.5k",
    label: "Sallers active our site",
    highlight: false,
  },
  {
    id: 2,
    icon: DollarSign,
    value: "33k",
    label: "Monthly Product Sale",
    highlight: true,
  },
  {
    id: 3,
    icon: ShoppingBag,
    value: "45.5k",
    label: "Customer active in our site",
    highlight: false,
  },
  {
    id: 4,
    icon: Banknote,
    value: "25k",
    label: "Annual gross sale in our site",
    highlight: false,
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className={styles.aboutPage}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>About</span>
          </div>

          {/* Our Story Section */}
          <section className={styles.storySection}>
            <div className={styles.storyContent}>
              <h1 className={styles.storyTitle}>Our Story</h1>
              <p className={styles.storyText}>
                Launched in 2015, Exclusive is South Asia's premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sellers and 300 brands and
                serves 3 millions customers across the region.
              </p>
              <p className={styles.storyText}>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer.
              </p>
            </div>

            <div className={styles.storyImage}>
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shopping women"
              />
            </div>
          </section>

          {/* Statistics Section */}
          <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className={`${styles.statCard} ${
                      stat.highlight ? styles.highlight : ""
                    }`}
                  >
                    <div className={styles.statIcon}>
                      <div className={styles.iconCircle}>
                        <Icon size={32} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className={styles.statValue}>{stat.value}</h3>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Team Section */}
          <section className={styles.teamSection}>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamCard}>
                  <div className={styles.teamImageWrapper}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <div className={styles.teamSocial}>
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          aria-label="Twitter"
                          className={styles.socialLink}
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          aria-label="Instagram"
                          className={styles.socialLink}
                        >
                          <Instagram size={16} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          aria-label="LinkedIn"
                          className={styles.socialLink}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className={styles.pagination}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.active}`}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </section>

          {/* Services Section - reuse existing component yoki inline */}
          <section className={styles.servicesSection}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIconCircle}>
                    <Store size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>FREE AND FAST DELIVERY</h3>
                <p className={styles.serviceDesc}>
                  Free delivery for all orders over $140
                </p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIconCircle}>
                    <ShoppingBag size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>24/7 CUSTOMER SERVICE</h3>
                <p className={styles.serviceDesc}>
                  Friendly 24/7 customer support
                </p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIconCircle}>
                    <Banknote size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>MONEY BACK GUARANTEE</h3>
                <p className={styles.serviceDesc}>
                  We return money within 30 days
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
