import { navbarMenu } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarMenu.map((item, index) => {
              const { name, path, children } = item;
              console.log(name);
              return (
                <li key={index}>
                  <a>{name}</a>
                  {children?.length > 0 ? (
                    <ul className="p-2">
                      {children.map((childItem, index) => (
                        <li key={index}>
                          <a>{childItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Brand Folder</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          {navbarMenu.map((item, index) => {
            const { name, path, children } = item;
            // console.log(children);
            return (
              <li key={index} tabIndex={0}>
                {!children && <Link href={path}>{name}</Link>}
                {children?.length > 0 && (
                  <details>
                    <summary>{name}</summary>
                    <ul className="p-2">
                      {children.map((item, index) => (
                        <li key={index}>
                          <a>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end gap-x-3 pr-5">
        <a className="btn btn-outline">Your Brandfolders</a>
        <a className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
