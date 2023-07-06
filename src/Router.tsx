import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AuthCallback from './pages/Login/AuthCallback';
import StoreDetail from './pages/StoreDetail/StoreDetail';
import UploadImage from './pages/UploadImage/UploadImage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <></> },
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/login/auth', element: <AuthCallback /> },
      { path: '/detail/:id', element: <StoreDetail />},
      { path: '/uploadImage', element: <UploadImage /> },
      
    ]
  },
]);

export default router;
