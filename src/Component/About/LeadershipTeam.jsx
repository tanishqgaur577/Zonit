import React from "react";
import leaderteam from "../../../public/AboutUs/leaderteam.png";
const LeadershipTeam = () => {
  const teamMembers = [
    {
      role: "Chief System Administrator",
      name: "Bill Pachoud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
    {
      role: "Chief Financial Official",
      name: "Mike Corrigan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
    {
      role: "SVP Sales and Marketing",
      name: "Jay Bradley",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
    {
      role: "Director of Manufacturing",
      name: "Jon Westerlind",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
    {
      role: "Principal Engineer",
      name: "Steve Chapel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
    {
      role: "Technical Products Sales Director",
      name: "Danny Latzer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900">
          Meet Our <span className="text-blue-500">Leadership Team</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md  overflow-hidden">
            <div className="relative">
              <img
                src={leaderteam} // Replace with actual image URL
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-1  shadow-md">
                <span className="text-sm font-semibold text-gray-700">
                  {member.role}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
