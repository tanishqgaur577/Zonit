"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../../../public/zonit-logo.png";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"; // Import Menu and X icons
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./../../App.css";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null); // Ref for the mobile menu

  function Mousedown() {}

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        // Animate in
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "linear" }
        );
      } else {
        // Animate out
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power3.out",
        });
      }
      return newState;
    });
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu
    setDropdownOpen(""); // Close any open dropdowns
  };

  return (
    <div
      onMouseDown={Mousedown}
      ref={containerRef}
      className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center py-5 md:px-8 px-3 bg-white shadow-md"
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={logo || "/placeholder.svg"}
            alt="Zonit Logo"
            className="h-5 w-32"
          />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <ul
        ref={menuRef} // Attach ref to the menu
        className={`flex md:list-none list-none gap-2 pb-4 text-black text-[16px] ${
          mobileMenuOpen
            ? "flex-col absolute bg-white w-full left-0 top-full shadow-lg"
            : "hidden md:flex"
        }`}
      >
        <li className="cursor-pointer"></li>

        {/* Products Dropdown */}
        <li
          className="relative px-2 w-full"
          onMouseEnter={() =>
            window.innerWidth >= 768 && setDropdownOpen("products")
          }
          onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpen("")}
        >
          <div className="flex flex-col w-full">
            <button
              onClick={() => toggleDropdown("products")}
              className="hover:text-red-600 flex items-center gap-2 cursor-pointer w-full"
            >
              <span>
                <Link to="/products">Products</Link>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  dropdownOpen === "products" && mobileMenuOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* Desktop Dropdown */}
            {dropdownOpen === "products" && !mobileMenuOpen && (
              <ul className="dropdown-menu">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/zlock" onClick={handleLinkClick}>
                    Z-LOCK
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/zats-micro" onClick={handleLinkClick}>
                    Z-ATS Micro
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/zats-ai-infrastructure" onClick={handleLinkClick}>
                    Z-ATS AI Infrastructure
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/zats-industrial" onClick={handleLinkClick}>
                    Z-ATS Industrial
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/z-pds" onClick={handleLinkClick}>
                    Z-PDS
                  </Link>
                </li>
              </ul>
            )}

            {/* Mobile accordion */}
            {dropdownOpen === "products" && mobileMenuOpen && (
              <ul className="bg-gray-50 w-full mt-2 pl-4 py-2 border-l-2 border-red-600">
                <li className="py-2">
                  <Link to="/zlock" onClick={handleLinkClick}>
                    Z-LOCK
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/zats-micro" onClick={handleLinkClick}>
                    Z-ATS Micro
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/zats-ai-infrastructure" onClick={handleLinkClick}>
                    Z-ATS AI Infrastructure
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/zats-industrial" onClick={handleLinkClick}>
                    Z-ATS Industrial
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/z-pds" onClick={handleLinkClick}>
                    Z-PDS
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className="cursor-pointer px-2 text-nowrap">
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>

        <li className="cursor-pointer px-2">
          <Link to="/support" onClick={handleLinkClick}>
            Support
          </Link>
        </li>

        {/* Company Dropdown */}
        <li
          className="relative px-2 w-full"
          onMouseEnter={() =>
            window.innerWidth >= 768 && setDropdownOpen("company")
          }
          onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpen("")}
        >
          <div className="flex flex-col w-full">
            <button
              onClick={() => toggleDropdown("company")}
              className="hover:text-red-600 cursor-pointer flex items-center gap-2 w-full"
            >
              <span>Company</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  dropdownOpen === "company" && mobileMenuOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* Desktop dropdown */}
            {dropdownOpen === "company" && !mobileMenuOpen && (
              <ul className=" dropdown-menu ">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/patents" onClick={handleLinkClick}>
                    Patents
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/compliance" onClick={handleLinkClick}>
                    Compliance and Ethics
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/careers" onClick={handleLinkClick}>
                    Careers
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/press" onClick={handleLinkClick}>
                    Press
                  </Link>
                </li>
              </ul>
            )}

            {/* Mobile accordion */}
            {dropdownOpen === "company" && mobileMenuOpen && (
              <ul className="bg-gray-50 w-full mt-2 pl-4 py-2 border-l-2 border-red-600">
                <li className="py-2">
                  <Link to="/patents" onClick={handleLinkClick}>
                    Patents
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/compliance" onClick={handleLinkClick}>
                    Compliance and Ethics
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/careers" onClick={handleLinkClick}>
                    Careers
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/press" onClick={handleLinkClick}>
                    Press
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className="cursor-pointer text-nowrap px-2">
          <Link to="/buyProduct" onClick={handleLinkClick}>
            Buy Product
          </Link>
        </li>
        <li className="cursor-pointer px-2">
          <Link to="/insight" onClick={handleLinkClick}>
            Insight
          </Link>
        </li>

        {/* Get a Sample Button in Mobile View */}
        <li className="md:hidden flex justify-center mt-4">
          <button className="text-[16px] flex gap-1 items-center font-semibold py-2 px-4 bg-red-500 hover:bg-red-600 duration-500  rounded-3xl text-white">
            <Link to="/requestSample" onClick={handleLinkClick}>
              Get a sample
            </Link>
            <ArrowRight className="h-5 w-7" />
          </button>
        </li>
      </ul>

      {/* CTA Button for Desktop */}
      <button className="text-[16px] flex gap-1 items-center font-semibold py-2 px-4 bg-red-600 rounded-3xl text-white md:flex hidden transition-all duration-300 hover:scale-105 hover:bg-red-700">
        <Link to="/requestSample" onClick={handleLinkClick}>
          Get a sample
        </Link>
        <ArrowRight className="h-5 w-7" />
      </button>
    </div>
  );
};

export default Navbar;
