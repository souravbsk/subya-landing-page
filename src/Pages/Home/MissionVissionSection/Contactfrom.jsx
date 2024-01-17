import React from "react";

const Contactfrom = () => {
  return (
    <div className="px-6 py-9 md:py-20 space-y-5 bg-[#F6F6F6]">
      <h2 className="uppercase font-extrabold font-anton text-3xl  text-[#9b8db7]">
        Contact us
      </h2>
      <p className="font-heebo text-base text-[#303030]">
        Ut eros cibo pertinax has, nulla vidisse nec at, vel an sint everti
        facilis. No vidit aeque qui. Mel simul iisque scripta cu, ea sint
        laboramus pro.
      </p>
      <div className="">
      <form className="mt-8">
        <div  className="mb-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full placeholder-[#303030] text-xl font-medium outline-none border-b-2 border-[#303030]  bg-transparent text-[#303030]"
          />
        </div>
        <div className="mb-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full placeholder-[#303030] text-xl font-medium outline-none border-b-2 border-[#303030]  bg-transparent text-[#303030]"
          />
        </div>
        <div className="mb-8">
          <textarea
            type="text"
            placeholder="Message"
            className="w-full h-36 placeholder-[#303030] text-xl font-medium outline-none border-b-2 border-[#303030]  bg-transparent text-[#303030]"
          ></textarea>
        </div>
        <div>
            <button className="uppercase font-extrabold underline text-xl text-[#303030] font-anton">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contactfrom;
