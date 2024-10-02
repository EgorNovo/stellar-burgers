import { ChangeEvent, useState } from 'react';

export function useForm(initialState: {
  email: string;
  password?: string;
  name?: string;
}) {
  const [values, onChange] = useState(initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange({ ...values, [e.target.name]: e.target.value });
  }

  return { values, onChange: handleChange };
}
