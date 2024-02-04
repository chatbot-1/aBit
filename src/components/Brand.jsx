import React from "react";
import profile from "../assets/profile.svg";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <div>
      <div className="relative">

        <div className="z-10 shadow-[0px_0px_10px_8px_#00000024] absolute top-[-20px] mt-[80px] sm:mt-[40px] md:mt-[20px]  sm:top-[-30px] md:top-[-60px] lg:top-[-90px] 
         left-[15px] sm:left-[50px] md:left-[80px] flex justify-between gap-8 bg-[#EDEDED] rounded-[20px] items-center">
          <div>
            <img src={profile} alt="" className="z-10 h-[130px] md:h-[150px] lg:h-[180px] xl:h-[220px] " />
          </div>
          <div className="w-[200px] sm:w-[250px] md:w-[300px] m-auto flex flex-col gap-1 md:gap-3 lg:gap-4 xl:gap-5 pr-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h2 className="text-[18px] md:text-[24px]  font-bold">DANE MACE</h2>
                <p className="text-[10px] md:text-[14px] text-[#696969]">/Johny_Films/</p>
            </div>
            <div className=" text-[10px] md:text-[14px] text-[#696969]">
                <p className="font-bold">Bio</p>
                <span>Simply a film fan creating original content for YouTube. Let’s Collaborate.</span>
            </div>
            <div className="border-[1px] border-black flex justify-between rounded-md text-[10px] bg-[#0000008e] md:text-[14px]">
                <a className="border-r-[1px]  border-black flex justify-center rounded-md font-play items-center bg-white w-[50%]">Creator</a>
                <a className="w-[50%]"></a>
            </div>
          </div>
        </div>

        <div className="bg-[#292828] z-0">
          <Marquee className="absolute py-[10px] sm:py-[15px] md:py-[20px] z-0 font-glow text-blue-50 left-[-14px] text-[16px] sm:text-[18px] md:text-[20px] bg-[#292828] inline-block ">
            John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /
            Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator /
            Moved to NYC / 27.11.22 / Live now
          </Marquee>
        </div>

      </div>
    </div>
  );
};

export default Brand;
