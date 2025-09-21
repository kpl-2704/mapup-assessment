import React from "react";
import { FaAngleDown, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <img
            src="https://mapup.ai/mapup-logo.png"
            alt="MapUp logo"
            className="h-8"
          />
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-300 text-sm">
          {/* Products Dropdown */}
          <div className="relative group">
            <button
              aria-haspopup="true"
              aria-expanded="false"
              className="hover:text-white flex items-center gap-1 focus:outline-none focus:text-white hover:text-blue-400"
            >
              Products <FaAngleDown className="text-xs mt-0.5" />
            </button>
            {/* Make sure dropdown stays visible when hovering it */}
            <div className="absolute left-0 mt-2 w-44 bg-[#1E293B] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                TollGuru <FaArrowUpRightFromSquare className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                TollTally
              </a>
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                TollMatch
              </a>
            </div>
          </div>

          {/* Partners */}
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:text-white hover:text-blue-400"
          >
            Partners
          </a>

          {/* Company Dropdown */}
          <div className="relative group">
            <button
              aria-haspopup="true"
              aria-expanded="false"
              className="hover:text-white flex items-center gap-1 focus:outline-none focus:text-white hover:text-blue-400"
            >
              Company <FaAngleDown className="text-xs mt-0.5" />
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-[#1E293B] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                News
              </a>
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                Blog
              </a>
              <a
                href="#"
                className="flex justify-between items-left px-4 py-2 text-gray-200 hover:bg-[#334155] rounded-t-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        <a
          href="#"
          className="bg-[#00AEEF] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0095cc] focus:bg-[#0095cc] transition"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}
