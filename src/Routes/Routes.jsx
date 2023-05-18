import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import AllToy from "../Components/AllToy/AllToy";
import MyToy from "../Components/MyToy/MyToy";
import AddToy from "../Components/AddToy/AddToy";
import Blogs from "../Components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
