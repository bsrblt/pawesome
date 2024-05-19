import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

const SearchBox: React.FC = (showSearch) => {
  return (
    <motion.div
      className="py-2 px-0 sm:text-[1.25rem] text-sm top-[3.5rem] right-[0rem] bg-gray-800 rounded-bl-xl z-30 fixed"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: showSearch ? 1 : 0, x: showSearch ? 0 : 50 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
    >
      <div className="h-10 z-30 mr-4 mb-[0.35rem]">
        <input
          type="search"
          className="relative w-[10rem] h-[2.47rem] left-4 rounded-l-md"
          min={3}
          autoComplete="on"
        />
        <Button type="submit">Search</Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
