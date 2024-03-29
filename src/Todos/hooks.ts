import { useCallback, useState } from "react";
import { createTodo } from "./functions";
import type { Todo } from "./type";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = useCallback(
    (value: string) => {
      setTodos((prev) => [
        ...prev,
        createTodo(value),
      ]);
    },
    [setTodos]
  );
  const handleClickClose = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.filter((todo) => todo.id !== id)
      );
    },
    [setTodos]
  );
  const [sortOrderBy, setSortOrderBy] =
    useState(false);
  const handleClickSort = useCallback(() => {
    setSortOrderBy((prev) => !prev);
  }, [setSortOrderBy]);
  return {
    todos,
    sortOrderBy,
    handleSubmit,
    handleClickSort,
    handleClickClose,
  };
}
