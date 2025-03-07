import React from "react";
import bulb from "../../../public/careers/bulb.png";
import handshake from "../../../public/careers/handshake.png";
import search from "../../../public/careers/search.png";
import stairs from "../../../public/careers/stairs.png";
import target from "../../../public/careers/target.png";

const SecondCareersSection = () => {
  const sections = [
    {
      img: bulb, // Replace with an SVG or img library
      title: "Innovation",
      content:
        "Zonit is a hub of innovation. We believe in challenging the status quo and pioneering new solutions that shape the future of the data center industry. When you join Zonit, you become part of a team that’s dedicated to making a difference. From our groundbreaking Z-PDS power distribution unit to our innovative zLock locking power cords and Z-ATS automatic transfer switches, your contributions will directly impact the world of technology.",
    },
    {
      img: target, // Replace with an SVG or img library
      title: "Meaningful Impact",
      content:
        "Your work at Zonit will have a meaningful impact. Our products and solutions play a vital role in enhancing data center efficiency, security, and reliability for businesses globally. When you work with us, you’ll know that your contributions directly contribute to our customers’ success.",
    },
    {
      img: search, // Replace with an SVG or img library
      title: "Explore Our Products",
      content:
        "Discover the world of possibilities that awaits you at Zonit by exploring our innovative products. From the Z-PDS power distribution unit to the zLock locking power cords and Z-ATS automatic transfer switch, our solutions are at the forefront of the industry.",
    },
    {
      img: handshake, // Replace with an SVG or img library
      title: "Trusted Partnerships",
      content:
        "We collaborate with our partners to deliver cutting-edge solutions. When you join our team, you’ll have the opportunity to work alongside a network of trusted partners.",
    },
    {
      img: stairs, // Replace with an SVG or img library
      title: "Your Career Journey Starts Here",
      content:
        "Ready to embark on a rewarding career journey where innovation and opportunity meet? Join the Zonit team and be part of a community that values excellence, collaboration, and diversity. Explore our current career opportunities and take the first step toward a promising future at Zonit.",
    },
  ];

  return (
    <div className="bg-white  md:py-10 px-5  mb-10 ">
      <div className="flex px-0 md:px-18 gap-20 flex-col md:flex-row   mx-auto">
        <h2 className="text-3xl text-[#005487] md:w-[30%] w-full ">
          Join the Zonit Team:{" "}
          <span className="">
            <br />
            Where Innovation Fuels Your Career
          </span>
        </h2>
        <p className="md:w-[50%] w-full text-lg text-gray-600 ">
          Are you ready to embark on an exciting career journey filled with
          innovation and growth opportunities? At Zonit, we’re more than just a
          company; we’re a dynamic and forward-thinking team that thrives on
          pushing the boundaries of technology. Here’s why you should consider a
          career at Zonit:
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:px-18 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-start ">
            <div
              className="w-12 h-12 flex items-center justify-center  text-3xl rounded-full"
              aria-label="img"
            >
              <img src={section.img} alt="" />
            </div>
            <h3 className="text-lg border-l-4 pl-3 border-red-600 font-bold text-blue-900 mt-4">
              {section.title}
            </h3>
            <p className="text-sm pl-3 text-gray-700 mt-2">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondCareersSection;
