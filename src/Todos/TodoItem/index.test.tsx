import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTodo } from "../functions";
import { TodoItem } from "./";

describe("TodoItem", () => {
  test("「x」ボタンを押下すると、id を引数に onClickDelete が呼ばれること", () => {
    const todo = createTodo("テスト");
    const mockFn = jest.fn();
    render(
      <TodoItem
        todo={todo}
        onClickDelete={mockFn}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledWith(todo.id);
  });
});
