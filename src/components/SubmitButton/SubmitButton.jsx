import React from 'react';

const SubmitButton = ({title,className}) => {
    return (
        <button
       
        className={`bg-[#7A5542] shadow-xl font-semibold flex items-center gap-2 text-white py-3 px-4 rounded-md ${className}`}
      >
        {title}
      </button>
    );
};

export default SubmitButton;