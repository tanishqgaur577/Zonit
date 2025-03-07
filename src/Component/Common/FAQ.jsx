import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqData = [
    {
      index: 1,
      ques: "Will a 208V Z-ATS handle a 120V application?",
      answer:
        "No, Z-ATS units are voltage-specific. Please consult Zonit to identify the appropriate Z-ATS model for your application.",
    },
    {
      index: 2,
      ques: "Can I get Z-LOCK cords in pink?",
      answer:
        "Zonit offers standard colors (Black, Red, Blue, and White) with standard lead times. Custom colors, such as pink, can be manufactured but require a minimum order quantity (MOQ) and may extend lead times. These are quoted individually.",
    },
    {
      index: 3,
      ques: "How can I purchase Zonit products?",
      answer:
        "Zonit products are available through top-tier distributors. Visit https://zonit.com/buy to find a distributor that suits your needs.",
    },
    {
      index: 4,
      ques: "What are the product lead times and minimum order quantities (MOQs)?",
      answer:
        "Lead times and MOQs vary by product and location. For specific information, email sales at info@zonit.com with details about the products and quantities you're interested in.",
    },
    {
      index: 5,
      ques: "Are Zonit products TAA compliant?",
      answer:
        "Yes, all Zonit products are manufactured in Trade Agreements Act (TAA) compliant countries.",
    },
    {
      index: 6,
      ques: "Who uses Zonit products?",
      answer:
        "Zonit products are utilized by over 80% of Fortune 100 companies and numerous governmental entities at local, state, federal, and international levels. Businesses of all sizes globally rely on Zonit solutions.",
    },
  ];

  return (
    <div className="h-auto min-h-[80vh] flex justify-center items-center md:p-6 p-3">
      <div className="flex flex-col justify-center items-center w-full md:max-w-6xl gap-4">
        <h1 className="text-4xl font-semibold">FAQs</h1>
        <p className="text-center text-gray-600 max-w-xl">
          Find answers to common questions about Zonit products and services.
        </p>
        <div className="w-full">
          {faqData.map((data) => (  
            <div key={data.index} className="border-b border-gray-300">
              <button
                className={`w-full text-left px-5 py-3 flex justify-between items-center ${
                  openIndex === data.index
                    ? "bg-[#024269] text-white"
                    : "bg-blue-100 hover:bg-blue-200"
                } transition-colors duration-300 focus:outline-none`}
                onClick={() =>
                  setOpenIndex(openIndex === data.index ? null : data.index)
                }
              >
                <span
                  className={`font-semibold text-lg  ${
                    openIndex === data.index ? "text-white" : "text-[#024269]"
                  }`}
                >
                  <span className="">0{data.index} </span> {data.ques}
                </span>
                <span
                  className={` ${
                    openIndex === data.index ? "text-white" : "text-blue-500"
                  }`}
                >
                  {openIndex === data.index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height bg-[#024269] text-white duration-500 ease-in-out px-12 ${
                  openIndex === data.index
                    ? "max-h-40 pb-2 bg-[#024269] text-white"
                    : "max-h-0"
                }`}
              >
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
