import React from "react";
import Link from "next/link";

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  additionalClass?: string;
}> = ({ href, children, onClick, additionalClass }) => {
  return (
    <Link href={href} passHref>
      <div
        onClick={onClick}
        className={`flex flex-wrap lg:px-1 text-turq lg:text-[1rem] text-sm tracking-wide font-archivo text-center items-center justify-center hover:text-rosy transition-colors ${additionalClass}`}
      >
        {children}
      </div>
    </Link>
  );
};

export const MobileNavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => {
  return (
    <Link href={href} passHref>
      <div
        className="flex px-2 w-full mx-auto py-1 text-turq lg:text-[1rem] text-sm tracking-wide font-archivo justify-start hover:text-rosy transition-colors"
        style={{ whiteSpace: "nowrap" }}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
