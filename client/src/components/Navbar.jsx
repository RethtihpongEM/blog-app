import { NavLink } from "react-router-dom";
import bloggerLogo from "../assets/Blogger.png";

export const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center w-full px-[25px] py-[25px] gap-y-[25px] lg:px-[100px]">
      <div className="w-full flex justify-between items-center">
        <NavLink className="font-jetbrainMonoRegular text-[18px] underline hover:no-underline" to={'register'}>Sign up</NavLink>
        <img className="max-w-[100px]" src={bloggerLogo} />
        <NavLink className="font-jetbrainMonoRegular text-[18px] underline hover:no-underline" to={'login'}>Log in</NavLink>
      </div>
      <div className="flex justify-center items-center w-full">
        <input className="px-4 py-2 min-w-[300px] md:w-[400px] lg:w-[500px] shadow-lg rounded-2xl border" placeholder="សួស្តី"/>
      </div>
    </nav>
  );
};
