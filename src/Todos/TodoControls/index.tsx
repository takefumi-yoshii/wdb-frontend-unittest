import clsx from "clsx";
import styles from "./style.module.css";

type Props = {
  enabled: boolean;
  sortOrderBy: boolean;
  onClickSort?: () => void;
};
export function TodoControls({
  enabled,
  sortOrderBy,
  onClickSort,
}: Props) {
  return (
    <div className={clsx(styles.module)}>
      {enabled && (
        <p>
          日付{sortOrderBy ? "昇順" : "降順"}
          で表示中
        </p>
      )}
      <button
        onClick={onClickSort}
        disabled={!enabled}
      >
        {sortOrderBy
          ? "降順に変更 ▼"
          : "昇順に変更 ▲"}
      </button>
    </div>
  );
}
