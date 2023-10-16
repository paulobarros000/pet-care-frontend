import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AddOrEdit from './Pages/AddOrEdit.jsx'
import Show from './Pages/Show.jsx'
import Home from './Pages/Home.jsx'


  
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "pets/:pet_id",
        element: <Show/>,
      },
      {
        path: "/add",
        element: <AddOrEdit />,
      },
      {
        path: "/edit/:pet_id",
        element: <AddOrEdit />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
]



const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </AppProvider>
  </React.StrictMode>,
)
