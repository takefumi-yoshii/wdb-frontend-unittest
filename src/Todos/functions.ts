import { v4 as uuidv4 } from "uuid";
import type { Todo } from "./type";

export function createTodo(value: string) {
  const todo: Todo = {
    id: uuidv4(),
    name: value,
    createdAt: new Date().toISOString(),
    done: false,
    priority: "row",
  };
  return todo;
}

export function sortTodo(todos: Todo[], order: boolean) {
  const direction = order ? -1 : 1;
  return todos.sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1 * direction;
    return direction;
  });
}
