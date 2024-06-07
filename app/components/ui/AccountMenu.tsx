import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import AuthButton from "./AuthButton";
import { signIn, signOut, useSession } from "next-auth/react";

const AccountMenu: React.FC = (showAccMenu) => {
  const { data: session } = useSession();
  const isLoggedIn = session?.user ? true : false;

  const accountToggler = () => (isLoggedIn ? signOut() : signIn());
  return (
    <motion.div
      className="grid grid-cols-4 p-4 gap-2 text-left sm:text-[1rem] text-sm font-semibold top-[3.2rem] bg-gray-800 rounded-bl-xl z-30 fixed mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showAccMenu ? 1 : 0, y: showAccMenu ? 0 : -50 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
      <NavLink href="#">Account</NavLink>
      <NavLink href="#">Orders</NavLink>
      <NavLink href="#">Settings</NavLink>
      <AuthButton onClick={accountToggler}>
        {isLoggedIn ? "Logout" : "Login"}
      </AuthButton>
    </motion.div>
  );
};

export default AccountMenu;
