import {
  render,
  screen,
} from "@testing-library/react";
import { TodoControls } from "./";

describe("TodoControls: Todo未登録時", () => {
  test("Todo 入力を促すメッセージが表示されていること", () => {
    render(
      <TodoControls
        hasTodos={false}
        sortOrderBy={true}
      />
    );
    expect(
      screen.getByText("Todo を入力してください")
    ).toBeInTheDocument();
  });
});

describe("TodoControls: Todo登録済時", () => {
  test("[sortOrderBy: true] 昇順表示中ステータスを表すこと", () => {
    render(
      <TodoControls
        hasTodos={true}
        sortOrderBy={true}
      />
    );
    expect(
      screen.getByText("日付昇順で表示中")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "降順に変更 ▼",
      })
    ).toBeInTheDocument();
  });
  test("[sortOrderBy: false] 降順表示中ステータスを表すこと", () => {
    render(
      <TodoControls
        hasTodos={true}
        sortOrderBy={false}
      />
    );
    expect(
      screen.getByText("日付降順で表示中")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "昇順に変更 ▲",
      })
    ).toBeInTheDocument();
  });
});
