import { useDataContext } from "@/context/inputDataContext";
import React, { useState } from "react";

export default function CompanyInformation() {
  const { handleCompanyInputChange } = useDataContext();

  const [companyName, setCompanyName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clienttax, setClienttax] = useState("");
  const [clientaddress, setClientaddress] = useState("");

  return (
    <div>
      <div className="mt-5 flex flex-col gap-y-1 ">
        <div>
          <input
            name="companyName"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px]  outline-gray-300"
            placeholder="Your Company Name"
          />
        </div>
        <div>
          <input
            name="taxNumber"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px]  outline-gray-100"
            placeholder="Comapny's Tax Number"
          />
        </div>
        <div>
          <input
            name="address"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px] outline-gray-100"
            placeholder="Company's Address"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-y-1">
        <div>
          <input
            name="clientName"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px]  outline-gray-300"
            placeholder="Client Company Name"
          />
        </div>
        <div>
          <input
            name="clienttax"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px]  outline-gray-300"
            placeholder="Client's Tax Number"
          />
        </div>
        <div>
          <input
            name="clientaddress"
            onChange={(e) => handleCompanyInputChange(e)}
            className="  px-3 py-1 placeholder:text-[14px]  outline-gray-300"
            placeholder="Client's Address"
          />
        </div>
      </div>
    </div>
  );
}
