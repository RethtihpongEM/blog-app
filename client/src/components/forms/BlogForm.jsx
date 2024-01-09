/* eslint-disable react/prop-types */

import { Field } from "formik";

export default function BlogForm({ errors, touched }) {
  return (
    <div className="flex flex-col gap-y-[20px] items-center w-full">
      <div className="flex flex-col items-start gap-y-2 w-full">
        <label className=" font-jetbrainMonoRegular text-[18px]">Title:</label>
        <Field
          name="title"
          id="title"
          className="w-full p-2 rounded-md font-jetbrainMonoRegular shadow-lg border-[#DDDDDD] border hover:cursor-pointer"
        />
        {errors?.title && touched?.title ? (
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
        {errors?.description && touched?.description ? (
          <span className="text-[12px] text-red-600">{errors.description}</span>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col items-start gap-y-2 w-full">
        <label className=" font-jetbrainMonoRegular text-[18px]">Body:</label>
        <Field
          as="textarea"
          name="body"
          id="body"
          rows="8"
          placeholder="Write your body here"
          className="w-full p-2 rounded-md font-jetbrainMonoRegular shadow-lg border-[#DDDDDD] border hover:cursor-pointer"
        />
        {errors?.body && touched?.body ? (
          <span className="text-[12px] text-red-600">{errors.body}</span>
        ) : (
          ""
        )}
      </div>
      
    </div>
  );
}
