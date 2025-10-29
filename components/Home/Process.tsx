import { steps } from "@/constants/process";
import React from "react";

const Process: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="md:pt-[87px] pt-12 pl-4 md:pl-[100px] pr-4 md:pr-[117px]"
    >
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[48.95px] font-poppins">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="md:size-[101.9167px] size-15 rounded-full bg-[#6FBB2B] flex items-center justify-center">
                    <span className="text-white text-xl md:text-[48.92px] font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* title & desc */}
                  <h3 className="text-lg md:text-2xl font-bold text-[#303030] my-3 md:my-5">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-[20px] text-[#303030]">
                    {step.description}
                  </p>

                  {/* connect by line */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="hidden md:block absolute top-10 right-[-63%] w-full h-[50px] bg-[url('/Line.svg')] bg-no-repeat
                       bg-cover pointer-events-none z-0"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
