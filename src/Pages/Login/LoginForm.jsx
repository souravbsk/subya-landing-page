import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import blacklogo from "../../assets/shabasa-logo.svg";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/features/slices/user/userSlice";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state?.userSlice);

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data?.email, password: data?.password })).then(
      (data) => {
        console.log(data);
      }
    );
  };

  return (
    <div className="card  border-[#7A5542] border py-3 md:px-7 px-2 flex-1 w-full shadow-2xl backdrop-blur-md">
      <figure>
        <Link to="/">
          {" "}
          <img className="w-40" src={blacklogo} alt="" />
        </Link>
      </figure>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500 text-xs font-thin">
              Email is required
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red-500 text-xs font-thin">
              Invalid email format
            </span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              type={isShowPass ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <button
              type="button"
              onClick={() => setShowPass(!isShowPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {isShowPass ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
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
