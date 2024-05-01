
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import BlogImg2 from "../assets/blog-post/BlogImg2.png";
import googleIcon from "../assets/google_g_icon.ico";
import githubIcon from "../assets/git.svg";

export default function Login() {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values) => {
      // Perform login validation here
      if (
        values.email === "example@example.com" &&
        values.password === "password"
      ) {
        // Successful login
        setError("");
        // Redirect to the authenticated page
      } else {
        // Invalid login
        setError("Invalid email or password");
      }
    },
  });

  return (
    <div className="flex items-center w-full justify-between h-screen">
      <div className="flex flex-col items-center gap-4 justify-center md:w-2/4 w-full px-16 md:px-0">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl font-semibold">Login to your account</h1>
          <p>Welcome back! Select method to login</p>
        </div>
        <div className="flex justify-between w-full gap-6">
          <div className="border border-grey-400 py-4 rounded-lg w-1/2 text-center font-bold flex items-center justify-center gap-3">
            <img src={googleIcon} className="w-10 h-10" alt="Google Icon" />
            <p>Google</p>
          </div>
          <div className="border border-grey-400 py-4 rounded-lg w-1/2 text-center font-bold flex items-center justify-center gap-3">
            <img src={githubIcon} className="w-10 h-10" alt="Github Icon" />
            <p>Github</p>
          </div>
        </div>
        <div className="my-4">
          <p>Or continue with email</p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full gap-4"
        >
          <input
            className="py-4 px-8 rounded-lg w-full outline-none"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className=" text-red-500">{formik.errors.email}</p>
          )}
          <input
            className="py-4 px-8 rounded-lg w-full outline-none"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className=" text-red-500">{formik.errors.password}</p>
          )}
          <div className="flex justify-between gap-4 items-center mb-4">
            <div className="font-light">Remember me</div>
            <p className="text-accent">Forgot password?</p>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-white py-4 rounded-lg text-black font-semibold"
          >
            Log In
          </button>
          {error && <p>{error}</p>}
        </form>
        <div className="mt-2 flex justify-between w-full gap-4 items-center">
          <p>Don't have an account?</p>
          <Link to="/register" className="text-accent">
            Create an account
          </Link>
        </div>
      </div>
      <div className="w-1/2 items-center justify-center hidden md:flex">
        <img src={BlogImg2} className="w-2/3" alt="Blog Image" />
      </div>
    </div>
  );
}
