import { FC, FormEvent, SyntheticEvent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { LoginUI } from '@ui-pages';
import { loginUserThunk } from '@slices';
import { useDispatch } from '@store';
import { useForm } from '@hooks';

export const Login: FC = () => {
  const { values, onChange } = useForm({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(
        loginUserThunk({
          email: values.email,
          password: values.password || ''
        })
      );

      navigate(location.state?.from || '/', { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LoginUI
      errorText=''
      email={values.email}
      setEmail={onChange}
      password={values.password || ''}
      setPassword={onChange}
      handleSubmit={handleSubmit}
    />
  );
};
