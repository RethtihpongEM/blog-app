/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axiosClient from "../api/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { BlogSchema } from "../schema/BlogSchema";
import useAxiosPrivate from "../hooks/useAxiosPrivate"

const BlogContext = createContext();


export const BlogProvider = ({ children }) => {
  const axiosPrivate = useAxiosPrivate()
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);


  //Get Single Blog
  const getBlog = async (id) => {
    setLoading(true);
    //Set loading to true while waiting to fetch the data
    await axiosClient.get(`api/blogs/${id}`).then((res) => {
      setBlog(res.data);
      setLoading(false);
    });
  };


  //Get all blogs (react query)
  const {
    data: blogs,
    isLoading: blogsLoading,
    isError: blogsError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      return await axiosClient.get("api/blogs").then((res) => res.data);
    },
  });


  const updateBlog = async (id, title, author, body) => {
    setIsSuccess(false);
    setLoading(true);
    await axiosPrivate
      .put("api/blogs", {
        id,
        title,
        author,
        body,
      })
      .then(async () => {
        await getBlog(id);
        setIsSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() =>{
        setLoading(false)
      })
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blogsLoading,
        blogsError,
        blog,
        getBlog,
        BlogSchema,
        loading,
        setLoading,
        isSuccess,
        setIsSuccess,
        updateBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
