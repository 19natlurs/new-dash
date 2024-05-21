import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Popover, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/menuSlider";
import { logout } from "../redux/authRedux";

function Header({ setSideMenu }) {
  const [isMenuOpen, setSideMenuOpen] = useState(false);
  const [state, setState] = useState(true);

  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menuSlider.open);

  return (
    <div
      className={
        menuState
          ? "hidden"
          : "flex flex-1 bg-white h-14 border  justify-between m-2 gap-4 w-screen sm:w-full "
      }
    >
      <div
        className="inline-flex items-center justify-center ml-3 lg:hidden"
        onClick={() => {
          dispatch(increment());
          console.log(menuState);
        }}
      >
        <AiOutlineMenu size={24} />
      </div>

      <div className=" relative items-center md:block hidden p-2  w-[30rem]">
        <input
          type="text"
          placeholder="Search..."
          className="border  border-gray-300 text-gray-900 w-full h-10"
        />
        <IoSearch
          size={18}
          className="absolute right-7 top-6 text-gray-500 cursor-pointer"
        />
      </div>

      <div className="flex flex-row gap-2 justify-between items-center p">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "text-gray-700 rounded-sm inline-flex item center hover:text-opacity-50 active:bg-gray-100 focus:outline-none p-2"
                )}
              >
                <IoChatboxEllipsesOutline size={26} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80 border-red-100">
                  <div className="bg-white rounded-sm shadow-md px-2 px-y">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Messages Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "text-gray-700 rounded-sm inline-flex item center hover:text-opacity-50 active:bg-gray-100 focus:outline-none p-2"
                )}
              >
                <IoMdNotificationsOutline size={26} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80 border-red-100">
                  <div className="bg-white rounded-sm shadow-md px-2 px-y">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Notification Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black/20  text-sm font-medium text-white hover:bg-black/30 focus:ring-2 focus:ring-neutral-400">
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center "
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              ></div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Your Profile
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Settings
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        dispatch(logout());
                        // localStorage.removeItem("token");

                        // navigate("/");
                        // console.log(authRdx);
                        console.log("works");
                      }}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
