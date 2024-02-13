import React from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
const SocialLogin = ({title,path,text}) => {
    return (
        <div className="">
        <p className="text-center mt-4">{text} ? <Link className="font-semibold text-[#7A5542]" to={path}> {title}</Link></p>
        <div className="divider">OR</div>
        <div className='text-center'>
            <button className='glass px-2 py-2 shadow-2xl rounded-full'>
                <FcGoogle size={40} />

            </button>
        </div>
      </div>
    );
};

export default SocialLogin;