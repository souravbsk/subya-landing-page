import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({link,text,className}) => {
    return (
        <button className="bg-[#7A5542] px-5 pt-2 pb-3">
        <Link
          to={link}
          className={`uppercase font-anton underline font-extrabold text-white ${className}`}
        >
          {text}
        </Link>
      </button>
    );
};

export default Button;