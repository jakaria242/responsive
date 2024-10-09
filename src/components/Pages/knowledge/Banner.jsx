import React from "react";

const Banner = () => {
  return (
    <section className="bg-secondary pt-[150px] md:pt-[270px] pb-[150px] md:pb-[253px] section dark-mode">
      <div className="max-w-container mx-4 md:mx-6 xl:mx-auto">
        <div className="max-w-[95%] md:max-w-[1010px] mx-auto">
          <h1
            className={`text-[40px] xs:text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold leading-tight md:leading-[90px] text-center text-white`}
          >
            Have A Question
          </h1>
          <p
            className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-normal leading-[30px] sm:leading-[35px] md:leading-[40px] text-[#F3F3F3] text-center opacity-70`}
          >
            At the heart of all headless approaches is the belief that content
            is king. With a headless approach to content management, data exists
            in its own right.
          </p>
          <div className="w-full bg-white mt-[40px] md:mt-[60px] h-[90px] md:h-[110px] rounded-[10px] overflow-hidden p-[6px_130px_6px_18px] md:p-[10px_175px_10px_30px] relative">
            <input
              type="search"
              placeholder="Types of your Items"
              className="w-full h-full outline-none text-lg sm:text-xl font-semibold leading-[25px] sm:leading-[30px] text-[#262626]"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-[10px] px-4 sm:px-6 md:px-10 absolute top-1/2 -translate-y-1/2 right-3 h-[70%] md:h-[80%] text-lg sm:text-xl font-semibold leading-[25px] sm:leading-[30px]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
