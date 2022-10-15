import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MenuItems } from "../constant/Menu-items";

const Layout = () => {
  return (
    <>
      <div className="navbar bg-[#17181B] lg:hidden">
        <div className="container mx-auto">
          <div className="flex-1 text-left">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Akash Rahman
            </Link>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <label
                htmlFor="my-drawer-2"
                className="btn bg-transparent outline-none border-none hover:bg-transparent drawer-button lg:hidden"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile 2xl:container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-[#17181B] text-base-content">
            <img src="https://i.ibb.co/f9rDDkM/me.jpg" alt="" />
            {MenuItems?.map((item) => (
              <>
                <li className="border-b py-1">
                  <Link to={item.menu_link}>
                    <i className="fa-solid fa-house"></i>
                    {item.menu_name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
