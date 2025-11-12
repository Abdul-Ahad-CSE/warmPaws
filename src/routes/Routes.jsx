import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Card from "../pages/card/card";
import CardDetails from "../pages/CardDetails/CardDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/card-details/:serviceId",
        Component: CardDetails,
        loader: () => fetch("/services.json"),
      },
    ],
  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
      {
        path:"/auth/login",
        Component:Login,
      },
      {
        path:"/auth/register",
        Component:Register,
      }
    ]
  },
]);
