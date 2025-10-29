"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/constants/navlinks";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<"BN" | "EN">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "BN" : "EN"));
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#72C02C] px-4 md:px-30 py-5 md:py-10 text-white">
      <div className=" flex items-center justify-between">
        {/* left-side logo and brandname */}
        <Link href="/" className="flex items-center gap-[11px]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={54.4965}
            height={53}
            className="w-8 md:w-[54.4965px] h-8 md:h-[53px] rounded-[3.7412px] border-[0.0624px]"
          />
          <span className="text-white font-medium text-xl md:text-[32px] leading-[17px]">
            DeshTender
          </span>
        </Link>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className="text-sm md:text-[20px] font-medium leading-[17px]"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* language toggle */}
          <button
            onClick={toggleLanguage}
            className="bg-white rounded-full flex items-center relative w-[85px] md:w-[97px] h-9 md:h-12 transition-all duration-300"
            aria-label="Toggle language"
          >
            <div
              className={`absolute w-9 md:w-[47.6491px] h-9 md:h-12 bg-[#54D254] rounded-full transition-transform duration-300 ease-in-out ${
                language === "EN" ? "translate-x-0" : "translate-x-[49px]"
              }`}
            />
            <div className="flex items-center justify-between w-full px-3 md:px-[16.5px] relative z-10">
              <span
                className={`text-xs md:text-sm font-semibold transition-colors ${
                  language === "BN" ? "text-black" : "text-white"
                }`}
              >
                বাং
              </span>
              <span
                className={`text-xs md:text-sm font-semibold transition-colors ${
                  language === "EN" ? "text-black" : "text-white"
                }`}
              >
                EN
              </span>
            </div>
          </button>

          {/* hamburger icon for mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#6BB12A] text-white flex flex-col items-center gap-4 py-4 mt-3 rounded-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
