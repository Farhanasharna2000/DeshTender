'use client'
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import React, { useEffect, useState } from "react";

const Contact: React.FC = () => {
   const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 
  
  return (
    <section id="contact">
      {/* Title */}
      <div className="text-center text-[#303030]">
        <h1 className="text-3xl md:text-[40px] font-bold mb-4 md:mb-5 md:leading-[17px]">
          Contact Us
        </h1>
        <p className="text-base md:text-[20px] mb-6 md:mb-[49.9px] md:leading-[17px]">
          Have questions or need assistance? We&apos;re here to help!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-[29px] md:pl-30 md:pr-[77px]">
        {/* left form */}
        <div className="flex-1 px-4 md:px-0 ">
          <form className="bg-[#DDF3D1] rounded-[10px] w-full md:w-[90%] md:h-[584px] flex flex-col gap-[15px] p-4 md:py-7 md:px-[37px]">
            <div>
              <label className="block text-sm md:text-[20px]  font-medium ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-[10px] bg-white py-[13px] px-5 text-[#303030] text-sm md:text-base outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-[20px] font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full rounded-[10px] bg-white py-[13px] px-5 text-[#303030] text-sm md:text-base outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-[20px] font-medium">
                Phone (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter phone Number"
                className="w-full rounded-[10px] bg-white py-[13px] px-5 text-[#303030] text-sm md:text-base outline-none"
              />
            </div>

            <div>
              <label className="block text-sm md:text-[20px] font-medium">
                Message
              </label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full rounded-[10px] bg-white py-[13px] px-5 text-[#303030] text-sm md:text-base outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#72C02C] text-white font-bold text-lg mt-[15px] md:text-2xl w-[245px] h-[50px] 
              rounded-[10px]"
            >
              Send message
            </button>
          </form>
        </div>

        {/* right text */}
        <div className="flex-1 px-4 md:px-0 w-full md:w-[596px]">
          <h2 className="text-xl md:text-[32px] text-[#303030] font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-2xl mb-5 md:mb-[41px]">
            Reach out to our support team for personalized assistance
          </p>

          <ul className="space-y-3 text-lg md:text-2xl">
            <li className="flex items-start justify-start gap-2">
              <MapPin className="w-5 h-5 text-red-500 mt-1" />
              <span>Address: [Your Office Address]</span>
            </li>
            <li className="flex items-start justify-start gap-2">
              <Phone className="w-5 h-5 text-red-500 mt-1" />
              <span>Phone: +880 1XXX-XXXXXX</span>
            </li>
            <li className="flex items-start justify-start gap-2">
              <Mail className="w-5 h-5 text-blue-500 mt-1" />
              <span>Email: support@deshtender.com</span>
            </li>
            <li className="flex items-start justify-start gap-2">
              <Globe className="w-5 h-5 text-blue-600 mt-1" />
              <span>
                Business Hours: Saturday - Thursday, 9:00 AM - 6:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
