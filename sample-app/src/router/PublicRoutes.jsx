import React from 'react';
import { Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import MinimalLayout from '../layout/MinimalLayout';
import routes from '../constants/routes';

const PrivateRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to={routes.LOGIN} />,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to={routes.LOGIN} />,
    },
  ],
};

export default PrivateRoutes;
