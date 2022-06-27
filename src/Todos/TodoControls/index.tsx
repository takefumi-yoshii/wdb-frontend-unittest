import styles from "./style.module.css";

type Props = {
  sortOrderBy: boolean;
  onClickSort: () => void;
};
export function TodoControls({ sortOrderBy, onClickSort }: Props) {
  return (
    <div className={styles.module}>
      <p>日付{sortOrderBy ? "昇順" : "降順"}で表示中</p>
      <button onClick={onClickSort}>
        {sortOrderBy ? "降順に変更 ▼" : "昇順に変更 ▲"}
      </button>
    </div>
  );
}
