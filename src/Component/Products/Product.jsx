import React, { useEffect, useRef } from "react";
import productheroImage from "../../../public/Products/productheroImage.png";
import Companies from "../About/Companies";
import BlogSection from "../Common/Blogs";
import ContactForm from "../Common/GetInTouch";
import SpecificationsPage from "./Specification";
import SecondSectionProduct from "./SecondSectionProduct";
import ThirdSection from "./ThirdSection";
import gsap from "gsap";

const Product = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Split heading into two parts
    const text1 = "Products That Elevate";
    const text2 = "Your Data Center Uptime";

    headingRef1.current.innerHTML = "";
    headingRef2.current.innerHTML = "";

    text1.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.opacity = 0;
      span.style.display = "inline-block";

      if (letter === " ") {
        span.style.width = "6px";
      }

      headingRef1.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        delay: index * 0.05,
        duration: 0.1,
      });
    });

    text2.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.opacity = 0;
      span.style.display = "inline-block";

      if (letter === " ") {
        span.style.width = "6px";
      }

      headingRef2.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        delay: index * 0.05,
        duration: 0.1,
      });
    });

    // Opacity fade-in for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <>
      <div className="md:min-h-screen">
        <div className="relative h-full overflow-hidden">
          <img
            src={productheroImage}
            alt="Support Background"
            className="object-cover md:h-full h-[600px] w-screen"
          />
          <div className="absolute inset-0 pointer-events-none bg-black/60"></div>
          <div className="absolute top-1/2 left-1/2 transform w-full md:w-[50%] -translate-x-1/2 gap-2 flex justify-center items-center flex-col -translate-y-1/2">
            {/* Typing Effect Heading Split Into Two Lines */}
            <h1
              ref={headingRef1}
              className="md:text-6xl text-2xl text-center text-white font-semibold px-4"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            ></h1>
            <h1
              ref={headingRef2}
              className="md:text-6xl text-2xl text-center text-white font-semibold px-4"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            ></h1>
            {/* Opacity Fade-in Text */}
            <div ref={textRef} className="text-center">
              <p className="text-white my-4">
                Looking for fast, energy-efficient, and zero U power
                distribution products to ensure uninterrupted data centre
                operations?
              </p>
              <p className="text-gray-300">
                At Zonit, we understand your data center's uptime is
                non-negotiable. That's why we've developed a lineup of
                cutting-edge solutions that guarantee your data center's uptime
                and keeps your business running smoothly. Explore our range of
                groundbreaking solutions below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SecondSectionProduct />
      {/* <ThirdSection /> */}
      <Companies />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default Product;
