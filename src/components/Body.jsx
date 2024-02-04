import React from "react";
import img from "../assets/img.png";

const Body = () => {
  return (
    <div className="container w-[1350px] m-auto mt-[230px]">
      <div>
        <div className="flex container flex-col md:flex-row gap-10 justify-between items-center">
          <div className="font-play">
            <p className="text-[28px]">Releases</p>
            <p className="italic text-[16px]">
              Videos that you upload in collaboration with aBit appear here.
            </p>
          </div>
          <div className="flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px]">
            <div className="flex flex-col border-l border-[#7a7a7a67] pl-3">
              <p className="text-[16px] font-bold">1</p>
              <span className="text-[14px]">Shared</span>
              <span className="text-[14px]">Videos</span>
            </div>
            <div className="flex flex-col border-l border-[#7a7a7a67] pl-3">
              <p className="text-[16px] font-bold">$9510</p>
              <span className="text-[14px]">Funds</span>
              <span className="text-[14px]">Raised</span>
            </div>
            <div className="flex flex-col border-l border-[#7a7a7a67] pl-3">
              <p className="text-[16px] font-bold">317</p>
              <span className="text-[14px]">Co-owner</span>
              <span className="text-[14px]">community</span>
            </div>
            <div className="flex flex-col border-l border-[#7a7a7a67] pl-3">
              <p className="text-[16px] font-bold">$3804</p>
              <span className="text-[14px]">Co-owner</span>
              <span className="text-[14px]">Earnings</span>
            </div>
          </div>
        </div>

        <div className="flex container flex-col md:flex-row mt-[100px] gap-10">
          <div className="flex justify-center md:justify-start transition-all duration-300 ease-in hover:scale-105">
            <div className="h-[312px] cursor-pointer relative w-[283.64px] rounded-[25px] bg-[#EDEDED] shadow-[0px_0px_10px_2px_#00000024]">
              <p className="flex justify-center items-center h-full text-[60px] text-[#95959593]">
                +
              </p>
              <p className="absolute bottom-5 text-[#95959593] text-center right-0 left-0 text-[14px] w-[200px] m-auto">
                You haven’t uploaded any videos with aBit yet. Add now!
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start transition-all duration-300 ease-in hover:scale-105">
            <div className="h-[312px] relative cursor-pointer w-[283.64px] rounded-[25px] shadow-[0px_0px_10px_2px_#00000024]">
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover bg-center rounded-[25px]"
              />
              <div className="">
                <p className="absolute top-4 text-white text-[19px] font-semi-bold left-5">
                  The Sound of Silence
                </p>
                <div className="">
                  <div className="flex w-[240px] gap-8 m-auto rounded-xl py-[5px] items-center justify-center bg-[#ffffff33] absolute text-white bottom-4 backdrop-blur-lg left-0 right-0">
                    <div className="flex flex-col items-center">
                      <p className="text-[12px]">Shares</p>
                      <p className="text-[14px] font-semi-bold">317</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px]">Offered</p>
                      <p className="text-[14px] font-semi-bold">75%</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px]">Raised</p>
                      <p className="text-[14px] font-semi-bold">$9510</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
