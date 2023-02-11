/* eslint-disable react/display-name */
import React from "react";

import InvoiceInputArea from "./invoiceInputArea";
import InvoiceCheckout from "./invoiceCheckout";

const InvoiceContainer = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-gray-100 ">
    <div className="grid grid-cols-12 md:gap-x-5 lg:gap-x-10 pb-5 xl:pb-32  md:px-8 lg:px-24 py-5">
      <InvoiceInputArea />
      <InvoiceCheckout ref={ref} />
    </div>
  </div>
));

export default InvoiceContainer;
