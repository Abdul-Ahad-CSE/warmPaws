import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
