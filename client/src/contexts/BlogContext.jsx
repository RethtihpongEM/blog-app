import { createContext, useState } from "react";
import axiosClient from "../axiosClient";

const BlogContext = createContext();

export const BlogProvider = ({children}) => {

  const [blogs,setBlogs] = useState([])

  const getBlogs = async () => {
    axiosClient.get('blogs').then((res) => {
      setBlogs(res.data)
    })
  }
  

  return (
    <BlogContext.Provider value={{
        blogs,
        getBlogs
        // blogsQuery,
        // blogsLoading,
        // blogsQueryReFetch,
      }
    }>
      {children}
    </BlogContext.Provider>
  )

}

export default BlogContext