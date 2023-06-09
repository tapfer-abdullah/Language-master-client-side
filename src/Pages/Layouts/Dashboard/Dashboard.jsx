/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../SharedPages/Header";
import Footer from "../../SharedPages/Footer";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>

        <div className="drawer lg:drawer-open  ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center pt-20">
            {/* Page content here */}
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full text-base-content pt-24 bg-my-secondary">
              {/* Sidebar content here */}
              <li>
                <Link to="/dashboard/my-selected-classes">
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-enrolled-classes">
                  My Enrolled Classes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Dashboard;
