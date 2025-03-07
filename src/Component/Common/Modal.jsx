import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const Modal = ({ isSuccess, title, message, onClose, buttonText = "OK" }) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-md z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full text-center relative"
        >
          {/* Icon based on success or error */}
          <div className="flex justify-center mb-4">
            {isSuccess ? (
              <CheckCircle size={48} className="text-green-500" />
            ) : (
              <XCircle size={48} className="text-red-500" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{message}</p>

          <button
            onClick={onClose}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
