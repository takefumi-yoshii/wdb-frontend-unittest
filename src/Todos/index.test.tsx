import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todos } from "./";

describe("Todos", () => {
  test("初期表示時「Todo がありません」が表示されること", () => {
    render(<Todos />);
    expect(screen.getByText("Todo がありません")).toBeInTheDocument();
  });
  test("入力し「Enter」キーを押下すると、Todo一覧が追加されること", () => {
    render(<Todos />);
    userEvent.type(screen.getByRole("textbox"), "テスト{enter}");
    expect(screen.getByRole("list", { name: "Todo一覧" })).toBeInTheDocument();
  });
  test("「昇順に変更」ボタンを押下すると、ソート順が変わること", async () => {
    render(<Todos />);
    userEvent.type(screen.getByRole("textbox"), "入力1{enter}");
    userEvent.type(screen.getByRole("textbox"), "入力2{enter}");
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("入力2");
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("入力1");
    userEvent.click(screen.getByRole("button", { name: "昇順に変更 ▲" }));
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("入力1");
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("入力2");
  });
  test("Todo を追加し、削除ボタンを押下すると、Todo が削除されること", () => {
    const name = "入力1";
    render(<Todos />);
    userEvent.type(screen.getByRole("textbox"), `${name}{enter}`);
    const listitem = screen.getByRole("listitem", { name });
    expect(listitem).toBeInTheDocument();
    userEvent.click(within(listitem).getByRole("button"));
    expect(listitem).not.toBeInTheDocument();
  });
});
