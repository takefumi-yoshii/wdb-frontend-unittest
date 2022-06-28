import clsx from "clsx";
import styles from "./style.module.css";

type Props = {
  hasTodos: boolean;
  sortOrderBy: boolean;
  onClickSort?: () => void;
};
export function TodoControls({
  hasTodos,
  sortOrderBy,
  onClickSort,
}: Props) {
  return (
    <div className={clsx(styles.module)}>
      {hasTodos ? (
        <p>
          日付{sortOrderBy ? "昇順" : "降順"}
          で表示中
        </p>
      ) : (
        <p>Todo を入力してください</p>
      )}
      <button
        onClick={onClickSort}
        disabled={!hasTodos}
      >
        {sortOrderBy
          ? "降順に変更 ▼"
          : "昇順に変更 ▲"}
      </button>
    </div>
  );
}
