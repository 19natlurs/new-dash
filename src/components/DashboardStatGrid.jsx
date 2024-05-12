import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

function DashboardStatGrid() {
  return (
    <div className="  flex flex-col justify-start gap-2 m-2 items-start lg:flex-row md:flex-row ">
      <div className=" bg-white flex flex-row pl-2 pt-3 pb-3  gap-2 w-full">
        <div className="rounded-full h-10 bg-sky-400 w-10 inline-flex items-center justify-center">
          <IoBagHandle className="text-white" size={22} />
        </div>
        <div>
          <div className=" text-sm ">Total Sales</div>
          <div className=" inline-flex gap-2">
            <div className=" font-bold">$54232</div>
            <span className="text-sm">+343</span>
          </div>
        </div>
      </div>

      <div className=" bg-white flex flex-row pl-2 pt-3 pb-3  gap-2 w-full ">
        <div className="rounded-full h-10 bg-orange-600 w-10 inline-flex items-center justify-center">
          <IoPieChart className="text-white" size={22} />
        </div>
        <div>
          <div className=" text-sm ">Total Sales</div>
          <div className=" inline-flex gap-2">
            <div className=" font-bold">$54232</div>
            <span className="text-sm">+343</span>
          </div>
        </div>
      </div>

      <div className=" bg-white flex flex-row pl-2 pt-3 pb-3  gap-2 w-full ">
        <div className="rounded-full h-10 bg-green-600 w-10 inline-flex items-center justify-center">
          <IoPeople className="text-white" size={22} />
        </div>
        <div>
          <div className=" text-sm ">Total Sales</div>
          <div className=" inline-flex gap-2">
            <div className=" font-bold">$54232</div>
            <span className="text-sm">+343</span>
          </div>
        </div>
      </div>

      <div className=" bg-white flex flex-row pl-2 pt-3 pb-3  gap-2  w-full">
        <div className="rounded-full h-10 bg-yellow-400 w-10 inline-flex items-center justify-center">
          <IoCart className="text-white" size={22} />
        </div>
        <div>
          <div className=" text-sm ">Total Sales</div>
          <div className=" inline-flex gap-2">
            <div className=" font-bold">$54232</div>
            <span className="text-sm">+343</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStatGrid;
