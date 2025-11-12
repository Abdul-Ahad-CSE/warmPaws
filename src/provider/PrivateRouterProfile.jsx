import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/loading/Loading";

export default function PrivateRouterProfile({ children }) {
  const { user, loading } = use(AuthContext);
  //console.log(user);
  //if user exist, return the children (MyProfile.jsx)

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  //else navigate to login page
  return <Navigate to="/auth/login"></Navigate>;
}
