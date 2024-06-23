import React from "react";
import { motion } from "framer-motion";

const RecentViews = () => {
  return (
    <div className="flex flex-col max-w-3xl p-6 mx-auto bg-gray-400 border rounded-3xl border-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-[85%] gap-6 mt-10 relative">
      <figure>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="object-cover w-full rounded-xl"
          src="/images/peacelily.svg"
          alt="PeaceLily"
        />
      </figure>
      <div className="flex flex-col gap-6 mt-[-3rem]">
        <h1 className="text-3xl font-semibold text-center">Peony (Paeonia)</h1>
        <p className="text-sm leading-6 text-center text-stone-300">
          Peonies are known for their large, lush blooms in various colors,
          including white, pink, and red. They symbolize romance, prosperity,
          and good fortune.
        </p>
        <p className="text-sm leading-6 text-center text-stone-300">
          Peonies thrive in well-drained soil and prefer full sun to partial
          shade. They bloom in late spring to early summer and make excellent
          cut flowers for bouquets.
        </p>
        <div className="flex flex-col items-center justify-center gap-7">
          <button className="py-2.5 transition duration-300 border rounded-lg hover:bg-stone-200 hover:text-gray-800 self-stretch">
            Explore
          </button>
          <div className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strok="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span>01 / 03</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <button className="w-2 h-2 transition duration-300 bg-gray-400 rounded-full hover:bg-gray-600"></button>
          <button className="w-2 h-2 transition duration-300 bg-gray-400 rounded-full hover:bg-gray-600"></button>
        </div>
      </div>
    </div>
  );
};

export default RecentViews;
