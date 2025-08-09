import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('auth'); 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
