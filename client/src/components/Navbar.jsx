/* eslint-disable no-unsafe-optional-chaining */
import { NavLink, useLocation } from "react-router-dom";
import bloggerLogo from "../assets/Blogger.png";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex flex-col justify-center items-center w-full px-[25px] py-[25px] gap-y-[25px] lg:px-[100px]">
      <div className="w-full flex justify-between items-center">
        <NavLink
          className="font-jetbrainMonoRegular text-[18px] underline hover:no-underline"
          to={"register"}
        >
          Sign up
        </NavLink>
        <NavLink to={"/"}>
          <img className="max-w-[100px]" src={bloggerLogo} />
        </NavLink>
        <NavLink
          className="font-jetbrainMonoRegular text-[18px] underline hover:no-underline"
          to={"login"}
        >
          Log in
        </NavLink>
      </div>
      <div className="flex items-center justify-between w-full">
        {location.pathname.includes("blogs") && (
          <button
            onClick={() => {
              history.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        )}

        <div className="flex justify-center items-center w-full">
          <input
            name="search"
            className="px-4 py-2 min-w-[300px] md:w-[400px] lg:w-[500px] shadow-lg rounded-2xl border"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </nav>
  );
};
