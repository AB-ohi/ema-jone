import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/Shop'; 
import Home from './components/Home/Home';
import Orders from './components/Order/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './components/CartProductsLoader/CartProductsLoader';


import AuthProviders from './components/Providers/AuthProviders';
import SingUp from './components/SingUp/SingUp';
import Proceed from './components/Proceed/Proceed';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
       path:'/proceed',
       element:<PrivateRoute><Proceed></Proceed></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'singUp',
        element: <SingUp></SingUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
