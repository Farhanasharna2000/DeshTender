import { faqData } from "@/constants/faqs";
import Image from "next/image";
import React from "react";

const Faq: React.FC = () => {
  return (
    <section id="faqs" className="pt-12 md:pt-[114.43px] pb-12 md:pb-[103px] pr-4 pl-4 md:pl-[63px] md:pr-30">
      {/* Title */}
      <div className="text-center text-[#303030]">
        <h1 className="text-3xl md:text-[40px] font-bold mb-4 md:mb-5 md:leading-[17px]">
          Frequently Asked Questions
        </h1>

        <p className="text-base md:text-[20px] mb-6 md:mb-[54px] md:leading-[17px]">
          Find quick answers about how the PPR Chatbot helps you understand
          procurement rules easily.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-5">
        {/* left image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/faq/faq.jpg"
            alt="faq"
            width={647}
            height={462}
            className="w-full md:w-[647px] mt-5 md:mt-[35px] rounded-lg"
          />
        </div>

        {/* faq data */}
        <div className="w-full md:w-[590px] flex-1 space-y-4 md:space-y-[15px]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-[#DDF3D1] rounded-[10px] py-1.5"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base md:text-[20px]">
                {item.question}
              </div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
