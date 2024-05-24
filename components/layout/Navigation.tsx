import React from "react";
import NavLink from "components/ui/NavLink";
import { MenuIcon } from "components/ui/Icons";

const Navigation: React.FC = () => {
  return (
    <nav className=" flex items-center lg:gap-6 gap-4">
      <NavLink href="/dog">Dog</NavLink>
      <NavLink href="/cat">Cat</NavLink>
      <NavLink href="/small-pet">Small Pet</NavLink>
      <NavLink href="/wet-food">Wet Food</NavLink>
      <NavLink href="/dry-food">Dry Food</NavLink>
      <NavLink href="/treats">Treats</NavLink>
    </nav>
  );
};

export default Navigation;
