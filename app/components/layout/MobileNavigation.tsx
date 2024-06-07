import React, { useState, useRef, useEffect } from "react";
import NavLink, { MobileNavLink } from "../../components/ui/NavLink";
import { motion } from "framer-motion";
import AuthButton from "../ui/AuthButton";

const MobileNavigation: React.FC<{
  showNavMenu: boolean;
  onAuthButtonClick: () => void;
  closeNavMenu: () => void;
}> = ({ showNavMenu, onAuthButtonClick, closeNavMenu }) => {
  const [showProducts, setShowProducts] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleProductsClick = () => {
    setShowProducts((prev) => !prev);
  };

  useEffect(() => {
    if (productsRef.current) {
      const rect = productsRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  }, [showProducts]);

  return (
    <>
      <motion.div
        className="md:hidden grid p-2 gap-2 justify-end items-center text-sm top-[3.2rem] bg-gray-800 rounded-b-lg z-30 fixed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNavMenu ? 1 : 0, y: showNavMenu ? 0 : -50 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        <NavLink href="#">Account</NavLink>
        <div
          onClick={handleProductsClick}
          ref={productsRef}
          className="relative cursor-pointer"
        >
          <NavLink href="">Products</NavLink>
          {showProducts && (
            <motion.div
              className="bg-gray-800 rounded-lg z-30 absolute top-full right-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <section className="p-2">
                <MobileNavLink href="/products" onClick={closeNavMenu}>
                  All
                </MobileNavLink>
                <MobileNavLink href="/dog" onClick={closeNavMenu}>
                  Dog
                </MobileNavLink>
                <MobileNavLink href="/cat" onClick={closeNavMenu}>
                  Cat
                </MobileNavLink>
                <MobileNavLink href="/small-pet" onClick={closeNavMenu}>
                  Small Pet
                </MobileNavLink>
                <MobileNavLink href="/wet-food" onClick={closeNavMenu}>
                  Wet Food
                </MobileNavLink>
                <MobileNavLink href="/dry-food" onClick={closeNavMenu}>
                  Dry Food
                </MobileNavLink>
                <MobileNavLink href="/treats" onClick={closeNavMenu}>
                  Treats
                </MobileNavLink>
              </section>
            </motion.div>
          )}
        </div>
        <NavLink href="#" additionalClass="">
          Orders
        </NavLink>
        <NavLink href="#" additionalClass="">
          Settings
        </NavLink>
        <AuthButton onClick={onAuthButtonClick}>Logout</AuthButton>
      </motion.div>
    </>
  );
};

export default MobileNavigation;
