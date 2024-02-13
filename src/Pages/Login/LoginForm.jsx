import React from "react";
import { FaUpload } from "react-icons/fa";
import blacklogo from "../../assets/shabasa-logo.svg";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="card  border-[#7A5542] border py-10 px-7 flex-1 w-full shadow-2xl backdrop-blur-md">
      <figure>
        <Link to="/">
          {" "}
          <img className="w-40" src={blacklogo} alt="" />
        </Link>
      </figure>
      <form className="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="email"
            placeholder="Enter you password"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="bg-[#7A5542] font-semibold text-white py-4 px-3 rounded-xl text-xl">
            Sign In
          </button>
        </div>
      </form>
      <SocialLogin
        text="Create An Account"
        title="Sign Up"
        path="/register"
      ></SocialLogin>
    </div>
  );
};

export default LoginForm;
