import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurApp: React.FC = () => {
  return (
    <section className="pt-12 md:pt-[140px] pb-12 md:pb-[141.9px]">
      {/* Title */}
      <div className="text-center text-[#303030]">
        <h1 className="text-3xl md:text-[40px] font-bold mb-4 md:mb-5 md:leading-[17px]">
          Download Our App
        </h1>

        <p className="text-base md:text-[20px] mb-6 md:mb-[49.9px] md:leading-[17px]">
          Access PPR 2025 guidance anytime, anywhere. Available on iOS and
          Android.
        </p>
      </div>
      {/* buttons */}
      <div className="flex justify-center gap-5 md:gap-[35.04px] ">
        <Link href="#">
          <Image
            src="/hero/play.svg"
            alt=""
            width={272.9583}
            height={83.1978}
            className="w-40 md:w-[272.9583px]"
          />
        </Link>

        <Link href="#">
          <Image
            src="/hero/store.svg"
            alt=""
            width={272.9583}
            height={83.1978}
            className="w-40 md:w-[272.9583px]"
          />
        </Link>
      </div>
    </section>
  );
};

export default OurApp;
