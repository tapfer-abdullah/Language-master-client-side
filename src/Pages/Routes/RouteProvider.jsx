import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main/Main";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Login from "../AuthPage/Login";
import Register from "../AuthPage/Register";
import Instructor from "../Pages/Instructor/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/instructors",
            element: <Instructor></Instructor>
        },
        {
            path: "/classes",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
    ]
  },
]);

export default router;