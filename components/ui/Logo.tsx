import React from "react";
import { PawPrintIcon } from "./Icons";
import Link from "next/link";

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
export default Logo;
