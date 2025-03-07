import React from "react";
import zlock from "../../../public/Patent/zlock.png";
import ZATSIndustrial from "../../../public/Patent/Z-ATSIndustrial.png";
import zonitmicro from "../../../public/Patent/zonit-zats-micro.png";
import ZonitPds from "../../../public/Patent/ZonitPds.png";

const PatentedProducts = () => {
  const products = [
    {
      name: "zLock",
      img: zlock,
      description:
        "zLock is your ultimate solution for data center power reliability. It securely locks your C13, C14, C15, C19, and C20 power cords on both ends, eliminating the risk of accidental disconnects and providing unmatched peace of mind.",
      learnMoreLink: "#",
      patents: [
        "10,998,676",
        "9,431,763",
        "8,152,554",
        "10,727,631",
        "10,516,237",
        "11,289,844",
        "11,581,682",
        "10,326,240",
        "9,065,207",
      ],
      style: "h-10",
    },
    {
      name: "Z-ATS Micro",
      img: zonitmicro,
      description:
        "Z-ATS Micro's compact size, similar to a cell phone, conserves valuable rack space in your data center. It replaces single-corded devices without adding bulk, allowing you to optimize your rack configurations.",
      learnMoreLink: "#",
      patents: ["8,004,115", "9,997,957"],
      style: "h-10",
    },
    {
      name: "Z-ATS Industrial",
      img: ZATSIndustrial,
      description:
        "The Z-ATS Industrial isn’t daunted by harsh operating conditions or poor power quality. With a rugged aluminum case and internal components designed for resilience, it thrives where others falter. Choose from a customizable wire harness or standard plugs for quick installation and take advantage of integrated T-slots for effortless DIN rail mounting.",
      learnMoreLink: "#",
      patents: ["8,004,115", "6,628,009"],
      style: "h-16",
    },
    {
      name: "Z-PDS",
      img: ZonitPds,
      description:
        "With the Z-PDS you can power 1 to 6 racks, eliminating the need for costly redundant power paths (RPPs), busways, and rack power strips. This means significant savings on infrastructure expenses while delivering high-quality power.",
      learnMoreLink: "#",
      patents: ["10,998,676"],
      style: "h-10",
    },
  ];

  return (
    <div className="py-10 px-6 mt-10 flex justify-center items-center flex-col">
      <h2 className="text-center text-3xl  text-[#0A5587] mb-10">
        Learn More About Our Patented Products
      </h2>
      <div className="space-y-10  md:w-[80%]">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  items-center md:gap-14 justify-between"
          >
            {/* Product Details */}
            <div className="md:w-1/2  ">
              <img
                src={product.img}
                alt={product.name}
                className={`object-contain mb-4 ${product.style}`}
              />
              <p className="mt-3 text-gray-700">{product.description}</p>
              <a
                href={product.learnMoreLink}
                className="text-red-500 font-medium underline mt-3 block"
              >
                Learn More about {product.name} →
              </a>
            </div>

            {/* Patents List */}
            <div className="mr-3 rounded-lg p-5 md:w-1/2 flex flex-col items-center">
              <div className="flex justify-around w-full">
                <h4 className="text-xl font-semibold text-white bg-[#DC2626] rounded-tr-3xl rounded-bl-3xl px-5 py-2 mb-4">
                  Product
                </h4>
                <h4 className="text-xl font-semibold text-white bg-[#DC2626] rounded-tr-3xl rounded-bl-3xl px-5 py-2 mb-4">
                  {" "}
                  Patents
                </h4>
              </div>
              <div className="flex w-full ">
                {/* Product Name */}
                <div className="min-h-full flex-1  text-black  bg-[#F8F8F8] font-semibold text-lg flex items-center justify-center p-3">
                  {product.name}
                </div>
                {/* Patents */}
                <ul className="flex-1 border-l-4 list-none border-gray-600 pl-3 list-inside text-gray-600">
                  {product.patents.map((patent, i) => (
                    <li
                      key={i}
                      className={`mb-2 p-1 px-2 ${
                        i % 2 === 0 ? "bg-white" : "bg-blue-100"
                      } `}
                    >
                      {patent}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatentedProducts;
