import React from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-darkpur mb-6 sm:mb-16 sm:-mt-6 text-center font-lobster tracking-wider px-2">
      {text}
    </h1>
  );
};

export default PageTitle;
