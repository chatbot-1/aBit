import React from "react";

const Footer = () => {
  return (
    <div className="mt-[200px] mb-[100px] flex justify-between container items-center">
      <div className="container flex justify-between items-center">
        <div className="">
          <p className="text-[30px] md:text-[40px] font-bold">aBit</p>
          <p className="text-[15px] md:text-[20px] font-play w-[150px] md:w-[200px]">
            Changing the way in which creators and fans interact.
          </p>
        </div>
        <div className="flex flex-col gap-5 border-l text-[12px] md:text-[14px] font-semibold border-[#7a7a7a67] pl-3">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Are you a Creator?</p>
          <p className="cursor-pointer">Suport</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
