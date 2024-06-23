import React, { useState } from "react";
import Star from "./Star";
import { motion } from "framer-motion";

const CustomerReview = ({ comment, src, name, color, initialX }) => {
  const [isHovered, setIsHovered] = useState(false);

  const borderClass = {
    blue: "border-blue-500",
    yellow: "border-yellow-500",
    pink: "border-pink-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col max-w-3xl p-6 mx-auto bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[85%] gap-6 md:bg-red-300"
    >
      <div className="flex items-center justify-center gap-6 sm:gap-8">
        <div
          className="relative flex items-center justify-center w-32 h-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className={`absolute inset-0 w-full h-full border-4 ${borderClass[color]} border-dashed rounded-full`}
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: isHovered ? 8 : 0,
              ease: "linear",
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <img
            className="object-cover rounded-full w-28 h-28"
            src={src}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold ">{name}</h1>
          <div className="flex gap-0.5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
      <div>
        <p className="w-[90%] mx-auto text-center text-sm leading-7">
          {comment}
        </p>
      </div>
    </motion.div>
  );
};

export default CustomerReview;
