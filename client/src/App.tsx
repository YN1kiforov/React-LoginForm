import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
