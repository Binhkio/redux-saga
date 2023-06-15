import { Route } from 'react-router-dom';
import Routes from '../constants/routes';
import { PrivateRoute } from './PrivateRoutes';
import appRoutes from './appRoutes';
import { PublicRoute } from './PublicRoutes';

export default App = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        return route.isPrivate ? (
          <PrivateRoute>
            <Route path={route.path} element={route.element} />
          </PrivateRoute>
        ) : (
          <PublicRoute>
            <Route path={route.path} element={route.element} />
          </PublicRoute>
        );
      })}
    </Routes>
  );
};
