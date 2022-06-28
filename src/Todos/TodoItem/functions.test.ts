import { getDateLabel } from "./functions";

describe("getDateLabel", () => {
  test("ISOString から 日付文字列を得られる", () => {
    expect(
      getDateLabel("2022-06-28T10:00:00.000Z")
    ).toEqual("2022/06/28 19:00:00");
    expect(
      getDateLabel("2022-06-28T14:00:00.000Z")
    ).toEqual("2022/06/28 23:00:00");
  });
});
