import React from "react";

const ThirdSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h5 className="text-yellow-500 text-lg font-semibold mb-2">
            A Prosperous Future Awaits
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Unparalleled Solutions for Your Data Center
          </h2>
          <p className="text-gray-600 mb-4">
            Zonit is more than a provider of power solutions; we are your
            partner in improving efficiency, and ensuring uninterrupted
            operations. We understand the importance of uptime, and our products
            are engineered to keep your operations running seamlessly.
          </p>
          <p className="text-gray-600 mb-4">
            When you choose Zonit, you’re choosing reliability, efficiency, and
            innovation. Don’t let downtime hold you back.
          </p>
          <p className="text-gray-600">
            Unleash the full potential of your data center with Zonit’s advanced
            power solutions.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="border-4 border-yellow-400 rounded-md overflow-hidden">
            <iframe
              className="w-[300px] h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Zonit Solutions Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
