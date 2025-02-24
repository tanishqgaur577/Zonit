import React from "react";
import logo from "../../../public/zonit-white-logo.png";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
const Footer = () => {
  return (
    <div className="md:h-full py-14 px-24 bg-[#1E2833]">
      {/* First div */}
      <div className="flex justify-between items-center border-b-2 border-[#2D3B48] pb-5">
        <img src={logo} alt="" className="h-10 w-52" />
        <div className="flex space-x-4 justify-between items-center">
          <h1 className="text-white text-xl">Ready to get Started ?</h1>
          <button className="text-purple-700 px-6 py-2 rounded-md bg-blue-100">
            Get Started
          </button>
        </div>
      </div>
      {/* Second Div */}
      <div className="flex justify-between items-start  border-b-2 border-[#2D3B48] py-5">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl">Subscribe to our newsletter</h1>
          <input
            type="text"
            placeholder="Email address"
            className="text-white outline-1 p-2"
          />
        </div>
        <div className="flex list-none gap-3 text-gray-200  flex-col">
          <h1 className="text-lg">Products</h1>
          <li className=" cursor-pointer">Z-lock</li>
          <li className=" cursor-pointer">Z-ATS Micro</li>
          <li className=" cursor-pointer">Z-ATS AI Infrastructure</li>
          <li className=" cursor-pointer">Z-ATS Industrial</li>
          <li className=" cursor-pointer">Z-PDS</li>
        </div>
        <div className="flex list-none gap-3 text-gray-200  flex-col">
          <h1 className="text-lg">Quick Links</h1>
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Products</li>
          <li className=" cursor-pointer">How to buy</li>
          <li className=" cursor-pointer">Powerful Info</li>
          <li className=" cursor-pointer">Support</li>
          <li className=" cursor-pointer">Company</li>
          <li className=" cursor-pointer">Partner Portal</li>
        </div>
        <div className="flex list-none gap-3 text-gray-200  flex-col">
          <h1 className="text-lg">Partners</h1>
          <li className=" cursor-pointer">Login</li>
          <li className=" cursor-pointer">SetUp online Acc.</li>
          <li className=" cursor-pointer">Become a Partner</li>
          <div className="h-[180px] flex flex-col justify-around p-2 items-start w-[300px] bg-white/10">
            <li className="flex gap-1">
              <MapPin /> 1234 Street Name, City Name, US
            </li>
            <li className="flex gap-1">
              <Mail /> E-mail :info@Zonit.com
            </li>
            <li className="flex gap-1">
              <Clock />
              Hours :Mon-Fri 8AM-5PM MT
            </li>
            <li className="flex gap-1">
              <Phone /> Phone : +1 234 567 890
            </li>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 px-5">
        <div className="flex text-white list-none gap-8">
          <li className=" cursor-pointer">Terms & Condition</li>
          <li className=" cursor-pointer">Privacy Policy</li>
        </div>
        <div className="flex gap-6 text-white">
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
