import { Navigate } from 'react-router-dom';
import { BEARER } from '../resources';

export const ProtectedRoute = ({
    redirectPath = '/',
    children,
}) => {
    const token = localStorage.getItem(BEARER);

    if (!token) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };