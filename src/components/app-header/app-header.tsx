import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '@store';

export const AppHeader: FC = () => {
  const name = useSelector((state) => state.authorization.user.name);

  return <AppHeaderUI userName={name || ''} />;
};
