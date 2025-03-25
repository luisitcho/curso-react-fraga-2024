import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Admin } from './pages/admin';
import { Networks } from './pages/networks';
import { Private } from './routes/Private';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Private> <Admin /> </Private> },
  { path: '/admin/networks', element: <Private> <Networks /> </Private> },
]);

