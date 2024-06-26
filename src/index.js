import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './routes/login';
import Signup from './routes/signup';
import About from './routes/about';
import HomeLogueado from './routes/homeLogueado';
import LandingPage from './routes/landingPage';
import './styles/index.css';
import { AuthProvider } from './auth/authProvider';
import ProtectedRoute from './routes/protectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/home",
        element:<HomeLogueado/>

      }
    ],
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider> 
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>
  </AuthProvider>
</React.StrictMode>
);
