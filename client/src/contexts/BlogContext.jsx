/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axiosClient from "../api/axiosClient";
import * as Yup from "yup";
import { useQuery } from "@tanstack/react-query";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  //Blog schema for validation
  const BlogSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    body: Yup.string(),
    author: Yup.string(),
    date: Yup.string(),
  });

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
    reFetch: blogsRefetch,
    isError: blogsError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      return await axiosClient.get("api/blogs").then((res) => res.data);
    },
  });

  const updateBlog = async (id, title, author = "Rethtihpong", body) => {
    setIsSuccess(false);
    setLoading(true);
    await axiosClient
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blogsLoading,
        blogsRefetch,
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
