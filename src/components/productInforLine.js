import { useDataContext } from "@/context/inputDataContext";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

export default function ProductInforLine() {
  const [lineLenght, setLength] = useState([1]);

  const {
    handleAddProductLine,
    handleProductInputChange,
    productLine,
    checkoutData,
  } = useDataContext();

  console.log(productLine);

  function handleAddLine() {
    let newArray = [];
    newArray.push(...lineLenght);
    newArray.push(Math.random());
    setLength(newArray);
    handleAddProductLine();
  }

  return (
    <div className="mt-10 text-xs md:text-[16px]">
      <div className="grid grid-cols-12 px-2 md:px-5 gap-x-3   items-center  bg-[#42507C] w-full h-10 text-white">
        <div className="col-span-6 lg:col-span-6">Item</div>
        <div className="col-span-2 lg:col-span-2">Quantity</div>
        <div className="col-span-2">Rate</div>
        <div className="col-span-2 text-end">Amount</div>
      </div>
      {lineLenght.map((item, i) => (
        <InputFields
          i={i}
          handleaddclick={handleAddProductLine}
          handleinputchange={handleProductInputChange}
          inputList={productLine}
          currency={checkoutData.selectedCurrency}
          key={i}
        />
      ))}
      <button
        onClick={handleAddLine}
        className="flex items-center justify-center gap-x-2 text-white px-5 py-2 rounded-md mt-2 bg-[#0C173A]"
      >
        <BsPlusLg className="text-white" />
        <p>New Line</p>
      </button>
    </div>
  );
}

function InputFields({ currency, inputList, handleinputchange, i }) {
  const rate = parseFloat(inputList[i].rate);
  const qty = parseFloat(inputList[i].qty);

  console.log(rate);

  return (
    <>
      <div className="grid grid-cols-12 mt-2  pr-5 gap-x-3  items-center  w-full h-10 ">
        <div className="col-span-6 lg:col-span-6">
          <input
            name="itemName"
            onChange={(e) => handleinputchange(e, i)}
            placeholder="Description of service or product..."
            className="w-full h-10 border px-4 border-gray-200"
          />
        </div>
        <div className="col-span-2 lg:col-span-2">
          <input
            name="qty"
            type="number"
            onChange={(e) => handleinputchange(e, i)}
            placeholder="1"
            className="w-full h-10 border px-4 border-gray-200"
          />
        </div>
        <div className="col-span-2">
          <input
            type="number"
            name="rate"
            onChange={(e) => handleinputchange(e, i)}
            placeholder="$ 0"
            className="w-full h-10 border px-4 border-gray-200"
          />
        </div>
        <div className="col-span-2  text-end">
          {currency} {rate * qty}
        </div>
      </div>
    </>
  );
}
