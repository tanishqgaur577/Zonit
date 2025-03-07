// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     areaOfInterest: "",
//     fullName: "",
//     email: "",
//     description: "",
//   });

//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [userCaptcha, setUserCaptcha] = useState("");
//   const [error, setError] = useState("");

//   function generateCaptcha() {
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCaptchaChange = (e) => {
//     setUserCaptcha(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (parseInt(userCaptcha) !== captcha.answer) {
//       setError("Incorrect CAPTCHA, try again.");
//       setCaptcha(generateCaptcha());
//       setUserCaptcha("");
//       return;
//     }

//     const dataToSend = {
//       areaOfInterest: formData.areaOfInterest,
//       fullName: formData.fullName,
//       email: formData.email,
//       description: formData.description,
//     };
//     console.log(import.meta.env.VITE_BACKEND_URL);
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/contact/inquiries`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(dataToSend),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         setFormData({
//           areaOfInterest: "",
//           fullName: "",
//           email: "",
//           description: "",
//         });
//         setUserCaptcha("");
//         setCaptcha(generateCaptcha());
//       } else {
//         alert(`Error: ${result.error || "Failed to submit the form"}`);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-[700px] flex justify-center items-start">
//       <div className="w-full bg-gray-200 gap-16 md:max-h-[400px] max-h-[1000px] flex items-start flex-col md:flex-row md:px-22 px-5 py-8">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2">
//           <h3 className="text-xl text-yellow-500 font-semibold">
//             A Prosperous Future Awaits
//           </h3>
//           <h1 className="text-4xl font-bold text-blue-900 mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-gray-600 text-xl">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
//             dolor sit amet consectetur, adipisicing elit. Minima, asperiores?
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-[550px] bg-[#024269] p-6 rounded-md pb-10 shadow-lg">
//           <h2 className="text-2xl font-semibold text-white mb-4">
//             Fill the Form
//           </h2>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             {/* Area of Interest */}
//             <div>
//               <label className="block text-white mb-1">
//                 Area of Interest<span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="areaOfInterest"
//                 value={formData.areaOfInterest}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-white text-gray-800"
//                 required
//               >
//                 <option value="">Select From Drop Down</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="AI Solutions">AI Solutions</option>
//                 <option value="IoT Devices">IoT Devices</option>
//               </select>
//             </div>

//             {/* Full Name and Email */}
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-white mb-1">
//                   Full Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Enter Full Name"
//                   className="w-full p-2 rounded bg-white text-gray-800"
//                   required
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-white mb-1">
//                   Email<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   className="w-full p-2 rounded bg-white text-gray-800"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-white mb-1">
//                 Description<span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Add Description"
//                 className="w-full p-2 rounded bg-white text-gray-800"
//                 required
//               />
//             </div>

//             {/* CAPTCHA */}
//             <div className="flex flex-col items-center bg-[#024269] p-4 rounded-xl shadow-lg w-64">
//               <label className="text-white text-lg font-semibold mb-2">
//                 Solve: {captcha.question}
//               </label>
//               <input
//                 type="text"
//                 value={userCaptcha}
//                 onChange={handleCaptchaChange}
//                 className="w-full p-2 rounded-lg bg-white text-gray-800 text-center text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-transparent text-white font-semibold py-2 rounded-3xl shadow border border-white transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import Modals from "./Modal"; // Adjust the import path as necessary

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     areaOfInterest: "",
//     fullName: "",
//     email: "",
//     description: "",
//   });

//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [userCaptcha, setUserCaptcha] = useState("");
//   const [error, setError] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   function generateCaptcha() {
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCaptchaChange = (e) => {
//     setUserCaptcha(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (parseInt(userCaptcha) !== captcha.answer) {
//       setError("Incorrect CAPTCHA, try again.");
//       setCaptcha(generateCaptcha());
//       setUserCaptcha("");
//       return;
//     }

//     const dataToSend = {
//       areaOfInterest: formData.areaOfInterest,
//       fullName: formData.fullName,
//       email: formData.email,
//       description: formData.description,
//     };

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/contact/inquiries`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(dataToSend),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         setModalMessage("Form submitted successfully!");
//         setModalVisible(true);
//         setFormData({
//           areaOfInterest: "",
//           fullName: "",
//           email: "",
//           description: "",
//         });
//         setUserCaptcha("");
//         setCaptcha(generateCaptcha());
//       } else {
//         setModalMessage(
//           `Error: ${result.error || "Failed to submit the form"}`
//         );
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setModalMessage("Something went wrong. Please try again.");
//       setModalVisible(true);
//     }
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div className="min-h-[700px] flex justify-center items-start">
//       <div className="w-full bg-gray-200 gap-16 md:max-h-[400px] max-h-[1000px] flex items-start flex-col md:flex-row md:px-22 px-5 py-8">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2">
//           <h3 className="text-xl text-yellow-500 font-semibold">
//             A Prosperous Future Awaits
//           </h3>
//           <h1 className="text-4xl font-bold text-blue-900 mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-gray-600 text-xl">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
//             dolor sit amet consectetur, adipisicing elit. Minima, asperiores?
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-[550px] bg-[#024269] p-6 rounded-md pb-10 shadow-lg">
//           <h2 className="text-2xl font-semibold text-white mb-4">
//             Fill the Form
//           </h2>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             {/* Area of Interest */}
//             <div>
//               <label className="block text-white mb-1">
//                 Area of Interest<span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="areaOfInterest"
//                 value={formData.areaOfInterest}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-white text-gray-800"
//                 required
//               >
//                 <option value="">Select From Drop Down</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="AI Solutions">AI Solutions</option>
//                 <option value="IoT Devices">IoT Devices</option>
//               </select>
//             </div>

//             {/* Full Name and Email */}
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <label className="block text-white mb-1">
//                   Full Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Enter Full Name"
//                   className="w-full p-2 rounded bg-white text-gray-800"
//                   required
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-white mb-1">
//                   Email<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   className="w-full p-2 rounded bg-white text-gray-800"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-white mb-1">
//                 Description<span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Add Description"
//                 className="w-full p-2 rounded bg-white text-gray-800"
//                 required
//               />
//             </div>

//             {/* CAPTCHA */}
//             <div className="flex flex-col items-center bg-[#024269] p-4 rounded-xl shadow-lg w-64">
//               <label className="text-white text-lg font-semibold mb-2">
//                 Solve: {captcha.question}
//               </label>
//               <input
//                 type="text"
//                 value={userCaptcha}
//                 onChange={handleCaptchaChange}
//                 className="w-full p-2 rounded-lg bg-white text-gray-800 text-center text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-transparent cursor-pointer hover:bg-[#023564] duration-500 text-white font-semibold py-2 rounded-3xl shadow border border-white transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modal for Success/Error Messages */}
//       {<Modals message={modalMessage} onClose={closeModal} />}
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the import path as necessary

const ContactForm = () => {
  const [formData, setFormData] = useState({
    areaOfInterest: "",
    fullName: "",
    email: "",
    description: "",
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (e) => {
    setUserCaptcha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userCaptcha) !== captcha.answer) {
      setModalTitle("Error");
      setModalMessage("Incorrect CAPTCHA, try again.");
      setIsSuccess(false);
      setModalVisible(true);
      setCaptcha(generateCaptcha());
      setUserCaptcha("");
      return;
    }

    const dataToSend = {
      areaOfInterest: formData.areaOfInterest,
      fullName: formData.fullName,
      email: formData.email,
      description: formData.description,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setModalTitle("Success!");
        setModalMessage("Form submitted successfully!");
        setIsSuccess(true);
        setFormData({
          areaOfInterest: "",
          fullName: "",
          email: "",
          description: "",
        });
        setUserCaptcha("");
        setCaptcha(generateCaptcha());
      } else {
        setModalTitle("Error");
        setModalMessage(`Error: ${result || "Failed to submit the form"}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalTitle("Error");
      setModalMessage("Something went wrong. Please try again.");
      setIsSuccess(false);
    } finally {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="min-h-[700px] flex justify-center items-start">
      {/* Your existing form layout */}
      <div className="w-full bg-gray-200 gap-16 md:max-h-[400px] max-h-[1000px] flex items-start flex-col md:flex-row md:px-22 px-5 py-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl text-yellow-500 font-semibold">
            A Prosperous Future Awaits
          </h3>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Minima, asperiores?
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
            <div className="flex gap-4">
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

            {/* CAPTCHA */}
            <div className="flex flex-col  items-center bg-[#024269]   shadow-lg w-64">
              <label className="text-white text-lg font-semibold mb-2">
                Solve: {captcha.question}
              </label>
              <input
                type="text"
                value={userCaptcha}
                onChange={handleCaptchaChange}
                placeholder="Result..."
                className="w-full rounded-sm p-2 text-md  bg-white text-gray-800 text-center  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-transparent cursor-pointer hover:bg-[#023564] duration-500 text-white font-semibold py-2 rounded-3xl shadow border border-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {modalVisible && (
        <Modal
          isSuccess={isSuccess}
          title={modalTitle}
          message={modalMessage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ContactForm;
