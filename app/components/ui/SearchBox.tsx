import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

const SearchBox: React.FC = (showSearch) => {
  return (
    <motion.div
      className="py-2 px-0 sm:text-md text-sm top-[3.5rem] right-[0rem] bg-gray-800 rounded-bl-xl z-30 fixed"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: showSearch ? 1 : 0, x: showSearch ? 0 : 50 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex h-10 z-30 mr-1 mb-[0.35rem]">
        <input
          type="search"
          className="relative w-[10rem] h-[2.5rem] left-4 rounded-l-md"
          min={3}
          autoComplete="on"
        />
        <div className="">
          <button className={`rounded-lg  ml-2 mt-2 min-w-[7.5rem]`}>
            <div
              className={`group relative overflow-hidden block -translate-x-2 -translate-y-2   bg-rosy p-4 text-md font-semibold transition-all focus:ring-4 focus:ring-blue-300 items-center px-6 py-2.5 rounded-lg text-lemonlight justify-center z-10 cursor-pointer`}
            >
              <span>Search</span>
              <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBox;
