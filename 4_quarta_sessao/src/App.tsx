import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Admin } from './pages/admin';
import { Login } from './pages/login';
import { Networks } from './pages/networks';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/adim', element: <Admin /> },
  { path: '/login', element: <Login /> },
  { path: '/networks', element: <Networks /> },
]);

