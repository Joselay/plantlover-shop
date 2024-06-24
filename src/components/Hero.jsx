import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full gap-6 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          id="hero__title"
          className="text-5xl font-bold text-center w-[85%] mx-auto mt-64 lg:w-[50%] lg:text-6xl lg:mt-28 lg:leading-[5rem]
          "
        >
          Discover a world of greenery
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          id="rosemary__card"
          className="relative flex items-center justify-between w-[25rem] h-[18.75rem] bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-12 px-6 gap-6 group cursor-pointer mt-28 "
        >
          <div className="flex flex-col w-full h-full gap-4">
            <img
              className="absolute -z-10 top-[-20.5rem] bottom-0 left-2 right-0 m-auto transition duration-500 group-hover:-translate-y-2"
              src="/images/plant.webp"
              alt="Plant"
            />
            <div className="flex flex-col gap-3 mt-20">
              <h1 className="text-stone-300 whitespace-nowrap hover:text-stone-200">
                Trendy House Plant
              </h1>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-md hover:text-stone-300">
                  Rosemary
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="z-[100] size-6 hover:text-stone-400 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <button className="px-4 py-2 text-sm transition duration-300 border rounded-lg hover:bg-stone-200 hover:text-gray-800">
                Buy Now
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
            <div className="flex items-center space-x-2">
              <button className="w-5 h-2 transition duration-300 bg-white rounded-full hover:bg-gray-600"></button>
              <button className="w-2 h-2 transition duration-300 bg-gray-400 rounded-full hover:bg-gray-600"></button>
            </div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-bold text-center top-[33rem] right-[5rem] mt-20 mb-33 lg:text-5xl text-inherit lg:mt-32"
        >
          Why Choose Us?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-12 lg:justify-evenly lg:w-[85%] lg:mx-auto lg:mt-8"
        >
          <div className="flex bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[70%] flex-col justify-center items-center px-4 py-8 h-[10rem] gap-4">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-xl font-semibold">Wide Selection</h1>
              <img src="/images/wide_logo.svg" alt="Wide Selection" />
            </div>
            <div>
              <p className="text-sm font-light text-center text-stone-400">
                "Explore a vast range of indoor and outdoor plants, from
                tropical palms."
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[70%] flex-col justify-center items-center px-4 py-8 h-[10rem] gap-4"
          >
            <div className="flex items-center justify-center gap-4 lg:px-6">
              <h1 className="text-xl font-semibold lg:whitespace-nowrap">
                Quality Guaranteed
              </h1>
              <img src="/images/guaranteed.svg" alt="" />
            </div>
            <div>
              <p className="text-sm font-light text-center text-stone-400">
                "Each plant is carefully nurtured and inspected to ensure
                top-notch standards."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[70%] flex-col justify-center items-center px-4 py-8 h-[10rem] gap-4"
          >
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-xl font-semibold">Expert Advice</h1>
              <img src="/images/expert.svg" alt="expert advice" />
            </div>
            <div>
              <p className="text-sm font-light text-center text-stone-400">
                "Get personalized tips from our passionate gardening team for
                your ideal plant selection."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
