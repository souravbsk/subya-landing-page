import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link, ScrollRestoration } from "react-router-dom";
import ReturnSection from "./ReturnSection";
import EligibleReturn from "./EligibleReturn";
import MakeReturn from "./MakeReturn";
import EmailProcessedRefund from "./EmailProcessedRefund";
import OrderCancellation from "./OrderCancellation";
import ContactUs from "./ContactUs";

const ReturnPolicy = () => {
  return (
    <section className="peraBg py-20">
      <div className="container md:w-9/12 space-y-5">
        <SectionTitle title="Return, Refund, Cancellation Policy"></SectionTitle>
        <p>
          Thank you for shopping at Sabhyasha. Our online shop believes that our
          products will satisfy your needs as we have handicraft artists,
          high-quality materials, reliable and a responsible QA team, which
          inspects all products before packaging.
        </p>
        <p>
          If you are not entirely satisfied with your purchase, it is easy to
          return and receive a refund. Please contact us at{" "}
          <Link className="text-[#7A5542]" to="mailto:care@sabhyasha.com">
            care@sabhyasha.com
          </Link>
          , or chat with us online. We will try our best to meet your request.
        </p>

        <ReturnSection></ReturnSection>
        <EligibleReturn></EligibleReturn>
        <MakeReturn></MakeReturn>
        <EmailProcessedRefund></EmailProcessedRefund>
        <OrderCancellation></OrderCancellation>
        <ContactUs></ContactUs>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default ReturnPolicy;
