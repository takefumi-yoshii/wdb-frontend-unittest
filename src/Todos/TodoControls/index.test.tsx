import { render, screen } from "@testing-library/react";
import { TodoControls } from "./";

describe("TodoControls", () => {
  test("sortOrderBy={true}", () => {
    render(<TodoControls sortOrderBy={true} onClickSort={() => {}} />);
    expect(screen.getByText("日付昇順で表示中")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "降順に変更 ▼" })
    ).toBeInTheDocument();
  });
  test("sortOrderBy={false}", () => {
    render(<TodoControls sortOrderBy={false} onClickSort={() => {}} />);
    expect(screen.getByText("日付降順で表示中")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "昇順に変更 ▲" })
    ).toBeInTheDocument();
  });
});
