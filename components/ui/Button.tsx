import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  setWidth?: number | string;
  variant?: string;
  children: any;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  setWidth,
  children,
}) => {
  return (
    <button onClick={onClick} className={className}>
      <div
        className={`group relative overflow-hidden bg-rosy focus:ring-4 focus:ring-blue-300 inline-flex items-center px-6 py-2.5 rounded-lg text-lemonlight text-md font-semibold justify-center shadow-sh z-10 active:translate-x-[0.35rem] active:translate-y-[0.35rem] transition-all`}
        style={{ width: setWidth }}
      >
        <span> {children}</span>
        <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
      </div>
    </button>
  );
};

export default Button;
