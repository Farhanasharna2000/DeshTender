import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#72C02C] text-white md:pl-[110px] md:pt-[50px] p-6">       
      <aside>
        <Link href="/" className="flex items-center gap-[13px] mb-[21px]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={54.4965}
            height={53}
            className="w-8 md:w-[40.1012px] h-8 md:h-[39px] rounded-[2.7529px] border-[0.0459px]"
          />
          <span className="text-white font-medium text-[20px] md:text-[23.5472px] leading-[12.5094px]">
            DeshTender
          </span>
        </Link>
        <p>
          Making public procurement accessible to everyone. DeshTender <br />{" "}
          brings the complete PPR 2025 guidelines to your fingertips through{" "}
          <br /> intelligent conversation.
        </p>
        <p className="text-[10px] md:mt-[55px] md:pb-[92px] leading-[140%]">
          © {new Date().getFullYear()} DeshTender. All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="font-medium text-[20px] md:mb-5">Company</h6>
        <a className="link link-hover text-base font-normal">About Us</a>
        <a className="link link-hover text-base font-normal">Our Team</a>
        <a className="link link-hover text-base font-normal">Careers</a>
        <a className="link link-hover text-base font-normal">Contact</a>
      </nav>
      <nav>
        <h6 className="font-medium text-[20px] md:mb-5">Resources</h6>
        <a className="link link-hover text-base font-normal">PPR 2025 Guide</a>
        <a className="link link-hover text-base font-normal">Blog</a>
        <a className="link link-hover text-base font-normal">FAQs</a>
        <a className="link link-hover text-base font-normal">
          Terms of Service
        </a>
      </nav>

      <nav>
        <h6 className="font-medium text-[20px] md:mb-5">Support</h6>
        <a className="link link-hover text-base font-normal">Help Center</a>
        <a className="link link-hover text-base font-normal">Privacy Policy</a>
        <a className="link link-hover text-base font-normal">User Guide</a>
        <a className="link link-hover text-base font-normal">Feedback</a>
      </nav>
    </footer>
  );
};

export default Footer;
