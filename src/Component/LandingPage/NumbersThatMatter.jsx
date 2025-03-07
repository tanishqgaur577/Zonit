// import React from "react";
// import one from "../../../public/Homepage/1number.png";
// import two from "../../../public/Homepage/2number.png";
// import three from "../../../public/Homepage/3number.png";

// const NumbersThatMatter = () => {
//   const data = [
//     {
//       img: one, // Replace with an SVG or img library
//       value: "80%",
//       label: "of Fortune 100s Use Zonit",
//     },
//     {
//       img: two, // Replace with an SVG or img library
//       value: "120+",
//       label: "Number of Zonit Patents",
//     },
//     {
//       img: three, // Replace with an SVG or img library
//       value: "100+",
//       label: "Countries Zonit is in Use",
//     },
//   ];

//   return (
//     <div className="bg-white py-10 px-5">
//       <h2 className="text-[44px] text-center mb-20  text-[#005487]">
//         Some <span className="font-semibold  ">Numbers</span> that{" "}
//         <span className="font-bold">Matter</span>
//       </h2>
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//         {data.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div
//               className="w-24 h-24 flex items-center justify-center bg-gradient-to-r from-[#001E30] to-[#014D7B] text-white text-3xl rounded-full"
//               aria-label="img"
//             >
//               <img src={item.img} alt="" className="h-14 w-14" />
//             </div>
//             <p className="text-4xl font-bold text-[#005487] mt-4">
//               {item.value}
//             </p>
//             <p className="text-md text-[#005487] mt-2 ">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NumbersThatMatter;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import one from "../../../public/Homepage/1number.png";
import two from "../../../public/Homepage/2number.png";
import three from "../../../public/Homepage/3number.png";

gsap.registerPlugin(ScrollTrigger);

const NumbersThatMatter = () => {
  const data = [
    {
      img: one,
      value: "80%",
      label: "of Fortune 100s Use Zonit",
    },
    {
      img: two,
      value: "120+",
      label: "Number of Zonit Patents",
    },
    {
      img: three,
      value: "100+",
      label: "Countries Zonit is in Use",
    },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-[44px] text-center mb-20 text-[#005487]">
        Some <span className="font-semibold">Numbers</span> that{" "}
        <span className="font-bold">Matter</span>
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {data.map((item, index) => (
          <NumberItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const NumberItem = ({ item }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const targetValue = parseInt(item.value) || 0; // Convert to number
    const formattedValue = item.value.includes("+")
      ? item.value
      : `${item.value}%`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 80%", // Trigger when the top of the element hits 80% of the viewport height
        toggleActions: "play none none reset", // Play on enter, reset on leave
      },
    });

    tl.fromTo(
      numberRef.current,
      { innerText: 0 },
      {
        innerText: targetValue,
        duration: 2,
        snap: { innerText: 1 }, // Snap to whole numbers
        ease: "power1.out",
        onUpdate: function () {
          this.targets()[0].innerText =
            Math.floor(this.targets()[0].innerText) +
            (formattedValue.includes("+") ? "+" : "%");
        },
      }
    );

    return () => {
      tl.kill(); // Cleanup the timeline on unmount
    };
  }, [item.value]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-24 h-24 flex items-center justify-center bg-gradient-to-r from-[#001E30] to-[#014D7B] text-white text-3xl rounded-full"
        aria-label="img"
      >
        <img src={item.img} alt="" className="h-14 w-14" />
      </div>
      <p ref={numberRef} className="text-4xl font-bold text-[#005487] mt-4">
        0
      </p>
      <p className="text-md text-[#005487] mt-2">{item.label}</p>
    </div>
  );
};

export default NumbersThatMatter;
