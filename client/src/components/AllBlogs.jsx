import { useContext } from "react";
import BlogContext from "../contexts/BlogContext";
import { BlogCard } from "./BlogCard";
import { LoadingSpinner } from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

export default function AllBlogs() {
  const { blogs, blogsLoading, blogsError } = useContext(BlogContext);
  if (blogsLoading) {
    return <LoadingSpinner />;
  }

  if (blogsError) {
    return <ErrorMessage />;
  }

  return (
    <div className="flex justify-center items-center align-middle w-full px-[25px] my-[25px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
        {blogs?.map((blog, key) => {
          return <BlogCard key={key} blog={blog} />;
        })}
      </div>
    </div>
  );
}
