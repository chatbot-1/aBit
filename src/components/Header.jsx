import React, { useState } from "react";
import profile from "../assets/profile.svg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="container w-full fixed top-0 left-0 bg-white z-50 border-b-1 border-black">
      <div className="container py-[20px] w-[1400px] m-auto">
        <div className="border-b-1 border-black">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-[24px] text-[#292D32] font-bold cursor-pointer">
                aBit
              </p>
            </div>

            <div>

              <div
                onClick={() => setOpen(!open)}
                className="text-[30px] absolute right-8 top-6 flex cursor-pointer md:hidden"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </div>

              <div className={`absolute right-1 flex flex-col md:flex-row md:static gap-5 rounded-lg md:rounded-none transition-all duration-300 ease-in shadow-2xl md:shadow-none p-5 md:p-0 bg-white ${open ? 'top-[80px]':'top-[-190px]'}`}>
                <div className="text-[#764CC2] border-[2.2px] cursor-pointer flex items-center justify-center rounded-full border-[#764CC2] px-[18px] py-[10px]">
                  <a className="text-[12px] font-bold cursor-pointer">
                    Share new video
                  </a>
                </div>
                <div className="flex justify-center gap-4 items-center">
                  <div className="cursor-pointer">
                    <img src={icon2} alt="" className="h-[25px]" />
                  </div>
                  <div className="cursor-pointer">
                    <img src={icon1} alt="" className="h-[32px]" />
                  </div>
                  <div className="h-[25px] w-[25px]  cursor-pointer">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-full border-black border-[1px]"
                    />
                  </div>
                  <div className="cursor-pointer">
                    <img src={icon3} alt="" className="h-[22px]" />
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

export default Header;
