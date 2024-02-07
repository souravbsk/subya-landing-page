import React from "react";
import { Link } from "react-router-dom";

const AgreementTerms = () => {
  return (
    <li>
      <h3 className="font-bold text-2xl mb-4">1. Agreement to Terms</h3>
      <ul className="space-y-4">
        <li className="space-y-3">
          <p>
            1.1 These Terms and Conditions constitute a legally binding
            agreement made between you, whether personally or on behalf of an
            entity <b>(you)</b>, and{" "}
            <b> Sabhyasha Retail Tech Pvt. Ltd., (we, us),</b> concerning your
            access to and use of the{" "}
            <b>
              Sabhyasha{" "}
              <Link className="font-bold">(https://www.sabhyasha.com)</Link>
            </b>{" "}
            website as well as any related applications <b>(the Site)</b>.
          </p>
          <p>
            The Site provides the following services:{" "}
            <b>
              E-commerce Store for Indian Handloom and Handicraft (Services).
            </b>{" "}
            You agree that by accessing the Site and/or Services, you have read,
            understood, and agree to be bound by all of these Terms and
            Conditions.
          </p>
          <p>
            <b>
              If you do not agree with all of these Terms and Conditions, then
              you are prohibited from using the Site and Services and you must
              discontinue use immediately.
            </b>{" "}
            We recommend that you print a copy of these Terms and Conditions for
            future reference.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.2 The supplemental policies set out in Section 1.7 below, as well
            as any supplemental terms and conditions or documents that may be
            posted on the Site from time to time, are expressly incorporated by
            reference.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.3 We may make changes to these Terms and Conditions at any time.
            The updated version of these Terms and Conditions will be indicated
            by an updated “Revised” date and the updated version will be
            effective as soon as it is accessible. You are responsible for
            reviewing these Terms and Conditions to stay informed of updates.
            Your continued use of the Site represents that you have accepted
            such changes.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.4 We may update or change the Site from time to time to reflect
            changes to our products, our users’ needs and/or our business
            priorities.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.5 Our site is directed to people residing in the United Kingdom.
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.6 The Site is intended for users who are at least 18 years old. If
            you are under the age of 18, you are not permitted to register for
            the Site or use the Services without parental permission.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            1.7 Additional policies which also apply to your use of the Site
            include:
          </p>
          <p>
            Our Acceptable Use Policy
            <Link
              className="text-[#7A5542] font-bold"
              to="https://sabhyasha.com/privacy-policy/"
            >
              {" "}
              https://sabhyasha.com/privacy-policy/
            </Link>
            , which sets out the permitted uses and prohibited uses of the Site.
            When using the Site, you must comply with this Acceptable Use
            Policy.
          </p>
          <p></p>
        </li>
      </ul>
    </li>
  );
};

export default AgreementTerms;
