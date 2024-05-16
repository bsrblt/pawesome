import React from "react";

const IconButton: React.FC<{
  icon: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}> = ({ icon, children, onClick }) => {
  return (
    <div
      className="text-white hover:text-turq transition-colors cursor-pointer sm:px-2"
      onClick={onClick}
    >
      {icon}
      <span className="sr-only">{children}</span>
    </div>
  );
};

export default IconButton;
