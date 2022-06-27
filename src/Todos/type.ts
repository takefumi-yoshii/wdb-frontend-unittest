export type Todo = {
  id: string;
  createdAt: string;
  name: string;
  done: boolean;
  priority: "high" | "middle" | "row";
};
