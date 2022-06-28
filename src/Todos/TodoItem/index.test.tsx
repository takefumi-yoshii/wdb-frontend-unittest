import {
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTodo } from "../functions";
import { TodoItem } from "./";

describe("TodoItem", () => {
  test("「x」ボタンを押下すると、id を引数に onClickClose が呼ばれること", () => {
    const mockFn = jest.fn();
    const { id, ...todo } = createTodo("テスト");
    render(
      <TodoItem
        todo={{ id, ...todo }}
        onClickClose={mockFn}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledWith(id);
  });
});
