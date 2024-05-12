import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import { useState } from "react";

function Layout() {
  const [isMenuOpen, setSideMenu] = useState();

  return (
    <div className="h-screen w-screen bg-neutral-100 flex flex-row  overflow-x-hidden  ">
      <div>
        <SideBar sideMenu={isMenuOpen} closeSideBar={setSideMenu} />
      </div>
      <div className="flex-1">
        <div>{<Header setSideMenu={setSideMenu} />}</div>
        {<Outlet />}
      </div>
    </div>
  );
}

export default Layout;
