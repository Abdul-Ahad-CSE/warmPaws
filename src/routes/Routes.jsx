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
import PrivateRouter from "../provider/PrivateRouter";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRouterProfile from "../provider/PrivateRouterProfile";
import Loading from "../pages/loading/Loading";

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
        hydrateFallbackElement:<Loading></Loading>,
      },
      {
        path: "/card-details/:serviceId",
        element: (
          <PrivateRouter>
            <CardDetails></CardDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/services.json"),
        hydrateFallbackElement:<Loading></Loading>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRouterProfile>
            <MyProfile></MyProfile>
          </PrivateRouterProfile>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
