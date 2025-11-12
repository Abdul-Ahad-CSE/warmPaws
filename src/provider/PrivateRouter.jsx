import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/loading/Loading";

export default function PrivateRouter({ children }) {
  const { user, loading } = use(AuthContext);
  //console.log(user);

  const location = useLocation();
  console.log(location);

  //if -> user exist, return children;

  if(loading){
    return <Loading></Loading>; 

  }

  if (user && user?.email) {
    return children;
  }
  // else navigate -> Login
  return <Navigate to="/auth/login"></Navigate>;
  
}
