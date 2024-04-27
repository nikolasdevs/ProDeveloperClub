import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/static/LayOut";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import Blog from "../pages/Blog";
import GoPro from "../pages/GoPro";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
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
]);
