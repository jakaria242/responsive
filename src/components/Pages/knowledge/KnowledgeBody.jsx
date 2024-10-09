import React from "react";
import localFont from "next/font/local";
import { AiOutlineLike } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const myFont = localFont({
  src: "../../../../public/fonts/Basier Square.otf",
  variable: "--font-basier-square",
});
const myFontBold = localFont({
  src: "../../../../public/fonts/Basier Square Bold.otf",
  variable: "--font-basier-square",
});
const myFontsemiBold = localFont({
  src: "../../../../public/fonts/Basier Square SemiBold.otf",
  variable: "--font-basier-square",
});

const KnowledgeBody = () => {
  const tagData = [
    "node",
    "uiux",
    "java",
    "backend",
    "frontend",
    "data",
    "base",
    "servers",
    "servers",
    "base",
  ];
  return (
    <section className="pb-[130px] ">
      <div className="max-w-container mx-4 md:mx-6 xl:mx-auto ">
        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-y-10 lg:gap-x-[50px] xl:gap-x-[72px] items-start xl:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-full lg:max-w-[824px] ">
            {[...Array(18)].map((_, index) => (
              <div key={index} className="border-b border-[#E6E6E6] pb-5">
                <div className="flex items-center sm:items-start lg:items-center  gap-x-[10px]">
                  <RxExternalLink className="text-lg sm:text-2xl text-[#3A3D41]" />
                  <Link
                    href="#"
                    className={`${myFontBold.className} text-lg  inline-block md:text-xl  font-bold sm:leading-[30px] leading-[40px] text-secondary`}
                  >
                    Integrating Node js with your Website
                  </Link>
                </div>
                <div className="mt-[10px] flex justify-between items-center lg:gap-[4px]">
                  <span>25 Feb, 2024 in Server & Database</span>
                  <button className="py-1 px-3 flex items-center gap-x-2 border border-[#CDCDCD] cursor-pointer">
                    <AiOutlineLike className="text-22" />
                    <span
                      className={`${myFont.className} text-xl font-normal leading-[35px] text-[#12141D] opacity-70`}
                    >
                      867
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:flex flex-wrap lg:flex-col py-5 gap-[20px] justify-between lg:w-[418px] p-[30px_30px_35px_30px] shadow-xl">
            <div>
              <h5
                className={`${myFontsemiBold.className} pb-2 text-xl font-semibold leading-[30px] relative after:absolute after:w-[57px] after:h-[3px] after:bg-primary after:content-[''] after:bottom-0 after:left-0 after:rounded-3xl`}
              >
                Quick Links
              </h5>
              <ul className="py-4 flex flex-col gap-y-4 border-b border-[#DDD]">
                <li>
                  <Link
                    href="/"
                    className={`${myFont.className} text-lg font-normal leading-normal text-[#696969] flex items-center gap-x-2`}
                  >
                    <GoChevronRight className="text-xl" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={`${myFont.className} text-lg font-normal leading-normal text-[#696969] flex items-center gap-x-2`}
                  >
                    <GoChevronRight className="text-xl" />
                    Articles List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={`${myFont.className} text-lg font-normal leading-normal text-[#696969] flex items-center gap-x-2`}
                  >
                    <GoChevronRight className="text-xl" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={`${myFont.className} text-lg font-normal leading-normal text-[#696969] flex items-center gap-x-2`}
                  >
                    <GoChevronRight className="text-xl" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-0 lg:my-10 py-8 md:py-0">
              <h5
                className={`${myFontsemiBold.className} pb-2 text-xl font-semibold leading-[30px] relative after:absolute after:w-[57px] after:h-[3px] after:bg-primary after:content-[''] after:bottom-0 after:left-0 after:rounded-3xl`}
              >
                Stay Connected
              </h5>
              <div className="mt-4 flex gap-x-3 items-center">
                <Link
                  href="#"
                  target="_blank"
                  className="size-[26px] rounded-full border border-[#DDD] text-[#626262] flex items-center justify-center"
                >
                  <FaFacebookF className="text-sm" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="size-[26px] rounded-full border border-[#DDD] text-[#626262] flex items-center justify-center"
                >
                  <FaTwitter className="text-sm" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="size-[26px] rounded-full border border-[#DDD] text-[#626262] flex items-center justify-center"
                >
                  <FaLinkedinIn className="text-sm" />
                </Link>
              </div>
            </div>
            <div>
              <h5
                className={`${myFontsemiBold.className} pb-2 text-xl font-semibold leading-[30px] relative after:absolute after:w-[57px] after:h-[3px] after:bg-primary after:content-[''] after:bottom-0 after:left-0 after:rounded-3xl`}
              >
                Tags
              </h5>
              <div className="mt-4 flex flex-wrap gap-2">
                {tagData.map((item, index) => (
                  <button
                    key={index}
                    className={`${myFont.className} px-3 py-1 text-[19px] font-normal leading-8 text-[#12141D] opacity-70 border border-[#CDCDCD]`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBody;
