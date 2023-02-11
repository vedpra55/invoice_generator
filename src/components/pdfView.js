/* eslint-disable @next/next/no-img-element */
import { useDataContext } from "@/context/inputDataContext";
import React, { useEffect, useState } from "react";
/* eslint-disable react/display-name */

const PdfView = React.forwardRef((props, ref) => {
  const {
    companyDetails,
    invoiceDetails,
    productLine,
    selectedImageUrl,
    checkoutData,
    invoiceSubDetails,
  } = useDataContext();

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [balanceDue, setBalanceDue] = useState(0);

  const amountPaid = invoiceSubDetails.amountPaid;

  let sub = 0;
  function addArray() {
    setSubTotal(0);
    productLine.forEach((item) => {
      sub += item.rate * item.qty;
      setSubTotal(sub);
    });
  }

  useEffect(() => {
    addArray();
  }, [productLine]);

  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  useEffect(() => {
    addArray();
    if (subTotal !== 0) {
      const taxRate = invoiceSubDetails.tax;
      const discountRate = invoiceSubDetails.discount;
      const shippingRate = invoiceSubDetails.shipping;

      const taxDue = subTotal * (taxRate / 100);
      const discountDue = subTotal * (discountRate / 100);

      setTotal(subTotal + taxDue - discountDue);
    }
  }, [invoiceSubDetails, subTotal]);

  useEffect(() => {
    setBalanceDue(total - amountPaid);
  }, [amountPaid, total]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-3xl font-semibold mt-5">Preview Invoice Pdf</h4>
      <div
        ref={ref}
        className="a4Size px-5 py-5 mt-10  my-10  bg-white shadow-md"
      >
        <div className="flex justify-between">
          <div>
            {selectedImageUrl && (
              <img className="w-36" alt="logo" src={selectedImageUrl} />
            )}
            <div className="mt-5 px-4">
              <p className=" font-bold">{companyDetails.companyName}</p>
              <p>{companyDetails.address}</p>
              <p>{companyDetails.taxNumber}</p>
            </div>
            <div className="mt-5 px-4">
              <p className=" text-gray-500">Bill To:</p>
              <p className=" font-bold">{companyDetails.clientName}</p>
              <p>{companyDetails.clienttax}</p>
              <p>{companyDetails.clientaddress}</p>
            </div>
          </div>
          <div className="mt-3">
            <p className=" text-[2.5rem] uppercase text-end">Invoice</p>
            <p className="text-end uppercase text-[18px] text-gray-500">
              # {invoiceDetails.invoiceId}
            </p>
            <div className="mt-10 items-end flex flex-col gap-y-4">
              <div className="flex gap-x-5 w-80 justify-between">
                <p className=" text-gray-500 w-32 flex justify-end">Date:</p>
                <p>{invoiceDetails.date}</p>
              </div>
              <div className="flex gap-x-5 w-80 justify-between">
                <p className=" text-gray-500 w-32 flex justify-end">
                  Payment Terms:
                </p>
                <p>{invoiceDetails.paymentTerms}</p>
              </div>
              <div className="flex gap-x-5 w-80 justify-between">
                <p className=" text-gray-500 w-32 flex justify-end">
                  Due Date:
                </p>
                <p>{invoiceDetails.dueDate}</p>
              </div>
              <div className="flex gap-x-5 w-80 justify-between">
                <p className=" text-gray-500 w-32 flex justify-end">
                  PO Number:
                </p>
                <p>{invoiceDetails.poNumber}</p>
              </div>
              <div className=" bg-gray-100 flex justify-end  w-96 rounded-md  pr-2 py-2">
                <div className="flex  justify-between w-80">
                  <p className="font-bold text-[18px] w-32 flex justify-end">
                    Balance Due:
                  </p>
                  <p className=" font-bold text-[18px] text-end">
                    {checkoutData.selectedCurrency} {balanceDue.toFixed(3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-12 text-white bg-black/75 px-5 py-1 rounded-md ">
            <div className=" col-span-5">Item</div>
            <div className=" col-span-3">Quantity</div>
            <div className=" col-span-2">Rate</div>
            <div className=" col-span-2 text-end">Amount</div>
          </div>
          {productLine.map((item, i) => (
            <div key={i} className=" grid grid-cols-12 px-5 py-3">
              <p className="col-span-5">{item.itemName}</p>
              <p className="col-span-3">{item.qty}</p>
              <p className="col-span-2">{item.rate}</p>
              <p className="col-span-2  text-end">
                {checkoutData.selectedCurrency} {item.rate * item.qty}
              </p>
            </div>
          ))}
        </div>
        <div className=" mt-10 px-5 w-full flex flex-col items-end gap-y-4">
          <div className="flex gap-x-5 w-80 justify-between">
            <p className=" text-gray-500 w-32 flex justify-end">Subtotal:</p>
            <p>
              {checkoutData.selectedCurrency} {subTotal}
            </p>
          </div>
          <div className="flex gap-x-5 w-80 justify-between">
            <p className=" text-gray-500 w-32 flex justify-end">Tax:</p>
            <p>{invoiceSubDetails.tax} %</p>
          </div>
          <div className="flex gap-x-5 w-80 justify-between">
            <p className=" text-gray-500 w-32 flex justify-end">Discount:</p>
            <p>{invoiceSubDetails.discount} %</p>
          </div>
          <div className="flex gap-x-5 w-80 justify-between">
            <p className=" text-gray-500 w-32 flex justify-end">Total:</p>
            <p>
              {checkoutData.selectedCurrency} {total.toFixed(3)}
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <p className=" text-[14px] mb-1 text-gray-500">Notes</p>
          <p>{invoiceSubDetails.notes}</p>
        </div>
        <div className=" mt-5">
          <p className=" text-[14px] mb-1 text-gray-500">Terms</p>
          <p>{invoiceSubDetails.terms}</p>
        </div>
      </div>
    </div>
  );
});

export default PdfView;
