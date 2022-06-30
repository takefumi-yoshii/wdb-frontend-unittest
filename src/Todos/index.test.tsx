import {
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todos } from "./";

describe("Todos", () => {
  const user = userEvent.setup();
  test("見出しが表示されていること", () => {
    render(<Todos />);
    expect(
      screen.getByRole("heading", {
        name: "My Todos",
      })
    ).toBeInTheDocument();
  });
  test("初期表示時「Todo がありません」が表示されていること", () => {
    render(<Todos />);
    expect(
      screen.getByText("Todo がありません")
    ).toBeInTheDocument();
  });
  test("入力し「Enter」キーを押下すると、Todo一覧が追加されること", async () => {
    render(<Todos />);
    await user.type(
      screen.getByRole("textbox"),
      "テスト{enter}"
    );
    expect(
      screen.getByRole("list", {
        name: "Todo一覧",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listitem", {
        name: "テスト",
      })
    ).toBeInTheDocument();
  });
  test("「昇順に変更」ボタンを押下すると、ソート順が変わること", async () => {
    render(<Todos />);
    await user.type(
      screen.getByRole("textbox"),
      "入力1{enter}"
    );
    await user.type(
      screen.getByRole("textbox"),
      "入力2{enter}"
    );
    expect(
      screen.getAllByRole("listitem")[0]
    ).toHaveTextContent("入力2");
    expect(
      screen.getAllByRole("listitem")[1]
    ).toHaveTextContent("入力1");
    await user.click(
      screen.getByRole("button", {
        name: "昇順に変更 ▲",
      })
    );
    expect(
      screen.getAllByRole("listitem")[0]
    ).toHaveTextContent("入力1");
    expect(
      screen.getAllByRole("listitem")[1]
    ).toHaveTextContent("入力2");
    expect(
      screen.getByRole("button", {
        name: "降順に変更 ▼",
      })
    ).toBeInTheDocument();
  });
  test("Todo を追加し、削除ボタンを押下すると、Todo が削除されること", async () => {
    const name = "入力1";
    render(<Todos />);
    await user.type(
      screen.getByRole("textbox"),
      `${name}{enter}`
    );
    const listitem = screen.getByRole(
      "listitem",
      { name }
    );
    expect(listitem).toBeInTheDocument();
    await user.click(
      within(listitem).getByRole("button")
    );
    expect(listitem).not.toBeInTheDocument();
  });
});
