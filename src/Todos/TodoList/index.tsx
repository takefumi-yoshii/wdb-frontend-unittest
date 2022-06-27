import { TodoItem } from "../TodoItem";
import type { Todo } from "../type";
import styles from "./style.module.css";

type Props = {
  todos: Todo[];
  onClickClose: (id: string) => void;
};
export function TodoList({ todos, onClickClose }: Props) {
  return (
    <ul aria-label="Todo一覧" className={styles.module}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClickClose={onClickClose} />
      ))}
    </ul>
  );
}
