import React from "react";
import productheroImage from "../../../public/Products/productheroImage.png";
import Companies from "../About/Companies";
import BlogSection from "../Common/Blogs";
import ContactForm from "../Common/GetInTouch";
import SecondSectionProduct from "./SecondSectionProduct";
import ThirdSection from "./ThirdSection";
const Product = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative h-full overflow-hidden">
          <img
            src={productheroImage}
            alt="Support Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 gap-2 flex justify-center items-center flex-col  -translate-y-1/2">
            <h1 className="text-6xl  text-center flex justify-center items-center  flex-col  text-white font-semibold">
              Products That Elevate Your Data Center Uptime
            </h1>
            <p className="text-white my-4 text-center">
              Looking for fast, energy-efficient, and zero U power distribution
              products to ensure uninterrupted data centre operations?
            </p>
            <p className="text-gray-300  text-center">
              At Zonit, we understand your data center's uptime is
              non-negotiable. That's why we've developed a lineup of
              cutting-edge solutions that guarantee your data center's uptime
              and keeps your business running smoothly. Explore our range of
              groundbreaking solutions below.
            </p>
          </div>
        </div>
      </div>
      <SecondSectionProduct />
      <ThirdSection     />
      <Companies />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default Product;
