import { memo, useId } from "react";
import type { Todo } from "../type";
import { getDateLabel } from "./functions";
import styles from "./style.module.css";

type Props = {
  todo: Todo;
  onClickClose: (id: string) => void;
};
export function TodoComponent({ todo, onClickClose }: Props) {
  const todoId = useId();
  return (
    <li aria-labelledby={todoId} className={styles.module}>
      <p className={styles.createdAt}>{getDateLabel(todo.createdAt)}</p>
      <div className={styles.content}>
        <p id={todoId}>{todo.name}</p>
        <button
          onClick={() => {
            onClickClose(todo.id);
          }}
        >
          ×
        </button>
      </div>
    </li>
  );
}

export const TodoItem = memo(TodoComponent);
