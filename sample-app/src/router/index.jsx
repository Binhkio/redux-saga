import { useRoutes } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRoute = () => {
  const auth = true;

  if (!auth) {
    return useRoutes([PublicRoutes]);
  }
  return useRoutes([PrivateRoutes]);
};

export default AppRoute;
