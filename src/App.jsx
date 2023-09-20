import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";


const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />
}

