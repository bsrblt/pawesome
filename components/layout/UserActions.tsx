"use client";
import React, { useRef, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon } from "../ui/Icons";
import MenuButton from "components/ui/MenuButton";
import SearchBox from "components/ui/SearchBox";
import CartContext from "store/CartContext";

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
  const cartCtx = useContext(CartContext);

  return (
    <div className="flex flex-row items-center gap-2" ref={navRef}>
      <MenuButton
        icon={<MenuIcon className="md:h-0 md:w-0 h-5 w-5" />}
        onClick={menuToggler}
      />
      <div className="flex justify-between">
        <AnimatePresence>{showSearch ? <SearchBox /> : null}</AnimatePresence>
        <MenuButton
          icon={<SearchIcon className="h-5 w-5" />}
          onClick={searchHandler}
        />
      </div>
      <MenuButton
        icon={<ShoppingCartIcon className="h-5 w-5" />}
        onClick={cartToggler}
      />
      <span className="relative w-0 -mx-1 -top-3 sm:right-[0.85rem] right-[0.5rem] text-rosy font-bold">
        <p>{cartCtx.totalItemsQuantity}</p>
      </span>
      <MenuButton
        icon={<UserIcon className="h-5 w-5" />}
        onClick={accountToggler}
      />
    </div>
  );
};

export default UserActions;
