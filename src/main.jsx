import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Store from './pages/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/store',
    element: <Store />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
