import CreateBlogModal from "../components/modals/CreateBlogModal";
import AllBlogs from "../components/AllBlogs";

export const Blogs = () => {
  return (
    <div className="min-h-[300px] grid place-items-center gap-y-[10px]">
        <h1 className="font-jetbrainMonoBold text-[48px] text-center">
          All blogs
        </h1>
        <CreateBlogModal />
      <AllBlogs />
    </div>
  );
};
