import {
  render,
  screen,
} from "@testing-library/react";
import { TodoControls } from "./";

describe("TodoControls", () => {
  test("[sortOrderBy: true] 昇順表示中ステータスを表すこと", () => {
    render(
      <TodoControls
        enabled={false}
        sortOrderBy={true}
      />
    );
    expect(
      screen.getByRole("button", {
        name: "降順に変更 ▼",
      })
    ).toBeInTheDocument();
  });
});

describe("TodoControls", () => {
  test("[sortOrderBy: true] 昇順表示中ステータスを表すこと", () => {
    render(
      <TodoControls
        enabled={true}
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
        enabled={true}
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
