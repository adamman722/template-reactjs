import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import DropDown from "./components/dropdown/DropDown";
import Form from "./components/testingGround/Form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //to make new paths we use children instead of routs this time
    children: [
      { path: "Elements", element: <DropDown /> },
      { path: "Form", element: <Form /> },
    ],
  },
]);

export default router;
