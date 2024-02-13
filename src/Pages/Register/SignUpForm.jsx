import React, { useState } from "react";
import { useForm } from "react-hook-form";
import blacklogo from "../../assets/shabasa-logo.svg";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const [isShowPass, setShowPass] = useState(false);
  const [isConfirmPassShow, setConfirmPassShow] = useState(false);

  const password = React.useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    if (!data.terms) {
      toast.error("please accept our terms and condition ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    console.log(data);
  };

  return (
    <div className="card py-3 px-7 border-[#7A5542] border flex-1 w-full shadow-2xl backdrop-blur-lg">
      <figure>
        <Link to="/">
          <img className="w-40" src={blacklogo} alt="" />
        </Link>
      </figure>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row md:gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-thin">
                Name is required
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="Enter your email"
              className="input input-bordered"
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
        </div>

        <div className="flex items-center flex-col md:flex-row md:gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              placeholder="Enter your phone"
              className="input input-bordered"
            />
            {errors.phone && (
              <span className="text-red-500 text-xs font-thin">
                Phone is required
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Enter your address"
              className="input input-bordered"
            />
            {errors.address && (
              <span className="text-red-500 text-xs font-thin">
                Address is required
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row md:gap-2">
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
                {isShowPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500 text-xs font-thin">
                Password is required
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500 text-xs font-thin">
                Password must be at least 8 characters long
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs font-thin">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            {...register("gender", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-xs font-thin">
              Gender is required
            </span>
          )}
        </div>

        <div className="form-control mt-4">
          <label className=" flex items-center gap-2 ">
            <input
              type="checkbox"
              {...register("terms")}
              className="checkbox"
            />
            <span className="label-text">
              I Accept their terms and condition{" "}
            </span>
          </label>
        </div>
        <div className="form-control mt-4">
          <button
            type="submit"
            className="bg-[#7A5542] text-white py-4 px-3 font-semibold rounded-xl text-xl"
          >
            Sign Up
          </button>
        </div>
      </form>
      <SocialLogin
        title="Sign In"
        path="/login"
        text="Already have an account"
      ></SocialLogin>
    </div>
  );
};

export default SignUpForm;
