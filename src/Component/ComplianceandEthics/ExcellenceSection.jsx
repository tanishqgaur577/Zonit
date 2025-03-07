import React from "react";

const ExcellenceSection = () => {
  const items = [
    {
      title: "Our Commitment to Compliance",
      content:
        "Zonit adheres to all applicable laws, regulations, and industry standards that govern our operations. We maintain a culture of compliance through ongoing training, monitoring, and risk assessment to ensure that we meet the requirements of our industry and the expectations of our customers.",
      bgColor: "bg-red-700",
    },
    {
      title: "Ethical Business Practices",
      content:
        "Ethics are at the core of our business practices. We believe in doing the right thing, even when no one is watching. Our team is dedicated to promoting ethical conduct and making responsible decisions that benefit not only our company but also the communities and environment in which we operate.",
      bgColor: "bg-[#0A5587]",
    },
    {
      title: "Data Privacy and Security",
      content:
        "Protecting your data is a top priority for us. We employ stringent data privacy and security measures to safeguard your information. We are fully compliant with data protection regulations, and we take the responsibility of managing your data with the utmost care and respect.",
      bgColor: "bg-red-700",
    },
    {
      title: "Environmental Responsibility",
      content:
        "Zonit is committed to environmental sustainability. We strive to minimize our environmental footprint and actively seek out opportunities to reduce waste, conserve resources, and promote eco-friendly practices within our operations. This includes reduced trans-Atlantic shipping, manufacturing products that take up less raw materials, and designing solutions that require less energy in their operating environment.",
      bgColor: "bg-[#0A5587]",
    },
    {
      title: "Continuous Improvement",
      content:
        "At Zonit, we believe in continuous improvement. We regularly review and update our compliance and ethics policies and practices to stay aligned with evolving laws and industry best practices.",
      bgColor: "bg-red-700",
    },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-5xl mx-auto md:text-center">
        <h2 className="text-4xl   text-[#0A5587]">
          Experience <span className="font-semibold">Zonit</span> Product{" "}
          <span className="font-semibold">Excellence</span>
        </h2>
      </div>
      <div className="mt-8 flex flex-col gap-10 md:px-10 px-2">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col  overflow-hidden">
            <div
              className={`p-4 w-max ${item.bgColor} rounded-bl-3xl rounded-tr-3xl text-white`}
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
            <div className="md:p-4 pt-4 text-[#024269]">
              <p className="text-lg">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceSection;
