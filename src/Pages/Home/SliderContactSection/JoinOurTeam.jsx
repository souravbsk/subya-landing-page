import React from 'react';
import { Link } from 'react-router-dom';

const JoinOurTeam = () => {
    return (
        <div className="w-full md:pl-16 md:pr-44 md:pb-[67px] md:pt-4  py-12 px-6 bg-[#FFE2DA]">
          <h2 className="font-extrabold text-[#FF9370] text-3xl md:text-5xl font-anton">
            Join Our Team
          </h2>
          <form className="space-y-8 mt-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full placeholder-[#FF9370] text-xl font-medium outline-none border-b-2 border-[#FF9370]  bg-transparent text-[#FF9370]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full placeholder-[#FF9370] text-xl  font-medium outline-none border-b-2 border-[#FF9370]  bg-transparent text-[#FF9370]"
              />
            </div>
            <div>
              <Link className="text-[#FF9370] text-xl font-extrabold underline">
                SUBSCRIBE
              </Link>
            </div>
          </form>
        </div>
    );
};

export default JoinOurTeam;