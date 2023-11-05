/* eslint-disable react/prop-types */

import flowerVase from "../assets/small-plant-white-pot-is-sitting-white-surface_655090-81701-PhotoRoom.png-PhotoRoom.png";

export const BlogCard = (props) => {
  const blog = props.blog;
  const { title, description, author, date } = blog;
  return (
    <div
      className="max-w-md p-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 flex justify-between items-center break-all gap-x-2 transform  
    hover:-translate-y-2 hover:scale-[105%] transition duration-100 ease-in"
    >
      <img className="w-[150px]" src={flowerVase} />
      <div className=" h-full flex flex-col justify-between">
        <div className="items-start">
          <a href="#">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title.toUpperCase()}
            </h5>
          </a>
          <p className="text-[#a9a9a9] text-[14px]">{description}</p>
        </div>
        <div className="text-[#c7c7c7] text-[12px]">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
