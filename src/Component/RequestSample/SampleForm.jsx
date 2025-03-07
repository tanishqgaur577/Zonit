// import React, { useState } from "react";

// const SampleForm = () => {
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [userCaptcha, setUserCaptcha] = useState("");
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     company: "",
//     address: "",
//     country: "",
//     state: "",
//     city: "",
//     zip: "",
//     sampleRequest: [],
//     howDidYouHear: [],
//   });

//   function generateCaptcha() {
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
//   }

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: checked
//           ? [...prev[name], value]
//           : prev[name].filter((item) => item !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (parseInt(userCaptcha) !== captcha.answer) {
//       setError("Incorrect CAPTCHA, try again.");
//       setCaptcha(generateCaptcha());
//       setUserCaptcha("");
//       return;
//     }
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/samples/inquiries`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         alert("Inquiry submitted successfully!");
//       } else {
//         alert(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       console.error("Error submitting inquiry:", error);
//       alert("Failed to submit inquiry.");
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-4">
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold text-blue-900">
//             Experience Zonit Performance
//           </h2>
//           <p className="mt-4 text-gray-700 text-base leading-relaxed">
//             As a leader in innovative power distribution and connectivity
//             solutions, our products are engineered for performance.
//           </p>
//         </div>
//         <div className="flex-1 bg-[#024269] w-full text-white p-8 shadow-lg">
//           <h3 className="text-lg font-bold mb-6">Fill the Form</h3>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {[
//               ["fullName", "Full Name", "email", "Email"],
//               ["phoneNumber", "Phone Number", "company", "Company"],
//               ["country", "Country", "state", "State/Province"],
//               ["city", "City", "zip", "ZIP/Postal Code"],
//             ].map(([field1, label1, field2, label2]) => (
//               <div key={field1} className="flex flex-col lg:flex-row gap-4">
//                 {[
//                   { name: field1, label: label1 },
//                   { name: field2, label: label2 },
//                 ].map(({ name, label }) => (
//                   <div key={name} className="flex-1">
//                     <label className="block text-sm font-medium mb-1">
//                       {label}*
//                     </label>
//                     <input
//                       type="text"
//                       name={name}
//                       value={formData[name]}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}

//             <div>
//               <label className="block text-sm font-medium mb-1">Address*</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
//               />
//             </div>

//             {["Sample Request", "How did you hear about us?"].map(
//               (section, index) => (
//                 <div key={index}>
//                   <label className="block text-sm font-medium mb-1">
//                     {section}*
//                   </label>
//                   {(index === 0
//                     ? [
//                         "Z-Lock Sample",
//                         "Z-ATS Micro Eval",
//                         "Z-ATS Industrial Eval Unit",
//                         "Z-PDS Eval Unit",
//                       ]
//                     : [
//                         "Google Ad",
//                         "Searching Online",
//                         "Referred by an associate",
//                         "Other",
//                       ]
//                   ).map((item) => (
//                     <div key={item}>
//                       <input
//                         type="checkbox"
//                         name={index === 0 ? "sampleRequest" : "howDidYouHear"}
//                         value={item}
//                         onChange={handleChange}
//                       />
//                       <label className="ml-2">{item}</label>
//                     </div>
//                   ))}
//                 </div>
//               )
//             )}

//             <div className="flex flex-col items-center bg-[#024269] p-4 rounded-xl shadow-lg w-64">
//               <label className="text-white text-lg font-semibold mb-2">
//                 Solve: {captcha.question}
//               </label>
//               <input
//                 type="text"
//                 value={userCaptcha}
//                 onChange={(e) => setUserCaptcha(e.target.value)}
//                 className="w-full p-2 rounded-lg bg-white text-gray-800 text-center text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-4 px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-3xl"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SampleForm;

import React, { useState } from "react";
import Modal from "../Common/Modal"; // Adjust the import path as necessary

const SampleForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    sampleRequest: [],
    howDidYouHear: [],
  });
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
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userCaptcha) !== captcha.answer) {
      setError("Incorrect CAPTCHA, try again.");
      setCaptcha(generateCaptcha());
      setUserCaptcha("");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/samples/inquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setModalTitle("Success!");
        setModalMessage("Inquiry submitted successfully!");
        setIsSuccess(true);
      } else {
        setModalTitle("Error");
        setModalMessage(`Error: ${data.error}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setModalTitle("Error");
      setModalMessage("Failed to submit inquiry.");
      setIsSuccess(false);
    } finally {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-900">
            Experience Zonit Performance
          </h2>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
            As a leader in innovative power distribution and connectivity
            solutions, our products are engineered for performance.
          </p>
        </div>
        <div className="flex-1 bg-[#024269] w-full text-white p-8 shadow-lg">
          <h3 className="text-lg font-bold mb-6">Fill the Form</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              ["fullName", "Full Name", "email", "Email"],
              ["phoneNumber", "Phone Number", "company", "Company"],
              ["country", "Country", "state", "State/Province"],
              ["city", "City", "zip", "ZIP/Postal Code"],
            ].map(([field1, label1, field2, label2]) => (
              <div key={field1} className="flex flex-col lg:flex-row gap-4">
                {[
                  { name: field1, label: label1 },
                  { name: field2, label: label2 },
                ].map(({ name, label }) => (
                  <div key={name} className="flex-1">
                    <label className="block text-sm font-medium mb-1">
                      {label}*
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
                    />
                  </div>
                ))}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-black outline-none"
              />
            </div>

            {["Sample Request", "How did you hear about us?"].map(
              (section, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium mb-1">
                    {section}*
                  </label>
                  {(index === 0
                    ? [
                        "Z-Lock Sample",
                        "Z-ATS Micro Eval",
                        "Z-ATS Industrial Eval Unit",
                        "Z-PDS Eval Unit",
                      ]
                    : [
                        "Google Ad",
                        "Searching Online",
                        "Referred by an associate",
                        "Other",
                      ]
                  ).map((item) => (
                    <div key={item}>
                      <input
                        type="checkbox"
                        name={index === 0 ? "sampleRequest" : "howDidYouHear"}
                        value={item}
                        onChange={handleChange}
                      />
                      <label className="ml-2">{item}</label>
                    </div>
                  ))}
                </div>
              )
            )}

            <div className="flex flex-col items-center bg-[#024269] p-4 rounded-xl shadow-lg w-64">
              <label className="text-white text-lg font-semibold mb-2">
                Solve: {captcha.question}
              </label>
              <input
                type="text"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                className="w-full p-2 rounded-lg bg-white text-gray-800 text-center text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal for Success/Error Messages */}
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

export default SampleForm;
