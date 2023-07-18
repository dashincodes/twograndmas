import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CateringScreen from "./Screen/CateringScreen";
import BookTheTruckScreen from "./Screen/BookTheTruckScreen";
import UpdateLocation from "./Screen/UpdateLocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },
  {
    path: "/catering",
    element: <CateringScreen />,
  },
  {

    path: "/book",
    element: <BookTheTruckScreen/>
  },
  {
    path: "/updatelocation",
    element: <UpdateLocation/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
