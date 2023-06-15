import React from 'react';

import routes from '../constants/routes';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const auth = {
    user: 'Quan',
  };

  if (auth.user) {
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};
