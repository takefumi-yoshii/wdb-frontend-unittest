import { render, screen } from "@testing-library/react";
import { NoItem } from "./";

describe("NoItem", () => {
  test("文言表示", () => {
    render(<NoItem />);
    expect(screen.getByText("Todo がありません")).toBeInTheDocument();
  });
});
