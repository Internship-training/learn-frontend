import { createBrowserRouter } from "react-router-dom";
// import MainLayouts from "../layouts/MainLayouts";
import App from "../App";

const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <App />, // Global wrapper
     children: [
      // PUBLIC ROUTES / MAIN LAYOUT.
      // PRIVATE ROUTES.
      // REST OF THE ROUTES.
     ]
   },
]);

export default appRouter;