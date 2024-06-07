import React from "react";
import { PawPrintIcon } from "./Icons";
import Link from "next/link";

const HeaderLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-white md:text-3xl text-2xl tracking-narrow font-acme mb-1 "
    >
      <PawPrintIcon className="h-6 w-6" />
      Pawesome
    </Link>
  );
};
export default HeaderLogo;
