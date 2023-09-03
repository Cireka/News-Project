import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchForNewsPage from "./pages/SearchForNewsPage.jsx";

const AppRouter = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/Search", Component: SearchForNewsPage },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <RouterProvider router={AppRouter} />
  </Fragment>
);
