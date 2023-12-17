import { BlogCard } from "../components/BlogCard";
import { useContext, useEffect } from "react";
import BlogContext from "../contexts/BlogContext";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Blogs = () => {
  const { blogs, blogsLoading, blogsError, blogsRefetch } =
    useContext(BlogContext);

  useEffect(() => {
    blogsRefetch;
  }, []);

  if (blogsLoading) {
    return (
      <>
        <h1 className="font-jetbrainMonoBold text-[48px] mb-[50px] mt-[25px] text-center">
          All blogs
        </h1>
        <LoadingSpinner />
      </>
    );
  }

  if (blogsError) {
    return <span>Error</span>;
  }

  return (
    <div className="min-h-[300px]">
      <h1 className="font-jetbrainMonoBold text-[48px] mb-[50px] mt-[25px] text-center">
        All blogs
      </h1>
      <div className="flex justify-center items-center align-middle w-full px-[25px] my-[25px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
          {blogs?.map((blog, key) => {
            return <BlogCard key={key} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};
