import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {children}
    </div>
  );
};

export default Modal;
