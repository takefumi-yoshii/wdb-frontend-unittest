import { sortTodo } from "./functions";
import { useTodos } from "./hooks";
import { NoItem } from "./NoItem";
import styles from "./style.module.css";
import { TodoControls } from "./TodoControls";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export function Todos() {
  const {
    todos,
    sortOrderBy,
    handleSubmit,
    handleClickSort,
    handleClickClose,
  } = useTodos();
  return (
    <div className={styles.module}>
      <h1>My Todos</h1>
      <TodoForm onSubmit={handleSubmit} />
      {todos.length ? (
        <>
          <TodoControls
            sortOrderBy={sortOrderBy}
            onClickSort={handleClickSort}
          />
          <TodoList
            todos={sortTodo(todos, sortOrderBy)}
            onClickClose={handleClickClose}
          />
        </>
      ) : (
        <NoItem />
      )}
    </div>
  );
}
