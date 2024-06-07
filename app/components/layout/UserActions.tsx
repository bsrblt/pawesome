"use client";
import React, { useRef, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon } from "../ui/Icons";
import MenuButton from "../ui/MenuButton";
import SearchBox from "../ui/SearchBox";
import CartContext from "app/store/CartContext";
import useIsSmallScreen from "../utils/hooks/useIsSmallScreen";

interface UserActionsProps {
  menuToggler: () => void;
  searchHandler: () => void;
  cartToggler: () => void;
  accountToggler: () => void;
  showSearch: boolean;
}

const UserActions: React.FC<UserActionsProps> = ({
  menuToggler,
  searchHandler,
  cartToggler,
  accountToggler,
  showSearch,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useIsSmallScreen();
  const cartCtx = useContext(CartContext);

  return (
    <div className="flex flex-row items-center gap-2" ref={navRef}>
      <div className="flex justify-between">
        <AnimatePresence>{showSearch ? <SearchBox /> : null}</AnimatePresence>
        <MenuButton
          icon={<SearchIcon className="h-5 w-5" />}
          onClick={searchHandler}
        />
      </div>
      <MenuButton
        icon={
          <ShoppingCartIcon className="h-5 w-5 sm:mx-1 mx-[0.1rem] sm:-ml-[0.15rem]" />
        }
        onClick={cartToggler}
      />
      <span className="relative w-0 -mx-1 -top-3 sm:right-[1rem] right-[0.75rem] text-rosy font-bold">
        <p>{cartCtx.totalItemsQuantity}</p>
      </span>
      {isSmallScreen ? (
        <MenuButton
          icon={<MenuIcon className="h-5 w-5" />}
          onClick={menuToggler}
        />
      ) : (
        <MenuButton
          icon={<UserIcon className="h-5 w-5" />}
          onClick={accountToggler}
        />
      )}
    </div>
  );
};

export default UserActions;
