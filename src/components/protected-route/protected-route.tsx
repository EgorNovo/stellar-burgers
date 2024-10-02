import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from '@store';
import { Preloader } from '@ui';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  component: React.JSX.Element;
};

const Protected = ({
  onlyUnAuth = false,
  component
}: TProtectedRouteProps): React.JSX.Element => {
  const { isAuthorized, user } = useSelector((state) => state.authorization);
  const location = useLocation();

  if (!isAuthorized) {
    return <Preloader />;
  }

  if (!onlyUnAuth && !user.name) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (onlyUnAuth && user.name) {
    const { from } = location.state ?? { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({
  component
}: {
  component: React.JSX.Element;
}): React.JSX.Element => <Protected onlyUnAuth component={component} />;
