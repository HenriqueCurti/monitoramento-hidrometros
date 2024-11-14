import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((rootReducer) => rootReducer.userReducer);  
  
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
