import { useAuth } from './authHelper';
import { useLocation, Navigate } from 'react-router-dom';

const IsLoggedIn = ({ children }: { children: JSX.Element }) =>  {
  const auth = useAuth(),
    location = useLocation();

  if (auth?.user) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
}

export default IsLoggedIn;
