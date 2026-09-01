import { createBrowserRouter } from "react-router-dom";
// import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import DashboardLayout from "../layouts/StudentDashboardLayout";
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


import Dashboard from "../page/studentDashboard/Dashboard";
import TrainingModules from "../page/studentDashboard/TrainingModules";
import MyInternships from "../page/studentDashboard/MyInternships";
import Mentorship from "../page/studentDashboard/Mentorship";
import Analytics from "../page/studentDashboard/Analytics";

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


      {
        path: "/student",
        element: <DashboardLayout />,
        children: [
          { path: "dashboard",index: true, element: <Dashboard /> },       // /student
          { path: "modules", element: <TrainingModules /> },     // /student/modules
          { path: "internships", element: <MyInternships /> },   // /student/internships
          { path: "mentorship", element: <Mentorship /> },       // /student/mentorship
          { path: "analytics", element: <Analytics /> },         // /student/analytics
        ],
      },
     ]
   },
]);

export default appRouter;