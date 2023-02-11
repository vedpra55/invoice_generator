import React from "react";
import AddLogo from "./addLogo";

import CompanyInformation from "./companyInformation";
import InvoiceInformation from "./invoiceInformation";
import ProductInforLine from "./productInforLine";
import InvoiceNotesTotal from "./invoiceNotes&Total";

export default function InvoiceInputArea() {
  return (
    <div className="col-span-12 xl:col-span-9 bg-white  px-5 py-5">
      <div className=" flex-wrap gap-y-10 flex justify-between">
        <div>
          <AddLogo />
          <CompanyInformation />
        </div>
        <InvoiceInformation />
      </div>
      <ProductInforLine />
      <InvoiceNotesTotal />
    </div>
  );
}
