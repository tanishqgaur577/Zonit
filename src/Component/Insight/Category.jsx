// import { useState } from "react";

// const data = [
//   {
//     id: 1,
//     category: "Blogs",
//     title: "Blog Post 1",
//     date: "Feb 18, 2025",
//     readTime: "2 minute read",
//     img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
//   },
//   {
//     id: 2,
//     category: "Blogs",
//     title: "Blog Post 2",
//     date: "Feb 19, 2025",
//     readTime: "3 minute read",
//     img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
//   },
//   {
//     id: 3,
//     category: "Announcement",
//     title: "Announcement 1",
//     date: "Feb 20, 2025",
//     readTime: "1 minute read",
//     img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
//   },
//   {
//     id: 4,
//     category: "Announcement",
//     title: "Announcement 2",
//     date: "Feb 21, 2025",
//     readTime: "4 minute read",
//     img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
//   },
//   {
//     id: 5,
//     category: "Press Release",
//     title: "Press Release 1",
//     date: "Feb 22, 2025",
//     readTime: "5 minute read",
//     img: "https://www.threegirlsmedia.com/wp-content/uploads/2016/10/public-relations-electronic-press-release.jpg",
//   },
//   {
//     id: 6,
//     category: "Press Release",
//     title: "Press Release 2",
//     date: "Feb 23, 2025",
//     readTime: "6 minute read",
//     img: "https://www.threegirlsmedia.com/wp-content/uploads/2016/10/public-relations-electronic-press-release.jpg",
//   },
// ];

// export default function FilterableCards() {
//   const [selectedCategory, setSelectedCategory] = useState("Blogs");

//   const filteredData = data.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className="p-8">
//       {/* Category Buttons */}
//       <div className="flex gap-4 mb-6">
//         {["Blogs", "Announcement", "Press Release"].map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 border-2 rounded-full text-lg font-semibold ${
//               selectedCategory === category
//                 ? "bg-red-600 text-white"
//                 : "border-red-600 text-red-600"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Grid Display */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-bold text-lg">{item.title}</h3>
//               <p className="text-gray-600 text-sm">
//                 {item.date} — {item.readTime}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    category: "Blogs",
    title: "Blog Post 1",
    date: "Feb 18, 2025",
    readTime: "2 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 2,
    category: "Blogs",
    title: "Blog Post 2",
    date: "Feb 19, 2025",
    readTime: "3 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 3,
    category: "Announcement",
    title: "Announcement 1",
    date: "Feb 20, 2025",
    readTime: "1 minute read",
    img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
  },
  {
    id: 4,
    category: "Announcement",
    title: "Announcement 2",
    date: "Feb 21, 2025",
    readTime: "4 minute read",
    img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
  },
  {
    id: 5,
    category: "Press Release",
    title: "Press Release 1",
    date: "Feb 22, 2025",
    readTime: "5 minute read",
    img: "https://www.threegirlsmedia.com/wp-content/uploads/2016/10/public-relations-electronic-press-release.jpg",
  },
  {
    id: 6,
    category: "Press Release",
    title: "Press Release 2",
    date: "Feb 23, 2025",
    readTime: "6 minute read",
    img: "https://www.threegirlsmedia.com/wp-content/uploads/2016/10/public-relations-electronic-press-release.jpg",
  },
];

export default function FilterableCards() {
  const [selectedCategory, setSelectedCategory] = useState("Blogs");

  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="md:p-8 mt-5 mb-3 md:mt-0 px-8 md:min-h-[80vh]">
      {/* Category Buttons */}
      <div className="flex gap-4 mb-6">
        {["Blogs", "Announcement", "Press Release"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`px-4 py-2 border-2 md:text-lg text-[10px] rounded-full cursor-pointer  font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "border-red-600 text-red-600"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Grid Display with Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  {item.date} — {item.readTime}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
