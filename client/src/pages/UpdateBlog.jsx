import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BlogContext from "../contexts/BlogContext";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import BlogForm from "../components/forms/BlogForm";
import { BlogSchema } from "../schema/BlogSchema";
import { Form, Formik } from "formik";
export const UpdateBlog = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { blog, getBlog, loading, updateBlog } = useContext(BlogContext);

  const { mutateAsync: updateBlogMutation } = useMutation({
    mutationFn: (values) =>
      updateBlog(id, values?.title, "Rethtihpong", values?.body),
    onSuccess: queryClient.invalidateQueries(["blogs"]),
  });

  useEffect(() => {
    getBlog(id);
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="font-jetbrainMonoBold text-[32px] md:text-[48px] lg:text-[48px] mb-[50px] mt-[25px] text-center">
          Update Blog
        </h1>
        <LoadingSpinner />
      </>
    );
  }

  const onSubmit = async (values) => {
    try {
      await updateBlogMutation(values);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <h1 className="font-jetbrainMonoBold text-[32px] md:text-[48px] lg:text-[48px] mb-[50px] mt-[25px] text-center">
        Update Blog
      </h1>
      <div className="min-h-[300px] text-center flex flex-col items-center w-full">
        <Formik
          initialValues={{
            title: blog?.title,
            description: blog?.description,
            body: blog?.body,
          }}
          validationSchema={BlogSchema}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form className="w-[300px] md:w-[500px] lg:w-[700px] flex flex-col gap-y-[20px] items-center">
              <BlogForm errors={errors} touched={touched}/>
              <button
                type="submit"
                className="py-2 bg-[#3DAAF9] w-1/3 text-white font-jetbrainMonoBold rounded-lg"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
