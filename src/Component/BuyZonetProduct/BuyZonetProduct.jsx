import React from "react";
import heroImage from "../../../public/Homepage/sliderImage1.png";
import Partners from "../LandingPage/ZonitPartners";
import TestimonialDeck from "../LandingPage/Testimonials";
import BlogSection from "../Common/Blogs";
import ContactForm from "../Common/GetinTouch";
const BuyZonetProduct = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative  h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            fill
            className="object-cover w-full"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/50"></div>
          <h1 className="text-5xl absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2">
            Buy Zonet Product
          </h1>
        </div>
      </div>
      <Partners />
      <TestimonialDeck />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default BuyZonetProduct;
