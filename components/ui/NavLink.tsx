import Link from "next/link";
import React from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <Link
      href={href}
      className="flex flex-wrap lg:px-1 text-turq lg:text-[1rem] text-sm tracking-wide font-archivo text-center items-center justify-center hover:text-rosy transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavLink;
