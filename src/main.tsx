import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { About } from './pages/About/About'
import Works from './pages/Works/Works'
import Root from './pages/Root/Root'
import { Contact } from './pages/Contact/Contact'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'works', element: <Works /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  /*  {
    path: 'about',
    element: <About />,
  }, */
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
