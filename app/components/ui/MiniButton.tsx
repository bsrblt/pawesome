import React from "react";
import { CartItem } from "../../lib/types";

interface MiniButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void | number;
  size?: string;
  variant?: string;
  children: any;
  className?: string;
}

const MiniButton: React.FC<MiniButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border-darkpur/80 bg-darkpur/80 ml-2 mt-2 w-[25px]"
    >
      <div
        className="group relative overflow-hidden block -translate-x-1 -translate-y-1   bg-rosy text-md font-semibold 
    active:translate-x-0 active:translate-y-0 transition-all focus:ring-4 focus:ring-blue-300 items-center p-2 rounded-lg justify-center z-10 cursor-pointer"
      >
        <span> {children}</span>
        <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
      </div>
    </button>
  );
};

export default MiniButton;
