import React from "react";

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
