import React from "react";
import { FaFileUpload, FaUpload } from "react-icons/fa";
import Content from "./Content";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="hero min-h-screen peraBg">
      <div className=" lg:w-4/12 md:w-6/12 sm:w-8/12 w-full">
       <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
