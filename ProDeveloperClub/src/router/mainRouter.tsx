import { createBrowserRouter } from "react-router-dom";
//import LayOut from "../components/static/LayOut";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import Blog from "../pages/Blog";
import GoPro from "../pages/GoPro";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/goPro",
    element: <GoPro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
