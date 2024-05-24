import React from "react";
import { PawPrintIcon } from "./Icons";
// import Image from "next/image";
// import logonoback from "../../public/pawesome-high-resolution-logo-white-transparent.png";

import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-white md:text-3xl text-2xl tracking-narrow font-acme mb-1 "
    >
      <PawPrintIcon className="h-6 w-6" />
      Pawesome
      {/* <Image alt="logo" src={logonoback} width={156} /> */}
    </Link>
  );
};
export default Logo;
