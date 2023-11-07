/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import flowerVase from "../assets/small-plant-white-pot-is-sitting-white-surface_655090-81701-PhotoRoom.png-PhotoRoom.png";

export const BlogCard = (props) => {
  const blog = props.blog;
  const { title, description, author, date } = blog;
  return (
    <NavLink
      to={'/blogs/1'}
      className="max-w-[400px] h-[400px] bg-white border border-gray-200 rounded-[25px] shadow-xl flex flex-col justify-between items-center break-all transform  
    hover:-translate-y-2 hover:scale-[105%] transition duration-100 ease-in p-4 overflow-auto cursor-pointer"
    >
      <div className="flex flex-col justify-start items-center gap-y-[15px] w-full h-full">
        <h5 className="text-[26px] font-bold text-gray-900 dark:text-white font-jetbrainMonoBold">
          {title}
        </h5>
        <img
          alt="flower pic"
          className="w-[150px] h-[150px]"
          src={flowerVase}
        />
        <p className="p-2 text-[14px] w-full font-jetbrainMonoRegular ">
          {description}
        </p>
      </div>
      <div className="items-start w-full text-[#9D9D9D] text-[14px] font-jetbrainMonoRegular">
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </NavLink>
  );
};
