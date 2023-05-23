import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import AllToy from "../Components/AllToy/AllToy";
import MyToy from "../Components/MyToy/MyToy";
import AddToy from "../Components/AddToy/AddToy";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import UpdateToy from "../Components/UpdateToy/UpdateToy";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import SingleToyDetails from "../Components/Home/SingleToyDetails/SingleToyDetails";

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
        element: (
          <PrivetRouter>
            <AllToy></AllToy>
          </PrivetRouter>
        ),
      },

      {
        path: "/mytoy",
        element: (
          <PrivetRouter>
            <MyToy></MyToy>
          </PrivetRouter>
        ),
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRouter>
            <SingleToyDetails></SingleToyDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addtoys/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRouter>
            <UpdateToy></UpdateToy>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addtoys/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
