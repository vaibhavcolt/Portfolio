import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPg from './component/LandingPage/LandingPg';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPg />,
    },
  ],
  {
    basename: '/Portfolio',
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
