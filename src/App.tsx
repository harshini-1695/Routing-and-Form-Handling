import { AuthHelper } from './components/authHelper';
import RequireAuth from './components/requireAuth';
import IsLoggedIn from './components/isLoggedIn';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

//setting route for login & dashboard pages
const router = createBrowserRouter([
  {
    element: <IsLoggedIn><Login /></IsLoggedIn>,
    path: "/login",
  },
  {
    element: <IsLoggedIn><Login /></IsLoggedIn>,
    path: "/",
  },
  {
    element: <RequireAuth><Dashboard /></RequireAuth>,
    path: "/dashboard",
  },
]);

function App() {

  return (
    <AuthHelper>
      <RouterProvider router={router} />
    </AuthHelper>
  )
}

export default App
