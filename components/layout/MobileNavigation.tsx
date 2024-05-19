import React from "react";
import NavLink from "components/ui/NavLink";
import { motion } from "framer-motion";

const MobileNavigation: React.FC<{ showNavMenu: boolean }> = ({
  showNavMenu,
}) => {
  return (
    <motion.div
      className="md:hidden grid sm:grid-cols-6 grid-cols-6 p-2 gap-2 text-center items-center text-sm top-[3.2rem] bg-gray-800 rounded-b-lg z-30 fixed"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showNavMenu ? 1 : 0, y: showNavMenu ? 0 : -50 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      <NavLink href="/dog">Dog</NavLink>
      <NavLink href="#">Cat</NavLink>
      <NavLink href="#">Small Pet</NavLink>
      <NavLink href="#">Wet Food</NavLink>
      <NavLink href="#">Dry Food</NavLink>
      <NavLink href="#">Treats</NavLink>
    </motion.div>
  );
};

export default MobileNavigation;
