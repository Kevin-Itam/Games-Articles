import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Corrigido
import App from './App.jsx';
import ErrorPage from "./pages/ErrorPages.jsx"
import Home from './pages/HomePage.jsx';
import Contatos from './pages/contatos.jsx';
   
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "home",
        element: <Home/>
      },
      {
        path:"contatos",
        element:<Contatos/>,
      },
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
