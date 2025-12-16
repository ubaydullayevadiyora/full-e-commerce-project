import styles from "@/styles/components/sidebar.module.scss";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>Categories</div>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            <a href={`#${category}`}>{category}</a>
            <span className={styles.arrow}>›</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
