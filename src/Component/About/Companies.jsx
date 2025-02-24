import React from "react";
import google from "../../../public/AboutUs/google.png";
import dell from "../../../public/AboutUs/dell.png";
import homedepot from "../../../public/AboutUs/homedepot.png";

const Companies = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center space-y-4">
      <h1 className="text-[#005487] text-3xl">
        Companies that <span className=" font-semibold ">use Zonit</span>
      </h1>
      <p className="w-[70%] text-center">
        Zonit provides trusted and reliable products that can be found in the
        data centers of Fortune 100 corporations and local governments to
        MDF/IDF closets and industrial facilities. We provide facility
        managers, product managers, and those in the C-Suite with the peace of
        mind knowing their data centers will be safe and operational. 
      </p>
      <div className="flex justify-center items-center gap-14">
        <img src={dell} className="h-22 w-22" alt="" />
        <img src={google} className="h-22 w-22" alt="" />
        <img src={homedepot} alt="" className="h-22 w-22" />
      </div>
    </div>
  );
};

export default Companies;
