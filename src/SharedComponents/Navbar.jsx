import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const bankingSolutions = [
    "AePS",
    "MicroATM",
    "Money Transfer",
    "Payouts",
    "Bill Payment",
    "Recharge",
  ];
  const frenzoVerify = [
    "PAN Verification API",
    "Aadhaar Verification API",
    "Bank Account Verification API",
    "GST Verification API",
    "Passport Verification API",
    "Driving License Verification API",
    "Company Name to CIN Verification API",
  ];
 

   const Submenu = ({ title, items }) => (
    <div className="relative group">
      <button className="inline-flex items-center py-2 px-4 text-gray-800 hover:text-blue-800">
        {title}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on Left */}
          <a href="/" className="text-xl font-bold text-blue-800">
            FrenzoPay
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="py-2 px-4 hover:text-blue-800">
              Home
            </a>
            <a href="/about" className="py-2 px-4 hover:text-blue-800">
              About
            </a>
            <Submenu title="Banking Solutions" items={bankingSolutions} />
            <Submenu title="FrenzoVerify" items={frenzoVerify} />
           
            <a href="/contact" className="py-2 px-4 hover:text-blue-800">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${mobileOpen ? "block" : "hidden"} px-2 pt-2 pb-3 space-y-1`}
      >
        <a href="/" className="block py-2 px-4 hover:bg-gray-100">
          Home
        </a>
        <a href="/about" className="block py-2 px-4 hover:bg-gray-100">
          About
        </a>

        {/* Mobile Submenus */}
        <div className="py-2">
          <span className="block px-4 font-semibold">Banking Solutions</span>
          {bankingSolutions.map((item) => (
            <a key={item} href="#" className="block py-2 pl-8 hover:bg-gray-100">
              {item}
            </a>
          ))}
        </div>
        <div className="py-2">
          <span className="block px-4 font-semibold">FrenzoVerify</span>
          {frenzoVerify.map((item) => (
            <a key={item} href="#" className="block py-2 pl-8 hover:bg-gray-100">
              {item}
            </a>
          ))}
        </div>
               <a href="/contact" className="block py-2 px-4 hover:bg-gray-100">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

