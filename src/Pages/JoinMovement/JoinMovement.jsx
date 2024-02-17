import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import JoinForm from "./JoinForm";

const JoinMovement = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12">
        <div className=" mb-8">
          <SectionTitle title="Support the Cause: Join the Artisan Empowerment Movement"></SectionTitle>
        </div>
        <div className="space-y-3">
          <p>
            In the rich tapestry of India's cultural heritage, Sabhyasha Retail
            Tech endeavors to empower artisans and showcase their exceptional
            creations on the global stage. Individuals can actively contribute
            to this transformative journey by purchasing authentic artisanal
            products from sabhyasha.com. Every acquisition directly supports
            artisans and helps preserve traditional crafts. For those
            considering bulk purchases, whether for personal use, gifting, or
            events, this choice significantly contributes to economic
            empowerment and sustained livelihoods.
          </p>
          <p>
            Corporations are encouraged to engage with the cause by sourcing
            artisanal products for corporate gifting needs or as bulk purchases
            for office decor and employee gifts. Becoming a bulk buyer not only
            serves corporate needs but also makes a lasting impact on the lives
            of artisans. Additionally, corporations can extend their CSR support
            to Sabhyasha's initiative, directing funds toward onboarding more
            artisans into the e-commerce ecosystem, thereby fostering
            socio-economic development.
          </p>
          <p>
            NGOs and foundations play a pivotal role by providing direct funding
            support to Sabhyasha, facilitating the onboarding of more artisans
            into the e-commerce ecosystem. Collaborating with the network to
            identify and connect with artisans enhances the reach of the artisan
            empowerment movement.
          </p>
          <p>
            NGOs and foundations play a pivotal role by providing direct funding
            support to Sabhyasha, facilitating the onboarding of more artisans
            into the e-commerce ecosystem. Collaborating with the network to
            identify and connect with artisans enhances the reach of the artisan
            empowerment movement.
          </p>
        </div>
        <JoinForm></JoinForm>
      </div>
    </section>
  );
};

export default JoinMovement;
