import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main/Main";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Login from "../AuthPage/Login";
import Register from "../AuthPage/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import DashBoardContent from "../Pages/DashBoardContent/DashBoardContent";
import MySelectedClasses from "../Pages/DashBoardContent/MySelectedClasses/MySelectedClasses";

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
            element: <Classes></Classes>
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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardContent></DashBoardContent>
      },
      {
        path: "my-selected-classes",
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: <p>ee</p>
      }
    ]
  }
]);

export default router;