import React from 'react';

import routes from '../constants/routes';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const auth = {
    user: 'Quan',
  };

  if (!auth.user) {
    return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};
