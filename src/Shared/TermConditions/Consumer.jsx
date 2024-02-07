import React from "react";

const Consumer = () => {
  return (
    <li>
      <h3 className="font-bold text-2xl mb-4">If you are a consumer user:</h3>
      <ul className="space-y-4">
        <li className="space-y-3">
          <p>
            Please note that we only provide our Site for domestic and private
            use. You agree not to use our Site for any commercial or business
            purposes, and we have no liability to you for any loss of profit,
            loss of business, business interruption, or loss of business
            opportunity.
          </p>
          <p>
            If defective digital content that we have supplied, damages a device
            or digital content belonging to you and this is caused by our
            failure to use reasonable care and skill, we will either repair the
            damage or pay you compensation.
          </p>
          <p>
            You have legal rights in relation to goods that are faulty or not as
            described. Advice about your legal rights is available from your
            local Citizens’ Advice Bureau or Trading Standards office. Nothing
            in these Terms and Conditions will affect these legal rights.
          </p>
        </li>
      </ul>
    </li>
  );
};

export default Consumer;
