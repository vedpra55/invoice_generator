/* eslint-disable @next/next/no-img-element */
import { useDataContext } from "@/context/inputDataContext";
import React, { useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddLogo() {
  const inputFileRef = useRef();

  const { setSelectedImageUrl, selectedImageUrl, handleImageInputChange } =
    useDataContext();

  return (
    <div>
      {!selectedImageUrl && (
        <div
          onClick={() => inputFileRef.current.click()}
          className="w-56 h-28 bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
        >
          <span className="flex items-center gap-x-2  ">
            <AiOutlinePlusCircle className="  text-lime-500 text-2xl font-semibold" />
            <p className=" ">Add Your Logo</p>
          </span>
        </div>
      )}

      {selectedImageUrl && (
        <img
          className="w-48 mt-2 object-contain"
          src={selectedImageUrl}
          alt="djdsa"
        />
      )}

      {selectedImageUrl && (
        <button
          className="text-[13px] mt-5 bg-gray-100 px-2 py-1 rounded-md"
          onClick={() => setSelectedImageUrl(null)}
        >
          Delete Logo
        </button>
      )}

      <input
        onChange={handleImageInputChange}
        type="file"
        ref={inputFileRef}
        hidden
      />
    </div>
  );
}
