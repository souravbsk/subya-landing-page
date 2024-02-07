import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyApplies = () => {
  return (
    <>
      <h4 className="text-[#303030]  font-anton font-semibold  md:text-xl mb-3">
        This Privacy Policy applies to the Sabhyasha.com
      </h4>
      <p className="mb-5">
        Sabhyasha.com recognises the importance of maintaining your privacy. We
        value your privacy and appreciate your trust in us. This Policy
        describes how we treat user information we collect on{" "}
        <Link className="text-[#9A7F71]" to="/">
          https://sabhyasha.com
        </Link>{" "}
        and other offline sources. This Privacy Policy applies to current and
        former visitors to our website and to our online customers. By visiting
        and/or using our website, you agree to this Privacy Policy.
      </p>
      <p>
        <span className="font-bold">www.sabhyasha.com</span> is the property of{" "}
        <span className="font-bold">Sabhyasha Retail Tech Pvt. Ltd.</span>
      </p>
    </>
  );
};

export default PrivacyPolicyApplies;
