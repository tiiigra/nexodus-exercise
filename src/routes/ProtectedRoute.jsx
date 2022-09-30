import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({
    token,
    redirectPath = '/',
    children,
}) => {
    if (!token) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };