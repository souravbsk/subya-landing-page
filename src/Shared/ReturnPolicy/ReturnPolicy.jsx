import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link, ScrollRestoration } from "react-router-dom";

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
        <div>
          <h2 className="font-bold text-xl mb-4">Return Policy</h2>
          <ul className="list-disc ps-8 space-y-3">
            <li>
              <p>
                All purchases can only be returned if it is defective/damaged or
                is a wrong delivery within 7 days after you have received the
                last package of your order.
              </p>
            </li>
            <li>
              <p>
                Items must be unused, undamaged, and in original packaging,
                include all price tags, labels, original packing, and invoice
                and all the items in the package must be intact. If not, the
                buyer is responsible for all incurred fees and no refund will be
                issued.
              </p>
            </li>
            <li>
              <p>
                Items that do not meet these criteria will not be considered for
                return.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">
            Purchase not eligible for return
          </h2>
          <ul className="list-disc ps-8 space-y-3">
            <li>
              <p>Final sale/Clearance item(s) is not eligible for return.</p>
            </li>
            <li>
              <p>
                Used, damaged and missing of original package (Include all price
                tags, labels, original packing, and invoice and all the items in
                the package) cannot be returned or exchanged.
              </p>
            </li>
            <li>
              <p>
                You must email us a picture showing the problem/defect during
                the shipment after submitting the return request online.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">
            Purchase not eligible for return
          </h2>
          <ul className="space-y-3">
            <li>
              <p>
                <span className="font-bold">Step 1:</span> Click the “Tracking
                Order” feature at the bottom menu of our home page.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Step 2:</span> Enter your Email
                Address and Order Number.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Step 3:</span> There is a “Return”
                button in the specific order. You need to click it to submit the
                return request and you will get authorization and a return
                address via email within 48 hours.
              </p>
            </li>
          </ul>
          <p className="mt-8">
            Once we receive your return, please allow 3 to 5 business days to
            process your returns.
          </p>
        </div>
        <div className="space-y-5">
          <p className="">
            We’ll email you once we have processed your refund.
          </p>
          <p>
            Note: Item(s) must NOT be returned to the address on the package you
            received. That is not our return address and will affect the
            processing of your return.
          </p>
          <p>
            <span className="font-bold">Fast refund:</span> We will issue a
            refund to your original payment method within a week.
          </p>
          <p>
            <span className="font-bold">Kind reminder: </span> Return packages
            should be authorized. Any return request not authorized by customer
            service will not be honoured.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">Order cancellation</h2>

          <p>
            Your order shall be fully refunded if it is cancelled within 24
            hours of your purchase as our products are done on a made to order
            basis. Please submit a help ticket from Contact Us if you decide to
            cancel the order. For orders cancelled after 24 hours of the
            purchase but before the shipment, a 30% cancellation fee shall be
            applied. We will NOT accept an order cancellation request if the
            order has already been shipped.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">Contact us.</h2>

          <p>
            If you are not entirely satisfied with your purchase, it is easy to
            return and receive a refund. Please contact us at
            care@Sabhyasha.com. We will try our best to meet your request.
          </p>
        </div>
      </div>
      <ScrollRestoration />

    </section>
  );
};

export default ReturnPolicy;
