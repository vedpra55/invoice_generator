import { useDataContext } from "@/context/inputDataContext";
import React from "react";

export default function InvoiceInformation() {
  const { handleInvoiceInputChange } = useDataContext();

  return (
    <div className="flex flex-col gap-y-5 lg:items-end">
      <h2 className=" text-3xl font-semibold uppercase">Invoice</h2>
      <div className="flex">
        <div className="bg-gray-200 w-10 h-10 flex justify-center items-center">
          #
        </div>
        <input
          onChange={(e) => handleInvoiceInputChange(e)}
          name="invoiceId"
          className="h-10 w-full lg:w-48 border outline-gray-200 px-5 py-1"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-5 lg:text-end">
        <div className="flex items-center gap-x-4">
          <p className=" text-gray-500 w-[8.5rem] ">Date</p>
          <input
            onChange={(e) => handleInvoiceInputChange(e)}
            type="date"
            name="date"
            className="h-14  w-48  lg:w-72 rounded-sm border outline-gray-200 px-5 py-1"
          />
        </div>
        <div className="flex  items-center gap-x-4">
          <p className=" text-gray-500 w-[8.5rem] ">Payment Terms</p>
          <textarea
            onChange={(e) => handleInvoiceInputChange(e)}
            name="paymentTerms"
            className="h-14 w-48  lg:w-72  rounded-sm border outline-gray-200 px-5 py-1"
          />
        </div>
        <div className="flex  items-center gap-x-4">
          <p className=" text-gray-500 w-[8.5rem] ">Due Date</p>
          <input
            onChange={(e) => handleInvoiceInputChange(e)}
            type="date"
            name="dueDate"
            className="h-14 w-48  lg:w-72  rounded-sm border outline-gray-200 px-5 py-1"
          />
        </div>
        <div className="flex  items-center gap-x-4">
          <p className=" text-gray-500 w-[8.5rem] ">PO Number</p>
          <textarea
            onChange={(e) => handleInvoiceInputChange(e)}
            name="poNumber"
            className="h-14 w-48  lg:w-72  rounded-sm border outline-gray-200 px-5 py-1"
          />
        </div>
      </div>
    </div>
  );
}
