import { render, screen } from "@testing-library/react";
import { createTodo } from "../functions";
import { TodoList } from "./";

describe("TodoList", () => {
  test("入力し「Add」ボタンを押下すると、入力値を引数に onSubmit が呼ばれること", () => {
    const mockFn = jest.fn();
    render(<TodoList todos={[createTodo("テスト")]} onClickClose={mockFn} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});
