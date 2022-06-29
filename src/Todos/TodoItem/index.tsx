import { memo, useId } from "react";
import type { Todo } from "../type";
import { getDateLabel } from "./functions";
import styles from "./style.module.css";

type Props = {
  todo: Todo;
  onClickDelete: (id: string) => void;
};
export function TodoItem({
  todo,
  onClickDelete,
}: Props) {
  const todoId = useId();
  return (
    <li
      aria-labelledby={todoId}
      className={styles.module}
    >
      <p className={styles.createdAt}>
        {getDateLabel(todo.createdAt)}
      </p>
      <div className={styles.content}>
        <p id={todoId}>{todo.name}</p>
        <button
          onClick={() => {
            onClickDelete(todo.id);
          }}
        >
          ×
        </button>
      </div>
    </li>
  );
}

export default memo(TodoItem);
