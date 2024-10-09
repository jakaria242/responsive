import React from "react";
import localFont from "next/font/local";

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

const DifferentTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse border border-gray-300 bg-white">
        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr
              key={index}
              className="border-[#696969] flex flex-col md:flex-row justify-center items-center"
            >
              <td className="w-full py-8 px-4 md:px-8 md:py-[39.5px] border border-[#696969] border-l">
                <span
                  className={`${myFont.className} text-[24px] md:text-[30px] font-normal leading-normal text-secondary`}
                >
                  Fast Loading:
                </span>
              </td>
              <td className="w-full p-6 md:p-8 border border-[#696969]">
                <div className="grid grid-cols-[85%_auto] items-center gap-x-2 justify-between">
                  <div className="bg-[#E6E6E6] h-[20px] md:h-[27px] relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-customersupport"
                      style={{
                        width: "77%",
                      }}
                    ></div>
                  </div>
                  <span
                    className={`${myFont.className} text-right text-lg md:text-xl font-normal leading-[28px] text-secondary`}
                  >
                    8.4
                  </span>
                </div>
                <span
                  className={`${myFont.className} mt-2 text-sm md:text-base font-normal leading-[24px] text-secondary block text-right`}
                >
                  Response : 12546
                </span>
              </td>
              <td className="w-full p-6 md:p-8 border border-[#696969]">
                <div className="grid grid-cols-[85%_auto] items-center gap-x-2 justify-between">
                  <div className="bg-[#E6E6E6] h-[20px] md:h-[27px] relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#CDCDCD]"
                      style={{
                        width: "45%",
                      }}
                    ></div>
                  </div>
                  <span
                    className={`${myFont.className} text-right text-lg md:text-xl font-normal leading-[28px] text-secondary`}
                  >
                    8.4
                  </span>
                </div>
                <span
                  className={`${myFont.className} mt-2 text-sm md:text-base font-normal leading-[24px] text-secondary block text-right`}
                >
                  Response : 12546
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DifferentTable;
