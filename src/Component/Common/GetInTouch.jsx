import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    areaOfInterest: "",
    fullName: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-[700px] flex justify-center items-start ">
      <div className="w-full bg-gray-200  gap-16 max-h-[400px] flex  items-start px-22 py-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl text-yellow-500 font-semibold">
            A Prosperous Future Awaits
          </h3>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[550px] bg-[#024269] p-6 rounded-md pb-10 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Fill the Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Area of Interest */}
            <div>
              <label className="block text-white mb-1">
                Area of Interest<span className="text-red-500">*</span>
              </label>
              <select
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-gray-800"
                required
              >
                <option value="">Select From Drop Down</option>
                <option value="Web Development">Web Development</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="IoT Devices">IoT Devices</option>
              </select>
            </div>

            {/* Full Name and Email */}
            <div className="flex gap-4 ">
              <div className="flex-1">
                <label className="block text-white mb-1">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full p-2 rounded bg-white text-gray-800"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full p-2 rounded bg-white text-gray-800"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-white mb-1">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add Description"
                className="w-full p-2 rounded bg-white text-gray-800"
                required
              />
            </div>

            {/* CAPTCHA Placeholder */}
            <div className="bg-white rounded p-2">
              <span className="text-gray-600">I'm not a robot</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-transparent text-white font-semibold py-2 rounded-3xl shadow border border-white  transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
