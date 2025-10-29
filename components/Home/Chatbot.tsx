import React from "react";
import Image from "next/image";

const Chatbot: React.FC = () => {
  return (
    <section className="bg-[#C8DDBC] md:pl-[120px]">
      <div className="grid md:grid-cols-2 md:gap-[103px]">
        {/* left side image*/}
        <div className="pb-6 md:pb-40 pt-[100px] md:pt-[155px] relative px-4 md:px-0">
          <div >
            <Image
              src="/chatbot/chatbot1.png"
              alt=""
              width={301}
              height={635}
              className="h-[500px] md:h-[635px] w-[280px] md:w-[301px] rounded-[10px]"
            />
          </div>

          <div className="absolute top-[210px] md:top-[310.5px] left-[225px] md:left-[231px] z-20">
            <Image
              src="/chatbot/chatbot2.png"
              alt=""
              width={256}
              height={324}
              className="rounded-[10px] w-[180px] md:w-[256px] shadow-[25%] "
            />
          </div>
        </div>

        {/* right side text*/}
        <div className="md:pr-[118px] pr-4 pl-4 md:pl-0 pt-8 md:pt-[90px] text-[#303030]">
          <h2 className="text-3xl md:text-[40px] font-bold md:leading-[17px] mb-8 md:mb-[30px]">
            About the PPR Chatbot
          </h2>

          <p className="md:text-[20px] leading-9">
            DeshTender is an AI-powered procurement assistant designed to
            simplify the Public Procurement Rules 2025 for everyone involved in
            government procurement processes.
          </p>

          <p className=" md:text-[20px] py-8 md:py-10 leading-9">
            Instead of searching through hundreds of pages, our intelligent
            chatbot provides instant, accurate answers to your PPR-related
            questions. Whether you&apos;re a government buyer managing tenders
            or a seller preparing bids, DeshTender helps you.
          </p>

          <ul className="list-disc pl-6 space-y-1 text-lg md:text-2xl leading-12 mb-10 md:mb-[50px]">
            <li>Quickly access procurement guidelines</li>
            <li>Understand complex regulatory requirements</li>
            <li>Stay compliant with PPR 2025 provisions</li>
            <li>Make informed procurement decisions</li>
            <li>Save time on legal research</li>
          </ul>

          <div className="pb-[86px]">
            <button className="bg-[#72C02C] text-white font-bold rounded-[10px] md:rounded-[20px] text-xl md:text-[32px] w-[200px] md:w-[301px] h-15 md:h-20">
              Try the Chatbot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
