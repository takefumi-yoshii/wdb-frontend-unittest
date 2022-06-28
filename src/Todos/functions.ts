import { v4 as uuidv4 } from "uuid";
import type { Todo } from "./type";

export function createTodo(
  value: string,
  createdAt?: string
) {
  if (value === "")
    throw Error("1文字以上の入力が必要");
  const date = createdAt
    ? new Date(createdAt)
    : new Date();
  const todo: Todo = {
    id: uuidv4(),
    name: value,
    createdAt: date.toISOString(),
    done: false,
  };
  return todo;
}

export function sortTodo(
  todos: Todo[],
  order: boolean
) {
  const direction = order ? -1 : 1;
  return todos.sort((a, b) => {
    if (a.createdAt > b.createdAt)
      return -1 * direction;
    return direction;
  });
}
