import React, { lazy } from 'react';

import Loadable from '../ui-component/Loadable';
import routes from '../constants/routes';
import MainLayout from '../layout/MainLayout';

const Homepage = Loadable(lazy(() => import('pages/Homepage')));
const Samplepage = Loadable(lazy(() => import('pages/Samplepage')));
const NotFound = Loadable(lazy(() => import('pages/NotFound')));

const PrivateRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: routes.HOME,
      element: <Homepage />,
    },
    {
      path: routes.SAMPLE,
      element: <Samplepage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default PrivateRoutes;
