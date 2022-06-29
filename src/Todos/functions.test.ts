import {
  createTodo,
  sortTodo,
} from "./functions";

describe("createTodo", () => {
  test("任意の文字列でTodoを作成できる", () => {
    expect(createTodo("テスト")).toMatchObject({
      name: "テスト",
    });
  });
  test("空文字列の場合、例外をスローする", () => {
    expect(() => createTodo("")).toThrow();
  });
});

describe("sortTodo", () => {
  const todos = [
    createTodo(
      "就寝",
      "2022-06-28T14:00:00.000Z"
    ),
    createTodo(
      "入浴",
      "2022-06-28T12:00:00.000Z"
    ),
    createTodo(
      "夕食",
      "2022-06-28T10:00:00.000Z"
    ),
  ];
  test("昇順 sort", () => {
    expect(sortTodo(todos, true)).toMatchObject([
      { name: "夕食" },
      { name: "入浴" },
      { name: "就寝" },
    ]);
  });
  test("降順 sort", () => {
    expect(sortTodo(todos, false)).toMatchObject([
      { name: "就寝" },
      { name: "入浴" },
      { name: "夕食" },
    ]);
  });
});
