import React from 'react';
import { FaPlus } from 'react-icons/fa';

const CreateButton = ({openModal,title,className}) => {
    return (
        <button
        onClick={openModal}
        className={`bg-[#7A5542] shadow-xl font-semibold flex items-center gap-2 text-white py-3 px-4 rounded-md ${className}`}
      >
        {title} <FaPlus></FaPlus>
      </button>
    );
};

export default CreateButton;