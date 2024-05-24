import React from "react";
import { MobileNavLink } from "components/ui/NavLink";
import { motion } from "framer-motion";

const MobileNavigation: React.FC<{ showNavMenu: boolean }> = ({
  showNavMenu,
}) => {
  return (
    <motion.div
      className="md:hidden grid p-2 gap-2 justify-end items-center text-sm top-[3.2rem] bg-gray-800 rounded-b-lg z-30 fixed"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showNavMenu ? 1 : 0, y: showNavMenu ? 0 : -50 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      <MobileNavLink href="/dog">Dog</MobileNavLink>
      <MobileNavLink href="/cat">Cat</MobileNavLink>
      <MobileNavLink href="/small-pet">Small Pet</MobileNavLink>
      <MobileNavLink href="/wet-food">Wet Food</MobileNavLink>
      <MobileNavLink href="/dry-food">Dry Food</MobileNavLink>
      <MobileNavLink href="/treats">Treats</MobileNavLink>
    </motion.div>
  );
};

export default MobileNavigation;
