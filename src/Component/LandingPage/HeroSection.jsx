import sliderImage1 from "../../../public/Homepage/sliderImage1.png";
import sliderImage2 from "../../../public/Homepage/sliderImage2.png";
import sliderImage3 from "../../../public/Homepage/sliderImage3.png";
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
const images = [sliderImage1, sliderImage2, sliderImage3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
    const textRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      ref={containerRef}
      className="h-[80vh] md:h-[90vh] w-full relative overflow-hidden"
    >
      {/* Heading Section */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center z-20 flex justify-center items-center flex-col px-4 md:px-0">
        <h1 className="text-lg md:text-xl lg:text-2xl">
          Innovation that's Revolutionizing the world's data center
        </h1>
        <h1 className="relative text-4xl md:text-6xl lg:text-8xl md:px-3 pb-4 whitespace-nowrap mt-6 md:mt-10 font-semibold overflow-hidden">
          <span className="relative z-10" ref={textRef}>Uptime Essentials</span>

          {/* Animated Background */}
          <span
            key={currentIndex} // Ensures re-rendering when currentIndex changes
            className={`absolute top-0 left-0 h-full w-0 animate-fill transition-all duration-500 ease-in-out ${
              currentIndex === 0
                ? "bg-red-700"
                : currentIndex === 1
                ? "bg-gray-700"
                : "bg-[#0A5587]"
            }`}
          ></span>
        </h1>
        <button className="text-sm md:text-base flex gap-1 mt-6 md:mt-10 items-center font-semibold py-2 md:py-3 px-3 md:px-4 bg-white rounded-3xl text-red-600 transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105 group">
          Know More
          <ArrowRight className="h-4 w-5 md:h-5 md:w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>

      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 py-1 px-3 md:px-4 text-lg top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        ❮
      </button>

      {/* Image Carousel */}
      <div
        className="flex relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
        <div className="absolute h-full w-full bg-black/30"></div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white py-1 px-3 md:px-4 text-lg rounded-full shadow-md z-10"
      >
        ❯
      </button>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fillAnimation {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-fill {
          animation: fillAnimation 2s ease-in-out;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
