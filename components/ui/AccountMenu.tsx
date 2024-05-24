import { motion } from "framer-motion";
import React from "react";
import NavLink from "./NavLink";

const AccountMenu: React.FC = (showAccMenu) => {
  return (
    <motion.div
      className="grid grid-cols-3 p-4 gap-2 text-center sm:text-[1rem] text-sm font-semibold top-[3.2rem] right- bg-gray-800 rounded-bl-xl z-30 fixed justify-evenly mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showAccMenu ? 1 : 0, y: showAccMenu ? 0 : -50 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      <NavLink href="#">Profile</NavLink>
      <NavLink href="#">Settings</NavLink>
      <NavLink href="#">Logout</NavLink>
    </motion.div>
  );
};

export default AccountMenu;
