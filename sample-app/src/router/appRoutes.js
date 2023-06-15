import Homepage from '@src/pages/Homepage';
import Samplepage from '@src/pages/Samplepage';
import Login from '@src/pages/Login';

import routes from '../constants/routes';

export default [
  {
    path: routes.LOGIN,
    element: Login,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    element: Homepage,
    isPrivate: false,
  },
  {
    path: routes.SAMPLE,
    element: Samplepage,
    isPrivate: false,
  },
];
