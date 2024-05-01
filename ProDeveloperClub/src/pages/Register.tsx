import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import BlogImg2 from "../assets/blog-post/BlogImg2.png";
import googleIcon from "../assets/google_g_icon.ico";
import githubIcon from "../assets/git.svg";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(2, "Name is too short")
      .max(50, "Name is too long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Perform signup logic here
    console.log(values);
  };

  return (
    <div className=" flex items-center w-full justify-between h-screen">
      <div className=" flex flex-col items-center gap-4 justify-center md:w-2/4 w-full px-16 md:px-0">
        <div className=" flex flex-col items-center mb-10">
          <h1 className=" text-3xl font-semibold">Create an Account</h1>
          <p></p>
        </div>
        <div className="flex  justify-between w-full gap-6">
          <div className="border border-grey-400 py-4 rounded-lg w-1/2 text-center font-bold flex items-center justify-center  gap-3">
            <img src={googleIcon} className=" w-10 h-10" alt="Google Icon" />
            <p>Google</p>
          </div>
          <div className="border border-grey-400 py-4 rounded-lg w-1/2 text-center font-bold flex items-center justify-center gap-3">
            <img
              src={githubIcon}
              className=" w-10 h-10 text-green-400"
              alt="Github Icon"
            />
            <p>Github</p>
          </div>
        </div>
        <div className=" my-4">
          <p>Or continue with email</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col w-full gap-4">
            <div>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className=" py-4 px-8 rounded-lg w-full "
              />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className=" py-4 px-8 rounded-lg w-full "
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className=" py-4 px-8 rounded-lg w-full "
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className=" py-4 px-8 rounded-lg w-full "
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-white py-4 rounded-lg text-black font-semibold"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
        <div className=" mt-2 flex justify-between w-full gap-4 items-center">
          <p>Already have an account?</p>
          <Link to="/login" className=" text-accent">
            Sign in
          </Link>
        </div>
      </div>
      <div className=" w-1/2 items-center justify-center hidden md:flex">
        <img src={BlogImg2} className=" w-2/3 " />
      </div>
    </div>
  );
};

export default Register;
