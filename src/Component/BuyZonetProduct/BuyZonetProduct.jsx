import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "../../../public/Homepage/sliderImage1.png";
import Partners from "../LandingPage/ZonitPartners";
import TestimonialDeck from "../LandingPage/Testimonials";
import BlogSection from "../Common/Blogs";
import ContactForm from "../Common/GetinTouch";
import Partner from "../LandingPage/ZonitPartners";
import ZonitPartnersProduct from "./ZonitPartnersProduct";
const BuyZonetProduct = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen" ref={containerRef}>
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Support Background"
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/50"></div>
          <h1
            ref={textRef}
            className="text-5xl w-full text-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 font-semibold -translate-y-1/2"
          >
            Buy Zonet Product
          </h1>
        </div>
      </div>
      {/* <Partners /> */}
      <ZonitPartnersProduct />
      <TestimonialDeck />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default BuyZonetProduct;
