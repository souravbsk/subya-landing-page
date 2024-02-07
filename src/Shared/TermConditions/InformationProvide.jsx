import React from "react";

const InformationProvide = () => {
  return (
    <li>
      <h3 className="font-bold text-2xl mb-4">
        3 Information you provide to us
      </h3>
      <ul className="space-y-4">
        <li className="space-y-3">
          <p>
            3.1 You represent and warrant that: (a) all registration information
            you submit will be true, accurate, current, and complete and relate
            to you and not a third party; (b) you will maintain the accuracy of
            such information and promptly update such information as necessary;
            (c) you will keep your password confidential and will be responsible
            for all use of your password and account; (d) you have the legal
            capacity and you agree to comply with these Terms and Conditions;
            and (e) you are not a minor in the jurisdiction in which you reside,
            or if a minor, you have received parental permission to use the
            Site.
          </p>
          <p>
            If you know or suspect that anyone other than you know your user
            information (such as an identification code or user name) and/or
            password you must promptly notify us at sabhyasha.art@gmail.com.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            3.2 If you provide any information that is untrue, inaccurate, not
            current or incomplete, we may suspend or terminate your account. We
            may remove or change a user name you select if we determine that
            such user name is inappropriate.
          </p>
        </li>
      </ul>
    </li>
  );
};

export default InformationProvide;
