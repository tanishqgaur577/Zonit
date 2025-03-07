import React from "react";
const SolutionsForDataCenter = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #005487, #001521), url(/public/sectionpattern.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        className="text-white mt-9 py-8 md:px-10 px-5 flex justify-start items-start flex-col"
      >
        <p className="text-yellow-500 md:text-[24px] text-lg">
          A Prosperous Future Awaits
        </p>
        <h2 className="md:text-2xl text-xl lg:text-3xl md:my-6 my-3">
          Unparalleled Solutions for Your Data Center
        </h2>
        <p className="text-gray-300 max-w-8xl md:text-lg text-md mb-8">
          Zonit is more than a provider of power solutions; we are your partner
          in improving efficiency, and ensuring uninterrupted operations. We
          understand the importance of uptime, and our products are engineered
          to keep your operations running seamlessly.
        </p>
        <p className="text-gray-300 max-w-8xl md:text-lg text-md mb-8">
          Zonit is more than a provider of power solutions; we are your partner
          in improving efficiency, and ensuring uninterrupted operations. We
          understand the importance of uptime, and our products are engineered
          to keep your operations running seamlessly. When you choose Zonit,
          you’re choosing reliability, efficiency, and innovation. Don’t let
          downtime hold you back. Unleash the full potential of your data center
          with Zonit’s advanced power solutions.
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600"
        >
          Request a Sample →
        </a>
      </div>
    </>
  );
};

export default SolutionsForDataCenter;
