import React from "react";

const CountOnUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#005487]  to-[#001521] text-white py-10 px-5">
      <div className="md:max-w-6xl md:px-18 ">
        <h3 className="text-xl font-semibold text-yellow-400">Count On Us</h3>
        <h2 className="text-3xl  mt-2">We are here to help</h2>
        <p className="text-xl font-light mt-4">
          If you have any questions regarding compliance and ethics at Zonit,
          please don’t hesitate to contact us. We are dedicated to addressing
          any inquiries or feedback promptly.
        </p>
        <p className="text-xl font-light mt-2">Thank you for choosing Zonit.</p>
        <button className="mt-6 px-6 py-2 bg-white text-red-600 text-sm font-semibold rounded-full shadow hover:bg-red-600 transition">
          Contact Zonit →
        </button>
      </div>
    </div>
  );
};

export default CountOnUs;
