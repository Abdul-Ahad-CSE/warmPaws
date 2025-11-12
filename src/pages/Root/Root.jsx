import React from "react";
import Footer from "../../component/Footer";
import { Outlet } from "react-router";
import NavBar from "../../component/NavBar";


export default function Root() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
