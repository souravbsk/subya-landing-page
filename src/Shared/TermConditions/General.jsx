import React from "react";
import { Link } from "react-router-dom";

const General = () => {
  return (
    <li>
      <h3 className="font-bold text-2xl mb-4">10.General</h3>
      <ul className="space-y-4">
        <li className="space-y-3">
          <p>
            10.1 Visiting the Site, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communication be in writing.
          </p>
          <p>
            <b>
              You hereby agree to the use of electronic signatures, contracts,
              orders and other records and to electronic delivery of notices,
              policies and records of transactions initiated or completed by us
              or via the Site.
            </b>{" "}
            You hereby waive any rights or requirements under any statutes,
            regulations, rules, ordinances or other laws in any jurisdiction
            which require an original signature or delivery or retention of
            non-electronic records, or to payments or the granting of credits by
            other than electronic means.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.2 These Terms and Conditions and any policies or operating rules
            posted by us on the Site or with respect to the Services constitute
            the entire agreement and understanding between you and us.
          </p>
          <p>
            If we determine, in our sole discretion, that your use of the
            Site/Services is in breach of these Terms and Conditions or of any
            applicable law or regulation, we may terminate your use or
            participation in the Site and the Services or delete your profile
            and any content or information discretion.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.3 Our failure to exercise or enforce any right or provision of
            these Terms and Conditions shall not operate as a waiver of such
            right or provision.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.4 We may assign any or all of our rights and obligations to
            others at any time.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.5 We shall not be responsible or liable for any loss, damage,
            delay or failure to act caused by any cause beyond our reasonable
            control.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.6 If any provision or part of a provision of these Terms and
            Conditions is unlawful, void or unenforceable, that provision or
            part of the provision is deemed severable from these Terms and
            Conditions and does not affect the validity and enforceability of
            any remaining provisions.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.7 There is no joint venture, partnership, employment or agency
            relationship created between you and us as a result of these Terms
            and Conditions or use of the Site or Services.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.8{" "}
            <i>
              <b>For consumers only –</b>
            </i>{" "}
            Please note that these Terms and Conditions, their subject matter
            and their formation, are governed by Indian law.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.9 A person who is not a party to these Terms and Conditions shall
            have no right under the Contracts (Rights of Third Parties) Act 1999
            to enforce any term of these Terms and Conditions.
          </p>
        </li>
        <li className="space-y-3">
          <p>
            10.1 In order to resolve a complaint regarding the Services or to
            receive further information regarding use of the Services, please
            contact us by email at{" "}
            <Link
              to="mailto:care@sabhyasha.com."
              className="font-bold text-[#7A5542]"
            >
              care@sabhyasha.com.
            </Link>
          </p>
        </li>
      </ul>
    </li>
  );
};

export default General;
