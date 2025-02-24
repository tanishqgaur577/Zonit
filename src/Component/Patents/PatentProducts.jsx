import React from "react";
import zlock from "../../../public/Patent/zlock.png";
import ZATSIndustrial from "../../../public/Patent/Z-ATSIndustrial.png";
import zonitmicro from "../../../public/Patent/zonit-zats-micro.png";
import ZonitPds from "../../../public/Patent/ZonitPds.png";

const PatentedProducts = () => {
  const products = [
    {
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
      img: zonitmicro,

      description:
        "Z-ATS Micro's compact size, similar to a cell phone, conserves valuable rack space in your data center. It replaces single-corded devices without adding bulk, allowing you to optimize your rack configurations.",
      learnMoreLink: "#",
      patents: ["8,004,115", "9,997,957"],
      style: "h-10",
    },
    {
      img: ZATSIndustrial,
      description:
        "The Z-ATS Industrial isn’t daunted by harsh operating conditions or poor power quality. With a rugged aluminum case and internal components designed for resilience, it thrives where others falter. Choose from a customizable wire harness or standard plugs for quick installation and take advantage of integrated T-slots for effortless DIN rail mounting.",
      learnMoreLink: "#",
      patents: ["8,004,115", "6,628,009"],
      style: "h-16",
    },
    {
      img: ZonitPds,
      description:
        "With the Z-PDS you can power 1 to 6 racks, eliminating the need for costly redundant power paths (RPPs), busways, and rack power strips. This means significant savings on infrastructure expenses while delivering high-quality power.",
      learnMoreLink: "#",
      patents: ["10,998,676"],
      style: "h-10",
    },
  ];

  return (
    <div className=" py-10 px-6 mt-10">
      <h2 className="text-center text-3xl  text-[#0A5587] mb-10">
        Learn More About Our Patented Products
      </h2>
      <div className="space-y-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  items-start justify-start"
          >
            {/* Product Details */}
            <div className="md:w-1/3  mx-auto">
              <img
                src={product.img}
                alt={product.name}
                className={` object-contain mb-4 ${product.style}`}
              />
              {/* <h3 className="text-2xl font-semibold text-[#DC2626]">
                {product.name}
              </h3> */}
              <p className="mt-3 text-gray-700">{product.description}</p>
              <a
                href={product.learnMoreLink}
                className="text-red-500 font-medium underline mt-3 block"
              >
                Learn More about {product.name} →
              </a>
            </div>

            {/* Patents List */}
            <div className=" mr-3 shadow-lg rounded-lg p-5 md:w-1/3">
              <h4 className="text-xl font-semibold text-[#DC2626] mb-4">
                Product Patents
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {product.patents.map((patent, i) => (
                  <li key={i} className="mb-2">
                    {patent}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatentedProducts;
