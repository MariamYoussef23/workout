import React from "react";
import Home from "../pages";
import Workouts from "../pages/workouts";
import Dashboard from "./dashboard";

type childrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
};
export default Layout;
