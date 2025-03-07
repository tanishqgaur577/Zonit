"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgImage from "../../../public/Homepage/svgImage.png";
const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Manager",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Senior Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
  },
];

export default function TestimonialDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
    }),
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl text-[#005487] md:text-4xl mb-4">
          What <span className="text-[#005487] font-semibold">People</span> say{" "}
          <span className="text-[#005487] font-semibold">About</span> us
        </h2>
        <p className="text-gray-600 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </motion.div>

      <div className="relative max-w-4xl  mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="absolute md:left-0 left-10 z-10  transform -translate-x-12 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="relative w-full h-[400px] perspective">
            <div className="absolute -right-32 -top-12 md:w-[550px] md:h-[550px] w-[250px]  h-[250px] ">
              <img src={svgImage} alt="" />
            </div>
            <div className="w-full h-full relative">
              {/* Background cards for deck effect */}
              {[-2, -1].map((offset) => (
                <div
                  key={offset}
                  className="absolute inset-0 bg-white rounded-lg shadow-2xl"
                  style={{
                    transform: `translateY(${offset * 10}px) scale(${
                      1 + offset * 0.05
                    })`,
                    opacity: 0.5 - Math.abs(offset) * 0.2,
                    zIndex: 10 + offset,
                  }}
                />
              ))}

              {/* Active testimonial card */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 bg-white rounded-lg shadow-2xl"
                >
                  <div className="relative h-full  md:p-18 p-6 flex justify-center items-center">
                    <div className="relative z-10 flex justify-center items-center flex-col ">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center "
                      >
                        <h3 className="md:text-2xl text-2xl text-black font-medium mb-3">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-800 mb-8 md:text-xl text-lg">
                          {testimonials[currentIndex].role}
                        </p>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mb-6 text-center md:text-md text-[12px] md:max-w-3xl mx-auto"
                      >
                        {testimonials[currentIndex].content}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute md:right-0 right-10 z-10 transform translate-x-12 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#003153]" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
