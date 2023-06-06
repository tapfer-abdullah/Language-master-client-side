import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/instructors",
            element: <Home></Home>
        },
        {
            path: "/classes",
            element: <Home></Home>
        }
    ]
  },
]);

export default router;