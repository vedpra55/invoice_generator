import { useDataContext } from "@/context/inputDataContext";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";

export default function InvoiceNotesTotal() {
  const {
    handleInvoiceSubDetailsInputChange,
    invoiceSubDetails,
    productLine,
    checkoutData,
  } = useDataContext();
  const [isShowDiscount, setShowDiscount] = useState(false);
  const [isShowShipping, setShowShipping] = useState(false);

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
  }, [invoiceSubDetails, productLine]);

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
    <div className="mt-10 md:mt-20">
      <div className="flex justify-between flex-wrap gap-y-5">
        <div className="flex flex-col gap-y-5">
          <div>
            <p>Terms</p>
            <input
              name="terms"
              onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
              placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
              className="mt-1 placeholder:text-[14px] w-full lg:w-[28rem] h-20 myInput"
            />
          </div>
          <div>
            <p>Notes</p>
            <input
              name="notes"
              onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
              placeholder="Notes - any relevant information not already covered"
              className="mt-1 placeholder:text-[14px] w-full lg:w-[28rem] h-20 myInput"
            />
          </div>
        </div>
        <div className="w-[20rem]">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>
              {checkoutData.selectedCurrency} {subTotal}
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 px-5">
            <p className=" flex justify-end w-full px-5 text-[14px] ">Tax</p>
            <input
              name="tax"
              type="number"
              onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
              placeholder="0%"
              className="myInput w-44 h-8"
            />
          </div>
          {isShowDiscount && (
            <div className="flex justify-between items-center mt-5 px-5">
              <p className=" flex justify-end w-full px-5 text-[14px] ">
                Discount
              </p>
              <input
                name="discount"
                type="number"
                onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
                placeholder="0%"
                className="myInput w-44 h-8"
              />
            </div>
          )}
          {isShowShipping && (
            <div className="flex justify-between items-center mt-5 px-5">
              <p className=" flex justify-end w-full px-5 text-[14px] ">
                Shipping
              </p>
              <input
                name="shipping"
                type="number"
                onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
                placeholder="0%"
                className="myInput w-44 h-8"
              />
            </div>
          )}
          <div className=" flex justify-center gap-x-5 pl-20 mt-2">
            {!isShowDiscount && (
              <div
                onClick={() => setShowDiscount(true)}
                className="cursor-pointer flex gap-x-2 items-center mt-2 text-[#89B608]"
              >
                <BsPlusLg />
                <p className="text-[15px]">Discount</p>
              </div>
            )}
            {!isShowShipping && (
              <div
                onClick={() => setShowShipping(true)}
                className="cursor-pointer flex gap-x-2 items-center mt-2 text-[#89B608]"
              >
                <BsPlusLg />
                <p className="text-[15px]">Shipping</p>
              </div>
            )}
          </div>
          <div className=" flex justify-between items-center mt-5">
            <p>Total</p>
            <p>
              {" "}
              {checkoutData.selectedCurrency} {total}
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 px-5">
            <p className=" text-[14px]">Amount Paid</p>
            <input
              type="number"
              name="amountPaid"
              onChange={(e) => handleInvoiceSubDetailsInputChange(e)}
              placeholder="$ 0"
              className="myInput w-44 h-8"
            />
          </div>
          <div className="flex justify-between mt-5 items-center">
            <p>Balance Due </p>
            <p>
              {" "}
              {checkoutData.selectedCurrency} {balanceDue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}