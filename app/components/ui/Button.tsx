import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  setWidth?: number | string;
  variant?: string;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, setWidth, children }) => {
  return (
    <button
      className={`rounded-lg border-darkpur/80 bg-darkpur/80 ml-2 mt-2 min-w-[7.5rem] w-${setWidth}`}
    >
      <div
        className={`group relative overflow-hidden block -translate-x-2 -translate-y-2 bg-rosy p-4 text-md font-semibold hover:-translate-y-2 
    active:translate-x-0 active:translate-y-0 transition-all focus:ring-4 focus:ring-blue-300 items-center px-6 py-2.5 rounded-lg text-lemonlight justify-center z-0 cursor-pointer`}
        onClick={onClick}
      >
        <span> {children}</span>
        <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
      </div>
    </button>
  );
};

export default Button;
