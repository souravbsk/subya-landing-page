import React from "react";

const BusinessUser = () => {
  return (
    <li>
      <h3 className="font-bold text-2xl mb-4">
        Whether you are a consumer or a business user:
      </h3>
      <ul className="space-y-4">
        <li className="space-y-3">
          <p>
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents or subcontractors and for fraud or fraudulent
            misrepresentation.
          </p>
          <p>
            If we fail to comply with these Terms and Conditions, we will be
            responsible for loss or damage you suffer that is a foreseeable
            result of our breach of these Terms and Conditions, but we would not
            be responsible for any loss or damage that was not foreseeable at
            the time you started using the Site/Services.
          </p>
        </li>

        <li className="space-y-3">
          <p>
            Notwithstanding anything to the contrary contained in the
            Disclaimer/Limitation of Liability section, our liability to you for
            any cause whatsoever and regardless of the form of the action, will
            at all times be limited to a total aggregate amount equal to the
            greater of (a) the sum of £Limited to the purchase amount by the
            user or (b) the amount paid, if any, by you to us for the
            Services/Site during the six (6) month period prior to any cause of
            action arising.
          </p>
        </li>
      </ul>
    </li>
  );
};

export default BusinessUser;
