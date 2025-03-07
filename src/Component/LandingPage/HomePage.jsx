import React from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import { HeroScrollDemo } from "../Animations/ScrollAnimations";
import ServerScene from "../Animations/Aditya";
import SecondSectionLandingPage from "./SecondSectionLandingPage";
import ThirdSectionLandingPage from "./ThirdSectionLandingPage";
import TestimonialDeck from "./Testimonials";
import NumbersThatMatter from "./NumbersThatMatter";
import Partners from "./ZonitPartners";
import ContactForm from "../Common/GetinTouch";
import BlogSection from "../Common/Blogs";
import SolutionsForDataCenter from "./SolutionsForDataCenter";
const HomePage = () => {
  return (
    <div className="text-blue-600 ">
      <HeroSection />
      <SecondSectionLandingPage />
      <ThirdSectionLandingPage />
      <TestimonialDeck />
      <NumbersThatMatter />
      <Partners />
      <SolutionsForDataCenter />
      <BlogSection />
      <ContactForm />
      {/* <HeroScrollDemo /> */}
      {/* <div className="h-[100vh] bg-white/10 relative ">
        <ServerScene />
      </div> */}
    </div>
  );
};

export default HomePage;
