import React from "react";

const SlatCard = ({icon,title,count}) => {
  return (
    <div className="bg-white flex items-center gap-6 shadow-lg p-5 rounded-lg">
      <p className="text-2xl text-white bg-[#7A5542] px-3 py-3 rounded-full">
      {icon}
      </p>
      <div className="space-y-1">
        <h3 className="text-[#7A5542]  font-bold">{title}</h3>
        <p className="text-xl font-semibold">{count}</p>
      </div>
    </div>
  );
};

export default SlatCard;
