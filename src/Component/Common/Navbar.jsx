import React, { useState } from "react";
import logo from "../../../public/zonit-logo.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <div className="flex justify-between z-50 items-center py-5 md:px-8  relative">
      {/* Logo */}
      <div>
      <Link to='/'>
        <img src={logo} alt="Zonit Logo" className="h-5 w-32" />
        </Link>
      </div>

      {/* Navigation */}
      <ul className="flex list-none gap-8 text-black text-[16px]">
        <li className="cursor-pointer">
        </li>

        {/* Products Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("products")}
            className="hover:text-red-600 flex items-center gap-2 cursor-pointer"
          >
            <Link to="/products">Products</Link>{" "}
            <ChevronDown className="h-5 w-5 " />
          </button>
          {dropdownOpen === "products" && (
            <ul className="absolute bg-white shadow-lg rounded-lg w-48 mt-2 left-0">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/zlock">Z-LOCK</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Z-ATS Micro</li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Z-ATS AI Infrastructure
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Z-ATS Industrial</li>
              <li className="px-4 py-2 hover:bg-gray-100">Z-PDS</li>
            </ul>
          )}
        </li>

        {/* <li className="cursor-pointer">How to buy</li> */}
        <li className="cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        {/* Powerful Info Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("powerfulInfo")}
            className="hover:text-red-600 cursor-pointer flex items-center gap-2"
          >
            <Link to="/powerfullInfo"> Powerful Info</Link>{" "}
            <ChevronDown className="h-5 w-5 " />
          </button>
          {dropdownOpen === "powerfulInfo" && (
            <ul className="absolute bg-white shadow-lg rounded-lg w-60 mt-2 left-0">
              <li className="px-4 py-2 hover:bg-gray-100">
                AI Server Power Redundancy Use Case
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Revising AI Power Infrastructure
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                The Urgent Challenge of GenAI Infrastructure
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Z-PDS Veterans Affairs Use Case
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Use Case Data Center
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Use Case Higher Ed
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Use Case MDF-IDF</li>
              <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
              <li className="px-4 py-2 hover:bg-gray-100">FAQs</li>
            </ul>
          )}
        </li>

        <li className="cursor-pointer">
          <Link to="/support"> Support</Link>
        </li>

        {/* Company Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("company")}
            className="hover:text-red-600 cursor-pointer flex items-center gap-2"
          >
            Company <ChevronDown className="h-5 w-5 " />
          </button>
          {dropdownOpen === "company" && (
            <ul className="absolute bg-white shadow-lg rounded-lg w-48 mt-2 left-0">
              <li className="px-4 py-2 hover:bg-gray-100">Why Zonit</li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Meet Our Leadership
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/patents">Patents</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/compliance">Compliance and Ethics</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/careers">Careers</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/press">Press</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Contact Us</li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer">
          <Link to="/buyProduct">Buy Product</Link>
        </li>
        <li className="cursor-pointer">Partner Portal</li>
      </ul>

      {/* CTA Button */}
      <button className="text-[16px] flex gap-1 items-center font-semibold py-2 px-4 bg-red-600 rounded-3xl text-white">
        <Link to="/requestSample">Get a sample</Link>{" "}
        <ArrowRight className="h-5 w-7" />
      </button>
    </div>
  );
};

export default Navbar;
