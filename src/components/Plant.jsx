import React from "react";
import { motion } from "framer-motion";

const Plant = ({ title, margin, src }) => {
  return (
    <>
      <section
        className={`flex flex-col items-center justify-center gap-6 p-6 w-[85%] mx-auto ${margin}`}
      >
        {title && (
          <h1 className="text-4xl font-bold text-center mt-44 lg:mt-16 lg:mb-4">
            {title}
          </h1>
        )}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col max-w-3xl p-6 mx-auto bg-gray-400 border md:flex-row rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:justify-center md:items-center"
        >
          <img
            src={src}
            alt="Buston Fern"
            className="object-cover w-full md:w-1/2 rounded-xl"
          />
          <div className="flex flex-col justify-between w-full gap-2 p-4 md:justify-start md:items-start">
            <h1 className="w-full mx-auto text-4xl font-bold text-center md:text-left">
              Boston Fern
            </h1>
            <p className="mt-4 text-sm text-center text-stone-400 md:text-left">
              Vibrant green foliage adds elegance and freshness to any indoor
              space, perfect for brightening up your home.
            </p>
            <span className="mt-2 text-4xl font-bold text-center">$ 499</span>
            <div className="flex justify-center gap-4 mt-4">
              <button className="w-full px-4 py-2 text-sm transition duration-300 border rounded-lg hover:bg-stone-200 hover:text-gray-800">
                Explore
              </button>
              <button className="flex items-center justify-center gap-6 px-4 py-2 text-sm text-white transition duration-300 border rounded-lg hover:bg-stone-200 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Plant;
