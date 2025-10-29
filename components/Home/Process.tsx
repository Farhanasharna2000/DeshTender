import { steps } from "@/constants/process";
import React from "react";

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="md:pt-[87px] pt-12 pl-4 md:pl-[100px] pr-4 md:pr-[117px]">
      <div className="">
        {/* Title */}
        <div className="text-center text-[#303030]">
          <h1 className="text-3xl md:text-[40px] font-bold mb-4 md:mb-5 md:leading-[17px]">
            How It Works
          </h1>

          <p className="text-base md:text-[20px] mb-6 md:mb-[102.66px] md:leading-[17px]">
            Get instant answers to your Public Procurement queries in four
            simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* connect by line*/}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-12">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
              <path
                d="M 0 20 Q 83.33 20, 166.67 50 T 333.33 50 Q 416.67 20, 500 50 T 666.67 50 Q 750 20, 833.33 50 T 1000 50"
                stroke="#72C02C"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[48.95px] font-poppins">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="md:size-[101.9167px] size-15 rounded-full bg-[#6FBB2B] flex items-center justify-center">
                  <span className="text-white text-xl md:text-[48.92px] font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold text-[#303030] my-3 md:my-5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className=" text-sm md:text-[20px] text-[#303030]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
