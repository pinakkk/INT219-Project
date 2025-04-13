import React, { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#ffff00] relative">
      {/* Desktop Navbar */}
      <div className="hidden md:block relative h-[140px]">
        <div className="relative w-[1216px] h-24 top-[22px] left-28 bg-white rounded-[20px] overflow-hidden border border-black">
          <div
            className="absolute left-[46px] h-7 top-[26px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500 cursor-pointer"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
          >
            Home
          </div>
          <div
            className="absolute left-[135px] h-7 top-[26px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500 cursor-pointer"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
          >
            About
          </div>
          <div
            className="absolute left-[222px] h-7 top-[26px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500 cursor-pointer"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
          >
            Features
          </div>
          <div
            className="absolute left-[340px] h-7 top-[26px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500 cursor-pointer"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
          >
            How it works
          </div>
          <div
            className="absolute left-[500px] h-7 top-[26px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500 cursor-pointer"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
          >
            Contact
          </div>
          <div className="absolute w-[170px] h-[50px] top-[15px] left-[998px] bg-[#ffff00] rounded-[15px] overflow-hidden border-2 border-solid border-black transition-colors duration-200 hover:bg-blue-100 cursor-pointer">
            <div
              className="absolute h-7 top-[9px] left-[17px] font-normal text-black text-2xl text-center tracking-[0] leading-normal whitespace-nowrap transition-colors duration-200 hover:text-blue-500"
              style={{ fontFamily: "'Comic_Neue', Helvetica" }}
            >
              Login/Signup
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden relative h-[140px] flex items-center justify-between px-4">
        <div
          className="text-2xl font-normal"
          style={{ fontFamily: "'Comic_Neue', Helvetica" }}
        >
          Home
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none z-10"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300 ease-in-out transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute top-0 left-0 w-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-[140px]" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-start p-4 space-y-4">
          {["Home", "About", "Features", "How it works", "Contact", "Login/Signup"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="w-full text-2xl font-normal py-2 px-4 rounded transition-colors duration-200 hover:bg-gray-200"
                style={{ fontFamily: "'Comic_Neue', Helvetica" }}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
