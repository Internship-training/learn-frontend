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
import About from "../page/About";
import CourseDetails from "../page/CourseDetails";
import Support from "../page/Support";
import MentorDetails from "../page/MentorDetails";
// import Programs from "../page/Programs";

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
            path: "/mentors/:slug",
            element: <MentorDetails />
          },
          {
            path: "/curriculum",
            element: <Curriculam />
          },
            // Dynamic course details
          {
            path: "curriculum/:slug",
            //  path: "curriculum/:id/:slug",
            element: <CourseDetails />,
          },
          
          {
            path: "/career-support",
            element: <Career />
          },

           {
            path: "/support",
            element: <Support />
          },
          
          {
            path: "/about",
            element: <About />
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