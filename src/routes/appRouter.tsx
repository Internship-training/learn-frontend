import { createBrowserRouter } from "react-router-dom";
// import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../page/Home";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import Mentor from "../page/Mentor";
import Career from "../page/Career";
import Curriculam from "../page/Curriculam";

const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <App />, // Global wrapper
     children: [
      // PUBLIC ROUTES / MAIN LAYOUT.
      {
        element: <MainLayouts />, // Main layout wrapper
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/mentors",
            element: <Mentor />
          },
          {
            path: "/curriculum",
            element: <Curriculam />
          },
          {
            path: "/career-support",
            element: <Career />
          },
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/register",
            element: <Register />
          }
        ]
      },
      // PRIVATE ROUTES.
      // REST OF THE ROUTES.
     ]
   },
]);

export default appRouter;