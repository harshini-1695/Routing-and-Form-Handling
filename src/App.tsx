import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

//setting route for login & dashboard pages
const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Login />,
    path: "/",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
