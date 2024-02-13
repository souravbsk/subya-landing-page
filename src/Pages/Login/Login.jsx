import React from "react";
import { FaFileUpload, FaUpload } from "react-icons/fa";
import Content from "./Content";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="hero min-h-screen peraBg">
      <div className=" md:w-4/12">
       <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
