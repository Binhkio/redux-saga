import React from 'react';

import Homepage from '../pages/Homepage';
import Samplepage from '../pages/Samplepage';
import MainLayout from '../layout/MainLayout';
import routes from '../constants/routes';
import NotFound from '../pages/NotFound';

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
