import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';
import { useDispatch, useSelector } from '@store';
import { useEffect } from 'react';
import { getFeedsThunk } from '@slices';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.feeds.data);
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = feeds.orders;

  useEffect(() => {
    dispatch(getFeedsThunk());
  }, [dispatch]);

  const handleGetFeeds = () => {
    dispatch(getFeedsThunk());
  };

  if (!orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
};
