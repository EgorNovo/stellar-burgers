import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { PageUIProps } from '../common-type';

export type LoginUIProps = PageUIProps & {
  password: string;
  setPassword: (e: ChangeEvent<HTMLInputElement>) => void;
};
