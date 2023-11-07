import { BlogCard } from "../components/BlogCard";
import blogData from "../../data/Blog.json";

export const Homepage = () => {
  return (
    <div className="min-h-[300px]">
      <p className=" font-jetbrainMonoBold text-[48px] mb-[50px] mt-[25px] text-center">
        All blogs
      </p>
      <div className="flex justify-center items-center align-middle w-full px-[25px] my-[25px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
          {blogData.map((blog, key) => {
            return <BlogCard key={key} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};
