import React, { useState } from "react";
import logo from "../../public/LeadcrmLogo.png";

export default function Navbar({ onSignInClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white text-center py-2 z-50">
        <p className="text-sm font-medium">
          Get your Black Friday deal today!{" "}
          <a href="#" className="underline font-bold">
            Avail now!
          </a>{" "}
          ✨
        </p>
      </div>

      {/* Navbar */}
      <nav className="fixed top-[20px] left-0 right-0 z-40 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] flex justify-center">
        <div className="w-[1440px] h-[100px] px-10 flex items-center justify-between">

          {/* Logo */}
          <img
            src={logo}
            alt="LeadCRM Logo"
            className="h-[58px] w-auto object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12 text-[#1F2937] text-[16px] font-medium">
            <button className="hover:text-black transition">Product</button>
            <a href="#" className="hover:text-black transition">Pricing</a>
            <button className="hover:text-black transition">Resources</button>
            <button className="hover:text-black transition">Company</button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onSignInClick}
              className="px-6 py-3 bg-[#0A3B8E] text-white rounded-lg font-semibold hover:bg-[#072f70] transition"
            >
              Get your free account
            </button>

            <button
              onClick={onSignInClick}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-[3px] bg-gray-800"></span>
            <span className="w-6 h-[3px] bg-gray-800"></span>
            <span className="w-6 h-[3px] bg-gray-800"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[146px] left-0 right-0 bg-white border-t shadow z-30 pb-6 px-6 pt-4">
          <div className="flex flex-col space-y-4 text-[17px] font-medium text-gray-700">
            <button className="text-left">Product</button>
            <a className="text-left">Pricing</a>
            <button className="text-left">Resources</button>
            <button className="text-left">Company</button>
          </div>

          <div className="mt-6 flex flex-col space-y-3">
            <button
              onClick={onSignInClick}
              className="w-full px-6 py-3 bg-[#0A3B8E] text-white rounded-lg font-semibold"
            >
              Get your free account
            </button>

            <button
              onClick={onSignInClick}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}
