import { FC, FormEvent, SyntheticEvent, useState } from 'react';

import { RegisterUI } from '@ui-pages';
import { registerUserThunk } from '@slices';
import { useDispatch } from '@store';
import { useForm } from '@hooks';

export const Register: FC = () => {
  const { values, onChange } = useForm({ email: '', password: '', name: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerUserThunk({
        email: values.email,
        name: values.name || '',
        password: values.password || ''
      })
    );
  };

  return (
    <RegisterUI
      errorText=''
      email={values.email}
      userName={values.name || ''}
      password={values.password || ''}
      setEmail={onChange}
      setPassword={onChange}
      setUserName={onChange}
      handleSubmit={handleSubmit}
    />
  );
};
