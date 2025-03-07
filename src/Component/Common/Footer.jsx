import React from "react";
import { Link } from "react-router-dom";
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
    <div className="md:h-full md:py-14 py-5 md:px-24 px-5 bg-[#1E2833]">
      {/* First div */}
      <div className="flex justify-between items-center border-b-2 border-[#2D3B48] pb-5">
        <img src={logo} alt="" className="md:h-10 md:w-52 h-4 w-28" />
        <div className="flex gap-5 md:flex-row flex-col justify-between items-center ">
          <h1 className="text-white md:text-xl text-[14px]">
            Ready to get Started ?
          </h1>
          <button className="text-purple-700 md:px-6 md:py-2 px-2 py-1 md:text-lg text-[15px] rounded-md bg-blue-100">
            Get Started
          </button>
        </div>
      </div>
      {/* Second Div */}
      <div className="flex justify-between items-start flex-col md:flex-row grid-cols-1 gap-3.5 border-b-2 border-[#2D3B48] py-5">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white text-xl">Subscribe to our newsletter</h1>
          <input
            type="text"
            placeholder="Email address"
            className="text-white outline-1 p-2"
          />
        </div>
        <div className="flex flex-row justify-center items-start gap-5">
          <div className="flex list-none gap-3 text-gray-200  flex-col">
            <h1 className="text-lg">Products</h1>
            <li className=" cursor-pointer">
              <Link to="zlock">Z-lock</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="zats-micro">Z-ATS Micro</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="zats-ai-infrastructure">Z-ATS AI Infrastructure</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="zats-industrial">Z-ATS Industrial</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="z-pds">Z-PDS</Link>
            </li>
          </div>
          <div className="flex list-none gap-3 text-gray-200  flex-col">
            <h1 className="text-lg">Quick Links</h1>
            <li className=" cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="products">Products</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="about">About</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="powerfullInfo">Resources</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="support">Support</Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="careers">Careers</Link>
            </li>
          </div>
        </div>
        <div className="flex list-none gap-3 text-gray-200  flex-col">
          <h1 className="text-lg">Partners</h1>
          <li className=" cursor-pointer">
            <Link to="">Login</Link>
          </li>
          <li className=" cursor-pointer">
            <Link to="">SetUp</Link> online Acc.
          </li>
          <li className=" cursor-pointer">
            <Link to="">Become</Link> a Partner
          </li>
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
          <li className=" cursor-pointer">
            <Link to="">Terms</Link> & Condition
          </li>
          <li className=" cursor-pointer">
            <Link to="">Privacy</Link> Policy
          </li>
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
