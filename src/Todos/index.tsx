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
      <TodoControls
        hasTodos={!!todos.length}
        sortOrderBy={sortOrderBy}
        onClickSort={handleClickSort}
      />
      {todos.length ? (
        <TodoList
          todos={sortTodo(todos, sortOrderBy)}
          onClickDelete={handleClickClose}
        />
      ) : (
        <NoItem />
      )}
    </div>
  );
}
