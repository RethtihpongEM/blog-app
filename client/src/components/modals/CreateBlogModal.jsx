import { useState } from "react";
import { Button, Modal } from "antd";
import BlogForm from "../forms/BlogForm";
import { Form, Formik } from "formik";
import { BlogSchema } from "../../schema/BlogSchema";

const CreateBlogModal = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className="bg-blue-400 text-white hover:bg-white font-jetbrainMonoRegular"
        size="large"
        onClick={showModal}
      >
        Create Blog
      </Button>
      <Modal
        open={open}
        title="Create Blog"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <Formik
          initialValues={{
            title: "",
            description: "",
            body: "",
          }}
          validationSchema={BlogSchema}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-center gap-y-[15px]">
              <BlogForm errors={errors} touched={touched} />
              <button
                type="submit"
                className="py-2 bg-[#3DAAF9] w-1/3 text-white font-jetbrainMonoBold rounded-lg"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
export default CreateBlogModal;
