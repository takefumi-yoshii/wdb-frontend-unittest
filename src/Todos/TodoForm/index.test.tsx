import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./";

describe("TodoForm", () => {
  const user = userEvent.setup();
  test("入力し「Add」ボタンを押下すると、入力値を引数に onSubmit が呼ばれること", async () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    await user.type(
      screen.getByRole("textbox"),
      "テスト"
    );
    await user.click(
      screen.getByRole("button", { name: "Add" })
    );
    expect(mockFn).toHaveBeenCalledWith("テスト");
  });
  test("入力し「Enter」キーを押下すると、入力値を引数に onSubmit が呼ばれること", async () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    await user.type(
      screen.getByRole("textbox"),
      `テスト{enter}`
    );
    expect(mockFn).toHaveBeenCalledWith("テスト");
  });
  test("何も入力せず「Add」ボタンを押下すると、onSubmit は呼ばれないこと", async () => {
    const mockFn = jest.fn();
    render(<TodoForm onSubmit={mockFn} />);
    await user.click(
      screen.getByRole("button", { name: "Add" })
    );
    expect(mockFn).not.toHaveBeenCalled();
  });
});
