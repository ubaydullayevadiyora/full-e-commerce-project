import styles from "@/styles/components/common/TopBar/TopBar.module.scss";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <span className={styles.text}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <strong>ShopNow</strong>
      </span>
      <span className={styles.language}>English</span>
    </div>
  );
}
