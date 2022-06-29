import {
  render,
  screen,
} from "@testing-library/react";
import { NoItem } from "./";

describe("NoItem", () => {
  test("文言が表示されていること", () => {
    render(<NoItem />);
    expect(
      screen.getByText("Todo がありません")
    ).toBeInTheDocument();
  });
});
