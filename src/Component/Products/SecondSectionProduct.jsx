// import React, { useEffect, useRef } from "react";
// import Plug from "../../../public/Products/plug.png";
// import server from "../../../public/Products/server.png";
// import timer from "../../../public/Products/timer.png";
// import serverRack from "../../../public/Products/serverRack.png";
// import zlockcable from "../../../public/Products/zlockcable.png";
// import Ellipse from "../../../public/Products/Ellipse.png";
// import SecondSectionLandingPage from "../LandingPage/SecondSectionLandingPage";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SecondSectionProduct = () => {
//   const featureRefs = useRef([]);

//   useEffect(() => {
//     featureRefs.current.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="bg-white pb-10 px-4 md:pt-0 pt-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Features Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {/* Feature 1 */}
//           <div
//             ref={(el) => (featureRefs.current[0] = el)}
//             className="text-center opacity-0 transform translate-y-4"
//           >
//             <div className="flex justify-start mb-4 ">
//               <img src={Plug} alt="" className="h-12 w-12 " />
//             </div>
//             <h3 className="text-xl text-start border-l-8 border-blue-600 pl-3.5 font-bold text-gray-900">
//               Versatile Plug and Cord Solutions
//             </h3>
//             <p className="text-gray-600 mt-4 text-start">
//               Give your data center an extra layer of security with dual-locking
//               connectors that are universally compatible to ensure a secure and
//               reliable connection across all your devices. Say goodbye to
//               compatibility concerns and hello to seamless integration.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div
//             ref={(el) => (featureRefs.current[1] = el)}
//             className="text-center opacity-0 transform translate-y-4"
//           >
//             <div className="flex justify-start mb-4">
//               <img src={timer} alt="" className="h-12 w-12" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 text-start border-l-8 border-red-700 pl-3.5">
//               Millisecond Transfer Speeds
//             </h3>
//             <p className="text-gray-600 mt-4 text-start">
//               Experience the power of speed with Zonit. Our products boast
//               millisecond transfer speeds, ensuring that your data center
//               remains agile and always ready for action. Say goodbye to downtime
//               and hello to uninterrupted operations.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div
//             ref={(el) => (featureRefs.current[2] = el)}
//             className="text-center opacity-0 transform translate-y-4"
//           >
//             <div className="flex justify-start mb-4">
//               <img src={server} alt="" className="h-12 w-12" />
//             </div>
//             <h3 className="text-xl text-start border-l-8 border-amber-400 pl-3.5 font-bold text-gray-900">
//               Rack-Based Power Distribution
//             </h3>
//             <p className="text-gray-600 mt-4 text-start">
//               Ensure reliable, robust, and efficient power distribution without
//               compromising on reliability. Zonit offers cost-effective solutions
//               for maintaining uptime in a streamlined and clutter-free data
//               center.
//             </p>
//           </div>
//         </div>

//         {/* Middle Section with Image */}
//         <SecondSectionLandingPage />
//       </div>
//     </div>
//   );
// };

// export default SecondSectionProduct;

import React, { useEffect, useRef } from "react";
import Plug from "../../../public/Products/plug.png";
import server from "../../../public/Products/server.png";
import timer from "../../../public/Products/timer.png";
import serverRack from "../../../public/Products/serverRack.png";
import zlockcable from "../../../public/Products/zlockcable.png";
import Ellipse from "../../../public/Products/Ellipse.png";
import SecondSectionLandingPage from "../LandingPage/SecondSectionLandingPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecondSectionProduct = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white pb-10 px-4 md:pt-0 pt-10">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div
            ref={(el) => (featureRefs.current[0] = el)}
            className="text-center opacity-0 transform translate-y-4"
          >
            <div className="flex justify-start mb-4 ">
              <img src={Plug} alt="" className="h-12 w-12 " />
            </div>
            <h3 className="text-xl text-start border-l-8 border-blue-600 pl-3.5 font-bold text-gray-900">
              Versatile Plug and Cord Solutions
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Give your data center an extra layer of security with dual-locking
              connectors that are universally compatible to ensure a secure and
              reliable connection across all your devices. Say goodbye to
              compatibility concerns and hello to seamless integration.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            ref={(el) => (featureRefs.current[1] = el)}
            className="text-center opacity-0 transform translate-y-4"
          >
            <div className="flex justify-start mb-4">
              <img src={timer} alt="" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-start border-l-8 border-red-700 pl-3.5">
              Millisecond Transfer Speeds
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Experience the power of speed with Zonit. Our products boast
              millisecond transfer speeds, ensuring that your data center
              remains agile and always ready for action. Say goodbye to downtime
              and hello to uninterrupted operations.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            ref={(el) => (featureRefs.current[2] = el)}
            className="text-center opacity-0 transform translate-y-4"
          >
            <div className="flex justify-start mb-4">
              <img src={server} alt="" className="h-12 w-12" />
            </div>
            <h3 className="text-xl text-start border-l-8 border-amber-400 pl-3.5 font-bold text-gray-900">
              Rack-Based Power Distribution
            </h3>
            <p className="text-gray-600 mt-4 text-start">
              Ensure reliable, robust, and efficient power distribution without
              compromising on reliability. Zonit offers cost-effective solutions
              for maintaining uptime in a streamlined and clutter-free data
              center.
            </p>
          </div>
        </div>

        {/* Middle Section with Image */}
        <SecondSectionLandingPage />
      </div>
    </div>
  );
};

export default SecondSectionProduct;
