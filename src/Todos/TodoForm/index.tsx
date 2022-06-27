import { useTodoForm } from "./hooks";
import styles from "./style.module.css";

type Props = {
  onSubmit: (value: string) => void;
};
export function TodoForm({ onSubmit }: Props) {
  const { value, handleSubmit, handleChange } = useTodoForm({ onSubmit });
  return (
    <form className={styles.module} onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}
