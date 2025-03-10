"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    category: "Blogs",
    desc: "This is the blog of zonit website blog post ",
    title: "Blog Post 1",
    date: "Feb 18, 2025",
    readTime: "2 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 2,
    category: "Blogs",
    desc: "This is the blog of zonit website blog post ",
    title: "Blog Post 2",
    date: "Feb 19, 2025",
    readTime: "3 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 7,
    category: "Blogs",
    desc: "This is the blog of zonit website blog post ",
    title: "Blog Post 1",
    date: "Feb 18, 2025",
    readTime: "2 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 8,
    category: "Blogs",
    desc: "This is the blog of zonit website blog post ",
    title: "Blog Post 2",
    date: "Feb 19, 2025",
    readTime: "3 minute read",
    img: "https://www.atulhost.com/wp-content/uploads/2017/10/blog.jpg",
  },
  {
    id: 3,
    category: "Announcement",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque.",
    title: "Announcement 1",
    date: "Feb 20, 2025",
    readTime: "1 minute read",
    img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
  },
  {
    id: 4,
    category: "Announcement",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque.",
    title: "Announcement 2",
    date: "Feb 21, 2025",
    readTime: "4 minute read",
    img: "https://static.vecteezy.com/system/resources/previews/011/719/291/original/important-announcement-text-button-important-announcement-sign-speech-bubble-web-banner-label-template-illustration-vector.jpg",
  },
  {
    id: 5,
    category: "Press Release",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque.",
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

    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque.",
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
            className={`px-4 py-2 border-2 md:text-lg text-[10px] rounded-full cursor-pointer font-semibold transition-all duration-300 ${
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
          {filteredData.map((item) => {
            if (item.category === "Blogs") {
              return <BlogCard item={item} key={item.id} />;
            } else if (item.category === "Announcement") {
              return <AnnouncementCard item={item} key={item.id} />;
            } else if (item.category === "Press Release") {
              return <PressReleaseCard item={item} key={item.id} />;
            }
            return null; // Fallback in case of an unknown category
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

const BlogCard = ({ item }) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className=" text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
    whileHover={{ scale: 1.02 }}
  >
    {" "}
    <img
      src={item.img}
      alt={item.title}
      width={400}
      height={300}
      className="w-full h-auto"
    />
    <div className="p-4 text-left">
      <h3 className="font-semibold text-gray-900">{item.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{item.desc} </p>
      <p className="text-gray-400 text-xs mt-2">
        {item.date} — ⏳ {item.readTime}
      </p>
    </div>
  </motion.div>
);

const AnnouncementCard = ({ item }) => (
  // <motion.div
  //   key={item.id}
  //   initial={{ opacity: 0, y: 20 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   exit={{ opacity: 0, y: -20 }}
  //   transition={{ duration: 0.5, ease: "easeInOut" }}
  //   className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
  //   whileHover={{ scale: 1.05 }}
  // >
  //   <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
  //   <div className="p-4">
  //     <h3 className="font-bold text-lg">{item.title}</h3>
  //     <p className="text-gray-600 text-sm">
  //       {item.date} — {item.readTime}
  //     </p>
  //   </div>
  // </motion.div>

  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    whileHover={{
      scale: 1.05,
      y: -8,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    }}
    className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
  >
    {" "}
    <img src={item.img} alt="" className="h-18 w-18 rounded-full" />
    <p className=" gap-4 flex items-center justify-center text-xl font-semibold">
      {item.title}{" "}
    </p>
    <img src="/public/zonit-white-logo.png" className="h-4 w-20" alt="" />
    <p className="text-md mt-2 text-left text-gray-300">{item.desc}</p>
  </motion.div>
);

const PressReleaseCard = ({ item }) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    whileHover={{
      scale: 1.05,
      y: -8,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    }}
    className="bg-[#063755] text-white p-6 rounded-lg flex justify-around items-start px-5 flex-col shadow-lg w-[320px]"
  >
    {" "}
    <img src={item.img} alt="" className="h-18 w-18 rounded-full" />
    <p className=" gap-4 flex items-center justify-center text-xl font-semibold">
      {item.title}{" "}
    </p>
    <img src="/public/zonit-white-logo.png" className="h-4 w-20" alt="" />
    <p className="text-md mt-2 text-left text-gray-300">{item.desc}</p>
  </motion.div>
);
