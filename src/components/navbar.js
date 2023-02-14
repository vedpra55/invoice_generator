/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import { AiOutlineMail, AiOutlineStar, AiOutlineSetting } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-y-5 items-center justify-between mx-5 my-8 bg-white">
      <div className=" relative w-[140px] h-[30px]">
        <Image
          fill
          sizes="50vh"
          className=" w-full h-full object-contain"
          src={"/assets/logo.png"}
          alt="logo"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-white px-5  outline-gray-300 border border-gray-200 w-64 xl:w-96 h-10 "
        />
      </div>
      <div className="flex gap-x-5 items-center text-2xl">
        <AiOutlineMail />
        <AiOutlineStar />
        <AiOutlineSetting />
        <div className="flex gap-x-2 items-center">
          <img
            alt="avatar"
            className=" rounded-full w-10 h-10 object-center"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <p className="text-[16px] font-semibold">Ved Pratap</p>
        </div>
      </div>
    </nav>
  );
}
