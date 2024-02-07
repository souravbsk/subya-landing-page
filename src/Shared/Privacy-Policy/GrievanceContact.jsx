import React from "react";
import { Link } from "react-router-dom";

const GrievanceContact = () => {
  return (
    <>
      <div className="text-[#303030] mb-8 space-y-4">
        <h3 className=" text-xl font-bold">Grievance Contact</h3>
        <p>
          In accordance with the Information Technology Act 2000 and the rules
          made there under, the contact details.
        </p>
      </div>
      <div className="text-[#303030] mb-8 space-y-4">
        <Link to="mailto:care@sabhyasha.com" className="font-bold">
          care@sabhyasha.com
        </Link>
        <h3 className=" text-xl font-bold">Updates to this policy</h3>
        <p>
          This Privacy Policy was last updated on 16.06.2022. From time to time
          we may change our privacy practices. We will notify you of any
          material changes to this policy as required by law. We will also post
          an updated copy on our website. Please check our site periodically for
          updates.
        </p>
      </div>
    </>
  );
};

export default GrievanceContact;
