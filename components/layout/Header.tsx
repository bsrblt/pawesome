"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  PawPrintIcon,
  MenuIcon,
} from "../ui/Icons";
import IconButton from "components/ui/IconButton";
import Button from "components/ui/Button";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-white md:text-3xl text-2xl tracking-wider font-lobster mb-1 leading-tight"
    >
      <PawPrintIcon className="h-6 w-6" />
      Pawesome
    </Link>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} className="text-turq  hover:text-rosy transition-colors">
      {children}
    </Link>
  );
};

const navLinks = (
  <>
    <NavLink href="#">Dog</NavLink>
    <NavLink href="#">Cat</NavLink>
    <NavLink href="#">Small Pet</NavLink>
    <NavLink href="#">Wet Food</NavLink>
    <NavLink href="#">Dry Food</NavLink>
    <NavLink href="#">Treats</NavLink>
  </>
);

const accLinks = (
  <>
    <NavLink href="#">Profile</NavLink>
    <NavLink href="#">Settings</NavLink>
    <NavLink href="#">Logout</NavLink>
  </>
);

const Header: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [showNavMenu, setShowNavMenu] = React.useState(false);
  const [showAccMenu, setShowAccMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const menuToggler = () => {
    setShowNavMenu((prev) => !prev);
    setShowAccMenu(false);
    setShowCart(false);
    setShowSearch(false);
  };

  const searchHandler = () => {
    setShowSearch((prev) => !prev);
    setShowNavMenu(false);
    setShowAccMenu(false);
    setShowCart(false);
  };

  const cartToggler = () => {
    setShowCart((prev) => !prev);
    setShowNavMenu(false);
    setShowAccMenu(false);
    setShowSearch(false);
  };

  const accountToggler = () => {
    setShowAccMenu((prev) => !prev);
    setShowNavMenu(false);
    setShowCart(false);
    setShowSearch(false);
  };

  const UserActions: React.FC = () => {
    return (
      <div className="flex items-center gap-2" ref={navRef}>
        <IconButton
          icon={<MenuIcon className="md:h-0 md:w-0 h-5 w-5" />}
          onClick={menuToggler}
        />
        <IconButton
          icon={<SearchIcon className="h-5 w-5" />}
          onClick={searchHandler}
        />
        <AnimatePresence>{showSearch ? <SearchBox /> : null}</AnimatePresence>
        <IconButton
          icon={<ShoppingCartIcon className="h-5 w-5" />}
          onClick={cartToggler}
        />
        <IconButton
          icon={<UserIcon className="h-5 w-5" />}
          onClick={accountToggler}
        ></IconButton>
      </div>
    );
  };

  const AccountMenu: React.FC = () => {
    return (
      <motion.div
        className="grid grid-cols-3 p-4 gap-2 text-center sm:text-[1rem] text-sm top-[3.2rem] right- bg-gray-800 rounded-bl-xl z-30 fixed justify-evenly mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showAccMenu ? 1 : 0, y: showAccMenu ? 0 : -50 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        {accLinks}
      </motion.div>
    );
  };

  const SearchBox: React.FC = () => {
    return (
      <motion.div
        className="py-2 px-0 sm:text-[1.25rem] text-sm md:top-1 top-[3.5rem] right-[0rem] bg-gray-800 rounded-bl-xl z-30 fixed"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: showSearch ? 1 : 0, x: showSearch ? 0 : 50 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.25 }}
      >
        <div className="h-10">
          <input
            type="search"
            className="relative w-[10rem] h-[2.47rem] rounded-l-md left-2 shadow-s"
            min={3}
            autoComplete="on"
          />
          <Button type="submit">Search</Button>
        </div>
      </motion.div>
    );
  };

  const Navigation: React.FC = () => {
    return <nav className=" flex items-center lg:gap-6 gap-4">{navLinks}</nav>;
  };

  const MobileNavigation: React.FC = () => {
    return isSmallScreen ? (
      <motion.div
        className="md:hidden grid sm:grid-cols-6 grid-cols-6 p-2 gap-2 text-center items-center text-sm top-[3.2rem] bg-gray-800 rounded-b-lg z-30 fixed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showNavMenu ? 1 : 0, y: showNavMenu ? 0 : -50 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        {navLinks}
      </motion.div>
    ) : null;
  };

  const Cart: React.FC = () => {
    return (
      <motion.div
        className="grid grid-cols-1 h-auto w-[19rem] p-2 gap-2 text-center text-sm top-[3.2rem] bg-gray-800 rounded-bl-xl z-30 fixed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showCart ? 1 : 0, y: showCart ? 0 : -50 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="pt-4 text-rosy">YOUR CART</h1>
        <span className="text-lemonlight">
          <h3>Item 1</h3>
          <h3>Item 2</h3>
          <h3>Item 3</h3>
        </span>

        <h2 className="text-lemonlight text-lg font-bold">Total: $0.00</h2>

        <div className="flex justify-center items-end p-4 gap-2">
          <Button type="submit">Close</Button>
          <Button type="submit">Checkout</Button>
        </div>
      </motion.div>
    );
  };

  //outsideclick
  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      if (showNavMenu) {
        menuToggler();
      }
      if (showAccMenu) {
        accountToggler();
      }
      if (showCart) {
        cartToggler();
      }
      if (showSearch) {
        searchHandler();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  //smallscreen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky z-40 top-0">
      <header className=" w-full bg-gray-800 py-3 shadow">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Logo />
          {isSmallScreen ? null : <Navigation />}
          <UserActions />
        </div>
      </header>
      <div className="flex justify-end" ref={navRef}>
        <AnimatePresence>
          {showNavMenu ? <MobileNavigation /> : null}
        </AnimatePresence>

        <AnimatePresence>{showCart ? <Cart /> : null}</AnimatePresence>
        <AnimatePresence>
          {showAccMenu ? <AccountMenu /> : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
