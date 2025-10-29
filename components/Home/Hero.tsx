import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-12 md:pt-[63px] md:pl-[117px] pl-4">
      <div className="flex flex-col md:flex-row items-center"> 
        
        {/* text */}
        <div className=" w-full md:w-1/2">
          <div className="md:w-[90%]">
            <h1 className="text-4xl md:text-[50px] font-bold text-[#303030] leading-10 md:leading-[68px] mb-6 md:mb-[65px] md:pr-0 pr-4">
              Navigate PPR 2025 Rules with Ease,{" "}
              <span className="text-[#72C02C]">via Your Smart Assistant</span>
            </h1>

            <p className="text-[#303030] text-lg md:text-2xl md:leading-9 mb-6 md:mb-20 md:pr-0 pr-4">
              Get instant answers about Public Procurement Rules 2025. Whether
              you&apos;re a buyer or seller, DeshTender makes procurement
              compliance simple and accessible.
            </p>

            {/* buttons */}
            <div className="flex gap-[15px] mb-4 md:mb-[60px]">
              <Link href="#">
                <Image
                  src="/hero/play.svg"
                  alt=""
                  width={256}
                  height={80.4043}
                  className="w-40 md:w-[200px]"
                />
              </Link>

              <Link href="#">
                <Image
                  src="/hero/store.svg"
                  alt=""
                  width={256}
                  height={80.4043}
                  className="w-40 md:w-[200px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* hero image for desktop */}
        <div className="image-div w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <Image
            src="/hero/hero.png"
            alt="hero"
            width={772}
            height={531}
            className="w-full h-auto max-w-[500px] md:max-w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
