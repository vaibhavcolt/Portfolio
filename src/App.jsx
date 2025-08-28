import './App.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import LandingPg from './component/LandingPage/LandingPg';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <LandingPg />
        </div>
    },
    
  ],
{
     basename: '/Portfolio',
  });
const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>

    </div>
  )
}

export default App
