import React from "react";
import TransactionChart from "./TransactionChart";

import DashboardStatGrid from "./DashboardStatGrid";
import BuyersProfileChart from "./BuyersProfileChart";
import RecentProduct from "./RecentProduct";
import PopularProduct from "./PopularProduct";

function Dashboard() {
  return (
    <div>
      <DashboardStatGrid />
      <div className="flex flex-col w-24[rem] sm:w-full gap-4 md:flex-row  lg:flex-row">
        <TransactionChart />
        <BuyersProfileChart />
      </div>

      <div className="flex flex-col border border-t-black gap-4 justify-center w-full lg:flex-row ">
        <RecentProduct />
        <PopularProduct />
      </div>
    </div>
  );
}

export default Dashboard;
