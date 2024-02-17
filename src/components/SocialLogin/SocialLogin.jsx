import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../Redux/features/slices/user/userSlice";
const SocialLogin = ({ title, path, text }) => {
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle()).then((data) => {
      console.log(data.payload);
    });
  };

  return (
    <div className="">
      <p className="text-center mt-4">
        {text} ?{" "}
        <Link className="font-semibold text-[#7A5542]" to={path}>
          {" "}
          {title}
        </Link>
      </p>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="glass px-2 py-2 shadow-2xl rounded-full"
        >
          <FcGoogle size={40} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
