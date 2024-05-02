import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './layout/Header/index.jsx'
import Home from './layout/Home/index.jsx'
import House from './layout/House/index.jsx'

const router = createBrowserRouter([
  {
    element: <Header />, children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "House", element: <Outlet />, children: [
          {
            path: ":houseId", element: <House />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
