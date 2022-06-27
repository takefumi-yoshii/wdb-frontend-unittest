import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTodo } from "../functions";
import { TodoItem } from "./";

describe("TodoForm", () => {
  test("入力し「Add」ボタンを押下すると、入力値を引数に onSubmit が呼ばれること", () => {
    const mockFn = jest.fn();
    const { id, ...todo } = createTodo("テスト");
    render(<TodoItem todo={{ id, ...todo }} onClickClose={mockFn} />);
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledWith(id);
  });
});
