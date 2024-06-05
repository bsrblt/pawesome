"use client";
import React, { useEffect, useRef, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import HeaderLogo from "components/ui/HeaderLogo";
import AccountMenu from "components/ui/AccountMenu";
import Cart from "components/ui/Cart";
import Navigation from "./Navigation";
import useIsSmallScreen from "components/utils/hooks/useIsSmallScreen";
import UserActions from "./UserActions";
import CartContext from "store/CartContext";
import { useRouter } from "next/navigation";
import MobileNavigation from "./MobileNavigation";

const Header: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [showNavMenu, setShowNavMenu] = React.useState(false);
  const [showAccMenu, setShowAccMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const isSmallScreen = useIsSmallScreen();
  const { clearCart, totalItemsQuantity } = useContext(CartContext);
  const router = useRouter();

  const menuToggler = () => {
    setShowNavMenu((prev) => !prev);
    setShowAccMenu(false);
    setShowCart(false);
    setShowSearch(false);
  };

  const closeNavMenu = () => {
    console.log("closeNavMenu function called"); // Add this line for debugging
    setShowNavMenu(false);
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

  const clearCartHandler = () => {
    clearCart();
    setShowCart(false);
  };
  const accountToggler = () => {
    setShowAccMenu((prev) => !prev);
    setShowNavMenu(false);
    setShowCart(false);
    setShowSearch(false);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  const checkoutHandler = () => {
    setShowCart(false);
    totalItemsQuantity > 0 ? router.push("/checkout") : null;
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        if (showNavMenu) {
          menuToggler();
        }
        if (showAccMenu) {
          accountToggler();
        }
        // if (showCart) {
        //   cartToggler();
        // }
        if (showSearch) {
          searchHandler();
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showAccMenu, showNavMenu, showCart, showSearch]);

  return (
    <div className="sticky z-40 top-0">
      <header className=" w-full bg-gray-800 py-3 shadow">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <HeaderLogo />
          {isSmallScreen ? null : <Navigation />}
          <UserActions
            menuToggler={menuToggler}
            showSearch={showSearch}
            searchHandler={searchHandler}
            cartToggler={cartToggler}
            accountToggler={accountToggler}
          />
        </div>
      </header>
      <div className="flex justify-end" ref={navRef}>
        <AnimatePresence>
          {showNavMenu ? (
            <MobileNavigation
              showNavMenu={showNavMenu}
              onAuthButtonClick={accountToggler}
              closeNavMenu={closeNavMenu}
            />
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {showCart ? (
            <Cart
              onClear={clearCartHandler}
              showCart={showCart}
              onCheckout={checkoutHandler}
              onClose={closeCartHandler}
            />
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {showAccMenu ? <AccountMenu /> : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
