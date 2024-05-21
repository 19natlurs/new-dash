import React from "react";
import { FcBullish } from "react-icons/fc";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDropbox } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authRedux";
import { useNavigate } from "react-router-dom";

import { decrement } from "../redux/menuSlider";
const linkClass =
  "flex flex-row gap-1 items-center pl-4  h-8 mb-4 text:white active:text-blue-500 cursor-pointer";

function SideBar({ sideMenu, closeSideBar }) {
  const menuState = useSelector((state) => state.menuSlider.open);
  const authRdx = useSelector((state) => state.authRedux.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={
        menuState
          ? "h-screen  fixed  w-screen lg:hidden bg-black/80  backdrop-blur-sm top-0 right-0  flex flex-col items-center  transition-all z-50"
          : "absolute -translate-x-full"
      }
    >
      <div className=" pt-16 pb-10 text-white">
        <MdOutlineClose
          onClick={() => {
            dispatch(decrement());
          }}
        />
      </div>
      <div className=" text-blue-500 flex flex-row items-center px-3 justify-start gap-1 pt-3 pb-2">
        <FcBullish size={24} /> <span>OpenShop</span>
      </div>

      <div className="  flex flex-col text-white  pt-5">
        <SideIcons
          icon={<LuLayoutDashboard size={22} />}
          text={<span>Dashboard</span>}
          path={"/profile"}
          onClick={() => {
            dispatch(decrement());
          }}
        ></SideIcons>
        <Link
          to="/profile/products"
          className=" text-blue-500 flex flex-row justify-start pl-4 mb-2 gap-2"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <TiDropbox />
          <span>Products</span>
        </Link>
        <SideIcons
          icon={<FaShoppingCart />}
          text={<span>Order</span>}
        ></SideIcons>

        <SideIcons
          icon={<RiCustomerService2Line />}
          text={<span>Customers</span>}
        ></SideIcons>
        <SideIcons
          icon={<IoDocumentsOutline />}
          text={<span>Transaction</span>}
        ></SideIcons>
        <SideIcons
          icon={<MdOutlineMessage />}
          text={<span>Messages</span>}
        ></SideIcons>
      </div>
      <div className="borderflex flex-col text-white  pt-5">
        <SideIcons
          icon={<IoSettingsOutline />}
          text={<span>Settings</span>}
        ></SideIcons>
        <SideIcons
          icon={<MdHelpOutline />}
          text={<span>Help & Support</span>}
        ></SideIcons>
        <div
          onClick={() => {
            dispatch(logout());
            localStorage.removeItem("token");

            // navigate("/");
            console.log(authRdx);
            console.log("works");
          }}
          className=" text-blue-500 flex flex-row justify-start pl-4 mb-2  gap-2 cursor-pointer"
        >
          <CiLogout />
          <span>LogOut</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

function SideIcons({ icon, text, path }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={classNames(
        pathname === path ? "text-blue-500" : "",
        linkClass
      )}
    >
      {icon} {text}
    </Link>
  );
}
