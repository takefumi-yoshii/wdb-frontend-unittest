import React, {
  useCallback,
  useState,
} from "react";

export function useTodoForm({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValue(event.currentTarget.value);
    },
    []
  );
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (value === "") return;
      onSubmit(value);
      setValue("");
    },
    [value, onSubmit, setValue]
  );
  return {
    value,
    handleSubmit,
    handleChange,
  } as const;
}
