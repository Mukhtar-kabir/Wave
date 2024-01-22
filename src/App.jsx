import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
