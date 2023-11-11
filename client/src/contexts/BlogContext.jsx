import { createContext, useState } from "react";
import axiosClient from "../axiosClient";

const BlogContext = createContext();

export const BlogProvider = ({children}) => {

  const [blogs,setBlogs] = useState([])
  const [blog,setBlog] = useState({})

  const getBlogs = async () => {
    await axiosClient.get('blogs').then((res) => {
      setBlogs(res.data)
    })
  }

  const getBlog = async (id) => {
    await axiosClient.get(`blogs/${id}`).then((res) => {
      setBlog(res.data)
    })
  }
  

  return (
    <BlogContext.Provider value={{
        blogs,
        getBlogs,
        blog,
        getBlog
      }
    }>
      {children}
    </BlogContext.Provider>
  )

}

export default BlogContext