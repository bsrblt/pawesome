import React from "react";

const AuthButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-wrap lg:px-1 text-turq lg:text-[1rem] text-sm tracking-wide font-archivo text-center items-center justify-center hover:text-rosy transition-colors cursor-pointer"
    >
      {children}
    </div>
  );
};

export default AuthButton;
