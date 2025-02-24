import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import supportHeroImage from "../../../public/Support/supportHeroImage.png";
import { useState } from "react";
import Guides from "./Guides";
import FAQ from "../Common/FAQ";
import ContactUsSupport from "./ContactUsSupport";
import ContactForm from "../Common/GetInTouch";
const topics = [
  {
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting guides",
    articles: 4,
  },
  {
    title: "Return Material Authorization",
    description: "Learn about our return process and policies",
    articles: 4,
  },
  {
    title: "Warranty Policy",
    description: "Understand our warranty terms and coverage details",
    articles: 4,
  },
  {
    title: "Product Documentation",
    description: "Access detailed product manuals and documentation",
    articles: 4,
  },
  {
    title: "Billing & Payments",
    description: "Find answers about billing, invoices and payment methods",
    articles: 4,
  },
  {
    title: "Account Management",
    description: "Manage your account settings and preferences",
    articles: 4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const searchVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function SupportPage() {
  const [search, setsearch] = useState("");
  return (
    <>
      <div className="min-h-screen ">
        <div className="relative h-full overflow-hidden">
          <img
            src={supportHeroImage}
            alt="Support Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-black/40"></div>
          <div className="container absolute top-[25%] z-10 px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={searchVariants}
              className="pt-32 text-center"
            >
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                What can we help you with?
              </h1>
              <div className="mx-auto relative flex max-w-md items-center gap-2 rounded-full bg-white p-2">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="border-0 px-8 outline-none  py-2 "
                />
                <Search className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 " />
                <button
                  size="icon"
                  value={search}
                  name="search"
                  onChange={(e) => setsearch(e.target.value)}
                  className="rounded-full bg-red-600 absolute right-3 hover:bg-red-600 cursor-pointer px-5 py-2 text-white"
                >
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4  py-16">
          <h1 className=" text-2xl w-max ml-10 font-semibold text-white rounded-r-full mb-6 bg-blue-500 px-4 py-5">
            Common topics
          </h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid  gap-6 sm:grid-cols-2 px-10 lg:grid-cols-3"
          >
            {topics.map((topic, index) => (
              <motion.div key={topic.title} variants={itemVariants}>
                <div className="group h-full px-4 py-4 transition-colors bg-white shadow-xl hover:bg-white/10">
                  <div>
                    <div className="text-xl text-semibold">{topic.title}</div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-red-500 hover:text-red-600"
                    >
                      See all {topic.articles} Articles →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Guides />
      <FAQ />
      <ContactUsSupport />
      <ContactForm />
    </>
  );
}
