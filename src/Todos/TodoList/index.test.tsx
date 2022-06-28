import {
  render,
  screen,
} from "@testing-library/react";
import { createTodo } from "../functions";
import { TodoList } from "./";

describe("TodoList", () => {
  test("props の todos 一覧を表示すること", () => {
    const mockFn = jest.fn();
    render(
      <TodoList
        todos={[createTodo("テスト")]}
        onClickClose={mockFn}
      />
    );
    expect(
      screen.getByRole("listitem", {
        name: "テスト",
      })
    ).toBeInTheDocument();
  });
});
