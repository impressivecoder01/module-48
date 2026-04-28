import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Layouts/Root.jsx';
import Home from './Page/Home.jsx';
import Register from './Page/Register.jsx';
import Login from './Page/Login.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: `/register`,
        Component: Register
      },
      {
        path: `/login`,
        Component: Login
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
