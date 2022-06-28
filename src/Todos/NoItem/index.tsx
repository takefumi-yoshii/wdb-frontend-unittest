import styles from "./style.module.css";

export function NoItem() {
  return (
    <p className={styles.module}>
      Todo がありません
    </p>
  );
}
