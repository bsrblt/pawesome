import React from "react";
import NavLink from "../ui/NavLink";

const Navigation: React.FC = () => {
  return (
    <nav className=" flex items-center lg:gap-6 gap-4">
      <NavLink href="/products">All Products</NavLink>
      <NavLink href="/products/dog">Dog</NavLink>
      <NavLink href="/products/cat">Cat</NavLink>
      <NavLink href="/products/small-pet">Small Pet</NavLink>
      <NavLink href="/products/wet-food">Wet Food</NavLink>
      <NavLink href="/products/dry-food">Dry Food</NavLink>
      <NavLink href="/products/treats">Treats</NavLink>
    </nav>
  );
};

export default Navigation;
