import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import google from "../../../public/AboutUs/google.png";
import dell from "../../../public/AboutUs/dell.png";
import homedepot from "../../../public/AboutUs/homedepot.png";

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // Trigger when the top of the element hits 80% of the viewport height
        toggleActions: "play none none reset", // Play on enter, reset on leave
      },
    });

    // Animate heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 }, // Start from opacity 0 and 30px down
      { opacity: 1, y: 0, duration: 0.5 } // Animate to opacity 1 and original position
    );

    // Animate paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 }, // Start from opacity 0 and 30px down
      { opacity: 1, y: 0, duration: 0.5 }, // Animate to opacity 1 and original position
      "-=0.5" // Overlap the animations by 0.5 seconds
    );

    // Animate logos
    logosRef.current.forEach((logo, index) => {
      tl.fromTo(
        logo,
        { opacity: 0, y: 30 }, // Start from opacity 0 and 30px down
        { opacity: 1, y: 0, duration: 0.3 }, // Animate to opacity 1 and original position
        "-=0.3" // Overlap the animations by 0.3 seconds
      );
    });

    return () => {
      tl.kill(); // Cleanup the timeline on unmount
    };
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center space-y-4">
      <h1 ref={headingRef} className="text-[#005487] text-3xl">
        Companies that <span className="font-semibold">use Zonit</span>
      </h1>
      <p ref={paragraphRef} className="w-[70%] text-center">
        Zonit provides trusted and reliable products that can be found in the
        data centers of Fortune 100 corporations and local governments to
        MDF/IDF closets and industrial facilities. We provide facility managers,
        product managers, and those in the C-Suite with the peace of mind
        knowing their data centers will be safe and operational.
      </p>
      <div className="flex justify-center items-center gap-14">
        <img
          ref={(el) => (logosRef.current[0] = el)}
          src={dell}
          className="h-22 w-22"
          alt="Dell"
        />
        <img
          ref={(el) => (logosRef.current[1] = el)}
          src={google}
          className="h-22 w-22"
          alt="Google"
        />
        <img
          ref={(el) => (logosRef.current[2] = el)}
          src={homedepot}
          className="h-22 w-22"
          alt="Home Depot"
        />
      </div>
    </div>
  );
};

export default Companies;
