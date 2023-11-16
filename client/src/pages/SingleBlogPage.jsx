import { NavLink, useParams } from "react-router-dom";
import flowerVase from "../assets/small-plant-white-pot-is-sitting-white-surface_655090-81701-PhotoRoom.png-PhotoRoom.png";
import moment from "moment";

import { useContext, useEffect } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import BlogContext from "../contexts/BlogContext";
export const SingleBlogPage = () => {
  const { id } = useParams();
  const { blog, getBlog, loading } = useContext(BlogContext);
  let localDate = moment(blog?.date).format("LLL");
  useEffect(() => {
    getBlog(id);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-[300px] px-[25px] lg:px-[200px] md:px-[50px] mt-[25px] flex flex-col">
      <div className="flex md:gap-x-[50px] w-full mb-[50px] flex-col items-center md:flex-row lg:flex-row lg:items-start">
        <img className="w-[500px] md:w-[300px]" src={flowerVase} alt="flower" />
        <div className="ml-[25px] lg:mt-0 lg:ml-0 md:ml-0 sm:ml-0 mt-[25px]">
          <p className="text-[48px] font-jetbrainMonoBold">{blog?.title}</p>
          <p className="text-[18px] font-jetbrainMonoRegular">
            {blog?.description}
          </p>
          <div className="mt-[25px]">
            <p className="text-[16px] font-jetbrainMonoRegular text-[#9D9D9D]">
              {blog?.author}
            </p>
            <p className="text-[16px] font-jetbrainMonoRegular text-[#9D9D9D]">
              {localDate}
            </p>
            <div className="flex gap-x-[15px] mt-[15px]">
              <NavLink
                to={`/blogs/update/${id}`}
                className="px-6 py-2 bg-[#3DAAF9] font-jetbrainMonoRegular text-white rounded-[5px] transform  
    hover:-translate-y-1 hover:scale-[105%] transition duration-100 ease-in cursor-pointer"
              >
                Update
              </NavLink>
              <button
                className="px-6 py-2 bg-[#F93D3D] font-jetbrainMonoRegular text-white rounded-[5px] transform  
    hover:-translate-y-1 hover:scale-[105%] transition duration-100 ease-in cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className=" font-jetbrainMonoRegular text-[16px] leading-relaxed">
        {blog?.body}
      </p>
    </div>
  );
};
