import React, { createContext, useContext, useState } from "react";

const InputDataContext = createContext();

export default function DataContextWrapper({ children }) {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    taxNumber: "",
    address: "",
    clientName: "",
    clienttax: "",
    clientaddress: "",
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceId: "",
    date: new Date().toISOString().slice(0, 10),
    paymentTerms: "",
    dueDate: new Date().toISOString().slice(0, 10),
    poNumber: "",
  });

  const [productLine, setProductLine] = useState([
    { itemName: "", qty: "", rate: "" },
  ]);

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const [checkoutData, setCheckoutInput] = useState({
    selectedCurrency: "USD ($)",
    selectedType: "Invoice",
  });

  const [invoiceSubDetails, setInvoiceSubDetails] = useState({
    terms: "",
    notes: "",
    tax: "",
    discount: "",
    shipping: "",
    amountPaid: "",
    isDiscountValue: false,
    isShippingValue: false,
  });

  function handleInvoiceSubDetailsInputChange(e) {
    const { name, value } = e.target;
    setInvoiceSubDetails({
      ...invoiceSubDetails,
      [name]: value,
    });
  }

  function handleCheckoutInputChange(e) {
    const { name, value } = e.target;
    setCheckoutInput({
      ...checkoutData,
      [name]: value,
    });
  }

  function handleImageInputChange(e) {
    const image = e.target.files[0];
    setSelectedImageUrl(URL.createObjectURL(image));
  }

  function handleCompanyInputChange(e) {
    const { name, value } = e.target;

    setCompanyDetails({
      ...companyDetails,
      [name]: value,
    });
  }

  function handleInvoiceInputChange(e) {
    const { name, value } = e.target;

    setInvoiceDetails({
      ...invoiceDetails,
      [name]: value,
    });
  }

  const handleProductInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...productLine];
    list[index][name] = value;
    setProductLine(list);
  };

  const handleAddProductLine = () => {
    setProductLine([...productLine, { itemName: "", qty: "", rate: "" }]);
  };

  return (
    <InputDataContext.Provider
      value={{
        handleCompanyInputChange,
        handleInvoiceInputChange,
        handleProductInputChange,
        handleAddProductLine,
        handleImageInputChange,
        handleCheckoutInputChange,
        handleInvoiceSubDetailsInputChange,
        companyDetails,
        invoiceDetails,
        productLine,
        selectedImageUrl,
        checkoutData,
        invoiceSubDetails,
        setInvoiceSubDetails,
        setSelectedImageUrl,
        setProductLine,
      }}
    >
      {children}
    </InputDataContext.Provider>
  );
}

export const useDataContext = () => useContext(InputDataContext);
