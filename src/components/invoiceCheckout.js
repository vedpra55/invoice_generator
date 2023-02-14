/* eslint-disable react/display-name */
import { useDataContext } from "@/context/inputDataContext";
import React from "react";
import Pdf from "react-to-pdf";
import { BsDownload } from "react-icons/bs";

const InvoiceCheckout = React.forwardRef((props, ref) => {
  const { handleCheckoutInputChange, checkoutData } = useDataContext();

  return (
    <div className="col-span-12 px-5  xl:col-span-3 mt-10 ">
      <button className=" bg-[#C0C0C0]  px-5 py-2 rounded-md text-white font-bold">
        Send Invoice
      </button>
      <Pdf targetRef={ref} filename="invoice.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className=" flex gap-x-2 items-center mt-5 text-[#89B608]"
          >
            <BsDownload />
            <p>Download Invoice</p>
          </button>
        )}
      </Pdf>
      <div className="flex flex-col gap-y-1 mt-10">
        <label className=" text-gray-400">Currency</label>
        <select
          value={checkoutData.selectedCurrency}
          name="selectedCurrency"
          onChange={(e) => handleCheckoutInputChange(e)}
          className="px-5 py-2 w-48 border border-gray-200  bg-transparent"
        >
          <option>USD ($)</option>
          <option>INR</option>
        </select>
      </div>
      <div className="flex flex-col gap-y-1 mt-5">
        <label className=" text-gray-400">Type</label>
        <select
          name="selectedCurrency"
          value={checkoutData.selectedType}
          onChange={(e) => handleCheckoutInputChange(e)}
          className="px-5 w-48 py-2 border border-gray-200  bg-transparent"
        >
          <option>Invoice</option>
        </select>
      </div>
    </div>
  );
});

export default InvoiceCheckout;
