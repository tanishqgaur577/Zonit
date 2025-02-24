// import React from "react";
// import blogImage from "../../../public/blogImage.png";
// const BlogSection = () => {
//   const blogs = [
//     {
//       id: 1,
//       image: blogImage, // Replace with actual image URL
//       title: "Lorem Ipsum is a dummy text",
//       description: "Lorem ipsum is a dummy text lorem ipsum is a dummy text.",
//       date: "Feb 18, 2025",
//       readTime: "2 minute read",
//     },
//     {
//       id: 2,
//       image: blogImage, // Replace with actual image URL
//       title: "Lorem Ipsum is a dummy text",
//       description: "Lorem ipsum is a dummy text lorem ipsum is a dummy text.",
//       date: "Feb 18, 2025",
//       readTime: "2 minute read",
//     },
//     {
//       id: 3,
//       image: blogImage, // Replace with actual image URL
//       title: "Lorem Ipsum is a dummy text",
//       description: "Lorem ipsum is a dummy text lorem ipsum is a dummy text.",
//       date: "Feb 18, 2025",
//       readTime: "2 minute read",
//     },
//   ];

//   return (
//     <div className=" py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl  text-blue-900">
//             Latest <span className="text-blue-900 font-bold">Blogs</span>
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-white  shadow-md overflow-hidden">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
//                 <div className="flex items-center text-gray-500 text-sm mt-4">
//                   <span>{blog.date}</span>
//                   <span className="mx-2">—</span>
//                   <span>{blog.readTime}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-8">
//           <button className="bg-white text-red-500 font-semibold py-2 px-6 rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition">
//             View more →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
import { motion } from "framer-motion";
import press from "../../../public/press.png";
import blogImage from "../../../public/blogImage.png";
import speaker from "../../../public/speaker.png";

export default function LatestInsights() {
  return (
    <section className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl  text-[#005487]">
        Latest <span className="text-[#005487] font-semibold">Insights</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
        {/* First Card with Image */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          className=" text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img
            src={blogImage}
            width={400}
            height={300}
            alt="Server Room"
            className="w-full h-auto"
          />
          <div className="p-4 text-left">
            <h3 className="font-semibold text-gray-900">
              Lorem Ipsum is a dummy text
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum is a dummy text lorem ipsum is a dummy text.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Feb 18, 2025 — ⏳ 2 minute read
            </p>
          </div>
        </motion.div>

        {/* Second Card */}

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img src={speaker} alt="" className="h-18 w-18" />
          <p className=" gap-4 flex items-center justify-center text-xl font-semibold">
            ZAnnouncement From{" "}
          </p>
          <img src="/public/zonit-white-logo.png" className="h-4 w-20" alt="" />
          <p className="text-md mt-2 text-left text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque.{" "}
          </p>
        </motion.div>

        {/* Third Card */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          }}
          className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
        >
          {" "}
          <img src={press} alt="" className="h-18 w-18" />
          <p className=" text-xl text-left font-semibold">
            Zonit Unveils Improved Market Leading Universal Dual-Locking Power
            Cords{" "}
          </p>
          <p className="text-md mt-2 text-left text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque.{" "}
          </p>
        </motion.div>
      </div>

      <button className="mt-8 px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
        View more →
      </button>
    </section>
  );
}
