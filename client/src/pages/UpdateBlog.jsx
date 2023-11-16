import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BlogContext from "../contexts/BlogContext";
import { Field, Form, Formik } from "formik";
import { LoadingSpinner } from "../components/LoadingSpinner";
export const UpdateBlog = () => {
  const { id } = useParams();
  const { blog, getBlog, BlogSchema, loading,updateBlog } = useContext(BlogContext);

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
    updateBlog(id,values?.title,"Rethtihpong",values?.body)
  };


  return (
    <div className="min-h-[300px] text-center flex flex-col items-center">
      <h1 className="font-jetbrainMonoBold text-[32px] md:text-[48px] lg:text-[48px] mb-[50px] mt-[25px] text-center">
        Update Blog
      </h1>
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
            <div className="flex flex-col items-start gap-y-2 w-full">
              <label className=" font-jetbrainMonoRegular text-[18px]">
                Title:
              </label>
              <Field
                name="title"
                id="title"
                className="w-full p-2 rounded-md font-jetbrainMonoRegular shadow-lg border-[#DDDDDD] border hover:cursor-pointer"
              />
              {errors.title && touched.title ? (
                <span className="text-[12px] text-red-600">{errors.title}</span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full">
              <label className=" font-jetbrainMonoRegular text-[18px]">
                Description:
              </label>
              <Field
                name="description"
                id="description"
                className="w-full p-2 rounded-md font-jetbrainMonoRegular shadow-lg border-[#DDDDDD] border hover:cursor-pointer"
              />
              {errors.description && touched.description ? (
                <span className="text-[12px] text-red-600">
                  {errors.description}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full">
              <label className=" font-jetbrainMonoRegular text-[18px]">
                Body:
              </label>
              <Field
                as="textarea"
                name="body"
                id="body"
                rows="8"
                placeholder="Write your body here"
                className="w-full p-2 rounded-md font-jetbrainMonoRegular shadow-lg border-[#DDDDDD] border hover:cursor-pointer"
              />
              {errors.body && touched.body ? (
                <span className="text-[12px] text-red-600">{errors.body}</span>
              ) : (
                ""
              )}
            </div>
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
  );
};
