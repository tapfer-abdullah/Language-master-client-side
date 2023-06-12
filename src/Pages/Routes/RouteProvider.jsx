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
import MyEnrolledClasses from "../Pages/DashBoardContent/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../Pages/DashBoardContent/MyPaymentHistory/MyPaymentHistory";
import ManageUsers from "../Pages/DashBoardContent/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/DashBoardContent/Admin/ManageClasses/ManageClasses";
import InstructorClasses from "../Pages/DashBoardContent/Instructor/InstructorClasses/InstructorClasses";
import AddAClass from "../Pages/DashBoardContent/Instructor/AddAClass/AddAClass";
import UpdateClass from "../Pages/DashBoardContent/Instructor/InstructorClasses/UpdateClass";

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
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: "/dashboard/my-payment-history",
        element: <MyPaymentHistory></MyPaymentHistory>
      },
      {
        path: "/dashboard/users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "/dashboard/classes",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "/dashboard/my-classes",
        element: <InstructorClasses></InstructorClasses>
      },
      {
        path: "/dashboard/add-a-class",
        element: <AddAClass></AddAClass>
      },
      {
        path: "/dashboard/my-classes/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`)
      },
    ]
  }
]);

export default router;