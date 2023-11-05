import { Navbar } from "../components/Navbar";
import { BlogCard } from "../components/BlogCard";
import blogData from "../../data/Blog.json";

export const WelcomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center align-middle w-full px-[25px] my-[25px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-[25px]">
          {blogData.map((blog, key) => {
            return <BlogCard key={key} blog={blog} />;
          })}
        </div>
      </div>
    </>
  );
};
