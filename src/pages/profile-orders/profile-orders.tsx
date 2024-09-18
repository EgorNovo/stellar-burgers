import { FC, useEffect } from 'react';

import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { useSelector, useDispatch } from '@store';
import { getOrdesThunk } from '@slices';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(getOrdesThunk());
  });

  return <ProfileOrdersUI orders={orders} />;
};
