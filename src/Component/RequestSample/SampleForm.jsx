import React from "react";

const SampleForm = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-4">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-900">
            Experience Zonit Performance
          </h2>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
            As a leader in creating innovative products for power distribution,
            power management, and connectivity for the data center and control
            panels, our products are engineered and manufactured for
            performance. Get Uptime Essentials | Reliable &gt; Fast &gt; Secure.
            Count on it.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#024269] text-white p-8  shadow-lg">
          <h3 className="text-lg font-bold mb-6">Fill the Form</h3>
          <form className="space-y-4">
            {/* Full Name & Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Company*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Address*</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
              />
            </div>

            {/* Country & State */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Country*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  State/Province*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
            </div>

            {/* City & ZIP */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">City*</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  ZIP/Postal Code*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                />
              </div>
            </div>

            {/* Checkbox Options */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Sample or Eval Unit is requested for:*
              </label>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex gap-5">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Z-Lock Sample
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Z-ATS Micro Eval
                  </label>
                </div>
                <div className="flex gap-5">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Z-ATS Industrial Eval Unit
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Z-PDS Eval Unit
                  </label>
                </div>
              </div>
            </div>

            {/* How did you hear? */}
            <div>
              <label className="block text-sm font-medium mb-1">
                How did you hear about us? (Click all that apply):*
              </label>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex gap-5">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Google Ad
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Searching Online
                  </label>
                </div>
                <div className="flex gap-5">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Referred by an associate
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Other
                  </label>
                </div>
              </div>
            </div>

            {/* Recaptcha */}
            <div>
              <label className="block text-sm font-medium mb-1">Captcha*</label>
              <div className="bg-white text-black px-4 py-2 rounded-md">
                I'm not a robot
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-transparent  border border-white text-white font-semibold rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleForm;
