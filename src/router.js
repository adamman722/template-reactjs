import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import DropDown from "./components/DropDown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //to make new paths we use children instead of routs this time
    children: [{ path: "testing", element: <DropDown /> }, {}],
  },
]);

export default router;
