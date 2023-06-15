import { useRoutes } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRoute = () => {
  const auth = true;

  if (!auth) {
    console.log('Not Authenticated');
    return useRoutes([PublicRoutes]);
  }
  console.log('Authenticated');
  return useRoutes([PrivateRoutes]);
};

export default AppRoute;
