import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./";

describe("TodoForm", () => {
  test("入力し「Add」ボタンを押下すると、入力値を引数に onSubmit が呼ばれること", () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    userEvent.type(
      screen.getByRole("textbox"),
      "テスト"
    );
    userEvent.click(
      screen.getByRole("button", { name: "Add" })
    );
    expect(mockFn).toHaveBeenCalledWith("テスト");
  });
  test("入力し「Enter」キーを押下すると、入力値を引数に onSubmit が呼ばれること", () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    userEvent.type(
      screen.getByRole("textbox"),
      `テスト{enter}`
    );
    expect(mockFn).toHaveBeenCalledWith("テスト");
  });
  test("何も入力せず「Add」ボタンを押下すると、onSubmit は呼ばれないこと", () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    userEvent.click(
      screen.getByRole("button", { name: "Add" })
    );
    expect(mockFn).not.toHaveBeenCalled();
  });
});
